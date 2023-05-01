import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from './QZone';
import rightNavBg from '../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='my-2 w-100' variant="outline-primary"> <FaGoogle />  Login with Google</Button>
            <Button className='w-100' variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            <div className='my-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook />Facebook </ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='mt-5 position-relative'>
                <img className='' src={rightNavBg} alt="" />
                <div className='text-center position-absolute top-0 start-0 text-white p-5'>
                    <h2 className='my-3'>Create an <br /> Amazing <br /> Newspaper</h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;