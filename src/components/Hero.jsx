import { ArrowRight, Award, Clock, Play, Users } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const Hero = ({ scrollToSection, setIsVideoModalOpen }) => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="./images/5.webp"
            alt="Running training background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8 h-screen ">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-end pb-10">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Main Headline */}
              <h1 className="text-1xl mt-20 sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Біжи легко. Розвивайся без травм. Досягай свого результату
                <br />
                <span className="text-white text-3xl sm:text-4xl lg:text-5xl mt-4 block">
                  Приєднуйся до{" "}
                  <span className="text-red-600 font-extrabold">
                    Формули Бігу!
                  </span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-xl  leading-relaxed max-w-2xl text-white">
                Онлайн-тренування з голосовим супроводом, технікою, мотивацією
                та планом, який доводить до результату з будь-якої точки світу.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Приєднатися зараз
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group border-2 border-white hover:border-red-600 text-white hover:text-red-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Дивитися відео
                </button>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative lg:ml-auto">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
