import React from 'react'
import { Link } from 'react-router-dom';

export default function IssueSection() {
  return (
    <div className="d-flex issue-container justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center">
            <div className="justify-content-center align-items-center">
                <img className="issue-img" src="https://www.cowin.gov.in/assets/images/reports-aefi.svg" alt="" />
            </div>
            <div>
                <h1 className="justify-content-center align-items-center text-center"
                            style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: "1.5rem",
                                fontWeight: "700",
                            }}>
                            Ask Your Query
                </h1>
                <p
                        style={{position: 'relative', left: '8rem', color: "#5a5a75", marginBottom: "15px", fontWeight: "400" , width: '37rem'}}>
                        If you want to ask any query , you can fill the form by clicking the button below using your registered email Id.
                </p>
                <Link to="/Report" style={{position: 'relative', left: '8rem', color: 'white', width: '30%', padding: '0.2rem', border: 'transparent solid', borderRadius: '25px', fontSize: '1.2rem'}} className="btn btn-success mt-3">Quiry Now</Link>
            </div>
        </div>
    </div>
  )
}