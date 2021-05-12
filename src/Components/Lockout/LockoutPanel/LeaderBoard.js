import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

import classes from "./lockout.module.css";

function createData(name, score) {
  return { name, score };
}

const rows = [
  createData("Tourist", 237),
  createData("Benq", 230),
  createData("Kickass", 200),
  createData("umnik", 164),
  createData("Ginger", 130),
];

const DenseTable = () => {
  return (
    <TableContainer
      component={Paper}
      style={{ width: "100%", height: "100%" }}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <em>
                <b>Name</b>
              </em>
            </TableCell>
            <TableCell align="right">
              <em>
                <b>Score</b>
              </em>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        style={{
          cursor: "pointer",
          color: "white",
          height: "30px",
          width: "90px",
          marginLeft: "35%",
          marginTop: "10px",
          borderRadius: "5px",
          background: "#872e2e",
          fontSize: "14px",
          paddingTop: "4px",
          textAlign: "center",
          boxShadow: "0 3px 10px 0px #ba6261",
        }}
      >
        UPDATE
      </Button>
    </TableContainer>
  );
};
export default DenseTable;
