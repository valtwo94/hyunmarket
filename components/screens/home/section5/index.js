
import Section5Desktop from "./desktop/section5Desktop";
import Section5Tablet from "./tablet/section5Tablet";
import Section5Mobile from "./mobile/section5Mobile";
import {MediaQuerySSR} from "react-responsive-ssr";

const HomeSection5 = () => {


    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <Section5Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <Section5Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <Section5Desktop/>
            </MediaQuerySSR>
        </>
    )
}

export default HomeSection5