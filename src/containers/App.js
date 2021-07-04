import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { Component } from "react";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          robots: users,
        })
      );
  }

  searchFieldOnChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (filterRobots.length === 0) {
      return (
        <div>
          <h1 className="tc">Loading</h1>
        </div>
      );
    } else {
      return (
        <div className="tc">
          <h1>Robot Friends</h1>
          <SearchBox searchFieldOnChange={this.searchFieldOnChange} />
          <Scroll>
            <CardList robots={filterRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
