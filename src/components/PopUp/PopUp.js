import Timer from "../Timer/Timer.js"
import Button from "../Button/Button.js"

const PopUp = ({ currentTime }) => {
  return (
    <div className="pop-up">
      <Timer currentTime={currentTime} />
      <Button onClick={console.log("click")} text="Submit"/>
    </div>
  )
}

export default PopUp
