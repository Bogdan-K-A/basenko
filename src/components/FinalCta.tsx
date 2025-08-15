import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Shield,
  Users,
} from "lucide-react";

const FinalCta = ({
  setIsContactFormOpen,
  scrollToSection,
}: {
  setIsContactFormOpen: (isOpen: boolean) => void;
  scrollToSection: (section: string) => void;
}) => {
  return (
    <>
      {" "}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовий змінити своє життя?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Приєднуйся до тисяч людей, які вже трансформували своє тіло та розум
            завдяки бігу
          </p>

          <div
            onClick={() => scrollToSection("pricing")}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Почати зараз
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsContactFormOpen(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Задати питання
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <Calendar className="w-8 h-8 text-blue-200 mx-auto mb-2" />
              <p className="text-blue-100">
                Гарантія повернення коштів 30 днів
              </p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-blue-200 mx-auto mb-2" />
              <p className="text-blue-100">Безпечні платежі</p>
            </div>
            <div>
              <Users className="w-8 h-8 text-blue-200 mx-auto mb-2" />
              <p className="text-blue-100">Підтримка 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCta;
