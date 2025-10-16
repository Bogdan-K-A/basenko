import {
  Users,
  Zap,
  Timer,
  Activity,
  Move,
  Clock,
  RefreshCw,
  CircleDot,
} from "lucide-react";

const courseModules = [
  {
    day: "Понеділок",
    title: "Бігові темпові інтервали (онлайн)",
    description:
      "Короткі прискорення з контролем дихання, розвиток техніки та витривалості.",
    icon: Timer, // Таймер для темповых интервалов
    image: "./images/program/1.jpg",
  },
  {
    day: "Вівторок",
    title: "Біг спіралі (онлайн)",
    description:
      "Біг по колу чи звивистій траєкторії, зміцнення м’язів ніг і кора.",
    icon: Activity, // Активность для спирального бега
    image: "./images/program/2.jpg",
  },
  {
    day: "Середа",
    title: "Мобіліті + гнучкість (запис)",
    description:
      "Розтяжка та вправи для рухливості суглобів, профілактика травм і покращення гнучкості.",
    icon: Move, // Движение для мобильности и гибкости
    image: "./images/program/3.jpg",
  },
  {
    day: "Четвер",
    title: "Біг Фартлек (онлайн)",
    description:
      "Чергуються швидкі та повільні відрізки, тренування швидкості й витривалості.",
    icon: Zap, // Молния для высокоинтенсивных тренировок
    image: "./images/program/4.jpg",
  },
  {
    day: "П'ятниця",
    title: "Табата (запис)",
    description:
      "Інтенсивні інтервальні вправи, розвиток сили, швидкості та витривалості.",
    icon: Clock, // Часы для табата (временные интервалы)
    image: "./images/program/5.jpg",
  },
  {
    day: "Субота",
    title: "Лонг Ран (онлайн)",
    description:
      "Довгі пробіжки у спокійному темпі, розвиток аеробної витривалості.",
    icon: Users, // Группа для длительных пробежек
    image: "./images/program/6.jpg",
  },
  {
    day: "Неділя",
    title: "Відновлення + мобіліті (запис)",
    description:
      "Легка розминка і вправи для відновлення, зниження втоми, підтримка тонусу.",
    icon: RefreshCw, // Обновление для восстановления
    image: "./images/program/7.jpg",
  },
  {
    day: "Бонусні тренування",
    title: "Тренування з BlackRoll",
    description:
      "Для профілактики болю та швидкого відновлення. Допомагають позбутися неприємних відчуттів у спині та ногах.",
    icon: CircleDot, // Точечное воздействие для BlackRoll
    image: "./images/program/8.jpg",
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
            {courseModules.map((training, index) => {
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
        </div>
      </section>
    </>
  );
};

export default Program;
