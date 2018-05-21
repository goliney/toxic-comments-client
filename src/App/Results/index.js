import "whatwg-fetch";
import { h, render, Component } from "preact";
import classNames from "./Results.scss";

export default class Results extends Component {
  render() {
    return (
      <dl className={classNames.results}>
        <div className={classNames.result}>
          <dt>toxic</dt>
          <dd>{this.props.toxic}</dd>
        </div>
        <div className={classNames.result}>
          <dt>severe toxic</dt>
          <dd>{this.props.severe_toxic}</dd>
        </div>
        <div className={classNames.result}>
          <dt>obscene</dt>
          <dd>{this.props.obscene}</dd>
        </div>
        <div className={classNames.result}>
          <dt>threat</dt>
          <dd>{this.props.threat}</dd>
        </div>
      </dl>
    );
  }
}
