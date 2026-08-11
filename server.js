const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.post("/api/order", async (req, res) => {
  const { name, phone, message, rate } = req.body;

  const telegramMessage =
    "Rate: " +
    rate +
    "\n\n" +
    "Name: " +
    name +
    "\n" +
    "Number: " +
    phone +
    "\n" +
    "Message: " +
    message;

  try {
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: telegramMessage,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
