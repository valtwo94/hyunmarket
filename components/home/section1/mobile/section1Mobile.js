import './section1Mobile.module.css'
import c from './section1Mobile.module.css'
import Spacer from "../../../shared/spacer";

const Section1Mobile = () => {
    return (
        <div className={c.container}>

            <div>

            </div>
            <div className={c.textContainer}>
                <h1>당신 근처의 당근마켓</h1>
                중고 거래부터 동네 정보까지, 이웃과 함께해요
                <Spacer height={10}/>
                가깝고 따뜻한 당신의 근처를 만들어요.
            </div>
        </div>
    )
}

export default Section1Mobile