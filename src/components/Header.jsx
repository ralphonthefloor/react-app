import React from "react";

function Header() {
    return (
        <nav className="padding navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><div id="header">ABN Events</div></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/show">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/dyna">DynaDash</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/event">Event Console</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/vw">Stream</a>
                    </li>
                </ul>
            </div>
            <script src="/js/shared/nav.js"></script>
        </nav>
    )
}

export default Header;