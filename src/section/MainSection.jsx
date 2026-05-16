import Header from "../components/Header";
import FeatureCard from "../cards/FeatureCard";
import { features } from "../data/data";
import Card1 from "../cards/Frame 1/Card1";
import Card2 from "../cards/Frame 1/Card2";
import Mentor from "../cards/Frame 2/Mentor";
import Job from "../cards/Frame 2/Job";

const MainSection = () => {
    return(
        <section className=" w-[1440px]">
            <div className="max-w-[1213px] h-[862px] px-12">
                <Header/>
                <div className="grid grid-cols-2 gap-10 w-[1213px] h-[722px]">
                    <Card1 />
                    <Card2 />
                    <Mentor />
                    <Job />
                </div>
            </div>
        </section>
    )
}

export default MainSection