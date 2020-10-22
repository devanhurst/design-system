import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "../Box";
import { rowsPropType, columnsPropType, rowPropType } from "./Table.types";
import TableCell from "./TableCell";
import { ThemeType } from "../theme.type";

const StyledMessageContainer = styled(Box)(({ theme }) => ({
  padding: `${theme.space.x3} 0`,
  fontSize: theme.fontSizes.small,
  color: theme.colors.darkGrey
}));

type StyledTrProps = {
  rowHovers?: boolean;
  theme?: ThemeType;
  className?: string;
};

const StyledTr: React.SFC<StyledTrProps> = styled.tr(({ rowHovers, theme }: StyledTrProps) => ({
  "&:hover": {
    backgroundColor: rowHovers ? theme.colors.whiteGrey : null
  }
}));

const renderRows = (rows, columns, keyField, noRowsContent, rowHovers, compact) =>
  rows.length > 0 ? (
    rows.map(row => (
      <TableBodyRow
        row={row}
        columns={columns}
        key={row[keyField]}
        keyField={keyField}
        rowHovers={rowHovers}
        compact={compact}
        rowClassName={row.rowClassName}
      />
    ))
  ) : (
    <TableMessageContainer colSpan={columns.length}>{noRowsContent}</TableMessageContainer>
  );

type TableBodyRowProps = {
  row: any;
  columns: any[];
  rowHovers?: boolean;
  compact?: boolean;
  rowClassName?: string;
  keyField?: string;
};

const TableBodyRow = ({ row, columns, rowHovers, compact, rowClassName }: TableBodyRowProps) => {
  const renderAllCells = () =>
    columns.map(column => (
      <TableCell key={column.dataKey} row={row} column={column} cellData={row[column.dataKey]} compact={compact} />
    ));
  return (
    <>
      <StyledTr rowHovers={rowHovers} data-testid="table-row" className={rowClassName}>
        {row.heading ? (
          <TableCell row={row} colSpan={columns.length} cellData={row.heading} compact={compact} />
        ) : (
          renderAllCells()
        )}
      </StyledTr>
      {row.expandedContent && row.expanded && (
        <tr data-testid="expanded-table-row">
          <td colSpan={columns.length}>{row.expandedContent({ row })}</td>
        </tr>
      )}
    </>
  );
};

TableBodyRow.propTypes = {
  row: rowPropType.isRequired,
  columns: columnsPropType.isRequired,
  rowHovers: PropTypes.bool.isRequired,
  compact: PropTypes.bool.isRequired,
  rowClassName: PropTypes.string
};

TableBodyRow.defaultProps = {
  rowClassName: undefined
};

const TableMessageContainer = ({ colSpan, children }) => (
  <tr data-testid="table-message-container">
    <td colSpan={colSpan}>
      <StyledMessageContainer className="nds-table__no-rows-content">{children}</StyledMessageContainer>
    </td>
  </tr>
);

TableMessageContainer.propTypes = {
  colSpan: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

const LoadingContent = ({ colSpan }) => <TableMessageContainer colSpan={colSpan}>Loading...</TableMessageContainer>;

LoadingContent.propTypes = {
  colSpan: PropTypes.number.isRequired
};

type TableBodyProps = {
  rows: any[];
  columns: any[];
  keyField?: string;
  noRowsContent?: any;
  loading?: boolean;
  rowHovers?: boolean;
  compact?: boolean;
};

const TableBody = ({ rows, columns, keyField, noRowsContent, loading, rowHovers, compact }: TableBodyProps) => (
  <tbody data-testid="table-body">
    {!loading ? (
      renderRows(rows, columns, keyField, noRowsContent, rowHovers, compact)
    ) : (
      <LoadingContent colSpan={columns.length} />
    )}
  </tbody>
);

TableBody.propTypes = {
  columns: columnsPropType.isRequired,
  rows: rowsPropType.isRequired,
  rowHovers: PropTypes.bool.isRequired,
  noRowsContent: PropTypes.string,
  keyField: PropTypes.string,
  loading: PropTypes.bool,
  compact: PropTypes.bool.isRequired
};
TableBody.defaultProps = {
  noRowsContent: "No records have been created for this table.",
  keyField: "id",
  loading: false
};

export default TableBody;