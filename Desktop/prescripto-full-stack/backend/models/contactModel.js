import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Use existing model or create a new one
const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;