
import HomeSection1Desktop from "./desktop/section1Desktop";
import HomeSection1Tablet from "./tablet/section1Tablet";
import HomeSection1Mobile from "./mobile/section1Mobile";
import {MediaQuerySSR} from "react-responsive-ssr";

const HomeSection1 = () => {


    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <HomeSection1Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <HomeSection1Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <HomeSection1Desktop/>
            </MediaQuerySSR>
        </>
    )

}

export default HomeSection1