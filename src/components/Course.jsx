import { ArrowRight, CheckCircle, PlayCircle } from "lucide-react";

const Course = ({ setIsVideoModalOpen, scrollToSection }) => {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid lg:grid-cols-1 items-center ">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                "Формула Бігу" за 1 хвилину
              </h2>
            </div>

            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative mx-auto cursor-pointer hover:scale-110 transition-all duration-300 "
            >
              <img
                src="./images/11.webp"
                alt="Running training session"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />

              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg  transition-transform duration-300">
                  <PlayCircle className="w-12 h-12 text-blue-600" />
                </button>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
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

export default Course;
