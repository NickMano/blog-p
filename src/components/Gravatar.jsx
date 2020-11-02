import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';

const Gravatar = (props) => {
  const { mail, className } = props;
  const hash = md5(mail);

  return (
    <img
      className={className}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
};

Gravatar.propTypes = {
  mail: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Gravatar;
