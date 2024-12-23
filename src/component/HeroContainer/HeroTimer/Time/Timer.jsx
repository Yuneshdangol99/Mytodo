import React, { useEffect, useState } from "react";

function Timer() {
  const [Timeleft, setTimeleft] = useState(1560);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeleft((prevTimeleft) => {
        if (prevTimeleft <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimeleft - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(Timeleft / 60);
  const seconds = Timeleft % 60;

  return (
    <div>
      <h1 className="text-lg font-semibold">
        00 : {String(minutes).padStart(2, "0")} :{" "}
        {String(seconds).padStart(2, "0")}
      </h1>
    </div>
  );
}

export default Timer;
