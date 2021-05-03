import {useMediaQuery} from "react-responsive/src";
import Section3Desktop from "./desktop/section3Desktop";
import Section3Tablet from "./tablet/section3Tablet";
import Section3Mobile from "./mobile/section3Mobile";


const HomeSection3 = () => {
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
            {isDesktop && <Section3Desktop/>}
            {isTablet && <Section3Tablet/>}
            {isMobile && <Section3Mobile/>}
        </>
    )
}

export default HomeSection3