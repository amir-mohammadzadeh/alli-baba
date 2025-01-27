import React, { useEffect, useRef, useState } from 'react'
import './SearchBox.css' //Code 03
import { BsArrowRight, BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import { PRODUCT_IMG } from '../../assets/staticPaths'

const Serac = ({ className = "" }) => {
    //const navigate = useNavigate()
    const searchBox_ref = useRef(null)
    const result_ref = useRef()
    const searchInput = useRef(null)
    let isActive = useRef(false)
    const [results, setResultes] = useState([])

    useEffect(() => {
        searchInput.current.addEventListener('keypress', e => {
            if (e.key === 'Enter') onSearchIconClick()
        })

    }, [])


    const openResultBox = () => {
        result_ref.current.classList.add('open_r03')
        isActive.current = true;
    }

    const closeResultBox = () => {
        searchInput.current.value = '';
        result_ref.current.classList.remove('open_r03');
        isActive.current = false;
        setResultes([])
    }

    const inputChange = async (e) => {
        const searchValue = e.target.value;
        (!searchValue && window.innerWidth >= 768) ? closeResultBox() : openResultBox()

        //\__________________ Searching in Products with API __________________/\\
        /*
        if (searchValue) {
            const q = '?key=' + searchValue + '&page=0'
            const res = await useAxiosRequest('get', SEARCH_IN_PRODUCTS, q)
            setResultes(res.data)
        }
        */

    }

    const onSearchHandler = () => {
        const text = searchInput.current.value
        if (text == '') return;
        console.log('Cliked on search result => ' + text)

        //navigate('search/posters/?s=' + text, { state: text })// The link of resulte will add here ...
        closeResultBox()
        searchInput.current.value = ''
    }

    const onSearchIconClick = () => {
        console.log('first')
        window.innerWidth <= 768 ?
            isActive.current ? onSearchHandler() : openResultBox() : onSearchHandler();
    }

    const onResultItemClick = (id) => {
        console.log(id)
        //navigate('/pd/' + id)
        closeResultBox()
    };



    return (<>
        <div ref={searchBox_ref} className={`search-box_03 ${className} openmobil`}>
            <div className="back-btn_03">
                <BsArrowRight size={20} />
            </div>

            <div className="search-input_03">
                <div className="icon_s03" onClick={onSearchIconClick}>
                    <BsSearch size={20} />
                </div>
                <input
                    dir='auto'
                    type="search"
                    ref={searchInput}
                    placeholder='جستجو در محصولات'
                    onChange={inputChange}
                />
            </div>

            <div ref={result_ref} className="result-content_03">
                <div className="hedding-r03">
                    {[].length != 0
                        ? <span> نتایج پیدا شده: 10</span>
                        : <span> موردی یافت نشد </span>
                    }
                </div>
                <ul className="no-scrollbar">

                    <li onClick={() => onResultItemClick(1)}>
                        <div className="result_r03">
                            <div className="image_r03">
                                <img src={PRODUCT_IMG +"p-1.jpeg"} alt="" />
                            </div>
                            <span className="title_r03 line-limit-1">
                                عنوان محصول
                            </span>
                            <span className="price_r03">
                                3201
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="result_r03">
                            <div className="image_r03">
                                <img src={PRODUCT_IMG +"p-2.jpeg"} alt="" />
                            </div>
                            <span className="title_r03 line-limit-1">
                                عنوان محصول
                            </span>
                            <span className="price_r03">
                                3201
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="result_r03">
                            <div className="image_r03">
                                <img src={PRODUCT_IMG +"p-2.jpeg"} alt="" />
                            </div>
                            <span className="title_r03 line-limit-1">
                                عنوان محصول
                            </span>
                            <span className="price_r03">
                                3201
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="result_r03">
                            <div className="image_r03">
                                <img src={PRODUCT_IMG +"p-1.jpeg"} alt="" />
                            </div>
                            <span className="title_r03 line-limit-1">
                                عنوان محصول
                            </span>
                            <span className="price_r03">
                                3201
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="result_r03">
                            <div className="image_r03">
                                <img src={PRODUCT_IMG +"p-2.jpeg"} alt="" />
                            </div>
                            <span className="title_r03 line-limit-1">
                                عنوان محصول
                            </span>
                            <span className="price_r03">
                                3201
                            </span>
                        </div>
                    </li>


                </ul>
            </div>

        </div>
    </>)
}

export default Serac