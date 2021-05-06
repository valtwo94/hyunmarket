import HotArticlesSection1 from "../../components/screens/hot_articles/section1";
import HotArticlesSection2 from "../../components/screens/hot_articles/section2";
import Footer from "../../components/footer";
import MetaTags from "../../components/metatags/metatags";

const AllHotArticlesScreen = (props) => {
    const {title, description} = props


    return (
        <>
            <MetaTags title={title} description={description}/>
            <HotArticlesSection1/>
            <HotArticlesSection2/>
            <Footer/>
        </>
    )
}

//서버사이드 렌더링 static Generation
export async function getStaticProps() {
    const title = "당근마켓 중고거래 | 당신 근처의 당근마켓"
    const description = '당근마켓에서 거래되는 인기 중고 매물을 소개합니다. 지금 당근마켓에서 거래되고 있는 다양한 매물을 구경해보세요.'

    return {
        props: {
            title: title,
            description: description
        }
    }
}


export default AllHotArticlesScreen