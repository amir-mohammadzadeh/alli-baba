import Banner from '../../components/Banner/Banner'
import { CategoryCardA, CategoryCardB } from '../../components/Category.Card/CategoryCard'
import Category from '../../components/Category/Category'
import Footer from '../../components/Footer/Footer'
import AdsGallery from '../../components/Home.AdsGallery/AdsGallery'
import PanelContainer, { PanelHeader } from '../../components/PanelContainer/PanelContainer'
import ProductCard from '../../components/ProductCard/ProductCard'
import MultiSlider from '../../components/MultiSlider/MultiSlider'
import TodayDealContent from '../../components/Home.TodayDealContent/TodayDealContent'
import './Home.css' // => Code 1
import './Home2.css' // => Code p1
import { Link } from 'react-router'

const Home = () => {

    const productList_Exampel = Array.from(Array(10).keys())

    return (<>
        <main className="">


            {/*____ Part 1 _____ */}
            <div className="container">
                <div className="bc-section_p1">
                    <div className="bc-cate_p1">
                        <Category />
                    </div>

                    <div className="bc-banner_p1">
                        <Banner />
                    </div>

                </div>
            </div>

            <div className="category-section_p1">
                <div className="container h-full py-0">
                    <div className="header-cat_p1">
                        <h5 className='h3 mb-0'>
                            دسته بندی های برتر
                        </h5>
                    </div>
                    <div className="cate-content_p1">
                        <div className="cate-section-content_1 p-0 pb-2">
                            <CategoryCardB />
                            <CategoryCardB />
                            <CategoryCardB />
                            <CategoryCardB />
                            <CategoryCardB />
                            <CategoryCardB />
                            <CategoryCardB />
                            <CategoryCardB />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container home-content_1">

                {/*____ Part 2 _____ */}
                <AdsGallery n={[0, 1, 0]} m={3} />

                {/*____ Part 3 _____ */}
                <PanelContainer>
                    <PanelHeader
                        headerTitle={'محصولات جدید'}
                        headerBtn
                        butonText={'مشاهده همه'}

                    />
                    <div className="product-slider_1">
                        <MultiSlider>
                            {productList_Exampel.map(p =>
                                <div key={"np:" + p} className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                            )}
                        </MultiSlider>
                    </div>

                </PanelContainer>
            </div>
            
            {/*____ Part 4 _____ */}
            <div className="category-section_p1 py-4">
                <div className="container">
                    <div className="hed flex justfy-sb">
                        <span className='h3'>
                            پر تخفیف ها
                        </span>

                        <div className="takhfif-link_p1 text-link">
                            <Link to="">
                                مشاهده همه
                            </Link>
                        </div>
                    </div>
                    <PanelContainer className="p-0 takhfif_p1">

                        <div className="product-slider_1 py-0">
                            <MultiSlider>
                                {productList_Exampel.map(p =>
                                    <div key={"sp:" + p} className="carousel__item _product-card_">
                                        <ProductCard />
                                    </div>
                                )}
                            </MultiSlider>
                        </div>

                    </PanelContainer>
                </div>
            </div>
            {/*____ Part 5 _____ */}
            <div className="container home-content_1">
                <PanelContainer>
                    <PanelHeader
                        headerTitle={"پر فروش ترین ها"}
                        headerBtn
                        butonText={'مشاهده همه'}
                    />
                    <div className="product-slider_1">
                        <MultiSlider>
                            {productList_Exampel.map(p =>
                                <div key={"bp:" + p} className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                            )}
                        </MultiSlider>
                    </div>

                </PanelContainer>
                {/*____ Part 6 _____ */}
                <AdsGallery n={[0, 1, 0, 1]} m={2} />

                {/*____ Part 7 _____ */}
                <div className="" hidden>

                    <PanelContainer className={'cate-section_1'} >
                        <PanelHeader
                            headerTitle="دسته بندی های برتر"
                        />

                        <div className="cate-section-content_1">
                            <CategoryCardB />
                            <CategoryCardB />
                            <CategoryCardB />
                            <CategoryCardB />
                        </div>
                    </PanelContainer>

                </div>

            </div>
        </main>

    </>)
}
export default Home

function TodayDealCard() {
    return (<>
        <div className="card_td1">
            <div className="image_td1">
                <img src="/public/static/images/products/p-1.jpeg" alt="" />
            </div>
            <span dir='ltr' className="h5">
                <small> $ </small>
                24514
            </span>
        </div>
    </>)
}