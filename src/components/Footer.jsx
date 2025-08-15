const Footer = () => {
  return (
    <>
      {" "}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Формула Бігу</h3>
              <p className="text-gray-400 leading-relaxed">
                Онлайн-тренування з бігу для досягнення ваших спортивних цілей
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Курси</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Базовий курс
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Преміум курс
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Індивідуальні тренування
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Підтримка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Часті питання
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакти
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Технічна підтримка
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакти</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@formulabigu.com</p>
                <p>Телефон: +380 (67) 123-45-67</p>
                <p>Telegram: @formulabigu</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Формула Бігу. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
