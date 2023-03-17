import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
export default function List(props) {
  return (
    <div className="Hosplist">
        
        <div className="list" style={{ color: "#007c7c", backgroundColor: "#edffff", paddingTop: '3rem', paddingBottom: '5rem' }}>
            <div className="d-flex justify-content-center align-items-center">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hospital-logo%2C-doctor%2C-medical%2C-design-template-d81cbc2703294c0f6c6ecabadf752e77_screen.jpg?ts=1653554433" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Sharda Hospital
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <p>Type of hospital : Private</p>
                                <h6 className="mt-3">Number of Active Doctors  : 5</h6>
                                <p className="mt-3">Call us : +91 00000-00000</p>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 50</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 30</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>

                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://thumbs.dreamstime.com/b/hospital-logo-template-hospital-logo-template-117487677.jpg" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            District Goverment Hospital
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Goverment</h6>
                                <h6 className="mt-3">Number of Active Doctors : 10</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 30</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 15</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://media.istockphoto.com/id/1181534622/vector/caduceus-design.jpg?b=1&s=612x612&w=0&k=20&c=ZgLprVkktnrivBWrtGLODHgYaVk2btOueferJwmKCHI=" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Vijay Lakshmi Hospital
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Private</h6>
                                <h6 className="mt-3">Number of Active Doctors : 8</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 25</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 20</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://st4.depositphotos.com/17714924/21327/i/450/depositphotos_213277630-stock-photo-hospital-icon-monochrome-style-design.jpg" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Lorem ipsum dolor.
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Private</h6>
                                <h6 className="mt-3">Number of Active Doctors : 8</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 40</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 19</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://www.shutterstock.com/image-vector/hospital-building-logo-600w-797400262.jpg" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Lorem ipsum dolor.
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Private</h6>
                                <h6 className="mt-3">Number of Active Doctors : 11</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 25</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 27</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://us.123rf.com/450wm/mantinov/mantinov2004/mantinov200400007/mantinov200400007.jpg?ver=6" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Lorem ipsum dolor.
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Private</h6>
                                <h6 className="mt-3">Number of Active Doctors : 13</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 27</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 33</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://en.pimg.jp/030/606/519/1/30606519.jpg" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Lorem ipsum dolor.
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Goverment</h6>
                                <h6 className="mt-3">Number of Active Doctors : 7</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 15</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 17</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://media.graphcms.com/kXa8JqIBRnCMtZnHkb1u" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Lorem ipsum dolor.
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Private</h6>
                                <h6 className="mt-3">Number of Active Doctors : 14</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 20</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 19</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://i.pinimg.com/736x/b7/1f/1f/b71f1f44c8338d90047e60ac69de22ec.jpg" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Lorem ipsum dolor.
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Private</h6>
                                <h6 className="mt-3">Number of Active Doctors : 15</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 23</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 13</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://e7.pngegg.com/pngimages/879/648/png-clipart-dr-ruparelia-s-sushrusha-ayurved-multispeciality-hospital-hospital-of-the-holy-spirit-apollo-hospital-indraprastha-logo-raj-designs-hospital-miscellaneous-leaf-thumbnail.png" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Lorem ipsum dolor.
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Goverment</h6>
                                <h6 className="mt-3">Number of Active Doctors : 9</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 15</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 23</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTARtlQraQfw06adbanxSadZ7WyfnufeE4fhQ&usqp=CAU" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Lorem ipsum dolor.
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Private</h6>
                                <h6 className="mt-3">Number of Active Doctors : 29</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 45</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 33</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
                <div className="container d-flex justify-content-center align-items-center row">
                    <div className="justify-content-center align-items-center col-sm-12 col-md-4 col-lg-3" >
                        <img src="https://marketplace.canva.com/EAE04eMJ7BA/1/0/1600w/canva-pink-simple-creative-and-professional-medical-home-logo-design-template-9S6RviHtv20.jpg" style={{ height: '12rem' }} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <h2 className=" "
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: '2rem',
                                fontWeight: "600",
                            }}>
                            Lorem ipsum dolor.
                        </h2>
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h6>Type of hospital : Private</h6>
                                <h6 className="mt-3">Number of Active Doctors : 25</h6>
                                <h6 className="mt-3">Call us : +91 00000-00000</h6>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-6">
                                <h6>Number of Active Beds : 55</h6>
                                <h6 className="mt-3">Number of available Oxygen Cylinders : 43</h6>
                                <h6 class="card-text mt-3">
                                    Rating: <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star checked"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                    <span style={{ color: '#b3922e' }} class="fa fa-star"></span>
                                </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-6">
                                <h5 className="mt-3">Address :</h5>
                                <p style={{color: '#b3922e'}}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="address col-sm-12 col-md-8 col-lg-6">
                                <button  className="btn hosp-list justify-content-center" style={{ display: 'inline-block', width: '12rem' }}>
                                    <Link to="/" className="btn">More Information</Link>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <Footer style={{ width: '100%', position: 'relative', top: '3rem', marginBottom: '2rem' }}/>
        </div>
  )
}
