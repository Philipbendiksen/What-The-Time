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
    <div className="flex flex-col items-center p-4">
      <h1 className="mb-2 mt-14 font-mono text-2xl font-semibold text-center">
        Choose your time zone
      </h1>
      <select
        className="border w-full max-w-md p-3 rounded-md text-xl bg-stone-700 mb-6 text-white text-center border-gray-700 focus:outline-none focus:border-gray-500"
        onChange={handleTimezoneChange}
        value={selectedTimezone}
      >
        <option value="">Choose time zone</option>
        <option value="America/New_York">New York</option>
        <option value="Europe/London">London</option>
        <option value="Asia/Tokyo">Tokyo</option>
        <option value="Australia/Sydney">Sydney</option>
        <option value="America/Los_Angeles">Los Angeles</option>
      </select>

      <div className="h-24 flex items-center justify-center">
        {selectedTimezone && <ClockFunction timezone={selectedTimezone} />}
      </div>
    </div>
  );
};

export default TimezoneSelector;
