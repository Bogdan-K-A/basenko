import {
  Users,
  Zap,
  Timer,
  Activity,
  Move,
  Clock,
  RefreshCw,
} from "lucide-react";

const courseModules = [
  {
    day: "Понеділок",
    title: "Бігові темпові інтервали (онлайн)",
    description:
      "Відпрацювання правильної техніки бігу, постановка стопи, робота з ритмом дихання",
    icon: Timer, // Таймер для темповых интервалов
    image:
      "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Вівторок",
    title: "Біг спіралі (онлайн)",
    description:
      "Функціональні вправи для зміцнення м'язів кора, ніг та профілактики травм",
    icon: Activity, // Активность для спирального бега
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Середа",
    title: "Мобіліті + гнучькість (запис)",
    description:
      "Функціональні вправи для зміцнення м'язів кора, ніг та профілактики травм",
    icon: Move, // Движение для мобильности и гибкости
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Четвер",
    title: "Біг Фартлек (онлайн)",
    description:
      "Високоінтенсивні інтервальні тренування для розвитку швидкості та витривалості",
    icon: Zap, // Молния для высокоинтенсивных тренировок
    image:
      "https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "П'ятниця",
    title: "Табата (запис)",
    description:
      "Високоінтенсивні інтервальні тренування для розвитку швидкості та витривалості",
    icon: Clock, // Часы для табата (временные интервалы)
    image:
      "https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Субота",
    title: "Лонг Ран (онлайн)",
    description:
      "Довгі пробіжки для розвитку аеробної витривалості та групова мотивація",
    icon: Users, // Группа для длительных пробежек
    image:
      "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    day: "Неділя",
    title: "Відновлення + мобіліті (запис)",
    description:
      "Довгі пробіжки для розвитку аеробної витривалості та групова мотивація",
    icon: RefreshCw, // Обновление для восстановления
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

          {/* Верхний ряд: 4 элемента */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 justify-items-center items-stretch">
            {courseModules.slice(0, 4).map((training, index) => {
              return (
                <div key={index} className="group h-full w-full max-w-[22rem]">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden flex flex-col">
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
                        className={`absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}
                      >
                        {training.day}
                      </div>

                      {/* Icon */}
                      <div
                        className={`absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center`}
                      >
                        <training.icon className={`w-6 h-6`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
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

          {/* Нижний ряд: 3 элемента, по центру */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-stretch">
            {courseModules.slice(4).map((training, index) => {
              return (
                <div
                  key={index}
                  className="group h-full w-full lg:max-w-[18rem]  max-w-[22rem]"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden h-full flex flex-col">
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
                        className={`absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}
                      >
                        {training.day}
                      </div>

                      {/* Icon */}
                      <div
                        className={`absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center`}
                      >
                        <training.icon className={`w-6 h-6`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
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
        </div>
      </section>
    </>
  );
};

export default Program;
