import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  // Дефолтная дата (fallback)
  const defaultDate = new Date("2025-10-20T00:00:00");
  const [targetDate, setTargetDate] = useState(defaultDate);

  // Загрузка даты из JSON файла (основной источник для всех пользователей)
  useEffect(() => {
    const loadTargetDate = async () => {
      try {
        // Загружаем из JSON файла (основной источник)
        const response = await fetch("/timer.json?t=" + Date.now());
        if (response.ok) {
          const data = await response.json();
          if (data.targetDate) {
            const newDate = new Date(data.targetDate);
            setTargetDate(newDate);
            // Обновляем localStorage для синхронизации
            localStorage.setItem("timerTargetDate", newDate.toISOString());
            return;
          }
        }

        // Если JSON недоступен, проверяем localStorage (fallback)
        const savedDate = localStorage.getItem("timerTargetDate");
        if (savedDate) {
          setTargetDate(new Date(savedDate));
          return;
        }
      } catch (error) {
        console.error("Ошибка загрузки даты таймера:", error);
        // Fallback на localStorage при ошибке сети
        const savedDate = localStorage.getItem("timerTargetDate");
        if (savedDate) {
          setTargetDate(new Date(savedDate));
        } else {
          // Используем дефолтную дату при ошибке
          setTargetDate(defaultDate);
        }
      }
    };

    // Загружаем сразу
    loadTargetDate();

    // Проверяем обновления каждые 30 секунд (для синхронизации с сервером)
    const interval = setInterval(loadTargetDate, 30000);
    return () => clearInterval(interval);
  }, []);

  // Целевая дата: через 16 дней, 6 часов, 12 минут, 5 секунд от текущего времени
  // const getTargetDate = () => {
  //   const now = new Date();
  //   now.setSeconds(now.getSeconds() + 5);
  //   now.setMinutes(now.getMinutes() + 12);
  //   now.setHours(now.getHours() + 6);
  //   now.setDate(now.getDate() + 16);

  //   return now;
  // };

  // const targetDate = getTargetDate();

  const calculateTimeLeft = (date) => {
    const now = new Date();
    const difference = date - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  // Обновление таймера при изменении целевой даты
  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));
  }, [targetDate]);

  // Таймер обновляется каждую секунду
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Днів", value: timeLeft.days },
    { label: "Годин", value: timeLeft.hours },
    { label: "Хвилин", value: timeLeft.minutes },
    { label: "Секунд", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-black/50 text-white px-6 py-4  rounded-full flex items-center justify-center space-x-4 backdrop-blur-md">
      <span className="text-lg text-md font-medium">До старту :</span>
      <div className="flex space-x-4">
        {timeUnits.map((unit, idx) => (
          <div key={idx} className="text-center">
            <div className="bg-white text-red-600 sm:w-12 sm:h-12 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">
              {unit.value}
            </div>
            <div className="text-xs mt-1">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
