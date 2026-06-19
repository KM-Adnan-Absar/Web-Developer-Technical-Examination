import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GlobalReachFeature from './components/GlobalReachFeature.jsx';
import TalentFeature from './components/TalentFeature.jsx';
import CTASection from './components/CTASection.jsx';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />

        <GlobalReachFeature />

        <Features />
        <TalentFeature />

        <CTASection />
        <FAQ />


      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
