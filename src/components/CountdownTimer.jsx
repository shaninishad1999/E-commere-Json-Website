import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 14,
    seconds: 25
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        // Decrease seconds
        seconds--;
        
        // Adjust minutes, hours, and days if needed
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          
          if (minutes < 0) {
            minutes = 59;
            hours--;
            
            if (hours < 0) {
              hours = 23;
              days--;
              
              if (days < 0) {
                clearInterval(timer);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-green-600 py-6">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-4 px-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div 
            key={unit} 
            className="bg-white bg-opacity-20 p-4 rounded-lg text-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px] shadow-lg"
          >
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
              {value.toString().padStart(2, '0')}
            </span>
            <span className="text-xs sm:text-sm lg:text-base uppercase text-black text-opacity-80">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
