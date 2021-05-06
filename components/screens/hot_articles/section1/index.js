import {MediaQuerySSR} from "react-responsive-ssr";
import HotArticlesSection1Mobile from "./mobile/section1Mobile";
import HotArticlesSection1Tablet from "./tablet/section1Tablet";
import HotArticlesSection1Desktop from "./desktop/section1Desktop";

const HotArticlesSection1 = () => {
    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <HotArticlesSection1Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <HotArticlesSection1Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <HotArticlesSection1Desktop/>
            </MediaQuerySSR>
        </>
    )
}


export default HotArticlesSection1