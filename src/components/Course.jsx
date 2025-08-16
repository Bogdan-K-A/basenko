import { CheckCircle, PlayCircle } from "lucide-react";

const Course = ({ setIsVideoModalOpen }) => {
  return (
    <>
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-blue-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Що включає курс "Формула Бігу"?
              </h2>

              <div className="space-y-6">
                {[
                  "Персональний план тренувань на 12 тижнів",
                  "Голосовий супровід кожного тренування",
                  "Відеоуроки з техніки бігу та розминки",
                  "Доступ до закритої спільноти бігунів",
                  "Щотижневі прямі ефіри з тренером",              
                  "Індивідуальні консультації (2 рази на місяць)",
                  "Сертифікат після завершення курсу",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{feature}</p>
                  </div>
                ))}
              </div>

              {/* <div className="mt-10">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Детальніше про курс
                </button>
              </div> */}
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Running training session"
                className="rounded-2xl shadow-2xl"
              />

              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  <PlayCircle className="w-12 h-12 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
