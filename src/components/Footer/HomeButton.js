function HomeButton(props) {
  const { goHome } = props;
  return (
    <div className="home-button">
      <button className="btn" onClick={goHome}>
        Home
      </button>
    </div>
  );
}

export default HomeButton;
