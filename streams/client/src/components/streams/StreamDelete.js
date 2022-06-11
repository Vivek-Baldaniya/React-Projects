import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as qs from "query-string";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";

let params = qs.parse(window.location.search);

class StreamDelete extends React.Component {
  componentDidMount() {
    params = qs.parse(window.location.search);
    this.props.fetchStream(params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => (window.location.href = "/")}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { stream: state.streams[params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
