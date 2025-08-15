const Problem = () => {
  return (
    <>
      <section id="problem" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800">
              Знайомі відчуття?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-400">
                <div className="text-4xl mb-4">😔</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Немає мотивації
                </h3>
                <p className="text-gray-600">
                  Хочеш почати бігати, але не знаєш з чого розпочати. Кожен раз
                  відкладаєш "на завтра"
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-400">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Швидко втомлюєшся
                </h3>
                <p className="text-gray-600">
                  Після кількох хвилин бігу важко дихати, болять ноги і хочеться
                  зупинитися
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-400">
                <div className="text-4xl mb-4">❓</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Немає плану
                </h3>
                <p className="text-gray-600">
                  Не розумієш, як правильно тренуватися, щоб бачити прогрес і не
                  травмуватися
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                <strong className="text-orange-500">Ти не один!</strong> 87%
                людей кидають біг через перший місяць через відсутність
                правильної методики та підтримки.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Problem;
