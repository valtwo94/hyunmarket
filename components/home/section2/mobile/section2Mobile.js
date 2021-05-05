import c from './section2Mobile.module.css'
import Spacer from "../../../shared/spacer";
import Image from "next/image";

const Section2Mobile  = () => {
    return (
        <>
            <div className={c.container}>
                <Image src={"/images/home_section2.png"} width={300} height={350}/>
                <Spacer height={60}/>
                <div className={c.textContainer}>
                    <h1>우리 동네 중고 직거래 마켓</h1>
                    동네 주민들과 가깝고 따뜻한 거래를
                    <Spacer height={10}/>
                    지금 경험해보세요.
                    <Spacer height={40}/>
                    <div className={c.buttonContainer}>
                        <button className={c.button}>인기매물 보기</button>
                        <button className={c.button}>중고거래 보기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2Mobile