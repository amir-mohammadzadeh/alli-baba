import './CategoryPage.css';// => Code p3

const CategoryPage = () => {
    return (<>
        <main className="my-5">
            <div className="container">
                <div className="category-content_p3">
                    <div className="page-title_p3">
                        <h1 className='mb-1'>
                            دسته بندی ها
                        </h1>
                    </div>
                    <div className="page_body_p3">
                        <div className="orgin-list_p3">
                            <ul className="ol-content_p3">
                                <li className="ol-item_p3">
                                    <div className="item_l06 active_p3">
                                        <span className="icon_li06">
                                            &#10051;
                                        </span>
                                        <span>
                                            item
                                        </span>
                                    </div>
                                </li>
                                <li className="ol-item_p3">
                                    <div className="item_l06">
                                        <span className="icon_li06">
                                            &#10051;
                                        </span>
                                        <span>
                                            item
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-list_p3">

                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>)
}
export default CategoryPage