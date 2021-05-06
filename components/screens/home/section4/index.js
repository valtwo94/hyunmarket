
import HomeSection4Desktop from "./desktop/section4Desktop";
import HomeSection4Tablet from "./tablet/section4Tablet";
import HomeSection4Mobile from "./mobile/section4Mobile";
import {MediaQuerySSR} from "react-responsive-ssr";


const HomeSection4 = () => {


    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <HomeSection4Mobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <HomeSection4Tablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <HomeSection4Desktop/>
            </MediaQuerySSR>
        </>
    )
}

export default HomeSection4