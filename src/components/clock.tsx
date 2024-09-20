import React, { useEffect, useState } from "react";

interface ClockFunctionProps {
  timezone: string;
}

const ClockFunction: React.FC<ClockFunctionProps> = ({ timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Current Time in {timezone}
      </h1>
      <h2 className="text-4xl font-bold text-stone-700">
        {time.toLocaleString("en-GB", {
          timeZone: timezone,
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </h2>
    </div>
  );
};

export default ClockFunction;
