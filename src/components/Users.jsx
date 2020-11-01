import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from './Loading/Loading';
import getAllUsers from '../actions/usersAction';
import Table from './Table';

const Users = (props) => {
  const tableHeaders = ['Nombre', 'Correo', 'Dominio'];
  const { loading, users } = props;

  useEffect(() => {
    props.getAllUsers();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }
  return (
    <div className="margen">
      <Table headers={tableHeaders} body={users} />
    </div>
  );
};

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAllUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (reducers) => reducers.usersReducer;
const mapDispatchToProps = { getAllUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
