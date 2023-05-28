import "./Footer.scss";

import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae voluptate. Neque autem, deserunt laudantium placeat, quos obcaecati officiis fuga ducimus quas vel porro dolores explicabo voluptate </div>
                </div>
                <div className="col">
                    <div className="title">Contacts</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">Address : 738A/663, Gandhi Nagar, Telibagh, Post-Dilkusha, Lucknow, Uttar Pradesh</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone :0522-2442647</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email : ds095536@gmail.com</div>
                    </div>
                </div>

                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watch</span>
                    <span className="text">Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                    <div className="c-item"></div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">retuens</span>
                    <span className="text">Term & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        MODERN STORE 2023 CREATED BY DEVELOPER DEEPAK GAUTAM
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
