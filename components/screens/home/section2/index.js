import {MediaQuerySSR} from "react-responsive-ssr";
import HomeSection2Mobile from "./mobile/section2Mobile";
import HomeSection2Tablet from "./tablet/section2Tablet";
import HomeSection2Desktop from "./desktop/section2Desktop";


const HomeSection2 = () => {


    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth={767}>
                <HomeSection2Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <HomeSection2Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <HomeSection2Desktop/>
            </MediaQuerySSR>
        </>
    )
}

export default HomeSection2