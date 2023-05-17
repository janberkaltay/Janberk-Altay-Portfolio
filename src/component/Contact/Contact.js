import { SocialIcon } from 'react-social-icons';
import React from "react";
import { Email } from './Email';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Contact.css';

const Contact = () => {

    return (
        <section className='contact-page'>
            <div className='contact-header'>
            <div>
                <h2 className='projects-header'>Sosyal Medya Hesaplarım</h2>
                <div className='contact-social'>
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://twitter.com/janberkaltay" />
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.instagram.com/janberkaltay/" />
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/in/janberkaltay/" />
                </div>
                <h2 className='projects-header'>Mail Adresim</h2>
                <div className='email-container'><EmailIcon style={{ fontSize: 34, marginRight: 12}}/>janberk.altayy@gmail.com</div>
                <h2 className='projects-header'>Konum</h2>
                <div className='email-container'><LocationOnIcon style={{ fontSize: 34, marginRight: 12}}/>Adana, Türkiye</div>
            </div>
            <div>
                <h2 className='projects-header'>Bana Mail Gönder</h2>
                <Email/>
            </div>
            </div>
        </section>
    )
}

export default Contact