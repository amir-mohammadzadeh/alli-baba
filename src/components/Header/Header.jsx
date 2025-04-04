/*
import './Header.css' // Code => 01
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsPlusCircleDotted, BsGeoAlt, BsPersonCheckFill, BsPersonCircle, BsCart3, BsHeart } from "react-icons/bs";
import { GoSync } from "react-icons/go";
import SearchBox from '../SearchBox/SearchBox';
import Navigation from '../Navigation/Navigation';
import CartSideBar from '../Cart.SideBar/CartSideBar';
import { openCityModal } from '../../redux/CityReducer/CitySlice';
import { openCartMenu } from '../../redux/CartReducer/CartSlice';
import CitySelectModal from '../CitySelectModal/CitySelectModal';


*/


import React, { useEffect, useRef, useState } from 'react'
import Selection from '../Selection/Selection'
import { BsCart3, BsChevronDown, BsHeart, BsSearch } from 'react-icons/bs'
import { GoSync } from "react-icons/go";
import SearchBox from '../SearchBox/SearchBox'
import './Header.css'//=> 01
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router';
import { TomanCustomIcon } from '../../assets/Icon'
//import MobileNavBar from '../MobileNavBar/MobileNavBar';
//import CartSideMenu from '../Cart.CartSideMenu/CartSideMenu';
import { ICONS, LOGO } from '../../assets/staticPaths';
import MobileSearchBox from '../SearchBox/MobileSearchBox/MobileSearchBox';
import SideBar from '../SideBar/SideBar';
import MenuToggleButton from '../MenuToggleButton/MenuToggleButton';
import { IoMenu } from 'react-icons/io5';
import { CgMenu } from 'react-icons/cg';
import SideMenu from '../Header.SideMenu/SideMenu';

const Header = () => {
    const cartMode = useRef('')
    const [modalStatus, setModalStatus] = useState({
        mobileSearch: false,
        cart: false
    })
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
            icon: <TomanCustomIcon size={20} />,
            iconType: 'icon'
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

    const switchSearchBox = () => {
        setModalStatus(prev => {
            return { ...prev, mobileSearch: !prev.mobileSearch }
        })
    };
    const switchCartSidebar = (e) => {

        cartMode.current = e.currentTarget?.accessKey || '';
        setModalStatus(prev => {
            return { ...prev, cart: !prev.cart }
        })
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

                        <div className="icon-btn_h01 search-mbtn_01" onClick={switchSearchBox}>
                            <span className="icon_b01">
                                <BsSearch size={24} />
                            </span>
                        </div>
                        <div className="menu-toggle_01">
                            <MenuToggleButton />
                        </div>




                        <div accessKey='CART' className="icon-btn_h01" onClick={switchCartSidebar}>
                            <span className="icon_b01">
                                <BsCart3 size={22} />
                            </span>
                            <span className="count_b01">
                                50
                            </span>
                            <sub>
                                سبد خرید
                            </sub>
                        </div>
                        <div accessKey='FAV' className="icon-btn_h01" onClick={switchCartSidebar}>
                            <span className="icon_b01">
                                <BsHeart size={22} />
                            </span>
                            <span className="count_b01">
                                50
                            </span>
                            <sub>
                                علاقه مندی
                            </sub>
                        </div>
                        <div accessKey='EXPOS' className="icon-btn_h01" onClick={switchCartSidebar}>
                            <span className="icon_b01">
                                <GoSync size={22} />
                            </span>
                            <span className="count_b01">
                                5
                            </span>
                            <sub>
                                مقایسه
                            </sub>
                        </div>
                    </div>
                </div>
            </div>

            <Navigation showBaseMenu={true} />

        </header>

        {modalStatus.mobileSearch &&
            <MobileSearchBox closeBox={switchSearchBox} />
        }

        {modalStatus.cart &&
            <SideBar onClose={switchCartSidebar} mode={cartMode.current} />
        }

    </>)
}

export default Header