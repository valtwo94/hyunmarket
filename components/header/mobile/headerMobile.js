import HeaderLogo from "../../icons/header-logo";
import c from './headerMobile.module.css'
import MenuIcon from "../../icons/menu-icon";

const HeaderMobile = () => {
    return (
        <div className={c.container}>
            <div className={c.logo}>
                <HeaderLogo/>
            </div>
            <div className={c.menu}>
                <MenuIcon/>
            </div>
        </div>
    )
}


export default HeaderMobile