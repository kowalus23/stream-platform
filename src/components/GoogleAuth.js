import React from 'react';
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '942057131018-h29uu9ch72m973j2t0esurgn2tjo35o0.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSingInClick = () => {
    this.auth.signIn()
  };

  onSignOutClick = () => {
    this.auth.signOut()
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"/>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSingInClick} className="ui red google button">
          <i className="google icon"/>
          Sign In with google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, {
  signIn: signIn,
  signOut: signOut,
})(GoogleAuth);