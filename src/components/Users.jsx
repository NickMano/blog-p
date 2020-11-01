import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getAllUsers from '../actions/usersAction';

const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    props.getAllUsers();
    const data = await response.json();
    setUsers(data);
  }, []);

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
