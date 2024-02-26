import React from 'react';
import "./styles/HeaderElement.css";
import Logo from "../components/assets/logo.jpg"
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

export const Header = () =>  (
    <div className="header">
      <div className="header-wrapper">
        <div className="image-wrapper">
          <Link to="/">{<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}</Link>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </div>
  )