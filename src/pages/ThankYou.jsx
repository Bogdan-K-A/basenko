import {
  CheckCircle,
  Trophy,
  Users,
  Clock,
  ArrowRight,
  Phone,
  Send,
} from "lucide-react";
import { useEffect } from "react";
import { useLocation, Link, useSearchParams } from "react-router-dom";
import { siteConfig } from "../config/site";

const plans = {
  basic: {
    name: "Базовий план",
    price: `${siteConfig.plans.basic.price} грн`,
    features: [
      "4 тижні тренувальної програми",
      "Голосовий супровід під час тренувань",
      "Підказки онлайн у реальному часі",
      "Доступ до чату спільноти назавжди",
      "Відповіді та підтримка куратора потоку",
    ],
  },
  premium: {
    name: "Преміум план",
    price: `${siteConfig.plans.premium.price} грн`,
    features: [
      "Індивідуальне спілкування з тренером",
      "Персональний розбір бігової техніки",
      "Консультації з пульсових зон та тренувальних навантажень",
      "Поради щодо екіпірування та вибору взуття",
      "Оперативна підтримка 24/7",
      "Рекомендації з харчування та відновлення",
    ],
  },
};

const ThankYou = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Получаем план из localStorage (после оплаты) или из состояния роутера
  const planFromStorage = localStorage.getItem("selectedPlan");
  const planFromUrl = searchParams.get("plan");
  const selectedPlan =
    planFromStorage || planFromUrl || location.state?.selectedPlan || "basic";
  const selectedPlanData = plans[selectedPlan] || plans.basic;

  // Очищаем localStorage после получения плана
  useEffect(() => {
    if (planFromStorage) {
      localStorage.removeItem("selectedPlan");
    }
  }, [planFromStorage]);

  // Отправка данных на Facebook Pixel для отслеживания покупок
  useEffect(() => {
    // Проверяем, есть ли Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      // Отправляем событие "Purchase" (покупка)
      window.fbq("track", "Purchase", {
        value:
          selectedPlan === "basic"
            ? siteConfig.plans.basic.price
            : siteConfig.plans.premium.price,
        currency: siteConfig.plans.basic.currency,
        content_name: selectedPlanData.name,
        content_category: "Online Course",
        content_type: "product",
        content_ids: [selectedPlan],
        num_items: 1,
        delivery_category: "digital_goods",
      });

      console.log("Facebook Pixel Purchase event sent for plan:", selectedPlan);
    } else {
      console.log("Facebook Pixel not found");
    }
  }, [selectedPlan, selectedPlanData.name]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div
        className="relative text-white py-20 overflow-hidden"
        style={{
          backgroundImage: 'url("./images/thanks.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Прозрачный голубой оверлей */}
        <div className="absolute inset-0 bg-blue-600/80"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Дякуємо за вибір!
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Ви обрали {selectedPlanData.name} - відмінний вибір для досягнення
            ваших цілей!
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Plan Summary */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedPlanData.name}
            </h2>
            <div className="text-right">
              <div className="text-4xl font-bold text-blue-600">
                {selectedPlanData.price}
              </div>
              <div className="text-gray-600 text-lg">за курс</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedPlanData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Що далі?
          </h3>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Від 24 до 48 годин
              </h4>
              <p className="text-gray-600">
                Ми зв'яжемося з вами для уточнення деталей та налаштування плану
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Персональний підхід
              </h4>
              <p className="text-gray-600">
                Створимо індивідуальний план тренувань з урахуванням ваших цілей
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Початок тренувань
              </h4>
              <p className="text-gray-600">
                Отримаєте доступ до платформи та почнете свій шлях до результату
              </p>
            </div>
          </div> */}
          <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Вам потрібно натиснути на кнопку нижче та отримати доступ до
              платформи
            </h4>
          </div>
        </div>

        {/* Contact Info */}
        {/* <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Є питання?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a
                  href={`tel:${siteConfig.contacts.phone}`}
                  className="text-gray-700 text-lg hover:text-blue-600 transition-colors"
                >
                  {siteConfig.contacts.phone}
                </a>
              </div>

              <a
                className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors"
                href={siteConfig.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="w-5 h-5" />
                <span className="text-lg">Телеграм</span>
              </a>
            </div>
          </div>
        </div> */}

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://t.me/+uZQZCUL-Y08wY2Ji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-3xl font-semibold text-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Отримати доступ до платформи
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
