import {useMediaQuery} from "react-responsive/src";
import Section2Desktop from "./desktop/section2Desktop";
import Section2Tablet from "./tablet/section2Tablet";
import Section2Mobile from "./mobile/section2Mobile";


const HomeSection2 = () => {
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
            {isDesktop && <Section2Desktop/>}
            {isTablet && <Section2Tablet/>}
            {isMobile && <Section2Mobile/>}
        </>
    )
}

export default HomeSection2