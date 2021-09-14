import React from "react";
 function Navbar() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>
  
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
  
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw"></i>
            </a>
  
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
  
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-fw"></i>
  
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
  
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Alerts Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="/">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">
                    A new monthly report is ready to download!
                  </span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="/"
              >
                Show All Alerts
              </a>
            </div>
          </li>
  
          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw"></i>
  
              <span className="badge badge-danger badge-counter">7</span>
            </a>
  
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">Message Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="/">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div className="status-indicator"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div className="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't good...
                  </div>
                  <div className="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="/"
              >
                Read More Messages
              </a>
            </div>
          </li>
  
          <div className="topbar-divider d-none d-sm-block"></div>
  
          
     <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                David Stephen S         </span>

                <img className="img-profile rounded-circle"
                                    src="data:image/png;base64,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" />
                            </a>
     
     
     
     
  
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="/">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="/">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a className="dropdown-item" href="/">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="/"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
  export default Navbar;
