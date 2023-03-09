import React from "react";
import "./MainPage.css";
import Paper from "@mui/material/Paper";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MainPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = React.useState(false);

  const handleSubmit = (event) => {
    navigate(`/collection/${address}`);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  return (
    <div className="landing-page">
      <Typography sx={{ fontSize: "36px", fontWeight: 900 }}>
        Insert a NFT Collection Address to browse
      </Typography>
      <Paper
        elevation={12}
        sx={{ display: "flex", flexDirection: "column", width: "fit-content", m: 3, p: 3 }}
      >
        <TextField
          id="address-input"
          label="Collection Address"
          variant="outlined"
          placeholder="Insert Collection Address"
          onChange={handleAddressChange}
          sx={{ m: 3, fontSize: { xs: "8px", md: "16px" }, width: { lg: "42ch" } }}
        />

        <PrimaryButton text="Search Collection" icon="none" onClick={handleSubmit} />
      </Paper>
      <Box>
        <Typography>Recomended Collections</Typography>
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={() => {
            navigate("/collection/0xbd3531da5cf5857e7cfaa92426877b022e612cf8");
          }}
        >
          Pudgy Penguins
        </Button>
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={() => {
            navigate("/collection/0x2efa07cac3395599db83035d196f2a0e7263f766");
          }}
        >
          The Flower Girls
        </Button>
      </Box>
    </div>
  );
};

export default MainPage;
