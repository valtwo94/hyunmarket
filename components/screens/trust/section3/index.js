import {MediaQuerySSR} from "react-responsive-ssr";
import TrustSection3Mobile from "./mobile/section3Mobile";
import TrustSection3Tablet from "./tablet/section3Tablet";
import TrustSection2Desktop from "../section2/desktop/section2Desktop";

const TrustSection3 = () => {
    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <TrustSection3Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <TrustSection3Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <TrustSection2Desktop/>
            </MediaQuerySSR>
        </>
    )
}


export default TrustSection3