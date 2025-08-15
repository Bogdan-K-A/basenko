import { useState } from "react";

const Faq = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      {" "}
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
            {[
              {
                question: "Чи підходить курс для початківців?",
                answer:
                  "Абсолютно! Курс розроблений для людей з будь-яким рівнем підготовки. Ми починаємо з основ і поступово збільшуємо навантаження.",
              },
              {
                question: "Скільки часу потрібно приділяти тренуванням?",
                answer:
                  "Рекомендуємо 3-4 тренування на тиждень по 30-60 хвилин. Програма гнучка і адаптується під ваш графік.",
              },
              {
                question: "Чи потрібне спеціальне обладнання?",
                answer:
                  "Потрібні лише якісні бігові кросівки. Все інше обладнання опціональне і може бути замінено підручними засобами.",
              },
              {
                question: "Що робити, якщо я пропустив тренування?",
                answer:
                  "Нічого страшного! Програма дозволяє гнучко планувати тренування. Ви завжди можете наздогнати пропущене.",
              },
            ].map((faq, index) => (
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
