import React, {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { LIGTH } from "../../utils/theme";
import "./css/footer.css";

export default function Footer() {
  const {theme} = useContext(ThemeContext)
  const background = theme===LIGTH?"#ffffff":"#1d3040"
  // #b2ffff
  return (
    <>
      <footer style={{background: `${background}`}}>
        <div class="container">
          <h3>Devs Software</h3>
        </div>
        <div class={theme===LIGTH?"wave_dark": "wave"}>
          <svg
            width="516px"
            height="63px"
            viewBox="0 -1 516 63"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <path
              d="M465.8994,4.8023 C446.8704,0.1653 446.8544,10.3203 432.2774,10.9823 C412.6824,11.8733 403.5104,-0.1977 386.8714,0.0033 C370.2314,-0.1977 357.0194,8.6003 357.0194,8.6003 L357.0194,8.6053 C351.2924,11.3603 345.9174,13.6933 338.4874,13.6933 C322.4554,13.6933 322.9524,8.0883 311.5974,6.3063 C300.6744,4.5933 297.4354,11.2593 286.3754,11.2593 C275.3164,11.2593 268.4204,2.9423 257.9144,2.9423 C247.4084,2.9423 227.1374,9.4693 207.9854,4.8023 C188.9564,0.1653 188.9404,10.3203 174.3634,10.9823 C154.7694,11.8733 145.5964,-0.1977 128.9574,0.0033 C112.3174,-0.1977 99.1054,8.6003 99.1054,8.6003 L99.1054,8.6053 C93.3774,11.3603 88.0034,13.6933 80.5734,13.6933 C64.5414,13.6933 65.0384,8.0883 53.6834,6.3063 C42.7604,4.5933 39.5214,11.2593 28.4614,11.2593 C17.4024,11.2593 10.5054,2.9423 0.0004,2.9423 L0.0004,61.9433 L515.8284,61.9433 L515.8284,2.9423 C505.3224,2.9423 485.0514,9.4693 465.8994,4.8023"
              id="Fill-1"
              stroke="none"
              fill="#E4BDB5"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </footer>
    </>
  );
}
