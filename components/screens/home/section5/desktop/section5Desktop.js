import c from "./section5Desktop.module.css";
import Spacer from "../../../../shared/spacer";
import Product from "../../../../shared/product/product";

const HomeSection5Desktop = () => {
    return (
        <div className={c.container}>
            <div className={c.textContainer}>
                <h1>중고거래 인기매물</h1>
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
            <Spacer height={80}/>
            <div className={c.link}>
                인기매물 더 보기
            </div>
        </div>
    )
}

export default HomeSection5Desktop