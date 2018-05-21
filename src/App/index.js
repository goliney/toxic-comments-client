import "whatwg-fetch";
import { h, render, Component } from "preact";
import classNames from "./App.scss";
import Results from "./Results";

class App extends Component {
  constructor() {
    super();

    this.state = {
      comment: "",
      toxic: 0,
      severe_toxic: 0,
      obscene: 0,
      threat: 0
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ comment: this.state.comment })
    })
      .then(response => response.text())
      .then(jsonData => JSON.parse(jsonData))
      .then(data => {
        this.setState({
          toxic: 10,
          severe_toxic: 20,
          obscene: 30,
          threat: 40
        });
      });
  }

  render() {
    return (
      <main className={classNames.main}>
        <h1>Toxic Comment Classification Challenge</h1>

        <Results
          toxic={this.state.toxic}
          severe_toxic={this.state.severe_toxic}
          obscene={this.state.obscene}
          threat={this.state.threat}
        />

        <form
          className={classNames.form}
          onSubmit={this.handleSubmit}
          autocomplete="off"
        >
          <textarea
            className={classNames.textarea}
            onInput={this.handleInput}
            name="comment"
            placeholder="Comment"
            autofocus
          />

          <button type="submit" className={classNames.submit}>
            Submit
          </button>
        </form>
      </main>
    );
  }
}

render(<App />, document.body);
