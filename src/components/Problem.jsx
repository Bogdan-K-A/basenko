import { ArrowRight } from "lucide-react";
const problems = [
  {
    title: "Немає мотивації",
    description:
      "Хочеш почати бігати, але не знаєш з чого розпочати. Кожен раз відкладаєш 'на завтра'",
    image: "./images/2.jpg",
  },
  {
    title: "Швидко втомлюєшся",
    description:
      "Після кількох хвилин бігу важко дихати, болять ноги і хочеться зупинитися",
    image: "./images/2.jpeg",
  },
  {
    title: "Немає плану",
    description: "Бігаєш по 5–7 км тричі на тиждень і не бачиш прогресу?",
    image: "./images/3.jpeg",
  },
];

const Problem = ({ scrollToSection }) => {
  return (
    <>
      <section id="problem" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800">
              Знайомі відчуття?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problems.map(({ title, description, image }) => {
                return (
                  <div
                    key={title}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="text-4xl mb-4 h-48">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">
                        {title}
                      </h3>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-16 mb-16">
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                <strong className="text-orange-500">Ти не один!</strong> 87%
                людей кидають біг через перший місяць через відсутність
                правильної методики та підтримки.
              </p>
            </div>
            <div className="flex  justify-center ">
              <button
                onClick={() => scrollToSection("pricing")}
                className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Приєднатися зараз
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Problem;
