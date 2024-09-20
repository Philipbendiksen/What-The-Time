import React from "react";
import ClockFunction from "./components/clock"; // Justera sökvägen om nödvändigt
import TimezoneSelector from "./components/timeZonePicker";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <header className="#d97502 text-5xl flex items-center font-medium justify-center  h-16 ">
        <h1 className="mt-48">What the time? </h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        {" "}
        {/* Flexbox för centrering */}
        <div>
          <ClockFunction timezone="Europe/Stockholm" /> {/* Ange tidszon här */}
          <TimezoneSelector />
        </div>
      </main>
      <footer className="#d97502 flex items-center justify-center text-lg h-16">
        <p>Complains about the time will be dealt with in the future </p>
      </footer>
    </div>
  );
};

export default App;
