import { ArrowRight, Award, Clock, Play, Users } from "lucide-react";

const Hero = ({ scrollToSection, setIsVideoModalOpen }) => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="./images/1.jpg"
            alt="Running training background"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-blue-50/80"></div> */}
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Твій біг.Твій ритм.Твій результат.
                <br />
                <span className="text-gray-800 text-3xl sm:text-4xl lg:text-5xl mt-4 block">
                  Приєднуйся до{" "}
                  <span className="text-red-600 font-extrabold">
                    Формули Бігу!
                  </span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-white leading-relaxed max-w-2xl">
                Онлайн-тренування з голосовим супроводом, технікою, мотивацією
                та планом, який доводить до результату з будь-якої точки світу.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Приєднатися зараз
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Дивитися відео
                </button>
              </div>

              {/* Social Proof */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-orange-500" />
                    <span className="font-bold text-gray-900">
                      Олімпійський досвід
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 text-center lg:text-left">
                    Працював з олімпійцями
                  </p>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <span className="font-bold text-gray-900">10+ років</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center lg:text-left">
                    Професійного досвіду
                  </p>
                </div>

                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-green-500" />
                    <span className="font-bold text-gray-900">
                      1000+ учасників
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 text-center lg:text-left">
                    Досягли своїх цілей
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Feature Cards */}
              {/* <div className="space-y-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Голосовий супровід
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Персональний тренер завжди з тобою
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300 ml-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Індивідуальний план
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Адаптований під твій рівень
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Спільнота бігунів
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Підтримка та мотивація 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Floating Stats */}
              {/* <div className="absolute -top-[30px] sm:-top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs opacity-90">Задоволених клієнтів</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl p-4 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-xs opacity-90">Середній рейтинг</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
