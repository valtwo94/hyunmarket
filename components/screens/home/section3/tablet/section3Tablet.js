import c from "./section3Tablet.module.css";
import Spacer from "../../../../shared/spacer";
import Image from "next/image";

const HomeSection3Tablet = () => {
    return (
        <>
            <div className={c.container}>
                <div className={c.textContainer}>
                    <h1>
                        이웃과 함께하는
                        <br/>
                        동네생활
                    </h1>
                    우리 동네의 다양한 이야기를
                    <Spacer height={5}/>
                    이웃과 함께 나누어요.
                </div>
                <Spacer height={60}/>
                <Image src={"/images/home_section3.png"} width={280} height={350}/>
            </div>
        </>
    )
}

export default HomeSection3Tablet