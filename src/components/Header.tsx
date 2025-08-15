import { Menu, Phone } from "lucide-react";
const navBar = [
  { label: "Про курс", id: "about" },
  { label: "Програма", id: "program" },
  { label: "Переваги", id: "benefits" },
  { label: "Відгуки", id: "testimonials" },
  { label: "Тарифи", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

const Header = ({
  scrollToSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  scrollToSection: (sectionId: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}) => {
  return (
    <>
      {" "}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-500/35 backdrop-blur-sm border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center">
                  {/* <Target className="w-6 h-6 text-white" /> */}
                  <img
                    src="./images/logo.png"
                    alt="Formula Bigu"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Формула Бігу
                  </h1>
                  <p className="text-xs text-gray-600 hidden sm:block">
                    Онлайн тренування
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navBar.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-red-600 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-white">
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+380 (67) 123-45-67</span>
                </div>
                {/* <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>info@formulabigu.com</span>
                </div> */}
              </div>
              {/* <button
                onClick={() => scrollToSection("pricing")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Почати зараз
              </button> */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {navBar.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+380 (67) 123-45-67</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@formulabigu.com</span>
                  </div> */}
                </div>
                {/* <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-semibold">
                  Почати зараз
                </button> */}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
