import c from "./section4Desktop.module.css";
import Spacer from "../../../../shared/spacer";
import Image from "next/image";

const HomeSection4Desktop = () => {
    return (
        <div className={c.container}>
            <Image src={"/images/home_section4.png"} width={560} height={700}/>
            <Spacer width={100}/>
            <div className={c.textContainer}>
                <h1>
                    내 근처에서 찾는
                    <br/>
                    동네가게
                </h1>
                <div className={c.description}>
                    우리 동네 가게를 찾고 있나요?
                    <Spacer height={5}/>
                    동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
                </div>

                <Spacer height={40}/>
                <button className={c.button}>당근마켓 동네가게 찾기</button>
            </div>
        </div>
    )
}

export default HomeSection4Desktop