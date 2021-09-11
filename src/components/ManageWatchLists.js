import React from "react";
//import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class ManageWatchLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wListData: {},
      wlists: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateListSubmit = this.updateListSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let qwlistKey = this.state.value;
    console.log(qwlistKey);

    if (typeof qwlistKey === "undefined") {
      qwlistKey = "1";
    }

    const API_URL = "https://yxn8t.sse.codesandbox.io/watchlists-id";
    //fetch(`${API_URL}`)
    fetch(`${API_URL}/${qwlistKey}`)
      .then((x) => x.json())
      .then((wListData) => {
        this.setState({ wListData: wListData });
      });
  }

  componentDidMount() {
    const API_URL_MEMS = "https://yxn8t.sse.codesandbox.io/watchlists";
    fetch(API_URL_MEMS)
      .then((x) => x.json())
      .then((wlists) => {
        this.setState({ wlists: wlists });
      });
  }

  updateListSubmit(event) {
    const API_URL = "https://yxn8t.sse.codesandbox.io/watchlists-update-list";
    //const API_URL = "https://yxn8t.sse.codesandbox.io/watchlists";
    event.preventDefault();

    const qwlistKey = document.querySelector("[name=id]").value,
      id = document.querySelector("[name=id]").value,
      listname = document.querySelector("[name=nlistname]").value,
      stk1 = document.querySelector("[name=nstk1]").value,
      stk2 = document.querySelector("[name=nstk2]").value,
      stk3 = document.querySelector("[name=nstk3]").value,
      stk4 = document.querySelector("[name=nstk4]").value,
      stk5 = document.querySelector("[name=nstk5]").value;

    //fetch(API_URL, {
    fetch(`${API_URL}/${qwlistKey}`, {
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
        id,
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

  renderwatchListData() {
    return Object.entries(this.state.wListData).map((wLData) => {
      return (
        <tr>
          {wLData[1].id}
          <td>{wLData[1].listname}</td>
          <td>{wLData[1].stk1}</td>
          <td>{wLData[1].stk2}</td>
          <td>{wLData[1].stk3}</td>
          <td>{wLData[1].stk4}</td>
          <td>{wLData[1].stk5}</td>
        </tr>
      );
    });
  }

  renderOptions() {
    if (!Array.isArray(this.state.wlists)) {
      return [];
    }

    return this.state.wlists.map((watchlist) => {
      const id = watchlist.id;
      const listname = watchlist.listname;
      return (
        <option key={id} value={id}>
          {listname}
        </option>
      );
    });
  }
  render() {
    return (
      <div className="Manage Watch Lists">
        <h1>Manage Watch Lists</h1>
        <div>
          <h3>Show WatchList Information</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Watch List Name
              <select name="wlists" onChange={this.handleChange}>
                {this.renderOptions()}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <table>
            <tbody>
              <tr>
                <th>ID </th>
                <th>WatchList Name </th>
                <th>Stock Ticker1 </th>
                <th>Stock Ticker2</th>
                <th>Stock Ticker3</th>
                <th>Stock Ticker4</th>
                <th>Stock Ticker5</th>
              </tr>
              {this.renderwatchListData()}
            </tbody>
          </table>
        </div>
        <div>
          <form onSubmit={this.updateListSubmit}>
            <h3>Update Watchlist Information</h3>
            <input type="text" name="id" placeholder="id" />
            <input
              type="text"
              name="nlistname"
              placeholder="new watchlist name"
            />
            <input type="text" name="nstk1" placeholder="stock ticker 1" />
            <input type="text" name="nstk2" placeholder="stock ticker 2" />
            <input type="text" name="nstk3" placeholder="stock ticker 3" />
            <input type="text" name="nstk4" placeholder="stock ticker 4" />
            <input type="text" name="nstk5" placeholder="stock ticker 5" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
