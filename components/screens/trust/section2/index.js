import {MediaQuerySSR} from "react-responsive-ssr";
import TrustSection2Mobile from "./mobile/section2Mobile";
import TrustSection2Tablet from "./tablet/section2Tablet";
import TrustSection2Desktop from "./desktop/section2Desktop";

const TrustSection2 = () => {
    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <TrustSection2Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <TrustSection2Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <TrustSection2Desktop/>
            </MediaQuerySSR>
        </>
    )
}

export default TrustSection2