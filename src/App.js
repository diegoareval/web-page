import React, { useState } from "react";
import Navbar from "./commons/Components/Navbar";
import Banner from "./homepage/Components/Banner";
import AboutUs from "./homepage/Components/AboutUs";
import Impact from "./homepage/Components/Impact";
import Testimonial from "./homepage/Components/Testimonial";
import FAQS from "./homepage/Components/FAQS";
import QuestionsForm from "./homepage/Components/QuestionsForm";
import Footer from "./commons/Components/Footer";
import { IntlProvider } from "react-intl";
import messages from "./locale/messages";
import { options } from "./service/options";
import { darkTheme, LIGTH, ligthTheme } from "./utils/theme";
import LanguageContext from "./contexts/LanguageContext";
import ThemeContext from "./contexts/ThemeContext";

const App = () => {
  const [lang, setLang] = useState(options[1]);
  const [theme, setTheme] = useState(LIGTH);
  const styles = theme===LIGTH? {color: ligthTheme.secondaryColor, background: ligthTheme.primaryColor}: {color: darkTheme.secondaryColor, background: darkTheme.primaryColor}
  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <IntlProvider locale={lang} messages={messages[lang.value]}>
          <div className="App" style={styles}>
            <Navbar />
            <Banner />
            <AboutUs />
            <Impact />
            <Testimonial />
            <FAQS />
            <QuestionsForm theme={theme} />
            <Footer />
          </div>
        </IntlProvider>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
