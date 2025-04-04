import React, { useEffect, useRef, useState } from 'react'
import './SearchBox.css' //Code 03
import { BsArrowRight, BsSearch } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router'
import { PRODUCT_IMG } from '../../assets/staticPaths'


const SearchBox = ({ className="" }) => {

    const navigate = useNavigate()
    const Search_Ref = useRef(null)
    const serachValue = useRef(null)
    const [results, setResultes] = useState([1, 2, 3])


    const openResultBox = () => {
        Search_Ref.current.classList.add('open_r03')
        //document.documentElement.style.overflowY = 'hidden';
    }

    const closeResultBox = () => {
        Search_Ref.current.classList.remove('open_r03');
        //document.documentElement.style.overflowY = 'auto';
        setResultes([])
    }

    const inputChange = async (e, text) => {
        serachValue.current = text;
        const searchValue = text; //e.target.value;
        !searchValue ? closeResultBox() : openResultBox()

        //\__________________ Searching in Products with API __________________/\\
        /*
        if (searchValue) {
            const q = '?key=' + searchValue + '&page=0'
            const res = await useAxiosRequest('get', SEARCH_IN_PRODUCTS, q)
            setResultes(res.data)
        }
*/
        //const result = orginalData.filter(item => item.ProductName.includes(searchValue))
        //searchValue ? setResultes(result) : setResultes([]);

    }

    const onSearchHandler = () => {
        if (!serachValue.current) return;
        navigate('/shop-search?' + serachValue.current, {
            state: serachValue.current
        })
        console.log('Cliked on search result => ' + serachValue.current)
        /*
                navigate('search/posters/?s=' + text, { state: text })// The link of resulte will add here ...
                closeResultBox()
                searchInput.current.value = ''*/
    }


    const onResultItemClick = (id) => {
        navigate('/pd')
        closeResultBox()
    };

    return (
        <>
            <div ref={Search_Ref} className={`search-box_03 ${className}`}>

                <div className="search-input_03">
                    <SearchInput
                        onInputChange={inputChange}
                        onIconClick={onSearchHandler}
                    />
                </div>

                <ResultBox
                    className="result-menu_03"
                    onResultClick={onResultItemClick}
                />

            </div>
        </>
    )
};

export default SearchBox



export const SearchInput = ({ onIconClick, onInputChange, children, ...atribiutes }) => {

    const searchInput_ref = useRef(null)
    const location = useLocation()

    useEffect(() => {

        //onInputChange('')
    }, [location]);

    const inputChangeHandler = (e) => {
        const value = e.target.value;

        onInputChange(e, value)
    };

    const pressEnterKeyEvent = (e) => {
        if (e.key === 'Enter') onIconClick()
    };

    const cleanSearchInput = (e) => {
        searchInput_ref.current.value = '';
        e.target.style.visibility = 'hidden';
        onInputChange('')
    };

    return (<>
        <div className="icon_s03" >
            <BsSearch size={20} />
        </div>
        <input
            dir='auto'
            type="search"
            ref={searchInput_ref}
            placeholder='جستجو در محصولات'
            onChange={inputChangeHandler}
        />
        {children}
    </>)
};

export const ResultBox = ({ onResultClick, className = '' }) => {
    return (
        <div className={"result-content_03 " + className}>
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
                            <img src={PRODUCT_IMG + "p-1.jpeg"} alt="" />
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
                            <img src={PRODUCT_IMG + "p-2.jpeg"} alt="" />
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
                            <img src={PRODUCT_IMG + "p-2.jpeg"} alt="" />
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
                            <img src={PRODUCT_IMG + "p-1.jpeg"} alt="" />
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
                            <img src={PRODUCT_IMG + "p-2.jpeg"} alt="" />
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
    )
};