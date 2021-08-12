function Timer(props) {
  const { currentTime } = props;
  return (
    <div className="header">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default Timer;
