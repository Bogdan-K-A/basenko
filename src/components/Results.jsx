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
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Пробіжиш 5-10 км
                </h3>

                <div className="bg-gradient-to-br from-green-400 to-green-500 w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg overflow-hidden">
                  <img
                    src="./images/3.webp"
                    alt="1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Покращиш здоров'я
                </h3>

                <div className="bg-gradient-to-br from-green-400 to-green-500 w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg overflow-hidden">
                  <img
                    src="./images/3.webp"
                    alt="1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Отримаєш енергію
                </h3>

                <div className="bg-gradient-to-br from-green-400 to-green-500 w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg overflow-hidden">
                  <img
                    src="./images/3.webp"
                    alt="1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Схуднеш на 5-12 кг
                </h3>

                <div className="bg-gradient-to-br from-green-400 to-green-500 w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg overflow-hidden">
                  <img
                    src="./images/3.webp"
                    alt="1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Підвищиш самооцінку
                </h3>

                <div className="bg-gradient-to-br from-green-400 to-green-500 w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg overflow-hidden">
                  <img
                    src="./images/3.webp"
                    alt="1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Знайдеш однодумців
                </h3>

                <div className="bg-gradient-to-br from-green-400 to-green-500 w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg overflow-hidden">
                  <img
                    src="./images/3.webp"
                    alt="1"
                    className="w-full h-full object-cover"
                  />
                </div>
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
