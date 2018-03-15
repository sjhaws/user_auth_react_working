import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class Navbar extends Component {
  rightNavItems = () => {
    const { dispatch, user, location } = this.props;
    if(user.id) {
      return(
        <Menu.Menu postion='right'>
          <Menu.Item
            name='logout'
            onClick={() => dispatch(handleLogout(this.props.history))}
          />
        </Menu.Menu>
      )
    } else {
      return(
        <Menu.Menu postion='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(Navbar));