import c from './section1Desktop.module.css'
import Spacer from "../../../../shared/spacer";
import Image from "next/image";

const TrustSection1Desktop = () => {
    return (
        <>
            <div className={c.container}>
                <h1>당신 근처의 믿을 수 있는 중고거래</h1>
                <Spacer height={40}/>
                <div>당근마켓과 함께 가깝고 따뜻한 거래문화를 만들어요.</div>
                <Spacer height={20}/>
                <Image src={'/images/trust/trust_section1.png'} width={770} height={370}/>
            </div>
        </>
    )
}

export default TrustSection1Desktop