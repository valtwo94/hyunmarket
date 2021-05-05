import c from "./section2Desktop.module.css";
import Spacer from "../../../../shared/spacer";
import Image from "next/image";
import Link from "next/link";

const Section2Desktop = () => {
    return (
        <>
            <div className={c.container}>
                <Image src={"/images/home_section2.png"} width={600} height={700}/>
                <Spacer width={60}/>
                <div className={c.textContainer}>
                    <h1>우리 동네
                        <br/>
                        중고 직거래 마켓</h1>
                    <div className={c.description}>
                        동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
                    </div>

                    <Spacer height={40}/>
                    <div className={c.buttonContainer}>
                        <Link href={'/hot_articles'}>
                            <div className={c.button}>인기매물 보기</div>
                        </Link>
                        <Spacer width={10}/>
                        <Link href={'/trust'}>
                            <div className={c.button}>중고거래 보기</div>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Section2Desktop