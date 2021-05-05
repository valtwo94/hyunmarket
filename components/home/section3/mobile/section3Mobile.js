import c from "./section3Mobile.module.css";
import Image from "next/image";
import Spacer from "../../../shared/spacer";

const Section3Mobile = () => {

    //Slider 세팅


    return (
        <>
            <div className={c.container}>
                <Image src={"/images/home_section3.png"} width={280} height={350}/>
                <Spacer height={60}/>
                <div className={c.textContainer}>
                    <h1>이웃과 함께하는 동네생활</h1>
                    우리 동네의 다양한 이야기를
                    <Spacer height={10}/>
                    이웃과 함께 나누어요.
                </div>
                <div className={c.iconContainer}>
                    <div className={c.iconTextContainer}>
                        <Image src={"/images/home_section3_icon1.png"} width={80} height={80}/>
                        <div className={c.textContainer}>
                            <h2>우리동네 질문</h2>
                            궁금한게 있을 땐
                            <Spacer height={10}/>
                            이웃에게 물어보세요.
                        </div>
                    </div>
                    <div className={c.iconTextContainer}>
                        <Image src={"/images/home_section3_icon2.png"} width={80} height={80}/>
                        <div className={c.textContainer}>
                            <h2>동네분실센터</h2>
                            무언가를 잃어버렸을 때,
                            <Spacer height={10}/>
                            함께 찾을 수 있어요.
                        </div>
                    </div>
                    <div className={c.iconTextContainer}>
                        <Image src={"/images/home_section3_icon3.png"} width={80} height={80}/>
                        <div className={c.textContainer}>
                            <h2>동네모임</h2>
                            관심사가 비슷한 이웃과
                            <Spacer height={10}/>
                            온오프라인으로 만나요.
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Section3Mobile