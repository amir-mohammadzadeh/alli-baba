import { BsChevronLeft } from 'react-icons/bs'
import './CategoryCard.css' ///=>  Code  11
import { CATEGORY_IMG } from '../../assets/staticPaths'

export const CategoryCardA = () => {
    return (<>
        <div className="cate-card_c11">
            <div className="h-full pb-1 flex-column justfy-sb">
                <div className="image_c11">
                    <img src={CATEGORY_IMG + "cate-1.png"} alt="" />
                </div>
                <div className="title_c11 line-limit-1">
                    نام دسته بندی
                </div>
            </div>
        </div>
    </>)
}
export const CategoryCardB = () => {
    return (<>
        <div className="card cate-card_c12">
            <div className="h-full flex align-center">
                <div className="image_c12">
                    <img src={CATEGORY_IMG + "cate-3.png"} alt="" />
                </div>
                <div className="title_c12 line-limit-2">
                    نام دسته بندی
                </div>
                <span>
                    &#10095;
                </span>
            </div>
        </div>
    </>)
}
