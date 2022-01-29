const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const Razorpay = require('razorpay')
const app = express();
const crypto = require('crypto')
const port = process.env.PORT || 5000;
const router = express.Router();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.post("/payment/orders", async (req, res) => {
    const {amount } = req.body
    try {
        const instance = new Razorpay({
            key_id: "rzp_test_OI5rxzLeySvb26",
            key_secret: "2pWAHHpDbidgsojSdUVrGH7K",
        });

        const options = {
            amount: amount*100, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.post("/payment/success", async (req, res) => {
    try {
        // getting the details back from our font-end
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;
        // console.log(razorpayOrderId,razorpayPaymentId)
        // Creating our own digest
        // The format should be like this:
        // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
        const shasum = crypto.createHmac("sha256","2pWAHHpDbidgsojSdUVrGH7K");

        shasum.update(`${razorpayOrderId}|${razorpayPaymentId}`);
        // console.log(`${razorpayOrderId}|${razorpayPaymentId}`)
        const digest = shasum.digest("hex");
        // console.log("Digest",digest)
        // console.log("RazorPaySignature",razorpaySignature)
        // comaparing our digest with the actual signature
        if (digest !== razorpaySignature)
            return res.status(400).json({ msg: "Transaction not legit!" });

        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get('/',(req,res)=>{
    res.send("Server running")
})

app.listen(port, () => console.log(`Listening on port ${port}`));