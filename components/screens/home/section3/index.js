import HomeSection3Desktop from "./desktop/section3Desktop";
import HomeSection3Tablet from "./tablet/section3Tablet";
import HomeSection3Mobile from "./mobile/section3Mobile";
import {MediaQuerySSR} from "react-responsive-ssr";


const HomeSection3 = () => {


    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth={767}>
                <HomeSection3Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <HomeSection3Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <HomeSection3Desktop/>
            </MediaQuerySSR>
        </>
    )
}

export default HomeSection3