import styles from '../styles/Home.module.css'
import HomeSection1 from "../components/home/section1";
import HomeSection2 from "../components/home/section2";
import MetaTags from "../components/metatags/metatags";

const Home = (props) => {
    const {title, description} = props


    return (
        <>
            <MetaTags title={title} description={description}/>
            <HomeSection1/>
            <HomeSection2/>
        </>
    )
}


//static Generation
export async function getStaticProps() {
    const title = "당신 근처의 당근마켓"
    const description = '중고 거래부터 동네 정보까지, 이웃과 함께 해요. 가깝고 따뜻한 당신의 근처를 만들어요.'

    return {
        props: {
            title: title,
            description: description
        }
    }
}

export default Home
