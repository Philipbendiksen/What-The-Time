import React, { useState } from "react";
import ClockFunction from "./clock"; // Justera sökvägen om nödvändigt

const TimezoneSelector: React.FC = () => {
  const [selectedTimezone, setSelectedTimezone] = useState<string>("");

  const handleTimezoneChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTimezone(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-2 mt-20 font-mono text-2xl font-semibold">
        Choose your time zone
      </h1>
      <select
        className="border w-96 p-3 rounded-md text-lg bg-stone-700 mb-6 text-white text-center border-gray-700 focus:outline-none focus:border-gray-500"
        onChange={handleTimezoneChange}
        value={selectedTimezone}
      >
        <option value="">Välj tidszon</option>
        <option value="America/New_York">New York</option>
        <option value="Europe/London">London</option>
        <option value="Asia/Tokyo">Tokyo</option>
        <option value="Australia/Sydney">Sydney</option>
      </select>

      <div className="h-24 flex ">
        {selectedTimezone && <ClockFunction timezone={selectedTimezone} />}
      </div>
    </div>
  );
};

export default TimezoneSelector;
