import { Quote } from "lucide-react";

const revievs = [
  {
    name: "Elena",
    result: "Зробила перше тренування 💪 Дуже сподобалось!",
    text: " Все структуровано і зрозуміло. Зловила такий запал, що не хотілося зупинятись і вирішила ще пройти пішки 3 км. В мене таке запитання, які краще взяти кросівки для початківців. Придивляюся до ASICS, але нічого в них не розумію)",
    image: "./images/rev-img/4.jpg",
  },
  {
    name: "bojechka_",
    result: "ОБЕРЕЖНО ❗❗ Формула бігу закохує в біг 🥰",
    text: " Я навіть уяви не мала, що щоб бігти легко і в задоволення треба знати кілька секретів.Раніше після 3 км червона як помідор я думала що біг не для мене. Сьогодні вже мрію пробігти напівмарафон ❤️",
    image: "./images/rev-img/5.jpg",
  },
  {
    name: "nataliya_snitsar",
    result: "Я вже пройшла 2 Формули, і дуже рада що наважилась спробувати",
    text: "Тепер біг і корисний і в кайф, в заняття онлайн це взагалі 🔥, ти нічого не засікаєш, не думаєш а просто виконуєш завдання. Лонг Рани це взагалі любов, бо це не тільки біг а ще й розмови про життя, разом з тим постійне нагадування про техніку, дихання, вправи.",
    image: "./images/rev-img/6.jpg",
  },
];
const Testimonials = ({ handleRevievsVideoModalOpen }) => {
  return (
    <>
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Історії успіху наших учасників
            </h2>
            <p className="text-xl text-gray-600">
              Реальні результати реальних людей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {revievs.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600 font-semibold">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={handleRevievsVideoModalOpen}
              className="inline-block mx-auto mt-10  border-2 border-red-600 hover:border-red-600   hover:text-red-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Більше відгуків
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
