import {useMediaQuery} from "react-responsive/src";
import Section4Desktop from "./desktop/section4Desktop";
import Section4Tablet from "./tablet/section4Tablet";
import Section4Mobile from "./mobile/section4Mobile";


const HomeSection4 = () => {
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
            {isDesktop && <Section4Desktop/>}
            {isTablet && <Section4Tablet/>}
            {isMobile && <Section4Mobile/>}
        </>
    )
}

export default HomeSection4