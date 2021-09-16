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
    this.watchlistDeletebyId = this.watchlistDeletebyId.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let qwlistKey = this.state.value;

    if (typeof qwlistKey === "undefined") {
      qwlistKey = "1";
    }

    const API_URL = "https://yxn8t.sse.codesandbox.io/watchlists-id";
    fetch(`${API_URL}/${qwlistKey}`)
      .then((x) => x.json())
      .then((wListData) => {
        this.setState({ wListData: wListData });
      });
  }

  //This function is used to load all the watchlists in the the selection field
  componentDidMount() {
    const API_URL_MEMS = "https://yxn8t.sse.codesandbox.io/watchlists";
    fetch(API_URL_MEMS)
      .then((x) => x.json())
      .then((wlists) => {
        this.setState({ wlists: wlists });
      });
  }

  /***********************************************************************************/
  //This updateListSubmit function is used update the contents of the database record
  /***********************************************************************************/
  updateListSubmit(event) {
    const API_URL = "https://yxn8t.sse.codesandbox.io/watchlists-update-list";
    event.preventDefault();

    const qwlistKey = document.querySelector("[name=id]").value,
      id = document.querySelector("[name=id]").value,
      listname = document.querySelector("[name=nlistname]").value,
      stk1 = document.querySelector("[name=nstk1]").value,
      stk2 = document.querySelector("[name=nstk2]").value,
      stk3 = document.querySelector("[name=nstk3]").value,
      stk4 = document.querySelector("[name=nstk4]").value,
      stk5 = document.querySelector("[name=nstk5]").value;

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
        document.querySelector("[name=id]").value = "";
        document.querySelector("[name=id]").value = "";
        document.querySelector("[name=nlistname]").value = "";
        document.querySelector("[name=nstk1]").value = "";
        document.querySelector("[name=nstk2]").value = "";
        document.querySelector("[name=nstk3]").value = "";
        document.querySelector("[name=nstk4]").value = "";
        document.querySelector("[name=nstk5]").value = "";
        this.setState();
      });
  }
  // End of Function

  /***********************************************************************************/
  //This updateListSubmit function is used update the contents of the database record
  /***********************************************************************************/
  watchlistDeletebyId(event) {
    event.preventDefault();
    if (window.confirm("Press Ok to Confirm and Delete")) {
      const API_URL = "https://yxn8t.sse.codesandbox.io/watchlists-delete-list";
      console.log("Ok to Delete");
      const qwlistKey = document.querySelector("[name=id-del]").value;
      const id = document.querySelector("[name=id-del]").value;

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
        }), // body data type must match "Content-Type" header
      })
        .then((x) => x.json())
        .then((x) => {
          document.querySelector("[name=id-del]").value = "";
          this.setState();
        });
    } else {
      console.log("Delete Canceled");
      document.querySelector("[name=id-del]").value = "";
    }
  }

  //This function renders the contents of each watchlist from database in a table
  renderwatchListData() {
    return Object.entries(this.state.wListData).map((wLData) => {
      return (
        <tr key={JSON.stringify(wLData)}>
          <td>{wLData[1].id}</td>
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
  //This function renders the watchlist names in the selection field
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
      <div className="container">
        <h1 className="row justify-content-center py-4">Manage Watch Lists</h1>
        <div className="border border-primary my-2 py-4 px-4">
          <h3 className="row justify-content-center ">
            Show WatchList Information
          </h3>
          <form onSubmit={this.handleSubmit}>
            <label className="form-label py-2">Watch List Name</label>
            <select name="wlists" onChange={this.handleChange}>
              {this.renderOptions()}
            </select>
            <input className="form-submit" type="submit" value="Submit" />
          </form>
          <table className="table">
            <tbody>
              <tr>
                <th scope="col">ID </th>
                <th scope="col">WatchList Name </th>
                <th scope="col">Stock Ticker1 </th>
                <th scope="col">Stock Ticker2</th>
                <th scope="col">Stock Ticker3</th>
                <th scope="col">Stock Ticker4</th>
                <th scope="col">Stock Ticker5</th>
              </tr>
              {this.renderwatchListData()}
            </tbody>
          </table>
        </div>
        <div className="border border-primary my-2 py-4 px-4">
          <form onSubmit={this.updateListSubmit}>
            <h3 className="row justify-content-center ">
              Update Watchlist Information
            </h3>
            <label className="form-label py-2">
              Input the ID of the WatchList You Want to Change
            </label>
            <input
              className="form-control"
              type="text"
              name="id"
              placeholder="id"
            />
            <label className="form-label py-2">
              Stock Watch List Name (12 characters max length )
            </label>
            <input
              className="form-control"
              type="text"
              name="nlistname"
              placeholder="new watchlist name"
            />
            <label className="form-label py-2">
              Enter New Stock Ticker Symbol
            </label>
            <input
              className="form-control"
              type="text"
              name="nstk1"
              placeholder="new stock ticker 1"
            />
            <label className="form-label py-2">
              Enter New Stock Ticker Symbol
            </label>
            <input
              className="form-control"
              type="text"
              name="nstk2"
              placeholder="new stock ticker 2"
            />
            <label className="form-label py-2">
              Enter New Stock Ticker Symbol
            </label>
            <input
              className="form-control"
              type="text"
              name="nstk3"
              placeholder="new stock ticker 3"
            />
            <label className="form-label py-2">
              Enter New Stock Ticker Symbol
            </label>
            <input
              className="form-control"
              type="text"
              name="nstk4"
              placeholder="new stock ticker 4"
            />
            <label className="form-label py-2">
              Enter New Stock Ticker Symbol
            </label>
            <input
              className="form-control"
              type="text"
              name="nstk5"
              placeholder="new stock ticker 5"
            />
            <button className="btn btn-info my-2" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="border border-primary my-2 py-4 px-4">
          <h3>Delete Watchlist by ID</h3>
          <form onSubmit={this.watchlistDeletebyId}>
            <input type="text" name="id-del" placeholder="id" />
            <button type="submit">Delete</button>
          </form>
        </div>
      </div>
    );
  }
}
