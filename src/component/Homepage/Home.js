import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./home.css";
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
    return (
        <section id="section-1" className="section-1">
            <div className="hello">
                <div className="text">
                    <h1 className="name">Janberk ALTAY</h1>
                    <h2 className="title">Junior Software Developer</h2>
                    <div className="mail"><EmailIcon style={{ fontSize: 34, marginRight: 12 }} />janberk.altayy@gmail.com</div>
                    <div className="social">
                        <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/janberkaltay" />
                        <SocialIcon target="_blank" rel="noopener noreferrer" url="https://twitter.com/janberkaltay" />
                        <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.instagram.com/janberkaltay/" />
                        <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/in/janberkaltay/" />
                        <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.youtube.com/channel/UCgkNm9R0i3NftVxcBv_Jqmg" />
                    </div>
                </div>
                <img className="photo" src='img/janberkaltay.jpg' />
            </div>
        </section>
    )
}
export default Home