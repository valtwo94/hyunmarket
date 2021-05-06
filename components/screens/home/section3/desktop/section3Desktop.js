import c from "./section3Desktop.module.css";
import Spacer from "../../../../shared/spacer";
import Image from "next/image";

const HomeSection3Desktop = () => {
    return (
        <>
            <div className={c.container}>
                <div className={c.textContainer}>
                    <h1>
                        이웃과 함께하는
                        <br/>
                        동네생활
                    </h1>
                    <div className={c.description}>
                        우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
                    </div>
                    <Spacer height={60}/>
                    <div className={c.iconContainer}>
                        <div className={c.icon}>
                            <Image src={'/images/home_section3_icon1.png'} width={100} height={100}/>
                            <Spacer height={10}/>
                            <div className={c.iconTitle}>우리동네질문</div>
                            <Spacer height={10}/>
                            <div className={c.iconDescription}>궁금한게 있을땐 이웃에게
                                <br/>
                                물어보세요
                            </div>
                        </div>
                        <div className={c.icon}>
                            <Image src={'/images/home_section3_icon2.png'} width={100} height={100}/>
                            <Spacer height={10}/>
                            <div className={c.iconTitle}>동네분실센터</div>
                            <Spacer height={10}/>
                            <div className={c.iconDescription}>무언가를 잃어버렸을 때,
                                <br/>
                                함께찾을 수 있어요.
                            </div>
                        </div>
                        <div className={c.icon}>
                            <Image src={'/images/home_section3_icon3.png'} width={100} height={100}/>
                            <Spacer height={10}/>
                            <div className={c.iconTitle}>우리동네질문</div>
                            <Spacer height={10}/>
                            <div className={c.iconDescription}>관심사가 비슷한 이웃과
                                <br/>
                                온오프라인으로 만나세요.
                            </div>
                        </div>
                    </div>
                </div>
                <Spacer width={60}/>
                <Image src={"/images/home_section3.png"} width={560} height={700}/>
            </div>
        </>
    )
}

export default HomeSection3Desktop