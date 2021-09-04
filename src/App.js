import NavbarComponent from './components/NavbarComponent';
import MainSectionComponent from './components/MainSectionComponent';
import ArticleComponent from './components/ArticlesSectionComponent';
import SpecialityForUsComponent from './components/SpecialityForUsComponent';
import PartnersClientsComponent from './components/PartnersAndClients/PartnersClientsComponent';
import WhatOurClientsSays from './components/WhatOurClientsSaysComponent';
import ContactForm from './components/ContactForm';
import FooterComponent from './components/Footer/FooterComponent';
import './SASS/main.scss'

function App() {
  return (
    <>
      <NavbarComponent/>
      <MainSectionComponent/>
      <ArticleComponent/>
      <SpecialityForUsComponent/>
      <PartnersClientsComponent/>
      <WhatOurClientsSays/>
      <ContactForm/>
      <FooterComponent/> 
    </>
  );
}

export default App;
