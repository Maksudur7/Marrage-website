import Slider from "../Slider file/Slider";
import CounterSection from "./CounterSection";
import Footer from "./Footer";
import HomeCard from "./HomeCard";
import SuccessStory from "./SuccessStory";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeCard></HomeCard>
            <CounterSection></CounterSection>
            <SuccessStory></SuccessStory>
            <Footer></Footer>
        </div>
    );
};

export default Home;