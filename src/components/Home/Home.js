import React from 'react'
import Footer from '../Footer'
import Form from './Form'
import IssueSection from './IssueSection'
import Steps from './Steps'


export default function Home(props) {
  return (
    <div>
        <Form setProgress={props.setProgress}/>
        <Steps/>
        <IssueSection/>
        <Footer style={{ width: '100%', position: 'relative', top: '20rem', marginBottom: '2rem' }}/>
    </div>
  )
}
