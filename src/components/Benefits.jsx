import { Target, Heart, Zap, Shield, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Техніка",
    description: "Правильна постановка стопи та біомеханіка руху",
    color: "blue",
  },
  {
    icon: Heart,
    title: "Витривалість",
    description: "Розвиток серцево-судинної системи",
    color: "red",
  },
  {
    icon: Zap,
    title: "Сила",
    description: "Функціональна підготовка м'язів",
    color: "yellow",
  },
  {
    icon: Shield,
    title: "Гнучкість",
    description: "Мобільність суглобів та профілактика травм",
    color: "green",
  },
  {
    icon: Trophy,
    title: "Мотивація",
    description: "Психологічна підготовка та досягнення цілей",
    color: "purple",
  },
];

const Benefits = () => {
  return (
    <>
      {" "}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              П'ять стовпів успішного бігу
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наша методика базується на комплексному підході до розвитку бігуна
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${benefit.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon
                    className={`w-10 h-10 text-${benefit.color}-600`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
