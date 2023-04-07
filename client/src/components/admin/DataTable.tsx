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
import axios from "axios";

function Row(props: { row: ReturnType<any>; getFlight: any }) {
  const { row, getFlight } = props;

  const handleDelete = async (id: string) => {
    let text = "ลบเครื่องบินใช่ไหม";
    if (confirm(text) == true) {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/flight/${id}`
      );
      getFlight();
    }
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="center">{row.flightNo}</TableCell>
        <TableCell align="center">
          {new Date(row.departDate).toLocaleString()}
        </TableCell>
        <TableCell align="center">
          {new Date(row.arriveDate).toLocaleString()}
        </TableCell>
        <TableCell align="center">{row.DepartAirport}</TableCell>
        <TableCell align="center">{row.ArriveAirport}</TableCell>
        <TableCell align="center">{row.price}</TableCell>
        <TableCell align="center">
          <button
            onClick={() => {
              handleDelete(row.id);
            }}
            className="bg-red-500 text-white p-1 px-3 rounded-md"
          >
            ลบ
          </button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({
  data,
  getFlight,
}: {
  data: any;
  getFlight: any;
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">หมายเลขไฟล์</TableCell>
            <TableCell align="center">เวลาออก</TableCell>
            <TableCell align="center">เวลาถึง</TableCell>
            <TableCell align="center">สนามบินต้นทาง</TableCell>
            <TableCell align="center">สนามบินปลายทาง</TableCell>
            <TableCell align="center">ราคาตั๋ว</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any, index: number) => (
            <Row key={index} row={row} getFlight={getFlight} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
