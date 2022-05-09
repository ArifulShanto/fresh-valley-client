import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <Container className="fv-header">
            <div className="h-title">
                <h2>Fresh Valley</h2>
            </div>
            <div className="h-nav">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/deals">Deals</Link></li>
                    <li><Link className="h-login" to="/login">Log In</Link></li>
                </ul>
            </div>
        </Container>
    );
};

export default Header;