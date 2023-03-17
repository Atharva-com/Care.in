import React from 'react'

export default function Steps() {
    return (
        <>
            <div className="main-card-container">
                <h1 className="text-center"
                    style={{
                        position: 'relative',
                        top: '2.5rem',
                        color: "#007c7c",
                        lineHeight: "40px",
                        marginBottom: "1.5rem",
                        fontWeight: "700",
                    }}
                >
                    Get Your Nearest Hospital in 3 Easy Steps
                </h1>
                <div className="container d-flex justify-content-center text-center card-container" style={{ position: "relative", top: "6.5rem" }}>
                    <div className="card mx-3 my-3 mx-sm-5 mx-sm-5" style={{ width: '20rem', boxShadow: '0 10px 30px #b5d8e2' }}>
                        <img src="https://img.freepik.com/premium-vector/location-icon-white-background-with-different-color-set_8559-59.jpg?w=2000" className="card-img-top" style={{ height: '12rem' }} alt="..." />
                        <div className="card-body" style={{ backgroundColor: '#017e7e', color: 'white' }}>
                            <h4 className="card-title">Enter Your Location</h4>
                            <p className="card-text mt-3" style={{ fontSize: '1.1rem' }}>Enter Your State and District on below form to get the nearest hospitals and more information about particular Hospital .</p>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center arrow">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/512/external-right-arrow-miscellaneous-kiranshastry-lineal-color-kiranshastry.png" style={{ width: '5rem', height: '5rem' }} alt="" />
                    </div>
                    <div className="card mx-3 my-3 mx-sm-5 mx-sm-5" style={{ width: '20rem', boxShadow: '0 10px 30px #b5d8e2' }}>
                        <img src="https://www.cowin.gov.in/assets/images/Step_2.svg" className="card-img-top" style={{ height: '12rem' }} alt="..." />
                        <div className="card-body" style={{ backgroundColor: '#017e7e', color: 'white' }}>
                            <h4 className="card-title">Select Suitable Hospital</h4>
                            <p className="card-text mt-3" style={{ fontSize: '1.1rem' }}>As per the location , list of hospitals will be displayed from which you can choose one .</p>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center arrow">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/512/external-right-arrow-miscellaneous-kiranshastry-lineal-color-kiranshastry.png" style={{ width: '5rem', height: '5rem' }} alt="" />
                    </div>
                    <div className="card mx-3 my-3 mx-sm-5 mx-sm-5" style={{ width: '20rem', boxShadow: '0 10px 30px #b5d8e2' }}>
                        <img src="https://www.cowin.gov.in/assets/images/Step_3.svg" className="card-img-top" alt="..." style={{ height: '12rem' }} />
                        <div className="card-body" style={{ backgroundColor: '#017e7e', color: 'white' }}>
                            <h4 className="card-title">Enquiry on selected hospital</h4>
                            <p className="card-text mt-3" style={{ fontSize: '1.1rem' }}>Give a call on a hospital from the list as per the location  you want and get more information about it . </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
