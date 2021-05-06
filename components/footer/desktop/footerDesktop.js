import c from "./footerDesktop.module.css";
import Spacer from "../../shared/spacer";
import HeaderLogo from "../../icons/header-logo";
import Link from "next/link";

const FooterDesktop = () => {
    return (
        <div className={c.container}>
            <div className={c.section1}>
                <div className={c.logo}>
                    <HeaderLogo/>
                </div>
                <div className={c.menuContainer}>
                    <Link href={'/trust'}>
                        <div className={c.menuBold}>믿을 수 있는 중고거래</div>
                    </Link>
                    <Spacer height={30}/>
                    <div className={c.menuBold}>자주 묻는 질문</div>
                </div>
                <div className={c.menuContainer}>
                    <Link href={'https://www.notion.so/3d0197c137ec43d18ff739b5b254a3c8'}>
                        <div className={c.menu}>회사소개</div>
                    </Link>
                    <Spacer height={30}/>
                    <div className={c.menuBold}>광고주센터</div>
                    <Spacer height={30}/>
                    <div className={c.menu}>동네가게</div>
                </div>
                <Spacer height={15}/>
                <div className={c.menuContainer}>
                    <div className={c.menu}>이용약관</div>
                    <Spacer height={30}/>
                    <div className={c.menu}>개인정보처리방침</div>
                    <Spacer height={30}/>
                    <div className={c.menu}>위치기반 서비스 이용약관</div>
                </div>
            </div>
            <Spacer height={60}/>
            <div className={c.divider}/>
            <Spacer height={60}/>
            <div className={c.section2}>
                <div className={c.row}>
                    <div className={c.infoContainer}>
                        <div className={c.menu}>고객문의</div>
                        <Spacer width={10}/>
                        <div className={c.info}>cs@daangnservice.com</div>
                    </div>
                    <Spacer width={20}/>
                    <div className={c.infoContainer}>
                        <div className={c.menu}>제휴문의</div>
                        <Spacer width={10}/>
                        <div className={c.info}>contact@daangn.com</div>
                    </div>

                </div>
                <Spacer height={10}/>
                <div className={c.row}>
                    <div className={c.infoContainer}>
                        <div className={c.menu}>지역광고</div>
                        <Spacer width={10}/>
                        <div className={c.info}>ad@daangn.com</div>
                    </div>
                    <Spacer width={20}/>
                    <div className={c.infoContainer}>
                        <div className={c.menu}>PR문의</div>
                        <Spacer width={10}/>
                        <div className={c.info}>cs@daangnservice.com</div>
                    </div>
                </div>
                <Spacer height={20}/>
                <div className={c.row}>
                    <div className={c.info}>서울특별시 구로구 디지털로 30길 28 609호</div>
                    <Spacer width={10}/>
                    <div className={c.info}>사업자 등록번호 : 375-87-00088</div>
                    <Spacer width={10}/>
                    <div className={c.info}>직업정보제공사업 신고번호: J12000202000016</div>
                    <Spacer width={20}/>
                </div>
                <Spacer height={60}/>
                <div className={c.info}>©Danggeun Market Inc.</div>
            </div>


        </div>
    )
}

export default FooterDesktop