import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Catagoryes from "./Catagoryes";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagoryes></Catagoryes>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;