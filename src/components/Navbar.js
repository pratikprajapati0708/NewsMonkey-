// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Navbar extends Component {
 

  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News24*7</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Check Out News</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Business</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Technology</a>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
      </div>
    )
  }
}
