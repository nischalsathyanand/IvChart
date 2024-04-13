import React, { useState } from "react";
import { Table, Pagination } from "semantic-ui-react";

const MyTable = ({ data, itemsPerPage }) => {
  const [activePage, setActivePage] = useState(1);

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsOnPage = data.slice(startIndex, endIndex);

  return (
    <div>
      <Table basic inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>IV</Table.HeaderCell>
            <Table.HeaderCell>Combined Premium</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {itemsOnPage.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.timestamp.slice(0, 10)}</Table.Cell>
              <Table.Cell>{item.implied_volatility}</Table.Cell>
              <Table.Cell>10</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination
        activePage={activePage}
        onPageChange={handlePaginationChange}
        totalPages={totalPages}
        size="mini"
      />
    </div>
  );
};

export default MyTable;
