import React, {useContext} from 'react';
import Select from 'react-select';
import LanguageContext from '../contexts/LanguageProvider';
import { options } from '../service/options';
const Selector = ()=> {
    const {lang, setLang} = useContext(LanguageContext);
  const handleChange = selectedOption => {
    setLang(selectedOption)
  };

    return (
      <Select
      placeholder={"Elija Idioma"}
      styles={{
          width: "70px"
      }}
        value={lang}
        onChange={handleChange}
        options={options}
      />
    );
  }


export default Selector