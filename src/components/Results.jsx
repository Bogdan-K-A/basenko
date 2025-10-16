import {
  TrendingUp,
  Heart,
  Zap,
  Target,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

// Массив данных для карточек результатов
const resultsData = [
  {
    Icon: TrendingUp,
    gradient: "from-green-400 to-green-500",
    title: "Покращиш темп",
    desc: "Тренування підвищать ефективність бігу, ти почуватимешся легше й швидше вже через кілька днів",
  },
  {
    Icon: Heart,
    gradient: "from-blue-400 to-blue-500",
    title: "Знизиш пульс",
    desc: "Серце працюватиме спокійніше, нормалізується тиск і зменшиться навантаження на організм",
  },
  {
    Icon: Zap,
    gradient: "from-purple-400 to-purple-500",
    title: "Підвищиш витривалість",
    desc: "Поступово збільшиш дистанцію без перевтоми, отримаєш більше енергії для щоденного життя",
  },
  {
    Icon: Target,
    gradient: "from-orange-400 to-orange-500",
    title: "Гарантовано Схуднеш від 3-5 кг",
    desc: "Природне спалювання жиру та формування красивого рельєфу тіла",
  },
  {
    Icon: Award,
    gradient: "from-red-400 to-red-500",
    title: "Підвищиш самооцінку",
    desc: "Відчуття гордості за досягнення та нова впевненість у собі",
  },
  {
    Icon: Users,
    gradient: "from-teal-400 to-teal-500",
    title: "Знайдеш однодумців",
    desc: "Станеш частиною спільноти активних і мотивованих людей",
  },
];

const Results = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Твої результати через 4 тижні
            </h2>
            <p className="text-xl text-gray-600">
              Гарантовані зміни при виконанні програми курсу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/** Мапинг по массиву данных */}
            {resultsData.map(({ Icon, gradient, title, desc }) => (
              <div
                key={title}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${gradient} w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {title}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-green-800 font-semibold text-lg">
                Гарантія результату
              </span>
            </div>
            <div className="lg:w-1/2 mx-auto text-left text-gray-600 mt-4">
              <p className="mb-2">
                Ми впевнені в ефективності <strong>«Формули бігу»</strong> і
                даємо вам гарантію результату.
              </p>
              <p className="mb-2">
                Але якщо після проходження програми ви не відчуєте користі та
                прогресу — ми повернемо кошти.
              </p>
              <p className="mb-2">
                <b>Умови повернення:</b>
              </p>
              <ul className="flex flex-col ml-4">
                <li className="mb-2">
                  <b>1.</b> Ви надаєте скріншоти/звіти про виконання усіх
                  тренувань програми.
                </li>
                <li className="mb-2">
                  <b>2.</b> Якщо, навіть виконавши повністю програму, ви
                  залишаєтесь незадоволені результатом — ми повернемо 100%
                  вартості участі.
                </li>
              </ul>
              <p className="mb-2">
                <b>Таким чином, ви нічим не ризикуєте:</b> або отримуєте прогрес
                і знання, або повертаєте свої гроші.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
