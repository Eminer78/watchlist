import React from "react";
import CreateWList from "./components/CreateWList";
import StockWatchList from "./components/StockWatchList";
import ManageWatchLists from "./components/ManageWatchLists";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/stlyes.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

const App = () => (
  <>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark customNavBar">
        <div className="container-fluid">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact={true}
                  to="/"
                  activeClassName="active-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/CreateWlist"
                  activeClassName="active"
                >
                  Create New Watch List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  exact
                  to="/ManageWatchLists"
                  activeClassName="active"
                >
                  Manage Watch Lists
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Route exact path="/" component={StockWatchList} />
      <Route path="/CreateWList" component={CreateWList} />
      <Route path="/ManageWatchLists" component={ManageWatchLists} />
    </Router>

    <footer className="row justify-content-center py-4">
      Copyright Eric Miner 2021
    </footer>
  </>
);
export default App;
