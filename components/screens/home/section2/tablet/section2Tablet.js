import c from "./section2Tablet.module.css";
import Spacer from "../../../../shared/spacer";
import Image from "next/image";
import Link from "next/link";

const HomeSection2Tablet = () => {
    return (
        <>
            <div className={c.container}>
                <div className={c.textContainer}>
                    <h1>우리 동네
                        <br/>
                        중고 직거래 마켓</h1>
                    동네 주민들과 가깝고 따뜻한 거래를
                    <Spacer height={10}/>
                    지금 경험해보세요.
                    <Spacer height={40}/>
                    <Link href={'/hot_articles'}>
                        <div className={c.button}>인기매물 보기</div>
                    </Link>
                    <Spacer height={10}/>
                    <Link href={'/trust'}>
                        <div className={c.button}>중고거래 보기</div>
                    </Link>
                </div>
                <Spacer height={60}/>
                <Image src={"/images/home/home_section2.png"} width={300} height={350}/>
            </div>
        </>
    )
}

export default HomeSection2Tablet