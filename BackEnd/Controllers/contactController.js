const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// Send Contact Message & Email
exports.sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1️⃣ Save to DB
    const newMessage = await Contact.create({ name, email, subject, message });

    // 2️⃣ Send Email Notification
    const transporter = nodemailer.createTransport({
      const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // important
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
    });

    const mailOptions = {
      from: email, // sender (user who filled form)
      to: process.env.EMAIL_USER, // your email to receive messages
      subject: `Subject: ${subject || "No Subject"}`,
      html: `
        <h2>Message from you Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending message" });
  }
};

// Get All Messages
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages" });
  }
};

// Delete Message
exports.deleteMessage = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted)
      return res.status(404).json({ message: "Message not found" });

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting message" });
  }
};
