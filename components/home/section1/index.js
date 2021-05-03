import {useMediaQuery} from "react-responsive/src";
import Section1Desktop from "./desktop/section1Desktop";
import Section1Tablet from "./tablet/section1Tablet";
import Section1Mobile from "./mobile/section1Mobile";

const HomeSection1 = () => {
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
            {isDesktop && <Section1Desktop/>}
            {isTablet && <Section1Tablet/>}
            {isMobile && <Section1Mobile/>}
        </>
    )

}

export default HomeSection1