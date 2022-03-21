import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Calender from "../../shared/Calender";
import Appointment from "./Appointment";

const DashAppointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Appointment date={date} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashAppointment;
