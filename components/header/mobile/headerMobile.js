import HeaderLogo from "../../icons/header-logo";
import c from './headerMobile.module.css'
import SearchIcon from "../../icons/search-icon";

const HeaderMobile = () => {
    return (
        <div className={c.container}>
            <div className={c.logo}>
                <HeaderLogo/>
            </div>
            <div className={c.menu}>
                <SearchIcon/>
            </div>
        </div>
    )
}


export default HeaderMobile