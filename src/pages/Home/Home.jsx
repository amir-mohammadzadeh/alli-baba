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

const Home = () => {

    const productList_Exampel = Array.from(Array(10).keys())

    return (<>
        <main className="container">

            <div className="home-content_1">
                {/*____ Part 1 _____ */}
                <div className="cate-slider_1">
                    <div className="category-area_1">
                        <Category />
                    </div>

                    <div className="slider-area_1">
                        <Banner />
                        {/*____ Part 2 _____  */}
                    </div>

                    <TodayDealContent className="today-deal-area_1" />

                </div>

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

                {/*____ Part 4 _____ */}
                <PanelContainer>
                    <PanelHeader
                        headerTitle={"به زودی"}
                    />
                    <div className="product-slider_1">
                        <MultiSlider>
                            {productList_Exampel.map(p =>
                                <div key={"sp:" + p} className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                            )}
                        </MultiSlider>
                    </div>

                </PanelContainer>

                {/*____ Part 5 _____ */}

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