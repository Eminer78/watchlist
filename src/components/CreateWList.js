import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default class CreateWList extends Component {
  constructor(props) {
    super(props);

    this.newListSubmit = this.newListSubmit.bind(this);
    this.noSpaces = this.noSpaces.bind(this);
  }

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
        alert(
          "WatchList " +
            document.querySelector("[name=listname]").value +
            " created"
        );
        document.querySelector("[name=listname]").value = "";
        document.querySelector("[name=stk1]").value = "";
        document.querySelector("[name=stk2]").value = "";
        document.querySelector("[name=stk3]").value = "";
        document.querySelector("[name=stk4]").value = "";
        document.querySelector("[name=stk5]").value = "";
      });
  }

  noSpaces(event) {
    var regex = /[\s]/gi;
    var result = document
      .querySelector("[name=listname]")
      .value.replace(regex, "1");
    document.querySelector("[name=listname]").value = result;
  }
  render() {
    return (
      <div className="container">
        <div className="col-8 offset-2">
          <div className="row justify-content-center border border-light my-4 mx-2 py-2 customBorder">
            <div className="col-auto">
              <h1 className="row justify-content-center py-2">
                New WatchList Creation Form
              </h1>
            </div>
          </div>
        </div>
        <div className="border border-light my-4 py-2 customBorder">
          <div className="col-8 offset-2">
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
                onChange={this.noSpaces}
              />

              <label className="form-label py-2">
                Enter Your 1st Stock Ticker Symbol
              </label>
              <input
                className="form-control"
                type="text"
                name="stk1"
                placeholder="stock ticker 1"
                maxLength="5"
              />
              <label className="form-label py-2">
                Enter Your 2nd Stock Ticker Symbol
              </label>
              <input
                className="form-control"
                type="text"
                name="stk2"
                placeholder="stock ticker 2"
                maxLength="5"
              />
              <label className="form-label py-2">
                Enter Your 3rd Stock Ticker Symbol
              </label>
              <input
                className="form-control "
                type="text"
                name="stk3"
                placeholder="stock ticker 3"
                maxLength="5"
              />
              <label className="form-label py-2">
                Enter Your 4th Stock Ticker Symbol
              </label>
              <input
                className="form-control"
                type="text"
                name="stk4"
                placeholder="stock ticker 4"
                maxLength="5"
              />
              <label className="form-label py-2">
                Enter Your 5th Stock Ticker Symbol
              </label>
              <input
                className="form-control"
                type="text"
                name="stk5"
                placeholder="stock ticker 5"
                maxLength="5"
              />
              <div className="d-grid gap-2 col-6 mx-auto pt-4">
                <button
                  className="btn btn-secondary my-2 mycustombtn"
                  type="submit"
                  minLength="1"
                >
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
