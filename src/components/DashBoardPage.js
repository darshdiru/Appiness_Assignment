import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/DashBoard/dataActions";
import "./DashBoardPage.css";

class DashBoardPage extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
   
    return (
      <div className="wrapper">
        <table className="users">
          <thead>
            <tr>
              <th>Id</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>PHONE NO</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users &&
              this.props.users.user.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.age}</td>
                  <td>{u.gender}</td>
                  <td>{u.email}</td>
                  <td>{u.phoneNo}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.fetch.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardPage);
