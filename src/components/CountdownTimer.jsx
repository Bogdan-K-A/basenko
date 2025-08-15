import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  // Целевая дата: через 16 дней, 6 часов, 12 минут, 5 секунд от текущего времени
  const getTargetDate = () => {
    const now = new Date();
    now.setSeconds(now.getSeconds() + 5);
    now.setMinutes(now.getMinutes() + 12);
    now.setHours(now.getHours() + 6);
    now.setDate(now.getDate() + 16);
    return now;
  };

  const targetDate = getTargetDate();

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
