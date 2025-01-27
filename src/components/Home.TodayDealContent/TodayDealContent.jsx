import { PRODUCT_IMG } from '../../assets/staticPaths';
import Price from '../Price/Price';
import './TodayDealContent.css'; // => Code 11

const TodayDealContent = ({ className = '' }) => {
    return (
        <div className={"today-deal_11 " + className}>
            <div className="td-content_11 flex-column">
                <div className="header_06">
                    <span className="h6">
                        خریدهای امروز
                    </span>
                    <span className="">
                        ویژه
                    </span>
                </div>
                <div className="card-wrapper_11">
                    <ul>
                        <TodayDealCard />
                        <TodayDealCard />
                        <TodayDealCard />
                        <TodayDealCard />

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TodayDealContent

function TodayDealCard() {
    return (<>
        <li className="card_11">
            <div className="image_11">
                <img src={PRODUCT_IMG + "p-1.jpeg"} alt="" />
            </div>
            <Price price={21.5}  className="price_11"/>
        </li>
    </>)
}