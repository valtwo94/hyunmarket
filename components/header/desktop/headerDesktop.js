import c from "./headerDesktop.module.css";
import HeaderLogo from "../../icons/header-logo";
import SearchIcon from "../../icons/search-icon";
import Spacer from "../../shared/spacer";
import Link from "next/link";

const HeaderDesktop = () => {
    return (
        <div className={c.container}>
            <Link href={'/'}>
                <div className={c.logo}>
                    <HeaderLogo/>
                </div>
            </Link>
            <Spacer width={80}/>
            <div className={c.searchBox}>
                <input type="text" placeholder='동네 이름, 물품명 등을 입력하세요' className={c.searchInput}/>
                <div className={c.searchLogo}>
                    <SearchIcon/>
                </div>
            </div>
            <div className={c.blank}>

            </div>
        </div>
    )
}

export default HeaderDesktop