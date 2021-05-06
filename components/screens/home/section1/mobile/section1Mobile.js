import './section1Mobile.module.css'
import c from './section1Mobile.module.css'
import Spacer from "../../../../shared/spacer";
import Image from "next/image";

const HomeSection1Mobile = () => {
    return (
        <div className={c.container}>
            <div className={c.textContainer}>
                <h1>당신 근처의
                    <br/>
                    당근마켓</h1>
                중고 거래부터 동네 정보까지, 이웃과 함께해요
                <Spacer height={5}/>
                가깝고 따뜻한 당신의 근처를 만들어요.
            </div>
            <Spacer height={60}/>
            <Image src={"/images/home_section1.png"} width={350} height={300}/>
        </div>
    )
}

export default HomeSection1Mobile