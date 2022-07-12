import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, status, amount) {
  return { id, date, name, shipTo, paymentMethod, status, amount };
}

const rows = [
  createData(
    0,
    "23 Juni, 2022",
    "Ferdy ",
    "ADAPTER CONVERTER USB - DB9",
    "1",
    "Pesanan Selesai",
    "9.750 "
  ),
  createData(
    1,
    "22 Juni, 2022",
    "Septian ",
    "HANDIE TALKIE HYTERA PD788G (U1) i.s 400-470 UHF",
    "5",
    "Pesanan Selesai",
    "39.000.000"
  ),
  createData(
    2,
    "22 Juni, 2022",
    "Rachmawati ",
    "ISOLATOR BUSBAR KECIL",
    "12",
    "Pesanan Selesai",
    "  40.950 "
  ),
  createData(
    3,
    "22 Juni, 2022",
    "Indra",
    "ADAPTER CONVERTER USB - DB9",
    "1",
    "Pesanan Selesai",
    "14.750"
  ),
  createData(
    4,
    "30 Mei, 2022",
    "Lilistiani ",
    "HYTERA MD788G RIG 400-470 UHF DIGITAL ANALOG 50W",
    "3",
    "Pesanan Selesai",
    "21.276.000"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const Orders = () => {
  return (
    <>
      {" "}
      <Title>Pesanan Terbaru</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tanggal</TableCell>
            <TableCell>Nama</TableCell>
            <TableCell>Produk</TableCell>
            <TableCell>Jumlah</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </>
  );
};

export default Orders;
