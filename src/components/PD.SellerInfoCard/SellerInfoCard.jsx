import { Link } from 'react-router';
import { IoMail } from "react-icons/io5";
import { FaSquareTwitter, FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import './SellerInfoCard.css'; //=> Code 08

import Stars from '../Stars/Stars';
import { ICONS } from '../../assets/staticPaths';

const SellerInfoCard = () => {
    return (
        <div className="seller-info-card_08">
            <div className="header_08">
                <small>
                    فروشنده:
                </small>
                <span>
                    امیر محمدزاده
                </span>
                <span className="icon_h08">
                    <img src={ICONS +"reward.svg"} alt="" />
                </span>
            </div>
            <div className="rate-box_08">
                <Stars value={0} />
                <small>
                    (0 دیدگاه)
                </small>
            </div>
            <div className="footer_08">
                <Link to="" className="btn store-link_08">
                    بازدید از فروشگاه
                </Link>
                <div className="sosials_08">
                    <a href='#' className="whatsapp_icon">
                        <FaSquareWhatsapp size={28} />
                    </a>
                    <a href='#' className="emaile_icon">
                        <IoMail size={28} />
                    </a>
                    <a href='#' className="twitter_icon">
                        <FaSquareTwitter size={28} />
                    </a>
                    <a href='#' className="facebook_icon">
                        <FaSquareFacebook size={28} />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default SellerInfoCard