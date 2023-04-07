import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Row(props: { row: ReturnType<any> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="center">{row.firstName}</TableCell>
        <TableCell align="center">{row.lastName}</TableCell>
        <TableCell align="center">{row.phone}</TableCell>
        <TableCell align="center">{row.seat}</TableCell>
        <TableCell align="center">
          {new Date(row.createdAt).toLocaleString()}
        </TableCell>
        <TableCell align="center">{row.totalPrice}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default function CollapsibleTable({ data }: { data: any }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ชื่อ</TableCell>
            <TableCell align="center">นามสกุล</TableCell>
            <TableCell align="center">เบอร์โทรศัพท์</TableCell>
            <TableCell align="center">จำนวนที่นั่ง</TableCell>
            <TableCell align="center">วันที่ทำการจอง</TableCell>
            <TableCell align="center">ยอดชำระ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: any, index: number) => (
            <Row key={index} row={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
