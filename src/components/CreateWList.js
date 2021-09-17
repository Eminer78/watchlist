import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CreateWList extends Component {
  constructor(props) {
    super(props);

    this.newListSubmit = this.newListSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset = () => {
    document.querySelectorAll("input");
    this.setState({
      itemvalues: [{}],
    });
  };
  newListSubmit(event) {
    const API_URL = "https://yxn8t.sse.codesandbox.io/watchlists/new";
    event.preventDefault();

    const listname = document.querySelector("[name=listname]").value,
      stk1 = document.querySelector("[name=stk1]").value,
      stk2 = document.querySelector("[name=stk2]").value,
      stk3 = document.querySelector("[name=stk3]").value,
      stk4 = document.querySelector("[name=stk4]").value,
      stk5 = document.querySelector("[name=stk5]").value;

    fetch(API_URL, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        listname,
        stk1,
        stk2,
        stk3,
        stk4,
        stk5,
      }), // body data type must match "Content-Type" header
    })
      .then((x) => x.json())
      .then((x) => {
        document.querySelector("[name=listname]").value = "";
        document.querySelector("[name=stk1]").value = "";
        document.querySelector("[name=stk2]").value = "";
        document.querySelector("[name=stk3]").value = "";
        document.querySelector("[name=stk4]").value = "";
        document.querySelector("[name=stk5]").value = "";
        this.setState();
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="row justify-content-center py-4">
          New WatchList Creation Form
        </h1>
        <div className="border border-dark my-4 py-2">
          <div className="my-4 px-4 pb-2">
            <form onSubmit={this.newListSubmit}>
              <label className="form-label py-2">
                Stock Watch List Name (12 characters max length )
              </label>
              <input
                className="form-control"
                type="text"
                name="listname"
                placeholder="listname"
                maxLength="12"
              />

              <label className="form-label py-2">
                Enter Your First Stock Ticker Symbol
              </label>
              <input
                className="form-control"
                type="text"
                name="stk1"
                placeholder="stock ticker 1"
                maxLength="4"
              />
              <label className="form-label py-2">
                Enter Your Second Stock Ticker Symbol
              </label>
              <input
                className="form-control"
                type="text"
                name="stk2"
                placeholder="stock ticker 2"
                maxLength="4"
              />
              <label className="form-label py-2">
                Enter Your Third Stock Ticker Symbol
              </label>
              <input
                className="form-control "
                type="text"
                name="stk3"
                placeholder="stock ticker 3"
                maxLength="4"
              />
              <label className="form-label py-2">
                Enter Your Fourth Stock Ticker Symbol
              </label>
              <input
                className="form-control"
                type="text"
                name="stk4"
                placeholder="stock ticker 4"
                maxLength="4"
              />
              <label className="form-label py-2">
                Enter Your Fifth Stock Ticker Symbol
              </label>
              <input
                className="form-control"
                type="text"
                name="stk5"
                placeholder="stock ticker 5"
                maxLength="4"
              />
              <div className="d-grid gap-2 col-6 mx-auto pt-4">
                <button className="btn btn-primary my-2" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
