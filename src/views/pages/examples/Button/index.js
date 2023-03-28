import OutlineButton from "./OutlineButton"
import BlockLevel from "./BlockLevel"
import FillButton from "./FillButton"
import FlatButton from "./FlatButton"
import GradientButton from "./GradientButton"
import IconsButton from "./IconsButton"
import OnlyIconButton from "./OnlyIconButton"
import ReliefButton from "./ReliefButton"
import RoundButton from "./RoundButton"
import ButtonCheckboxRadio from "./ButtonCheckboxRadio"

const Button = () => {
  return (
    <>
      {/* Fills Buttons */}
      <FillButton />

      {/* Basic Buttons */}
      <OutlineButton />

      {/* Flat Buttons */}
      <FlatButton />

      {/* Gradient Buttons */}
      <GradientButton />

      {/* Rounded Buttons */}
      <RoundButton />

      {/* Relief Buttons */}
      <ReliefButton />

      {/* Icons Buttons */}
      <IconsButton />

      {/* Only Icons */}
      <OnlyIconButton />

      {/* Checkbox & radio group */}
      <ButtonCheckboxRadio />

      {/* Block Level Buttons */}
      <BlockLevel />
    </>
  )
}

export default Button
