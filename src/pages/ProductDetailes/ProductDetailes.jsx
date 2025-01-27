import { Link } from 'react-router'
import PanelContainer, { PanelHeader } from '../../components/PanelContainer/PanelContainer'
import ProductDetaileTab from '../../components/PD.ProductDetaileTab/ProductDetaileTab'
import ProductDetaileCard from '../../components/ProductDetaileCard/ProductDetaileCard'
import './ProductDetailes.css' // Code=> 2
import SellerInfoCard from '../../components/PD.SellerInfoCard/SellerInfoCard'
import TopSellingProducts from '../../components/PD.TopSellingProducts/TopSellingProducts'
import ProductCard from '../../components/ProductCard/ProductCard'
import MultiSlider from '../../components/MultiSlider/MultiSlider'
import RaittingToggle from '../../components/RaittingToggle/RaittingToggle'
import AddComment from '../../components/PD.AddComment/AddComment'

const ProductDetailes = () => {



    return (<>
        <main className="container product-detiles-main_2">
            <div className="pd-content_2">
                <ProductDetaileCard />

                <div className="part_B2">
                    <div className="side-panel_2">
                        <SellerInfoCard />

                        <PanelContainer>
                            <span className="h6">
                                چقدر از این محصول راضی بودی؟
                            </span>
                            <RaittingToggle onChange={(t) => console.log(t)} raite={1} />
                        </PanelContainer>

                        <AddComment />

                        {/*<TopSellingProducts />*/}
                    </div>
                    <div className="disc-content_2">
                        <ProductDetaileTab />

                        <PanelContainer className="multiSlider-content_2">
                            <PanelHeader
                                headerTitle={"محصولات مشابه"}
                                headerBtn
                                butonText={'مشاهده همه'}
                            />

                            <MultiSlider>
                                <div className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                                <div className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                                <div className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                                <div className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                                <div className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                            </MultiSlider>


                        </PanelContainer>
                        
                        <PanelContainer className="multiSlider-content_2">
                            <PanelHeader
                                headerTitle={"پر فروش ترین ها"}
                                headerBtn
                                butonText={'مشاهده همه'}
                            />

                            <MultiSlider>
                                <div className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                                <div className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                                <div className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                                <div className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                                <div className="carousel__item _product-card_">
                                    <ProductCard />
                                </div>
                            </MultiSlider>


                        </PanelContainer>

                    </div>
                </div>

            </div>
        </main>

    </>)
}
export default ProductDetailes