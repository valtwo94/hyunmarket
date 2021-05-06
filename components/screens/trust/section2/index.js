import {MediaQuerySSR} from "react-responsive-ssr";

const TrustSection2 = () => {
    return (
        <>
            {/*모바일*/}
            <MediaQuerySSR maxWidth = {767}>
            </MediaQuerySSR>
            {/*타블렛*/}
            <MediaQuerySSR maxWidth={1023} minWidth={768}>
            </MediaQuerySSR>
            {/*데스크톱*/}
            <MediaQuerySSR minWidth={1024}>
            </MediaQuerySSR>
        </>
    )
}

export default TrustSection2