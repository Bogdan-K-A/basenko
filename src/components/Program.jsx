import { Calendar, Trophy, Users, Target, Zap, Heart } from "lucide-react";

const courseModules = [
  {
    day: "Понеділок",
    title: "Біг + Техніка",
    description:
      "Відпрацювання правильної техніки бігу, постановка стопи, робота з ритмом дихання",
    icon: Target,
    color: "blue",
    image:
      "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Вівторок",
    title: "Силові + Стабілізація",
    description:
      "Функціональні вправи для зміцнення м'язів кора, ніг та профілактики травм",
    icon: Zap,
    color: "orange",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Четвер",
    title: "Біг + Інтервали",
    description:
      "Високоінтенсивні інтервальні тренування для розвитку швидкості та витривалості",
    icon: Heart,
    color: "red",
    image:
      "https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Субота",
    title: "Лонгран / Груповий забіг",
    description:
      "Довгі пробіжки для розвитку аеробної витривалості та групова мотивація",
    icon: Users,
    color: "green",
    image:
      "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
];

const Program = () => {
  return (
    <>
      {" "}
      <section
        id="program"
        className="py-20 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Програма на місяць
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Структурована система тренувань, що дає відчуття прогресу та
              результативності
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {courseModules.map((training, index) => {
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={training.image}
                        alt={training.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                      {/* Day Badge */}
                      <div
                        className={`absolute top-4 left-4 bg-${training.color}-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}
                      >
                        {training.day}
                      </div>

                      {/* Icon */}
                      <div
                        className={`absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center`}
                      >
                        <training.icon
                          className={`w-6 h-6 text-${training.color}-600`}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {training.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {training.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          {/* <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Гнучкий графік</h4>
              <p className="text-gray-600 text-sm">
                Адаптуйте тренування під свій розклад
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <Trophy className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">
                Прогресивне навантаження
              </h4>
              <p className="text-gray-600 text-sm">
                Поступове збільшення інтенсивності
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">
                Групова підтримка
              </h4>
              <p className="text-gray-600 text-sm">
                Мотивація від спільноти бігунів
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Program;
