import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
export default function Report() {
  return (
    <>
    <div className="container report">
            <h1 className="text-center" style={{
                                color: "#007c7c",
                                lineHeight: "40px",
                                marginBottom: "2rem",
                                fontWeight: "700",
                            }}>
                Report Your Problem Here
            </h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='email'/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Write your Problem here and click on sumbit .</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn hosp-list justify-content-center" style={{width: '15rem'}}>
                    <Link to="/" className="btn">Submit Your Problem</Link>
                </button>
            </form>
        </div>
        <Footer style={{ width: '100%', position: 'relative', top: '13rem', marginBottom: '2rem' }}/>
    </>
  )
}
