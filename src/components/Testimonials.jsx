import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Історії успіху наших учасників
            </h2>
            <p className="text-xl text-gray-600">
              Реальні результати реальних людей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Олена Петренко",
                result: "Пробігла перший марафон за 4:15",
                text: "Завдяки 'Формулі Бігу' я не тільки пробігла свій перший марафон, але й отримала неймовірне задоволення від процесу. Голосовий супровід допомагав не здаватися навіть у найважчі моменти.",
                image:
                  "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
              },
              {
                name: "Андрій Коваленко",
                result: "Схуд на 15 кг за 3 місяці",
                text: "Курс змінив моє ставлення до бігу. Тепер це не просто фізичне навантаження, а медитація в русі. Результат перевершив усі очікування!",
                image:
                  "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
              },
              {
                name: "Марія Іваненко",
                result: "Покращила час на 10км на 8 хвилин",
                text: "Професійний підхід тренера та підтримка спільноти створили ідеальні умови для розвитку. Рекомендую всім, хто хоче серйозно займатися бігом!",
                image:
                  "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
              },
            ].map((testimonial, index) => (
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
        </div>
      </section>
    </>
  );
};

export default Testimonials;
