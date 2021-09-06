import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CreateWList extends Component {
  render() {
    return (
      <div>
        <form action="/watchlists/new" method="POST">
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
