import Section3Desktop from "./desktop/section3Desktop";
import Section3Tablet from "./tablet/section3Tablet";
import Section3Mobile from "./mobile/section3Mobile";
import {MediaQuerySSR} from "react-responsive-ssr";


const HomeSection3 = () => {


    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth={767}>
                <Section3Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <Section3Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <Section3Desktop/>
            </MediaQuerySSR>
        </>
    )
}

export default HomeSection3