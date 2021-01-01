import React, { useState } from "react";
import Navbar from "./commons/Components/Navbar";
import Banner from "./homepage/Components/Banner";
import AboutUs from "./homepage/Components/AboutUs";
import Impact from "./homepage/Components/Impact";
import Testimonial from "./homepage/Components/Testimonial";
import FAQS from "./homepage/Components/FAQS";
import QuestionsForm from "./homepage/Components/QuestionsForm";
import Footer from "./commons/Components/Footer";
import LanguageContext from "./contexts/LanguageProvider";
import {IntlProvider} from "react-intl"
import messages from "./locale/messages"
import { options } from "./service/options";

const App = () => {
     const [lang, setLang] = useState(options[1])
    return (
      <LanguageContext.Provider value={{
        lang,
        setLang
      }}>
      <IntlProvider locale={lang} messages={messages[lang.value]}>
      <div className="App">
        <Navbar />
        <Banner />
        <AboutUs />
        <Impact />
        <Testimonial />
        <FAQS />
        <QuestionsForm />
        <Footer />
      </div>
      </IntlProvider>
      </LanguageContext.Provider>
      
    );
  }


export default App
