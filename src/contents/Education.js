import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="GeneralKazuoka Freelance" where="Google Online University" from="2021" to="Present" />
                <Widecard title="Freelance" where="Google Online University" from="2018" to="2021" />
            </div>
        )
    }
}

export default Education;