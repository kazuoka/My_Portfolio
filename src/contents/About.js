import React, { Component } from 'react'
import profilepic from '../img/b.png'

class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                <h3>Hi, I'm Natchanon</h3>
                <p>lorem20;af;ja;sdkfj;askjd;fj;asjfdaskj;fkas;fj;asjf;jas;dfkj;safj;asfie;rjs;djf;lksa;lfj;lasjf;jas;fkj;askjf;sakj;fjsa;kfjlsf</p>
            </div>
        )
    }
}

export default About;