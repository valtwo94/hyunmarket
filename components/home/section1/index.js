
import Section1Desktop from "./desktop/section1Desktop";
import Section1Tablet from "./tablet/section1Tablet";
import Section1Mobile from "./mobile/section1Mobile";
import {MediaQuerySSR} from "react-responsive-ssr";

const HomeSection1 = () => {


    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <Section1Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <Section1Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <Section1Desktop/>
            </MediaQuerySSR>
        </>
    )

}

export default HomeSection1