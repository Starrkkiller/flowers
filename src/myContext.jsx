import React, {useState, createContext} from "react"
import { Button } from "./components/common/Button/Button";
const ButtonContext = createContext(true)

const ButtonToMain = (props) => {
  const [BututtonToMainVisible, setBututtonToMainVisible] = useState(true)
  const clickonButtonMainHandler = () => {
    setBututtonToMainVisible(!BututtonToMainVisible);
  }
  return(
    <div className={(BututtonToMainVisible ? <Button>To main</Button> : null)} onClick={clickonButtonMainHandler}></div>
  )
}

export { ButtonToMain, ButtonContext }