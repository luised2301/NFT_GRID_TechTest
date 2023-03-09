import React from "react";
import "./MainPage.css";
import Paper from "@mui/material/Paper";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

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
    </div>
  );
};

export default MainPage;
