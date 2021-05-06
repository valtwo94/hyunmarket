
import HomeSection5Desktop from "./desktop/section5Desktop";
import HomeSection5Tablet from "./tablet/section5Tablet";
import HomeSection5Mobile from "./mobile/section5Mobile";
import {MediaQuerySSR} from "react-responsive-ssr";

const HomeSection5 = () => {


    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <HomeSection5Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <HomeSection5Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <HomeSection5Desktop/>
            </MediaQuerySSR>
        </>
    )
}

export default HomeSection5