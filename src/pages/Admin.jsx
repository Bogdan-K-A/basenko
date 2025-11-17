import { useState, useEffect } from "react";
import { Save, Calendar, Info } from "lucide-react";

const Admin = () => {
  // Состояние для даты (время всегда 00:00:00)
  const [date, setDate] = useState("");
  const [savedDate, setSavedDate] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  // Загрузка текущей даты при монтировании
  useEffect(() => {
    loadCurrentDate();
  }, []);

  // Загрузка текущей даты из localStorage или JSON
  const loadCurrentDate = async () => {
    try {
      // Проверяем localStorage
      const saved = localStorage.getItem("timerTargetDate");
      if (saved) {
        const dateObj = new Date(saved);
        setSavedDate(saved);
        setDate(dateObj.toISOString().split("T")[0]);
        return;
      }

      // Загружаем из JSON файла
      const response = await fetch("/timer.json?t=" + Date.now());
      if (response.ok) {
        const data = await response.json();
        if (data.targetDate) {
          const dateObj = new Date(data.targetDate);
          setSavedDate(data.targetDate);
          setDate(dateObj.toISOString().split("T")[0]);
        }
      }
    } catch (error) {
      console.error("Ошибка загрузки даты:", error);
      showMessage("Ошибка загрузки текущей даты", "error");
    }
  };

  // Сохранение даты на сервер через PHP и в localStorage
  const handleSave = async (e) => {
    e.preventDefault();

    if (!date) {
      showMessage("Заполните дату", "error");
      return;
    }

    try {
      // Устанавливаем время на 00:00:00
      const targetDate = new Date(`${date}T00:00:00`);

      // Проверка валидности даты
      if (isNaN(targetDate.getTime())) {
        showMessage("Некорректная дата", "error");
        return;
      }

      // Сохранение на сервер через PHP (для всех пользователей)
      try {
        const response = await fetch("/save_timer.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date }),
        });

        const result = await response.json();

        if (result.success) {
          // Обновляем localStorage после успешного сохранения на сервер
          localStorage.setItem("timerTargetDate", targetDate.toISOString());
          setSavedDate(targetDate.toISOString());

          showMessage(
            "Дата успешно сохранена на сервере! Таймер обновится для всех пользователей в течение 30 секунд.",
            "success"
          );
        } else {
          // Если PHP скрипт вернул ошибку
          showMessage(
            result.message ||
              "Ошибка сохранения на сервере. Проверьте права доступа к файлу timer.json.",
            "error"
          );
        }
      } catch (phpError) {
        // Если PHP скрипт недоступен (например, на локальной разработке)
        console.warn("PHP скрипт недоступен:", phpError);
        // Сохраняем локально как fallback
        localStorage.setItem("timerTargetDate", targetDate.toISOString());
        setSavedDate(targetDate.toISOString());
        showMessage(
          "Дата сохранена локально. Для обновления на сервере загрузите timer.json вручную или проверьте доступность PHP скрипта.",
          "info"
        );
      }
    } catch (error) {
      console.error("Ошибка сохранения:", error);
      showMessage("Ошибка при сохранении", "error");
    }
  };

  // Показать сообщение
  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };

  // Генерация содержимого для JSON файла (время всегда 00:00:00)
  const generateJsonContent = () => {
    if (!date) return "";
    const targetDate = new Date(`${date}T00:00:00`);
    return JSON.stringify({ targetDate: targetDate.toISOString() }, null, 2);
  };

  // Копирование JSON в буфер обмена
  const copyJsonToClipboard = () => {
    const jsonContent = generateJsonContent();
    if (!jsonContent) {
      showMessage("Сначала заполните дату", "error");
      return;
    }
    navigator.clipboard.writeText(jsonContent);
    showMessage("JSON скопирован в буфер обмена!", "success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Админ-панель таймера
            </h1>
            <p className="text-gray-600">
              Обновление целевой даты для обратного отсчета
            </p>
          </div>

          {/* Сообщения */}
          {message.text && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : message.type === "error"
                  ? "bg-red-50 text-red-800 border border-red-200"
                  : "bg-blue-50 text-blue-800 border border-blue-200"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Форма */}
          <form onSubmit={handleSave} className="space-y-6">
            {/* Дата */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                Дата (время автоматически установится на 00:00:00)
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                required
              />
            </div>

            {/* Текущая сохраненная дата */}
            {savedDate && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">
                  Текущая дата таймера:
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(savedDate).toLocaleDateString("uk-UA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            )}

            {/* Кнопка сохранения */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Сохранить на сервер
            </button>
          </form>

          {/* Инструкции */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-2">Инструкция:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Выберите дату и нажмите "Сохранить на сервер" - дата
                    автоматически сохранится в timer.json (время 00:00:00)
                  </li>
                  <li>
                    Если PHP скрипт недоступен, скопируйте JSON ниже и загрузите
                    файл{" "}
                    <code className="bg-blue-100 px-1 rounded">timer.json</code>{" "}
                    в корень сайта вручную
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* JSON для копирования */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Содержимое для timer.json:
              </label>
              <button
                type="button"
                onClick={copyJsonToClipboard}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Копировать JSON
              </button>
            </div>
            <textarea
              readOnly
              value={generateJsonContent() || '{"targetDate": ""}'}
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
