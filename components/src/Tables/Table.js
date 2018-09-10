import React from 'react';
import styled from 'styled-components';
import tokens from '@nulogy/tokens';

const defaultProps = { theme: tokens };

const borderStyle = ({ theme }) => `1px solid ${theme.colour.neutral[400]}`;

export const Cell = styled.td`
  padding: 1rem;
  text-align: left;
  border-bottom: ${borderStyle};
`;

Cell.defaultProps = defaultProps;

export const Row = styled.tr``;

export const Header = styled.thead``;

export const Body = styled.tbody``;

export const HeaderCell = styled(Cell.withComponent('th'))`
  font-weight: bold;
  border-bottom-width: 2px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-top: ${borderStyle};
`;

Table.defaultProps = defaultProps;

const DefaultTable =  styled(Table)``;

Object.entries({
  Cell,
  Row,
  Header,
  Body,
  HeaderCell,
}).map(([key, val]) => DefaultTable[key] = val);

export default DefaultTable;