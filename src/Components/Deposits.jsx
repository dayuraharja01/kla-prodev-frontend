import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const Deposits = () => {
  return (
    <>
      <Title>Revenue</Title>
      <Typography component="p" variant="h5">
        Rp 461,870,307
      </Typography>
      {/* <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </>
  );
};

export default Deposits;
