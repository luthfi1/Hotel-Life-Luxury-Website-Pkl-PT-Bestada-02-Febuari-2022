import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Copyright &copy; 2022</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="https://www.facebook.com/luthfi.farizqi.7/">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.linkedin.com/in/muhammad-luthfi-farizqi-7434a0216/">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="https://linktr.ee/luthfi12">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="https://www.youtube.com/channel/UCkVmRDAThQlZaSYFl0rR5sQ">
                                <IoLogoYoutube className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer