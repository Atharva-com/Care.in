import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer(props) {
    return (
        <>

            <div
                className="footer"
                style={props.style}
            >
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "rgb(54, 134, 134)" }}
                >
                    <section
                        className="d-flex justify-content-between p-4"
                        style={{ backgroundColor: 'rgb(15, 83, 83)' }}
                    >
                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <Link to="/" className="text-white me-4">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="/" className="text-white me-4">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to="/" className="text-white me-4">
                                <i className="fab fa-google"></i>
                            </Link>
                            <Link to="/" className="text-white me-4">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="/" className="text-white me-4">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                            <Link to="/" className="text-white me-4">
                                <i className="fab fa-github"></i>
                            </Link>
                        </div>
                    </section>

                    <section className="/">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Care.in</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{width: '60px', backgroundolor: '#7c4dff', height: '2px'}}
                                    />
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>

                                {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Products</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p>
                                        <Link to="#!" className="text-white">HOME</Link>
                                    </p>
                                    <p>
                                        <Link to="#!" className="text-white">SHOP</Link>
                                    </p>
                                    <p>
                                        <Link to="#!" className="text-white">BLOG</Link>
                                    </p>
                                    <p>
                                        <Link to="#!" className="text-white">CONACT US</Link>
                                    </p>
                                </div> */}

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p>
                                        <Link to="/Login" className="text-white">Connect with us</Link>
                                    </p>
                                    <p>
                                        <Link to="#!" className="text-white">Become an Affiliate</Link>
                                    </p>
                                    <p>
                                        <Link to="#!" className="text-white">Investor</Link>
                                    </p>
                                    <p>
                                        <Link to="#!" className="text-white">Help</Link>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p><i className="fas fa-home mr-3"></i>  Indramani Nagar , Gwalior (M.P.) , India</p>
                                    <p><i className="fas fa-envelope mr-3"></i>  atharvabarve2003@gmail.com</p>
                                    <p><i className="fas fa-envelope mr-3"></i>  sujalforselfuse@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i>  +91 76930-05811</p>
                                    <p><i className="fas fa-print mr-3"></i>  +91 90097-32863</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                    >
                        © 2023 Copyright : WE CARE FOR PEOPLE | Care.in
          
                    </div>
                </footer>
            </div>
        </>
    )
}
