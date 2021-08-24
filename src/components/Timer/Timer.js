import "./Timer.scss";

function Timer(props) {
  const { currentTime, showTime, message } = props;

  // get seconds elapsed from state and format it as minutes:seconds

  let minutes = Math.floor(currentTime / 60).toString();

  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }

  let seconds = (currentTime % 60).toString();

  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }

  let displayTime = `${minutes}:${seconds}`;

  // see if timer should display (only on /game route)
  let show;
  showTime === true ? (show = "timer") : (show = "hidden");
  return (
    <div className={show}>
      <p>{message}: {displayTime}</p>
    </div>
  );
}

export default Timer;
