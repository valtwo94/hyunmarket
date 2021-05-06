import c from "./section1Mobile.module.css";
import Spacer from "../../../../shared/spacer";
import Product from "../../../../shared/product/product";
import {useRouter} from "next/router";

const HotArticlesSection1Mobile = () => {
    const router = useRouter()

    const onChanged = async (e) => {
        if(e.target.value){
            await router.push(`/region/${e.target.value}`)
        }

    }


    return (
        <>
            <div className={c.container}>
                <div className={c.textContainer}>
                    <h2>중고거래 인기매물</h2>
                    <Spacer height={40}/>
                    <div className={c.filterContainer}>
                        <select className={c.filter} onChange={onChanged} >
                            <option>지역을 선택하세요</option>
                            <option value={'서울특별시'}>서울특별시</option>
                            <option>서울특별시</option>
                            <option>서울특별시</option>
                            <option>서울특별시</option>
                            <option>서울특별시</option>
                        </select>
                        <select className={c.filter} disabled={true}>
                            <option>동네를 선택하세요</option>
                            <option>서울특별시</option>
                            <option>서울특별시</option>
                            <option>서울특별시</option>
                            <option>서울특별시</option>
                        </select>
                    </div>
                    <Spacer height={40}/>
                    <div className={c.productContainer}>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default HotArticlesSection1Mobile


