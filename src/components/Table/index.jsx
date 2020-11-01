import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
  const { headers, body } = props;
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (<th>{header}</th>))}
        </tr>
      </thead>
      <tbody>
        {body.map((item, index) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.website}</td>
            <td>{index}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  body: PropTypes.string.isRequired,
};

export default Table;
