import { Typography } from "@mui/material";


export default function TrackingDetailsField() {
  const parcel = { id: "testId", number: "ON28030", start: "start city", end: "end city", time: "18h" }

  return (
    <Typography component="h1" variant="h6">
      Current location: {parcel.id}
    </Typography>

  );
}