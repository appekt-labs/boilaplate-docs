# Payments Integration

This boilerplate includes **Lemon Squeezy** for handling payments and subscriptions. This section explains how the payment flow is managed in the project, including purchasing products and handling webhooks for subscription updates.

All payment-related data is handled using **Lemon Squeezy's API**, and user data is stored in **MongoDB**.

## Purchase Product

To upgrade to premium, users will initiate a purchase through the `/api/purchase-product` endpoint. This route interacts with **Lemon Squeezy** to generate a checkout URL for the user.

### API Route: `/api/purchase-product`

**Request**: 
- This route requires the user to be authenticated (via **NextAuth**) and the user's email must be provided.
- The request should include a `productId`, which is the ID of the product or variant the user wants to purchase.

**Response**:
- If successful, the response contains a `checkoutUrl` where the user can complete their payment on the **Lemon Squeezy** checkout page.

### Example Request:

```bash
POST /api/purchase-product

Request Body:
{
  "productId": "12345"
}
```

### Example Response:

```json
{
  "checkoutUrl": "https://checkout.lemon.com/example-url"
}
```

This URL redirects the user to **Lemon Squeezy**'s secure payment page, where they can complete their purchase.

## Webhook Handling

Once the payment is completed, **Lemon Squeezy** sends a webhook to the `/api/webhooks/lemon-squeezy` endpoint. This webhook is responsible for updating the user's subscription status in the database.

### API Route: `/api/webhooks/lemon-squeezy`

This webhook listens for events triggered by **Lemon Squeezy**, such as a successful payment or subscription update. Specifically, it handles the `order_created` event to mark a user as subscribed in the database.

### Event Processing:

1. **Event Type**: The webhook inspects the `X-Event-Name` header or the `meta.event_name` field in the request body to determine the event type.
2. **Signature Validation**: The request signature is validated using **HMAC SHA-256** and a secret key. If the signature is invalid, the webhook rejects the request.
3. **Subscription Update**: When an `order_created` event is received and the order status is `paid`, the webhook updates the user's subscription status in **MongoDB**.

### Example Webhook Request:

```json
{
  "meta": {
    "custom_data": {
      "user_email": "user@example.com"
    }
  },
  "data": {
    "attributes": {
      "status": "paid"
    }
  }
}
```

### Example Webhook Logic:

The following logic is implemented in the webhook to update the user's subscription status:

- **Custom Data**: The user's email is passed in the `custom_data` field of the request body.
- **Status Check**: If the order status is `paid`, the webhook updates the user's `isSubscribed` field in the database.

### Example Webhook Code Snippet:

```ts
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await req.clone().text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    if (eventType === "order_created") {
      const userEmail = body.meta.custom_data.user_email;
      const isSuccessful = body.data.attributes.status === "paid";
      
      await Users.updateOne({ email: userEmail }, { isSubscribed: isSuccessful });
    }

    return Response.json({ message: "Webhook received" });
  } catch (err) {
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
```

## Email Notifications

This boilerplate integrates **Resend** to handle email notifications for various events, such as successful purchases or subscription updates. The email templates are built using **React Email** (`@react-email/components`), which allows for customizable and responsive designs.

### Example Email Scenarios:
- **Purchase Confirmation**: When a user completes a purchase, they receive a confirmation email.
- **Subscription Updates**: Users are notified when their subscription status changes.

The email templates can be customized to fit your brand and style.

## Lemon Squeezy Documentation

For more information on integrating **Lemon Squeezy** into your application, refer to the official [Lemon Squeezy Documentation](https://docs.lemonsqueezy.com/).

This section provides a comprehensive integration for managing subscriptions and payments with **Lemon Squeezy**, but further customization is possible as needed for your project.
