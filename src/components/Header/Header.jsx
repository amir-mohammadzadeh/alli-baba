import React, { useEffect, useState } from 'react'
import Selection from '../Selection/Selection'
import { BsCart3, BsChevronDown, BsHeart } from 'react-icons/bs'
import { GoSync } from "react-icons/go";
import SearchBox from '../SearchBox/SearchBox'
import './Header.css'//=> 01
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router';
import MobileNavBar from '../MobileNavBar/MobileNavBar';
import CartSideMenu from '../Cart.CartSideMenu/CartSideMenu';
import { ICONS, LOGO } from '../../assets/staticPaths';

const Header = () => {

    const [openCartModal, setCartModal] = useState(false);

    const exam = [
        {
            id: 1,
            title: 'فارسی',
            icon: ICONS + "iran-flag.svg",
            iconType: 'img'
        },
        {
            id: 2,
            title: 'English',
            icon: ICONS + "us-flag.svg",
            iconType: 'img'
        },
        {
            id: 3,
            title: 'Turkey',
            icon: ICONS + "turkey-flag.svg",
            iconType: 'img'
        },
    ]
    const exam2 = [
        {
            id: 1,
            title: 'تومان',
            icon: ICONS + 'toman.svg',
            iconType: 'img'
        },
        {
            id: 2,
            title: 'ریال',
            icon: <>&#65020;</>,
            iconType: 'elem'
        },
        {
            id: 3,
            title: 'U.S.Doller',
            icon: <>&#36;</>,
            iconType: 'elem'
        },
        {
            id: 4,
            title: 'Euro *',
            icon: <>&#8364;</>,
            iconType: 'elem'
        },
    ]

    const selectLangueg = (payload) => {
        if (payload.id == 1) {
            document.documentElement.lang = 'fa'
        } else {
            document.documentElement.lang = 'en'
        }
    };

    const selectUnite = (payload) => {
        console.log(payload)
    };

    return (<>
        <header className="header_01">
            <div className="container header-top_01">
                <div dir='ltr' className="signup-content_01">
                    <div className="header-btn_h01">
                        ورود
                    </div>
                    <div className="header-btn_h01 signup_h01">
                        ثبت نام
                    </div>
                </div>

                <div className="selection_h01">
                    <div className="btn header-btn_h01">
                        <Link to="/pd" >
                            ثبت فروشگاه
                        </Link>
                    </div>
                    <Selection
                        className="dropDown_h01"
                        value={exam2[0]}
                        optionList={exam2}
                        menuWidth={'200%'}
                        height={'2rem'}
                        menuStartPos='left'
                        onSelect={selectUnite}
                        iconSplit
                    />

                    <Selection
                        className="dropDown_h01"
                        value={exam[0]}
                        optionList={exam}
                        menuWidth={'150%'}
                        height={'2rem'}
                        menuStartPos='left'
                        onSelect={selectLangueg}
                    />

                </div>

            </div>
            <div className="header-content_01">
                <div className="container midel-header_01">

                    <div className="logo-box_01">
                        <Link to="/" >
                            <img src={LOGO + "logo.png"} alt="logo" />
                        </Link>
                    </div>
                    <SearchBox className="search-area_01" />

                    <div className="buttons_01">
                        <div className="icon-btn_h01" onClick={() => setCartModal(true)}>
                            <span className="icon_b01">
                                <BsCart3 size={24} />
                            </span>
                            <span className="count_b01">
                                0
                            </span>
                            <sub>
                                سبد خرید
                            </sub>
                        </div>
                        <div className="icon-btn_h01">
                            <span className="icon_b01">
                                <BsHeart size={24} />
                            </span>
                            <span className="count_b01">
                                0
                            </span>
                            <sub>
                                علاقه مندی
                            </sub>
                        </div>
                        <div className="icon-btn_h01">
                            <span className="icon_b01">
                                <GoSync size={24} />
                            </span>
                            <span className="count_b01">
                                0
                            </span>
                            <sub>
                                مقایسه
                            </sub>
                        </div>
                    </div>
                </div>
            </div>
            <Navigation />
            <MobileNavBar />
            {openCartModal &&
                <CartSideMenu onClose={() => setCartModal(false)} />
            }


        </header>

    </>)
}

export default Header
