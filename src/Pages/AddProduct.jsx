import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const AddProduct = () => {
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Box
        sx={{
          // width: ,
          maxWidth: "100%",
          margin: "20px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Tanggal"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          sx={{ marginLeft: "20px" }}
          // fullWidth
          label="Nama Pembeli"
          id="namapembeli"
        />
        <TextField
          sx={{ marginLeft: "20px" }}
          // fullWidth
          label="Produk"
          id="produk"
        />
        <FormControl sx={{ marginLeft: "20px" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            Biaya Layanan
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="1.25%"
            />
            <FormControlLabel value="male" control={<Radio />} label="1.5%" />
            <FormControlLabel value="other" control={<Radio />} label="2.5%" />
          </RadioGroup>
        </FormControl>
        <TextField
          sx={{ marginLeft: "20px" }}
          // fullWidth
          label="Jumlah"
          id="jumlah"
          type="number"
        />
        <TextField
          sx={{ marginLeft: "20px" }}
          // fullWidth
          label="Harga Satuan"
          id="hargasatuan"
          type="number"
        />
        <TextField
          sx={{ marginLeft: "20px" }}
          // fullWidth
          label="Asuransi"
          id="asuransi"
          type="number"
        />
        <TextField
          sx={{ marginLeft: "20px" }}
          // fullWidth
          label="Ongkir"
          id="ongkir"
          type="number"
        />
      </Box>
      <Button sx={{ width: "100%", margin: "20px" }} variant="text">
        <span style={{ textAlign: "center" }}>Apply</span>
      </Button>
    </>
  );
};

export default AddProduct;
