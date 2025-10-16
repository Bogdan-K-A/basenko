import { useState } from "react";

const faqData = [
  {
    question: "Коли стартує програма і скільки вона триває?",
    answer:
      "Старт нового потоку — 20 жовтня. Тривалість програми — 2 тижні, із тренуваннями 4 рази на тиждень.",
  },
  {
    question: "Скільки часу займає одне тренування?",
    answer:
      "У середньому 50–60 хвилин. Є як більш інтенсивні, так і відновлювальні заняття.",
  },
  {
    question: "У якому форматі проходять тренування?",
    answer:
      "Онлайн із голосовим супроводом у прямому ефірі. Якщо не встигаєте — доступні записи ще 14 днів після завершення програми.",
  },

  {
    question: "Що робити, якщо я пропущу тренування?",
    answer:
      "Ви завжди можете пройти запис у зручний для вас час. Жодне тренування не втратиться.",
  },
  {
    question: "Чи потрібні спеціальні гаджети або обладнання?",
    answer:
      "Ні, обов’язково лише зручні кросівки. Якщо у вас є спортивний годинник чи пульсометр — це плюс, але не обов’язково. Навушники та телефон .",
  },
  {
    question: "Для якого рівня підготовки підходить програма ?",
    answer:
      "«Формула бігу» і бігунам із середнім рівнем підготовки. Якщо ви вже готуєтеся до марафону на результат, вам краще індивідуальне супроводження.Для новачків краще підійде курс «Біг з нуля» деталі в профілі .",
  },
  {
    question: "Яких результатів можна очікувати?",
    answer:
      "Ви відчуєте легкість у бігу, зниження ваги, покращення пульсу у звичному темпі, покращення техніки й витривалості, системність та відчутний прогрес.",
  },
  {
    question: "Яка підтримка буде під час інтенсиву?",
    answer:
      "Ви отримаєте доступ у чат учасників, де куратор відповідає на всі питання. Також у преміум-пакеті є індивідуальні консультації та розбір техніки.",
  },
  {
    question: "Які гарантії я маю?",
    answer:
      "Ми впевнені в програмі. Якщо ви виконаєте всі тренування, але не будете задоволені результатом, ми повернемо кошти.",
  },
  {
    question: "О котрій проходять онлайн тренування?",
    answer: "7:00 за Київським часом",
  },
];

const Faq = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <>
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Часті запитання
            </h2>
            <p className="text-xl text-gray-600">
              Відповіді на найпопулярніші питання
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
