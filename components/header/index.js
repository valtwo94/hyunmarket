import HeaderDesktop from "./desktop/headerDesktop";
import HeaderTablet from "./tablet/headerTablet";
import HeaderMobile from "./mobile/headerMobile";
import {MediaQuerySSR} from "react-responsive-ssr";

const Header = () => {


    return (
        <>
            <>
                {/*모바일*/}
                <MediaQuerySSR maxWidth={767}>
                    <HeaderMobile/>
                </MediaQuerySSR>
                {/*타블렛*/}
                <MediaQuerySSR maxWidth={1023} minWidth={768}>
                    <HeaderTablet/>
                </MediaQuerySSR>
                {/*데스크톱*/}
                <MediaQuerySSR minWidth={1024}>
                    <HeaderDesktop/>
                </MediaQuerySSR>
            </>
        </>
    )
}

export default Header