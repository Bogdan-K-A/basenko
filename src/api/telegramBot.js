import axios from "axios";

export const sendMessage = async (
  message,
  options = { parse_mode: "HTML" }
) => {
  const TOKEN = import.meta.env.VITE_TELEGRAM_API_TOKEN;
  const CHAT_ID = import.meta.env.VITE_CHAT_ID;
  const BASE_URI = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  try {
    await axios.post(BASE_URI, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: options.parse_mode,
    });
  } catch (error) {
    return Promise.reject(
      error?.response?.data?.description || "Щось пішло не так"
    );
  }
};
