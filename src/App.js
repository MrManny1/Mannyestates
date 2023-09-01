import { useRef } from 'react';
import { Navbar } from "./components/navbar_and_footer/navbar/Navbar";
import { RealEstateAgentsSection } from './components/website_sections/1st_real_estate_agents/RealEstateAgentsSection';
import { ServicesAndAboutUsSection } from './components/website_sections/2nd_services_and_about_us/ServicesAndAboutUsSection';
import { QuizAndCalculatorSection } from './components/website_sections/3rd_quiz_and_calculator/QuizAndCalculatorSection';
import { PortfolioAndFeedbackSection } from './components/website_sections/4th_portfolio_and_feedback/PortfolioAndFeedbackSection';
import { HowWeWorkSection } from './components/website_sections/5th_how_we_work/HowWeWorkSection';
import { EstimateCostSection } from './components/website_sections/6th_estimate_the_cost/EstimateCostSection';
import { ArticlesSection } from './components/website_sections/7th_articles/ArticlesSection';
import { Footer } from './components/navbar_and_footer/footer/Footer';
import { Gift } from './components/common_components/gift/Gift';
import { BackToTopButton } from './components/common_components/back_to_top_button/BackToTopButton';
import { CallButton } from './components/common_components/call_button/CallButton';
import './App.css';

function App() {

  const servicesRef     = useRef(null);
  const promotionsRef   = useRef(null);
  const feedbackRef     = useRef(null);
  const consultFormRef  = useRef(null);
  const articlesRef     = useRef(null);
  const contactsRef     = useRef(null);

  const refs = { 
    servicesRef: servicesRef, 
    promotionsRef: promotionsRef, 
    feedbackRef: feedbackRef, 
    articlesRef: articlesRef, 
    contactsRef: contactsRef
  };

  return (

    <div className="App">

      <Navbar refs={refs} />

      <RealEstateAgentsSection />

      <ServicesAndAboutUsSection ref={servicesRef} />

      <QuizAndCalculatorSection ref={promotionsRef} consultFormRef={consultFormRef} />

      <PortfolioAndFeedbackSection ref={feedbackRef} />

      <HowWeWorkSection />

      <EstimateCostSection ref={consultFormRef} />

      <ArticlesSection ref={articlesRef} />
      
      <Footer ref={contactsRef} />

      <Gift />

      <BackToTopButton />

      <CallButton />

    </div>

  );

}

export default App;