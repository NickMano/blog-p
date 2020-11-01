import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading/Loading';
import getAllUsers from '../actions/usersAction';

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const { loading, users } = props;

  useEffect(() => {
    props.getAllUsers();
    const data = await response.json();
    setUsers(data);
  }, []);
  if (loading) {
    return (
      <Loading />
    );
  }
  return (
    <div className="margen">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
const mapStateToProps = (reducers) => reducers.usersReducer;
const mapDispatchToProps = { getAllUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
