import {MediaQuerySSR} from "react-responsive-ssr";
import TrustSection1Mobile from "./mobile/section1Mobile";
import TrustSection1Tablet from "./tablet/section1Tablet";
import TrustSection1Desktop from "./desktop/section1Desktop";

const TrustSection1 = () => {
    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth={767}>
                <TrustSection1Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <TrustSection1Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <TrustSection1Desktop/>
            </MediaQuerySSR>
        </>

    )


}


export default TrustSection1