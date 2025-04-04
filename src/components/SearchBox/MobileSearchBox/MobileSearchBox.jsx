import React, { useEffect, useRef } from 'react';
import { BsArrowLeft,BsSearch } from 'react-icons/bs';
import './MobileSearchBox.css';
import { ResultBox, SearchInput } from '../SearchBox';

const MobileSearchBox = ({ closeBox }) => {
    const search_ref = useRef(null)

    useEffect(() => {
        search_ref.current.classList.add('open-mb_03')
        document.documentElement.style.overflowY = 'hidden';
        return () => document.documentElement.style.overflowY = 'auto';
    }, []);

    return (
        <div ref={search_ref} className="mb-search-content_77">
            <div className="search-input_03 serach-input_77">

                <SearchInput />
                <div className="icon back-btn_77" onClick={closeBox}>
                    <BsArrowLeft size={20} />
                </div>

            </div>

            <ResultBox
                className="result-menu-mb_03"

            />
        </div>
    )
}
export default MobileSearchBox