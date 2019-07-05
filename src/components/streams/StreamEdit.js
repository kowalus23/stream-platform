import React from 'react';
import {editStream, fetchStream} from '../../actions'
import {connect} from "react-redux";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderStream() {
    if (!this.props.stream) {
      return <div>Loading..</div>
    }

    return (
      <div>
        <h2>Title: {this.props.stream.title}</h2>
        <h3>Description: {this.props.stream.description}</h3>
      </div>
    )
  }

  render() {
    return (
      <div>{this.renderStream()}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {editStream, fetchStream})(StreamEdit);