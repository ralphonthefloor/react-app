import React from "react";

function Header() {
    return (
        <nav class="padding navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/"><div id="header">ABN Events</div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <a class="nav-link" href="/show">Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/dyna">DynaDash</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/event">Event Console</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/vw">Stream</a>
            </li>
        </ul>
    </div>
    <script src="/js/shared/nav.js"></script>
</nav>
    )
}

export default Header;