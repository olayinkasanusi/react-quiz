import { useEffect } from "react";
function Timer({ timer, dispatch }) {
  const min = Math.floor(timer / 60);
  const secs = timer % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min} : {secs < 10 ? `0${secs}` : secs}
    </div>
  );
}

export default Timer;
