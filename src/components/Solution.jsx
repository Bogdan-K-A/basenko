import { Target, Heart, Phone, CheckCircle } from "lucide-react";

const solution = [
  <>
    <b>8 онлайн-тренувань наживо</b> з голосовим супроводом і корекцією техніки.
  </>,
  <>
    <b>2 тренування мобіліті</b> для гнучкості та розблокування тіла.
  </>,
  <>
    <b>2 інтенсивні табата-сесії</b> для розвитку витривалості та спалювання
    жиру.
  </>,
  <>
    <b>3 короткі тренування</b> для днів із мінімумом часу.
  </>,
  <>
    <b>2 комплекси спеціально-бігових вправ</b> для легкої та безпечної техніки.
  </>,
  <>
    <b>2 силові комплекси</b> для зміцнення м’язів і профілактики травм.
  </>,
  <>
    <b>Збалансоване меню для всієї родини</b>, яке поєднує користь і смак.
  </>,
  <>
    Усі тренування залишаються з вами ще{" "}
    <b>2 тижні після завершення програми</b> — можна повторювати, надолужувати
    або закріплювати матеріал.
  </>,
];

const Solution = () => {
  return (
    <>
      <section
        id="solution"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/3.webp")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Затемняющий оверлей для лучшей читаемости текста */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Рішення вже існує!
              </h2>
              <p className="text-xl text-blue-50 max-w-3xl mx-auto">
                "Формула Бігу" - це науково обґрунтована система тренувань, яка
                допоможе тобі стати бігуном за 4 тижні
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      Універсальний підхід
                    </h3>
                    <p className="text-blue-50">
                      План тренувань побудований для всіх рівнів підготовки
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      Без перевантажень
                    </h3>
                    <p className="text-blue-50">
                      Поступове нарощування навантаження без ризику травм
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      24/7 підтримка
                    </h3>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white text-center">
                  Що ти отримуєш у «Формулі Бігу»
                </h3>
                <div className="space-y-4 mb-6">
                  {solution.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-300 shrink-0" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-blue-50 text-2xl font-medium text-white text-center">
                  Доступ до чату підтримки назавжди
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solution;
