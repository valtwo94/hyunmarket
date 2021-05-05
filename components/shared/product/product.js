import c from './product.module.css'
import Spacer from "../spacer";

const Product = () => {
    return (
        <div className={c.container}>
            <div className={c.img}> </div>
            <Spacer height={8}/>
            <div className={c.title}>물건명</div>
            <Spacer height={3}/>
            <div className={c.price}>가격</div>
            <Spacer height={3}/>
            <div className={c.address}>주소</div>
            <Spacer height={3}/>
            <div className={c.info}>상세정보</div>
        </div>
    )
}

export default Product