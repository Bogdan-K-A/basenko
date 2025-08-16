import { Award, Quote } from "lucide-react";

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-gradient-to-br from-orange-400 to-red-400 w-100 h-100 mx-auto rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl overflow-hidden">
                  <img
                    src="/images/DSC02270Sergey_run_ph.JPG"
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-orange-700 font-semibold">
                    Майстер спорту України
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                  Сергій Басенко
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Професійний тренер з бігу з 10-річним досвідом. Підготував 12
                  олімпійців, понад 50 майстрів спорту та допоміг більше ніж
                  2000 людей досягти своїх цілей у бігу.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">
                      10+
                    </div>
                    <div className="text-gray-600">років досвіду</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">
                      1000+
                    </div>
                    <div className="text-gray-600">учнів</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">12</div>
                    <div className="text-gray-600">олімпійців</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">
                      50+
                    </div>
                    <div className="text-gray-600">майстрів спорту</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <Quote className="w-8 h-8 text-orange-500 mb-4" />
                  <p className="text-gray-700 italic text-lg">
                    "Моя місія - показати кожній людині, що біг може стати
                    джерелом радості та здоров'я, а не страждання. Правильна
                    методика - ключ до успіху!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
