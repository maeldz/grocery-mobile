import styled from 'styled-components/native';
import { Table, Row, Rows } from 'react-native-table-component';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const TableContainer = styled(Table)``;

export const TableRow = styled(Row).attrs({
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
})`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;

export const TableRows = styled(Rows).attrs({
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
})`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;
