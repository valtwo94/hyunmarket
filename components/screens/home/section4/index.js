
import Section4Desktop from "./desktop/section4Desktop";
import Section4Tablet from "./tablet/section4Tablet";
import Section4Mobile from "./mobile/section4Mobile";
import {MediaQuerySSR} from "react-responsive-ssr";


const HomeSection4 = () => {


    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <Section4Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <Section4Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <Section4Desktop/>
            </MediaQuerySSR>
        </>
    )
}

export default HomeSection4