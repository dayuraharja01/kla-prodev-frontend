import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import axios from "axios";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    editable: true,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "date",
    headerName: "Tanggal",
    width: 160,
    editable: true,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "name",
    headerName: "Nama",
    width: 200,
    editable: true,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "product",
    headerName: "Produk",
    width: 200,
    editable: true,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "quantity",
    headerName: "Jumlah",
    type: "number",
    width: 70,
    editable: true,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "total",
    headerName: "Saldo Tokped",
    type: "number",
    width: 150,
    editable: true,
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
];

const TableOrders = () => {
  const [getData, setGetData] = React.useState([]);

  React.useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.get("http://20.30.0.22:5000");
      setGetData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        height: "500px",
        width: "100%",
        "& .MuiDataGrid-cell--editable": {
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#376331" : "rgb(217 243 190)",
        },
        "& .super-app-theme--header": {
          backgroundColor: "rgba(62, 183, 129, 1)",
        },
      }}
    >
      <Button
        variant="text"
        sx={{ margin: "10px" }}
        component={Link}
        to={"/addproduct"}
      >
        Add New
      </Button>
      <DataGrid
        rows={getData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        isCellEditable={(params) => params.row.id % 2 === 0}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default TableOrders;
