import { Send, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 justify-center">
            <div className="w-2/3">
              <h3 className="text-xl font-bold mb-4">Формула Бігу</h3>
              <p className="text-gray-400 leading-relaxed">
                Онлайн-тренування з бігу для досягнення ваших спортивних цілей
              </p>
            </div>

            <div className="md:ml-auto">
              <h4 className="font-semibold mb-4">Контакти</h4>
              <div className="space-y-2 text-gray-400">
                <a
                  href="tel:+380632602691"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +380 (63) 260 26 91
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href="https://t.me/baskarabas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/basenko_sergiy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Формула Бігу. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
