import { Target, Heart, Phone, CheckCircle } from "lucide-react";

const Solution = () => {
  return (
    <>
      <section
        id="solution"
        className="py-20 bg-gradient-to-r from-blue-500 to-cyan-400"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Рішення вже існує!
              </h2>
              <p className="text-xl text-blue-50 max-w-3xl mx-auto">
                "Формула Бігу" - це науково обґрунтована система тренувань, яка
                допоможе тобі стати бігуном за 8 тижнів
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      Персональний підхід
                    </h3>
                    <p className="text-blue-50">
                      Індивідуальний план тренувань під твій рівень підготовки
                      та цілі
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      Без перевантажень
                    </h3>
                    <p className="text-blue-50">
                      Поступове нарощування навантаження без ризику травм
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      24/7 підтримка
                    </h3>
                    {/* <p className="text-blue-50">
                      Постійна підтримка тренера через мобільний додаток
                    </p> */}
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white text-center">
                  Що ти отримуєш:
                </h3>
                <div className="space-y-4">
                  {[
                    "24 живі онлайн тренування",
                    "Персональний план харчування",
                    "Доступ до закритої спільноти",
                    // "Мобільний додаток з трекінгом",
                    "Сертифікат після завершення",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-300" />
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
