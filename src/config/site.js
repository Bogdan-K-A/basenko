// Конфигурация сайта
export const siteConfig = {
  // Замените на ваш реальный домен
  domain: "https://www.basenko.team/", // || "http://localhost:5173", // для разработки

  // Настройки Wayforpay

  wayforpay: {
    basicButton: "b90a054f1359d",
    // basicButton: "b040d4190545c",
    premiumButton: "b8169d8a49260",
  },

  // Настройки контактов
  contacts: {
    phone: "+380632602691",
    telegram: "https://t.me/baskarabas",
  },

  // Настройки планов
  plans: {
    basic: {
      price: 1200,
      currency: "UAH",
    },
    premium: {
      price: 4000,
      currency: "UAH",
    },
  },
};
