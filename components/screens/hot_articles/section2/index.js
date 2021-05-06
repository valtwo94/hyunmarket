import {MediaQuerySSR} from "react-responsive-ssr";
import HotArticlesSection2Mobile from "./mobile/section2Mobile";
import HotArticlesSection2Tablet from "./tablet/section2Tablet";
import HotArticlesSection2Desktop from "./desktop/section2Desktop";


const HotArticlesSection2 = () => {
    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <HotArticlesSection2Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <HotArticlesSection2Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <HotArticlesSection2Desktop/>
            </MediaQuerySSR>
        </>
    )
}

export default HotArticlesSection2