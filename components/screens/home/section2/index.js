import {MediaQuerySSR} from "react-responsive-ssr";
import Section2Mobile from "./mobile/section2Mobile";
import Section2Tablet from "./tablet/section2Tablet";
import Section2Desktop from "./desktop/section2Desktop";


const HomeSection2 = () => {


    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth={767}>
                <Section2Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <Section2Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <Section2Desktop/>
            </MediaQuerySSR>
        </>
    )
}

export default HomeSection2