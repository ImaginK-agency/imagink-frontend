import HeroSlider from '../components/HeroSlider';
import Manifesto from '../components/Manifesto';
import BentoGrid from '../components/BentoGrid';
import Metrics from '../components/Metrics';
import Accordion from '../components/Accordion';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Manifesto />
      <BentoGrid />
      <Metrics />
      <Accordion />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
