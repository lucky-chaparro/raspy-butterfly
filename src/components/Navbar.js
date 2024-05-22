import React from 'react';

const Navbar = () => {
  return(
    <section className="hero-head">
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Elias Baez
        </a>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="https://walkside.cloud">
            Programming
          </a>
          <a className="navbar-item" href="https://walkside.cloud">
            Poetry
          </a>
        </div>
      </div>
    </nav>
  </section>
  )
};

export default Navbar;