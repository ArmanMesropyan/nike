export default function handler(req, res) {
  const paymentSuccessful = Math.random() < 0.5;

  if (paymentSuccessful) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, message: "Payment failed" });
  }
}
