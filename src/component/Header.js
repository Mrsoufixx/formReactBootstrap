import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/Image1.jpg"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid justify-content-between">
        <div className="d-flex">
          <a
            className="navbar-brand me-2 mb-1 d-flex align-items-center"
            href="/"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="20"
              alt="sk Logo"
              style={{ marginTop: "2px" }}
            />
          </a>
        </div>
        <ul className="navbar-nav flex-row ">
          <form className="input-group w-auto my-auto d-none d-sm-flex me-4">
            <span className="text-light border-0 d-none d-lg-flex">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              style={{ minWidth: "150px" }}
            />
          </form>
          <li className="nav-item me-3 me-lg-1">
            <a className="nav-link" href="/">
              <span className="text-light">
                <FontAwesomeIcon icon={faShoppingBag} />
              </span>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-1">
            <a className="nav-link d-sm-flex align-items-sm-center" href="/">
              <img
                src={image}
                className="rounded-circle"
                height="22"
                alt="img profil"
              />
              <strong className="d-none d-sm-block ms-1 text-light">Soufiane</strong>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
