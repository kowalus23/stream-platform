import _ from 'lodash';
import React from 'react';
import {editStream, fetchStream} from '../../actions'
import {connect} from "react-redux";
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)
  };

  renderStream() {
    if (!this.props.stream) {
      return <div>Loading..</div>
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}/>
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