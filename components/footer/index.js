import {MediaQuerySSR} from "react-responsive-ssr";
import FooterDesktop from "./desktop/footerDesktop";
import FooterTablet from "./tablet/footerTablet";
import FooterMobile from "./mobile/footerMobile";


const Footer = () => {

    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
                <FooterMobile/>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
                <FooterTablet/>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
                <FooterDesktop/>
            </MediaQuerySSR>
        </>
    )
}
export default Footer