import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const Loader: React.FC = () => (
  <Grid container wrap="wrap" justifyContent="center">
    {Array.from({ length: 100 }).map((_, index) => (
      <Box
        key={index}
        sx={{
          width: 288,
          marginRight: 3,
          marginBottom: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={288}
          height={162}
          sx={{ borderRadius: "10px" }}
        />
        <Box sx={{ width: 288, display: "flex" }}>
          <Box sx={{ marginTop: "10px", marginRight: "10px" }}>
            <Skeleton variant="circular" width={38} height={38} />
          </Box>
          <Box sx={{ marginTop: "10px", width: "calc(100% - 48px)" }}>
            <Skeleton sx={{ marginBottom: "4px" }} />
            <Skeleton sx={{ marginBottom: "4px" }} width="60%" />
            <Skeleton width="40%" />
          </Box>
        </Box>
      </Box>
    ))}
  </Grid>
);

export default Loader;
