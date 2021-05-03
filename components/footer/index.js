import {useMediaQuery} from "react-responsive/src";
import FooterDesktop from "./desktop/footerDesktop";
import FooterTablet from "./tablet/footerTablet";
import FooterMobile from "./mobile/footerMobile";


const Footer = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width:1024px)"
    })
    const isTablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)"
    })
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)"
    })

    return (
        <>
            {isDesktop && <FooterDesktop/>}
            {isTablet && <FooterTablet/>}
            {isMobile && <FooterMobile/>}
        </>
    )
}

export default Footer