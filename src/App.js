import './App.css';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {Box} from "@mui/material";
import Image from "mui-image";
import {InvitationHeadline} from "./components/InvitationHeadline.tsx";

function App() {
  return (
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} mb={4} mt={4} display={"flex"} justifyContent={"center"}>
                  <InvitationHeadline invitationId="12345" />
              </Grid>
              <Grid item xsOffset={3} xs={6} mb={2} display={"flex"} justifyContent={"center"}>
                  <Image
                      src="/IMG-8168.jpg"
                      showLoading={true}
                      duration={3000}
                      sx={{borderRadius: "50%"}}
                      width="200px"
                      height="200px"
                  />
              </Grid>
              <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <span className="main-text">welcome to the wedding celebrations of</span>
              </Grid>
              <Grid item xs={12} mt={1} display={"flex"} justifyContent={"center"}>
                  <span className="couple-name">ERIC</span>
              </Grid>
              <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <span className="main-text">and</span>
              </Grid>
              <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <span className="couple-name">IZZAH</span>
              </Grid>
          </Grid>
      </Box>
  );
}

export default App;
