import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../static/images/1.jpeg'

const Portfolio = () => {
    return (
        // <div>
        //   <h2>Home Page</h2>
        //   <p id='srk'>Home is here!</p>
        // </div>
        <div className='homePage divHeight'>
            <div className="container pt-1">
                <div className="row g-4 py-4 justify-content-between">
                    <div className="col-lg-6">
                        <div className="card rounded-3 h-100 card-post"
                            style={{ backgroundImage: `url(${image1})` }}>
                            <div className="card-body d-flex align-items-center- rounded">
                                <div className="w-50 mt-auto-">
                                    <Link
                                        className="badge text-white bg-primary mb-2 border-0">
                                        <i className="zmdi zmdi-circle me-1"></i>
                                        <span>Lifestyle</span>
                                    </Link>
                                    {/* <Link className="d-block h3 fw-bold text-white stretched-link"
                                    >Find joy in simple things; life's sweetest surprises.</Link>
                                    <p className="text-white d-none">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div className="d-flex align-items-center d-none">
                                        <img src="https://images.unsplash.com/photo-1631476767348-5c7b63a29993?rect=640,640,600,600&w=256&h=256&q=50" className="card-post-meta-img me-2 rounded-circle" alt='image1' />
                                        <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                            <div className="small fw-bold text-white">Dolore Magna</div>
                                            <div className="small text-white"
                                                style={{ '--bs-text-opacity': '.6' }}>Sept 14 · 5 min read</div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="card rounded-3 h-100 card-post"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1630194146857-a284bbcb7113?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTc5OTQ4Mg&ixlib=rb-1.2.1&q=85')" }}>
                                    <div className="card-body d-flex align-items-center rounded">
                                        <div className="w-100 mt-auto">
                                            <Link
                                                className="badge text-white bg-warning mb-2 border-0">
                                                <i className="zmdi zmdi-circle me-1"></i>
                                                <span>Lifestyle</span>
                                            </Link>
                                            <Link className="d-block h3 fw-bold text-white stretched-link"
                                            >Ut enim ad minim veniam, quis nostrud exercitation</Link>
                                            <div className="d-flex align-items-center">
                                                <img src="https://images.unsplash.com/photo-1630255898495-bb288715736f?rect=1010,2460,400,400&w=256&amp;h=256&q=50" className="card-post-meta-img me-2 rounded-circle" alt='image2' />
                                                <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                                    <div className="small fw-bold text-white">Quis Nostrud</div>
                                                    <div className="small text-white"
                                                        style={{ "--bs-text-opacity": ".6" }}>Sept 5 · 12 min read</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card rounded-3 h-100 card-post"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631097969294-c38afba59496?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTc5OTUxNQ&ixlib=rb-1.2.1&q=50')" }}>
                                    <div className="card-body d-flex align-items-center rounded">
                                        <div className="w-100 mt-auto">
                                            <Link
                                                className="badge text-white bg-success mb-2 border-0">
                                                <i className="zmdi zmdi-circle me-1"></i>
                                                <span>Lifestyle</span>
                                            </Link>
                                            <Link className="d-block h3 fw-bold text-white stretched-link"
                                            >minim veniam quis nostrud</Link>
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                                    <div className="small fw-bold text-white">Aliquip Commodo</div>
                                                    <div className="small text-white"
                                                        style={{ "--bs-text-opacity": ".6" }}>Sept 2</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card rounded-3 h-100 card-post"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631509716275-59e9d106504a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTc5OTk0Mw&ixlib=rb-1.2.1&q=50')" }}>
                                    <div className="card-body d-flex align-items-center rounded">
                                        <div className="w-100 mt-auto">
                                            <Link
                                                className="badge text-white bg-info mb-2 border-0">
                                                <i className="zmdi zmdi-circle me-1"></i>
                                                <span>Lifestyle</span>
                                            </Link>
                                            <Link className="d-block h3 fw-bold text-white stretched-link"
                                            >ad minim veniam quis exercitation</Link>
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                                    <div className="small fw-bold text-white">Veniam Quis</div>
                                                    <div className="small text-white"
                                                        style={{ "--bs-text-opacity": ".6" }}>Sept 4</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-4 d-none">
                    <div className="row mb-4">
                        <div className="col-lg-9">
                            <div className="mb-4">
                                <h3 className="mb-1 fw-bold">
                                    <i className="zmdi zmdi-trending-up me-2"></i>
                                    <span>Today's top highlights</span>
                                </h3>
                                <p>Latest breaking news, pictures, videos, and special reports</p>
                            </div>
                            <div className="row g-4 pt-2 row-cols-1 row-cols-md-2 row-cols-xl-3 mb-4">

                                <div className="col">
                                    <div className="card rounded card-flat h-100">
                                        <div className="card-img-top">
                                            <img className="w-100 rounded" src={image1} alt="Placeholder" />
                                        </div>
                                        <div className="card-body px-0 py-2">
                                            <Link className="h5 card-title fw-bold mb-1"
                                            >Aliquip ex ea commodo consequat</Link>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="card-footer px-0 pt-0 d-flex align-items-center">
                                            <img src="https://images.unsplash.com/photo-1631476767348-5c7b63a29993?rect=640,640,600,600&w=256&h=256&q=50" className="card-post-meta-img me-2 rounded-circle" alt="image3456" />
                                            <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                                <div className="small fw-bold">Dolore Magna</div>
                                                <div className="small"
                                                    style={{ "--bs-text-opacity": ".6" }}>Sept 14 · 5 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card rounded card-flat h-100">
                                        <div className="card-img-top">
                                            <img className="w-100 rounded"
                                                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY1MDIzOA&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480"
                                                alt="Placeholder" />
                                        </div>
                                        <div className="card-body px-0 py-2">
                                            <Link className="h5 card-title fw-bold mb-1"
                                            >Aliquip ex ea commodo consequat</Link>
                                            <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="card-footer px-0 pt-0 d-flex align-items-center">
                                            <img src="https://images.unsplash.com/photo-1630255898495-bb288715736f?rect=1010,2460,400,400&w=256&amp;h=256&q=50" className="card-post-meta-img me-2 rounded-circle" alt="image3456" />
                                            <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                                <div className="small fw-bold">Quis Nostrud</div>
                                                <div className="small"
                                                    style={{ "--bs-text-opacity": ".6" }}>Sept 11 · 5 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card rounded card-flat h-100">
                                        <div className="card-img-top">
                                            <img className="w-100 rounded"
                                                src="https://images.unsplash.com/photo-1630750793250-71173d8bfa5e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY0NTI5OQ&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480"
                                                alt="Placeholder" />
                                        </div>
                                        <div className="card-body px-0 py-2">
                                            <Link className="h5 card-title fw-bold mb-1"
                                            >Cillum dolore eu fugiat</Link>
                                            <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div>
                                        <div className="card-footer px-0 pt-0 d-flex align-items-center">
                                            <img src="https://images.unsplash.com/photo-1631476767348-5c7b63a29993?rect=640,640,600,600&w=256&h=256&q=50" className="card-post-meta-img me-2 rounded-circle" alt="image3456" />
                                            <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                                <div className="small fw-bold">Dolore Magna</div>
                                                <div className="small"
                                                    style={{ "--bs-text-opacity": ".6" }}>Sept 5 · 12 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card rounded card-flat h-100">
                                        <div className="card-img-top">
                                            <img className="w-100 rounded"
                                                src="https://images.unsplash.com/photo-1629662182419-960a8596bba0?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY1MDE1Ng&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480"
                                                alt="Placeholder" />
                                        </div>
                                        <div className="card-body px-0 py-2">
                                            <Link className="h5 card-title fw-bold mb-1"
                                            >Maecenas sagittis pharetra sem</Link>
                                            <p className="card-text">Nullam vel pharetra lectus. Nulla faucibus nisi quis lectus posuere hendrerit. Maecenas sagittis pharetra sem, vitae mattis est sodales in.</p>
                                        </div>
                                        <div className="card-footer px-0 pt-0 d-flex align-items-center">
                                            <img src="https://images.unsplash.com/photo-1630255898495-bb288715736f?rect=1010,2460,400,400&w=256&amp;h=256&q=50" className="card-post-meta-img me-2 rounded-circle" alt="image3456" />
                                            <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                                <div className="small fw-bold">Quis Nostrud</div>
                                                <div className="small"
                                                    style={{ "--bs-text-opacity": ".6" }}>Sept 4 · 6 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card rounded card-flat h-100">
                                        <div className="card-img-top">
                                            <img className="w-100 rounded"
                                                src="https://images.unsplash.com/photo-1619010549583-aba7425d28dc?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY1MDE5OQ&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480"
                                                alt="Placeholder" />
                                        </div>
                                        <div className="card-body px-0 py-2">
                                            <Link className="h5 card-title fw-bold mb-1"
                                            >Arcu id volutpat hendrerit</Link>
                                            <p className="card-text">Mauris mattis condimentum feugiat. Suspendisse viverra, arcu id volutpat hendrerit, turpis purus mollis dui, sed facilisis nulla erat eget lacus.</p>
                                        </div>
                                        <div className="card-footer px-0 pt-0 d-flex align-items-center">
                                            <img src="https://images.unsplash.com/photo-1631476767348-5c7b63a29993?rect=640,640,600,600&w=256&h=256&q=50" className="card-post-meta-img me-2 rounded-circle" alt="image3456" />
                                            <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                                <div className="small fw-bold">Dolore Magna</div>
                                                <div className="small"
                                                    style={{ "--bs-text-opacity": ".6" }}>Sept 14 · 5 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card rounded card-flat h-100">
                                        <div className="card-img-top">
                                            <img className="w-100 rounded"
                                                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY1MDIzOA&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480"
                                                alt="Placeholder" />
                                        </div>
                                        <div className="card-body px-0 py-2">
                                            <Link className="h5 card-title fw-bold mb-1"
                                            >Pellentesque vitae eget</Link>
                                            <p className="card-text">Nullam sit amet aliquam arcu. Phasellus gravida vitae metus a tristique.</p>
                                        </div>
                                        <div className="card-footer px-0 pt-0 d-flex align-items-center">
                                            <img src="https://images.unsplash.com/photo-1630255898495-bb288715736f?rect=1010,2460,400,400&w=256&amp;h=256&q=50" className="card-post-meta-img me-2 rounded-circle" alt="image3456" />
                                            <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-start">
                                                <div className="small fw-bold">Quis Nostrud</div>
                                                <div className="small"
                                                    style={{ "--bs-text-opacity": ".6" }}>Aug 25 · 19 min read</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="text-center py-2">
                                <button className="btn btn-primary">Load More Articles</button>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-5 mt-lg-0">
                            <div className="row g-1 row-cols-3 mb-4">
                                <div className="col">
                                    <Link className="bg-info rounded text-center text-white px-1 py-2 d-flex flex-column align-items-center">
                                        <i className="zmdi zmdi-twitter fs-1 mb-2"></i>
                                        <h6 className="m-0">15.4K</h6>
                                        <span className="small">Follows</span>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link className="bg-danger rounded text-center text-white px-1 py-2 d-flex flex-column align-items-center">
                                        <i className="zmdi zmdi-youtube fs-1 mb-2"></i>
                                        <h6 className="m-0">120K</h6>
                                        <span className="small">Subs</span>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link className="bg-success rounded text-center text-white px-1 py-2 d-flex flex-column align-items-center">
                                        <i className="zmdi zmdi-share fs-1 mb-2"></i>
                                        <h6 className="m-0">1K</h6>
                                        <span className="small">Shares</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4 className="mb-2 fw-bold">Popular topics</h4>
                                <div className="text-center mb-3 position-relative overflow-hidden rounded card-post" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629104300041-331cddce6ec5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTc5NjczNw&ixlib=rb-1.2.1&q=85')" }}>
                                    <div className="card-body position-relative p-2">
                                        <Link className="stretched-link btn-link fw-bold text-white h5">Travel</Link>
                                    </div>
                                </div>
                                <div className="text-center mb-3 position-relative overflow-hidden rounded card-post" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY1MDIzOA&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480')" }}>
                                    <div className="card-body position-relative p-2">
                                        <Link className="stretched-link btn-link fw-bold text-white h5">Business</Link>
                                    </div>
                                </div>
                                <div className="text-center mb-3 position-relative overflow-hidden rounded card-post" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631415928999-c375f0bc21c7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY0NTI5OQ&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480')" }}>
                                    <div className="card-body position-relative p-2">
                                        <Link className="stretched-link btn-link fw-bold text-white h5">Games</Link>
                                    </div>
                                </div>
                                <div className="text-center mb-3 position-relative overflow-hidden rounded card-post" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1630750793250-71173d8bfa5e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY0NTI5OQ&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480')" }}>
                                    <div className="card-body position-relative p-2">
                                        <Link className="stretched-link btn-link fw-bold text-white h5">Photography</Link>
                                    </div>
                                </div>
                                <div className="text-center mb-3 position-relative overflow-hidden rounded card-post" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1619010549583-aba7425d28dc?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY1MDE5OQ&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480')" }}>
                                    <div className="card-body position-relative p-2">
                                        <Link className="stretched-link btn-link fw-bold text-white h5">Language</Link>
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <Link
                                        className="fw-bold text-body text-primary-hover">
                                        <u>View all categories</u>
                                    </Link>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="col-12 col-sm-6 col-lg-12">
                                    <h4 className="mt-4 mb-3 fw-bold">Recent post</h4>
                                    {/* <!-- Recent post item --> */}
                                    <div className="card card-flat mb-3">
                                        <div className="row g-3">
                                            <div className="col-4">
                                                <img className="rounded w-100"
                                                    src="https://images.unsplash.com/photo-1631415928999-c375f0bc21c7?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY0NTI5OQ&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480"
                                                    alt="" />
                                            </div>
                                            <div className="col-8">
                                                <Link className="h6 fw-bold stretched-link fw-bold d-block text-truncate my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Link>
                                                <div className="small text-muted">Sept 17, 2021</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Recent post item --> */}
                                    <div className="card card-flat mb-3">
                                        <div className="row g-3">
                                            <div className="col-4">
                                                <img className="rounded w-100" src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY1MDIzOA&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480" alt="" />
                                            </div>
                                            <div className="col-8">
                                                <Link className="h6 fw-bold stretched-link fw-bold d-block text-truncate my-0">sed do eiusmod tempor incididunt.</Link>
                                                <div className="small text-muted">Sept 04, 2021</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Recent post item --> */}
                                    <div className="card card-flat mb-3">
                                        <div className="row g-3">
                                            <div className="col-4">
                                                <img className="rounded w-100" src="https://images.unsplash.com/photo-1630750793250-71173d8bfa5e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY0NTI5OQ&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480" alt="" />
                                            </div>
                                            <div className="col-8">
                                                <Link className="h6 fw-bold stretched-link fw-bold d-block text-truncate my-0">Duis aute irure dolor in reprehenderit in voluptate.</Link>
                                                <div className="small text-muted">Jul 30, 2021</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Recent post item --> */}
                                    <div className="card card-flat mb-3">
                                        <div className="row g-3">
                                            <div className="col-4">
                                                <img className="rounded w-100" src="https://images.unsplash.com/photo-1629662182419-960a8596bba0?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMTY1MDE1Ng&ixlib=rb-1.2.1&q=50&fit=crop&w=852&h=480" alt="" />
                                            </div>
                                            <div className="col-8">
                                                <Link className="h6 fw-bold stretched-link fw-bold d-block text-truncate my-0">Velit esse cillum dolore eu fugiat nulla pariatur.</Link>
                                                <div className="small text-muted">May 29, 2021</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
