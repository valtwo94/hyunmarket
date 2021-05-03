import {useMediaQuery} from "react-responsive/src";
import HeaderDesktop from "./desktop/headerDesktop";
import HeaderTablet from "./tablet/headerTablet";
import HeaderMobile from "./mobile/headerMobile";

const Header = () => {
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
            {isDesktop && <HeaderDesktop/>}
            {isTablet && <HeaderTablet/>}
            {isMobile && <HeaderMobile/>}
        </>
    )
}

export default Header