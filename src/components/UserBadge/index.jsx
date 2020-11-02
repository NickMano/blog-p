import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Gravatar from '../Gravatar';
import './UserBadge.scss';

const UserBadge = (props) => {
  const { user } = props;
  const cssClassName = 'UserBadge';

  return (
    <div className={cssClassName}>
      <Gravatar mail={user.email} className={`${cssClassName}__avatar`} />
      <h3 className={`${cssClassName}__name`}>{user.name}</h3>
      <p className={`${cssClassName}__mail`}>{user.email}</p>
      <Link to={`posts/${user.id}`} className="btn">Ver Posts </Link>
    </div>
  );
};

UserBadge.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserBadge;
