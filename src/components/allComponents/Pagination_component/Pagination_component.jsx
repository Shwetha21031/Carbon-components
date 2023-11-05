import {
  DataTable,
  Link,
  Pagination,
  PaginationNav,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@carbon/react";
import React from "react";
import { useState } from "react";

const Pagination_component = () => {
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(2);
  const headers = [
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Protocol",
      key: "protocol",
    },
    {
      header: "Port",
      key: "port",
    },
    {
      header: "Rule",
      key: "rule",
    },
    {
      header: "Attached groups",
      key: "attached_groups",
    },
    {
      header: "Status",
      key: "status",
    },
  ];
  const rowsOriginal = [
    {
      attached_groups: "Kevin’s VM Groups",
      id: "a",
      name: "Load Balancer 3",
      port: 3000,
      protocol: "HTTP",
      rule: "Round robin",
      status: (
        <Link disabled href="#">
          Disabled
        </Link>
      ),
    },
    {
      attached_groups: "Maureen’s VM Groups",
      id: "b",
      name: "Load Balancer 1",
      port: 443,
      protocol: "HTTP",
      rule: "Round robin",
      status: <Link href="#">Starting</Link>,
    },
    {
      attached_groups: "Andrew’s VM Groups",
      id: "c",
      name: "Load Balancer 2",
      port: 80,
      protocol: "HTTP",
      rule: "DNS delegation",
      status: <Link href="#">Active</Link>,
    },
    {
      attached_groups: "Marc’s VM Groups",
      id: "d",
      name: "Load Balancer 6",
      port: 3000,
      protocol: "HTTP",
      rule: "Round robin",
      status: (
        <Link disabled href="#">
          Disabled
        </Link>
      ),
    },
    {
      attached_groups: "Mel’s VM Groups",
      id: "e",
      name: "Load Balancer 4",
      port: 443,
      protocol: "HTTP",
      rule: "Round robin",
      status: <Link href="#">Starting</Link>,
    },
    {
      attached_groups: "Ronja’s VM Groups",
      id: "f",
      name: "Load Balancer 5",
      port: 80,
      protocol: "HTTP",
      rule: "DNS delegation",
      status: <Link href="#">Active</Link>,
    },
  ];
  const rows = rowsOriginal.slice(
    firstRowIndex,
    firstRowIndex + currentPageSize
  );
  return (
    <>
      <h5>Pagination</h5>
      <Pagination
        backwardText="Previous page"
        forwardText="Next page"
        itemsPerPageText="Items per page:"
        onChange={function noRefCheck() {}}
        page={1}
        pageSize={10}
        pageSizes={[10, 20, 30, 40, 50]}
        size="lg"
        totalItems={100}
      />
      <br></br>
      <br></br>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => {
              return <TableHeader>{header.header}</TableHeader>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.protocol}</TableCell>
                <TableCell>{row.port}</TableCell>
                <TableCell>{row.rule}</TableCell>
                <TableCell>{row.attached_groups}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <Pagination
              backwardText="Previous page"
              forwardText="Next page"
              itemsPerPageText="Items per page:"
              onChange={({ page, pageSize }) => {
                if (pageSize !== currentPageSize) {
                  setCurrentPageSize(pageSize);
                }
                setFirstRowIndex(pageSize * (page - 1));
              }}
              page={1}
              pageSize={2}
              pageSizes={[2, 4, 6]}
              size="lg"
              totalItems={6}
            />
          </TableRow>
        </TableBody>
      </Table>
      <br></br>
      <br></br>
      pagination nav
      <br></br>
      <br></br>
      <div
        style={{
          width: "800px",
        }}
      >
        <PaginationNav itemsShown={10} totalItems={25} />
      </div>
    </>
  );
};

export default Pagination_component;
