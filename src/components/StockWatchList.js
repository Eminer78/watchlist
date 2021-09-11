import React from "react";
//import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: {},
      wlists: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let qwlistKey = this.state.value;

    if (typeof qwlistKey === "undefined") {
      qwlistKey = "0";
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

  renderStockPrices() {
    return Object.entries(this.state.stocks).map((stockData) => {
      return (
        <tr key={JSON.stringify(stockData)}>
          <td>{stockData[0]}</td>
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
      <div className="StockWatchList">
        <h1>Stock Watch List</h1>
        <h2>WatchLists</h2>
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
              <th>Stock Ticker </th>
              <th>Current Price </th>
              <th>Open </th>
              <th>Prev. Close </th>
              <th>Change </th>
              <th>High </th>
              <th>Low </th>
            </tr>
            {this.renderStockPrices()}
          </tbody>
        </table>
      </div>
    );
  }
}
