import { CheckCircle } from "lucide-react";

const Pricing = () => {
  return (
    <>
      <section
        id="pricing"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Інвестуй у свій успіх
            </h2>
            <p className="text-xl text-gray-600">
              Обери тариф, який підходить саме тобі
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Базовий
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ₴2,999
                </div>
                <p className="text-gray-600">одноразовий платіж</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "12-тижневий план тренувань",
                  "Голосовий супровід",
                  "Доступ до спільноти",
                  // "Мобільний додаток",
                  "Базова підтримка",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-semibold transition-colors duration-300">
                Обрати базовий
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Найпопулярніший
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Преміум</h3>
                <div className="text-4xl font-bold text-white mb-2">₴4,999</div>
                <p className="text-blue-100">одноразовий платіж</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Все з базового тарифу",
                  "Індивідуальні консультації",
                  "Персональний план харчування",
                  "Пріоритетна підтримка",
                  "Сертифікат завершення",
                  "Доступ до архіву тренувань",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white hover:bg-gray-100 text-blue-600 py-4 rounded-full font-semibold transition-colors duration-300">
                Обрати преміум
              </button>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Не впевнений? Спробуй безкоштовне тренування!
            </p>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Безкоштовне тренування
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Pricing;
