import Timer from "../Timer/Timer.js"
import Button from "../Button/Button.js"
import "./PopUp.scss"

const PopUp = ({ currentTime }) => {
  return (
    <div className="pop-up">
      <Timer message="Your Time" currentTime={currentTime} />
      <Button onClick={() => console.log("click")} text="Submit"/>
    </div>
  )
}

export default PopUp
