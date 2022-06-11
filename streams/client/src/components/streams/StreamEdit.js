import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import * as qs from "query-string";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

let params = qs.parse(window.location.search);

class StreamEdit extends React.Component {
  componentDidMount() {
    params = qs.parse(window.location.search);
    this.props.fetchStream(params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(params.id, formValues);
    window.location.href = "/";
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { stream: state.streams[params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
