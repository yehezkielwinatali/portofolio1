import { useState, useEffect } from "react";

const GreetingAlert = ({ onClose }) => {
  const [greeting, setGreeting] = useState("");
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    let greet = "";
    if (hour < 12) greet = "Good morning";
    else if (hour < 18) greet = "Good afternoon";
    else greet = "Good evening";

    setGreeting(greet);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setDateString(now.toLocaleDateString(undefined, options));
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md shadow-lg max-w-sm text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4 text-black">{greeting}!</h2>
        <p className="mb-6 text-black">{dateString}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GreetingAlert;
