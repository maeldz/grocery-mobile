import React from 'react';
import PropTypes from 'prop-types';

import { Container, TableContainer, TableRow, TableRows } from './styles';

export default function Table({ header, rows }) {
  return (
    <Container>
      <TableContainer>
        <TableRow data={header} />
        <TableRows data={rows} />
      </TableContainer>
    </Container>
  );
}

Table.propTypes = {
  header: PropTypes.array,
  rows: PropTypes.array,
};

Table.defaultProps = {
  header: null,
  rows: null,
};
