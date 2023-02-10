import React from 'react';
import '../styles/Footer.scss'
import { Link } from 'react-router-dom';
import {footerData} from '../data/footer'
import Newsletter from './Newsletter';
const Footer = () =>
{
    return (
        <div className="Footer">
            <div className='forFooter container'>
                <div className="logo">
                    <Link to='/'><span>Mono</span>Fi</Link>
                </div>
                {
                    footerData.map((data)=>(
                        <div className='footer-links'>
                            <p>{data.head}</p>
                            <ul>
                                {
                                    data.foots.map((foot,index)=>(
                                        <>
                                            <Link to={`${foot.link}`}>
                                                <li key={index}>{foot.title}</li>
                                            </Link>
                                        </>
                                        
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
                <Newsletter/>
            </div>
            
        </div>
    )
}
export default Footer; 