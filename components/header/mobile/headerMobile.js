import HeaderLogo from "../../icons/header-logo";
import c from './headerMobile.module.css'
import SearchIcon from "../../icons/search-icon";
import Link from "next/link";

const HeaderMobile = () => {
    return (
        <div className={c.container}>
            <Link href={'/'}>
                <div className={c.logo}>
                    <HeaderLogo/>
                </div>
            </Link>
            <div className={c.menu}>
                <SearchIcon/>
            </div>
        </div>
    )
}


export default HeaderMobile