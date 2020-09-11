import React from 'react';
import '../App.css'
import config from '../config/config.json'

function Footer() {

    return (
        <>
            <div style={config.footer.bgColor}>
                <div className="box">
                    <p>{config.footer.content.contact}</p>
                    <p>{config.footer.content.termAndCondition}</p>
                    <p>{config.footer.content.policy}</p>
                </div>
                <div className="box">
                    <p>{config.footer.content.adderes}</p>
                    <p>{config.footer.content.email}</p>
                    <p>{config.footer.content.number}</p>
                </div>
                <div className="box">
                    <p>Connect with us on</p>
                    <p className="socialMedia">
                        <img src={require("../assets/facebook.png")} alt="g=facebook" />
                        <img src={require("../assets/linkedin.png")} alt="g=linkedin" />
                        <img src={require("../assets/instagram.png")} alt="g=instagram" />
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;
