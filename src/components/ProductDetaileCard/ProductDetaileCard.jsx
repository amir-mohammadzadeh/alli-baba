import { BsChatQuote } from 'react-icons/bs';
import { GoSync } from "react-icons/go";
import { FaSquareTwitter, FaSquareFacebook, FaLinkedin, FaSquareWhatsapp, FaCartPlus, FaBasketShopping } from "react-icons/fa6";
import { IoMail, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";

import Stars from '../Stars/Stars';
import './ProductDetaileCard.css'; // => Code 07
import CountInput from '../CounterInput/CountInput';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Link } from 'react-router';
import { LikeButton } from '../ToggleButtons/ToggleButtons';
import Price from '../Price/Price';
import { OTHER_IMG } from '../../assets/staticPaths';

const ProductDetaileCard = () => {
    return (
        <div className="detaile-card_07">
            <div className="card-content_07">
                <div className="image-content_07">
                    <ImageGallery />
                </div>
                <div className="detailes-content_07">
                    <h1 className="title_d07">
                        عنوان محصول در این قسمت نوشته میشود
                    </h1>
                    <div className="ratting-content_d07">
                        <div className="review-content_07">
                            <Stars value={1.5} />
                            <span>
                                (0 دیدگاه)
                            </span>
                        </div>
                        <div>
                            <small>
                                تخمین زمان ارسال:
                            </small>
                            <span>
                                3 روز
                            </span>
                        </div>
                    </div>

                    <hr />

                    <div className="seller_07">
                        <div className="seller-name_07">
                            <small>
                                نام فروشنده:
                            </small>
                            <span>
                                امیر  محمدزاده
                            </span>
                        </div>
                        <div className="btn msg-btn_07">
                            <IoChatbubbleEllipsesOutline size={20} />
                            <span>
                                ارتباط با فروشنده
                            </span>
                        </div>
                    </div>

                    <hr />
                    <Price
                        label='قیمت:'
                        price={25.21}
                        oldPrice={30.85}
                    />
                    <hr />

                    <div className="count-content_07">
                        <span>
                            تعداد:
                        </span>
                        <div className="counter_07">
                            <CountInput value={1} />
                        </div>
                        <span>
                            (244 موجود)
                        </span>
                    </div>


                    <hr />

                    <Price
                        label='قیمت نهایی:'
                        price={25.21}
                    />

                    <div className="button-content_07">
                        <div className="buttons_07">

                            <button className="btn cart-btn_07">
                                <FaCartPlus size={18} />
                                اضافه به سبد خرید
                            </button>
                            <button className="btn buy-btn_07">
                                <IoBagHandleOutline size={18} />
                                الآن بخر
                            </button>
                        </div>

                        <div className="sub-buttons_b07">

                            <LikeButton className="sub-btn_07" />

                            <div className="sub-btn_07">
                                <GoSync size={25} />
                            </div>
                        </div>

                    </div>

                    <div className="refund-content_07">
                        <span>
                            بازپرداخت:
                        </span>
                        <div className="img_r07">
                            <img src={OTHER_IMG +"refund-sticker.jpg"} alt="" />
                            <sup>
                                <a href='#' >
                                    راهنمای بازپرداخت
                                </a>
                            </sup>
                        </div>
                    </div>

                </div>
            </div>



            <div className="share-content_07">
                <a href='#' className="twitter_icon">
                    <FaSquareTwitter size={35} />
                </a>
                <a href='#' className="facebook_icon">
                    <FaSquareFacebook size={35} />
                </a>
                <a href='#' className="linkedin_icon">
                    <FaLinkedin size={35} />
                </a>
                <a href='#' className="whatsapp_icon">
                    <FaSquareWhatsapp size={35} />
                </a>
                <a href='#' className="emaile_icon">
                    <IoMail size={35} />
                </a>

            </div>

        </div>
    )
}
export default ProductDetaileCard