import { BsCart3, BsHeart } from 'react-icons/bs'
import { GoSync } from "react-icons/go";
import Stars from '../Stars/Stars'
import './ProductCard.css' // => Code 04
import { useNavigate } from 'react-router';
import { PRODUCT_IMG } from '../../assets/staticPaths';

const ProductCard = () => {
    const navigate = useNavigate()

    const cardClickHandler = (productID) => {
        navigate('/pd', {
            preventScrollReset: true
        })
    };

    return (
        <div className="card card_04" onClick={cardClickHandler}>
            <div className="content_04">
                <div className="image_c01">
                    <img src={PRODUCT_IMG + "p-1.jpeg"} alt="" />
                </div>
                <div className="body_c04">
                    <Price price={23.85} unite={"$"} className="price_c04" />
                    <div className="star-box_04">
                        <Stars value={2} />
                    </div>
                    <h3 className="title_c04 line-limit-2">
                        عنوان محصول
                    </h3>
                    <div className="point_c04">
                        <span>
                            امتیاز:
                        </span>
                        <span>
                            0
                        </span>
                    </div>
                </div>

                <div className="sub-buttons_c04">
                    <div className=" btn_c04">
                        <BsHeart size={18} />
                        <span className="label_cb04">
                            نشان کردن
                        </span>
                    </div>
                    <div className=" btn_c04">
                        <GoSync size={18} />
                        <span className="label_cb04">
                            مقایسه
                        </span>
                    </div>
                    <div className=" btn_c04">
                        <BsCart3 size={18} />
                        <span className="label_cb04">
                            اضافه به سبدخرید
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard

function Price({ price, unite, className = '' }) {
    return (
        <div dir='ltr' className={"flex gap-1 " + className}>
            <span className="">
                {unite}
            </span>
            <span className="">
                {price}
            </span>
        </div>
    )
}