import { useAuth } from "@/Services/Auth.tsx";
import { Link } from "react-router-dom";

export function NavBar() {
  const auth = useAuth();
  
  return (
    <nav className="bg-blue-800 rounded-b shadow-lg mb-4">
      <div className="navbar justify-center">
        <div className={"navbar-center lg:flex"}>
          
          <ul className={"menu menu-horizontal"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/match"> Match</Link></li>
            {auth?.token != null ? (
              <li><Link to="/logout">Logout</Link></li>
            ) : (
              <>
                <li><Link to="/login"> Login</Link></li>
                <li><Link to="/create"> Create Account</Link> </li>
              </>
            )}</ul>
        
        </div>
      </div>
    </nav>
  
  );
}






/*
import React from 'react';

export function NavBar() {
  return (
    <div id="NavBar" className="about-section">
      <nav className="navbar" style={{ backgroundColor: 'rgba(243, 238, 238, 0.851)' }}>
        <ul className="nav-commander">
          <li className="nav-list">
            <img className="logo-img" src="./../assets/images/portcull.gif" alt="Site logo!" />
          </li>
          <li className="nav-list">
            <a className="nav-link dungeon-finder" href="#logo">
              <strong>Welcome to the Dungeon Finder</strong>
            </a>
          </li>
          <button className="button">Sign-In</button>
        </ul>
      </nav>
    </div>
  );
}

export function Logo() {
  return (
    <div id="logo" className="spacer-between-modules">
      <img
        className="website-banner"
        src="./../assets/images/banner-tabletop-role-playing-items-like-blue-white-rpg-dices-character-sheet-rule-books-empty-copy-space-background-201139601.jpg"
      />
    </div>
  );
}

export function Hello() {
  return (
    <div className="hello">
      <p className="intro-message">
        Once you create an account and sign-in, you can search for local Dungeons & Dragons games in your area! <br />
        Please click Sign-In up at the top to begin!<br />
      </p>
    </div>
  );
}

export function BannerSpacer() {
  return <div className="banner-spacer"></div>;
}

export function Header() {
  return (
    <>
      <NavBar />
      <Logo />
      <Hello />
      <BannerSpacer />
    </>
  );
}

*/
