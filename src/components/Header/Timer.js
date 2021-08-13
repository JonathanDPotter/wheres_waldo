function Timer(props) {
  const { currentTime } = props;

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

  return (
    <div className="header">
      <h1>Time: {displayTime}</h1>
    </div>
  );
}

export default Timer;
