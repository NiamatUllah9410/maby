import './App.css';
import HeroSection from './component/BannerSection';
import Footer from './component/Footer';
import MobyGoal from './component/MobyGoal';
import MobyPlan from './component/mobyPlan';
import MobyWork from './component/MobyWork';
import Navbar from './component/Navbar';
import StockChart from './component/StockChart';
import Testimonials from './component/Testmonials';
import PermiumSub from './component/PermiumSubscurtion';
import GroWthChart from './component/barGrowthChart';

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <MobyWork/>
    <MobyGoal/>
    <PermiumSub/>
    <MobyPlan/>
    <StockChart/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default App;
