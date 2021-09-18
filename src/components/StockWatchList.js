import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/stlyes.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: {},
      wlists: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.launchServer = this.launchServer.bind(this);
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

    const API_URL = "https://yxn8t.sse.codesandbox.io/stocks";

    fetch(`${API_URL}/${qwlistKey}`)
      .then((x) => x.json())
      .then((stocks) => {
        this.setState({ stocks: stocks });
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

  launchServer() {
    const URL_SERVER =
      "https://codesandbox.io/s/em3613-web-server-forked-yxn8t?file=/src/index.js";
    window.open(URL_SERVER);
  }

  renderStockPrices() {
    return Object.entries(this.state.stocks).map((stockData) => {
      return (
        <tr key={JSON.stringify(stockData)}>
          <th scope="row">{stockData[0]}</th>
          <td>{stockData[1].c}</td>
          <td>{stockData[1].o}</td>
          <td>{stockData[1].pc} </td>
          <td>{stockData[1].d}</td>
          <td>{stockData[1].h} </td>
          <td>{stockData[1].l}</td>
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
      <div className="container">
        <div className="row justify-content-center my-4 ">
          <div className="col-auto">
            <h1>Stock WatchList</h1>
          </div>
        </div>
        <div className="mb-3">
          <div className="row justify-content-center">
            <form className="col-auto" onSubmit={this.launchServer}>
              <button className="btn btn-secondary">Launch Server</button>
            </form>
            <div className="row justify-content-center my-2 mx-2">
              <div className="row justify-content-center mt-4">
                The Launch Server Button is a temporary solution until the
                server side code is deployed somewhere other than CodeSandbox
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center border border-light my-4 mx-2 customBorder">
          <div className="col-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="form-text">
                Select the Watch List You Would Like to View
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <select
                    className="form-select-sm my-2 mx-2"
                    name="wlists"
                    onChange={this.handleChange}
                  >
                    {this.renderOptions()}
                  </select>
                  <input class="mycustombtn" type="submit" value="Load" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center border border-light my-2 mx-2 customBorder">
          <div class="stock-info">
            <div className="col-md-auto">
              <h2 className="row justify-content-center">Stock Information</h2>
            </div>
            <table className="table">
              <thead class="tableHead">
                <tr>
                  <th scope="col">Stock Ticker </th>
                  <th scope="col">Current Price </th>
                  <th scope="col">Open </th>
                  <th scope="col">Prev. Close </th>
                  <th scope="col">Change </th>
                  <th scope="col">High </th>
                  <th scope="col">Low </th>
                </tr>
              </thead>
              <tbody>{this.renderStockPrices()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
