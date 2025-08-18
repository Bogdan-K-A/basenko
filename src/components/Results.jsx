import {
  TrendingUp,
  Heart,
  Zap,
  Target,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

const Results = () => {
  return (
    <>
      <section id="results" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                Твої результати через 8 тижнів
              </h2>
              <p className="text-xl text-gray-600">
                Гарантовані зміни при виконанні програми курсу
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-green-400 to-green-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Пробіжиш 5-10 км
                </h3>
                <p className="text-gray-600">
                  Без задишки і дискомфорту долатимеш дистанції, про які раніше
                  не мріяв
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Покращиш показники пульсу
                </h3>
                <p className="text-gray-600">
                  Нормалізується тиск, покращиться робота серця, зміцниться
                  імунітет
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Отримаєш енергію
                </h3>
                <p className="text-gray-600">
                  Твоє життя систематизуеться, підвищиться працездатність,
                  покращиться настрій і якість сну
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Гарантовано Схуднеш від 3-5 кг
                </h3>
                <p className="text-gray-600">
                  Природне спалювання жиру та формування красивого рельєфу тіла
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-red-400 to-red-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Підвищиш самооцінку
                </h3>
                <p className="text-gray-600">
                  Відчуття гордості за досягнення та нова впевненість у собі
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-teal-400 to-teal-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Знайдеш однодумців
                </h3>
                <p className="text-gray-600">
                  Станеш частиною спільноти активних і мотивованих людей
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-green-800 font-semibold text-lg">
                  Гарантія результату або повернення коштів
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
