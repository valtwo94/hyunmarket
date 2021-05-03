import {useMediaQuery} from "react-responsive/src";
import Section5Desktop from "./desktop/section5Desktop";
import Section5Tablet from "./tablet/section5Tablet";
import Section5Mobile from "./mobile/section5Mobile";

const HomeSection5 = () => {
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
            {isDesktop && <Section5Desktop/>}
            {isTablet && <Section5Tablet/>}
            {isMobile && <Section5Mobile/>}
        </>
    )
}

export default HomeSection5