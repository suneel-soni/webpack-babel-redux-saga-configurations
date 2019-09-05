import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USERS' });
  }

  render() {
    const { users } = this.props;
    return (
      <ul>
        {
          users.list.map((user, i) =>
            <li key={i}>{user.name}</li>
          )
        }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, null)(Users);

