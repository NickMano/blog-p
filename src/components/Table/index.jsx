import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Table = (props) => {
  const { headers, body, cssClassName } = props;
  return (
    <table className={cssClassName}>
      <thead>
        <tr>
          {headers.map((header) => (<th key={header}>{header}</th>))}
        </tr>
      </thead>
      <tbody>
        {body.map((item, index) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.website}</td>
            <td><Link to={`posts/${index}`} className="arrow-right icon" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
  cssClassName: PropTypes.string.isRequired,
};

export default Table;
