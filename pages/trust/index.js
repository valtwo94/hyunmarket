import TrustSection1 from "../../components/screens/trust/section1";
import TrustSection2 from "../../components/screens/trust/section2";
import TrustSection3 from "../../components/screens/trust/section3";
import Footer from "../../components/footer";

const TrustPage = () => {
    return (
        <>
           <TrustSection1/>
           <TrustSection2/>
           <TrustSection3/>
           <Footer/>
        </>
    )
}

//서버사이드 렌더링 static Generation
export async function getStaticProps() {
    const title = "믿을 수 있는 중고거래 | 당신 근처의 당근마켓"
    const description = '당근마켓만의 신뢰 시스템으로 차별화된 중고거래를 지금 경험해보세요. 당근마켓과 함께 가깝고 따뜻한 거래를 만들어요.'

    return {
        props: {
            title: title,
            description: description
        }
    }
}

export default TrustPage