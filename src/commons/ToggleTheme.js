import React from "react";
import "./Css/toggle.css"
const ToggleTheme = () => {
  return (
    <div class="toggle-wrapper">
      <input type="checkbox" id="theme-toggle" />
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
