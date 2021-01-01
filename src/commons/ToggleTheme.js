import React, {useContext} from "react";
import ThemeContext from "../contexts/ThemeContext";
import { DARK, LIGTH } from "../utils/theme";
import "./Css/toggle.css"
const ToggleTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const handleChange = ()=>{
      if(theme===LIGTH){
          setTheme(DARK)
      }else{
        setTheme(LIGTH)
      }
    }
    const status = theme===LIGTH? false: true
  return (
    <div class="toggle-wrapper">
      <input type="checkbox" id="theme-toggle" value={status} onChange={()=> handleChange()} />
      <label for="theme-toggle" class="toggle">
        <span class="toggle__ray">
          <span class="ray ray--1"></span>
          <span class="ray ray--2"></span>
          <span class="ray ray--3"></span>
        </span>
        <span class="toggle__items">
          <span class="glare"></span>
          <span class="dot dot--1"></span>
          <span class="dot dot--2"></span>
          <span class="dot dot--3"></span>
        </span>
      </label>
    </div>
  );
};

export default ToggleTheme;
