import React from "react";
import ClockFunction from "./components/clock"; // Justera sökvägen om nödvändigt
import TimezoneSelector from "./components/timeZonePicker";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <header className="#d97502 flex items-center font-medium justify-center h-16">
        <h1 className="text-5xl md:text-8xl mt-32">What the time?</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div>
          <ClockFunction timezone="Europe/Stockholm" />
          <TimezoneSelector />
        </div>
      </main>
      <footer className="#d97502 flex items-center justify-center text-sm md:text-lg h-16">
        <p className="text-center">
          Complaints about the time will be dealt with in the future
        </p>
      </footer>
    </div>
  );
};

export default App;
