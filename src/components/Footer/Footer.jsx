import { BsInfoCircle } from 'react-icons/bs'
import './Footer.css'// =>Code 10
import { LOGO } from '../../assets/staticPaths'

const Footer = () => {
    return (<>
        <div className="ff-container_10">
            <div className=" container footer-feature_10">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>
        </div>
        <div className="footer_10">
            <div className="container content_10">
                <div className="partA_10">
                    <div className="image_l10">
                        <img src={LOGO + "logo.png"} alt="" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, odit cumque voluptatibus asperiores nulla quisquam dolor totam ratione voluptas tenetur.

                    </p>

                    <div className=" btn seller-btn_10">
                        فروشنده شو
                    </div>

                </div>
                <div className="partB_10">
                    <div className="partB-content_10">
                        <ul >
                            <li className="first-item_10 h5">
                                حساب من
                            </li>
                            <li className="quick-link_10">
                                ورود
                            </li>
                            <li className="quick-link_10">
                                سفارشات من
                            </li>
                            <li className="quick-link_10">
                                نشان شده ها
                            </li>
                            <li className="quick-link_10">
                                گزینه های دیگر
                            </li>
                        </ul>


                        <ul>
                            <li className="first-item_10 h5">
                                دسترسی سریع
                            </li>
                            <li className="quick-link_10">
                                Support Policy Page
                            </li>
                            <li className="quick-link_10">
                                Return Policy Page
                            </li>
                            <li className="quick-link_10">
                                Privacy Policy Page
                            </li>
                            <li className="quick-link_10">
                                Seller Policy
                            </li>
                            <li className="quick-link_10">
                                Term Conditions Page
                            </li>
                        </ul>


                        <address className="contact_10">
                            <span className="first-item_10 h5">
                                تماس با ما
                            </span>
                            <ul>
                                <li className="contact-item_10">
                                    <span>
                                        آدرس:
                                    </span>
                                    <span>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, asperiores.
                                    </span>
                                </li>
                                <li className="contact-item_10">
                                    <span>
                                        شماره تماس:
                                    </span>
                                    <a href="tel:+">
                                        09141234567
                                    </a>
                                </li>
                                <li className="contact-item_10">
                                    <span>
                                        ایمیل:
                                    </span>
                                    <a href="mailto:">
                                        exampel@email.com
                                    </a>
                                </li>
                            </ul>
                        </address>

                    </div>
                </div>
            </div>
            <Designers_A />
        </div>
    </>)
}
export default Footer

function Designers_A() {

    return (
        <div className="desiner_10">
            <span>
                طراحی و توسعه توسط:
            </span>
            <a href='https://github.com/amir-mohammadzadeh' target='_blank'>
                امیر محمدزاده
            </a>
            <a href='#' target='_blank'>
                آقاپور
            </a>
        </div>
    )
}

function Designers_B() {

    return (
        <div className="desiner_10">
            <span>
                طراحی و توسعه توسط:
            </span>
            <div className="desiner-card_10">
                <img src="" alt="" />
                <span>
                    امیر
                </span>
                <span>
                    محمدزاده
                </span>
            </div>
            <div className="desiner-card_10">
                <img src="" alt="" />
                <span>
                    ...
                </span>
                <span>
                    آقاپور
                </span>
            </div>
        </div>
    )
}

function FeatureCard() {
    return (
        <div className="ff-card_10">

            <span>
                <BsInfoCircle size={'100%'} />
            </span>
            <span>
                Terms & conditions
            </span>
        </div>
    )
}