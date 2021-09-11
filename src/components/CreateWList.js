import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CreateWList extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      listname: "",
      stk1: "",
      stk2: "",
      stk3: "",
      stk4: "",
      stk5: "",
    };*/
    this.newListSubmit = this.newListSubmit.bind(this);
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
        this.setState();
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newListSubmit}>
          {/*<form action="/watchlists/new" method="POST">*/}
          <input type="text" name="listname" placeholder="listname" />
          <input type="text" name="stk1" placeholder="stock ticker 1" />
          <input type="text" name="stk2" placeholder="stock ticker 2" />
          <input type="text" name="stk3" placeholder="stock ticker 3" />
          <input type="text" name="stk4" placeholder="stock ticker 4" />
          <input type="text" name="stk5" placeholder="stock ticker 5" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
