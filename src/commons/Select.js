import React, {useContext} from 'react';
import Select from 'react-select';
import LanguageContext from '../contexts/LanguageContext';
import { options } from '../service/options';
const Selector = ()=> {
    const {lang, setLang} = useContext(LanguageContext);
  const handleChange = selectedOption => {
    setLang(selectedOption)
  };

  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        // backgroundColor: isFocused ? "#999999" : null,
        color: "#333333"
      };
    }
  };

    return (
      <Select
      placeholder={"Elija Idioma"}
        value={lang}
        onChange={handleChange}
        options={options}
        styles={colourStyles}
      />
    );
  }


export default Selector