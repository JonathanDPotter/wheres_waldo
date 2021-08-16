import "./ChooseScreen.scss";

const ChooseScreen = ({ choosePic, pictures }) => {
  return (
    <div className="choose-screen">
      <h1 className="choose-instructions">Choose a picture!</h1>
      <div className="picture-choices">
        {pictures.map((picture, index) => {
          return (
            <img
              key={index}
              src={picture}
              alt=""
              onClick={(event) => {
                choosePic(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChooseScreen;
