import Header from "../header";
import Footer from "../footer";

const Layout = (props) => {
    return (
        <>
            <main>
                <Header/>
                {props.children}
                <Footer/>
            </main>
        </>
    )
}

export default Layout