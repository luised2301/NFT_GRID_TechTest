import React from "react";
import "./MainPage.css";
import { Container } from "@mui/system";
import CardContainer from "../../components/Containers/CardContainers/CardContainers";
import { Button } from "@mui/material";
import TextInput from "../../components/Input/TextInput/TextInput";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import Box from "@mui/system/Box";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const MainPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = React.useState(false);
  const handleSubmit = (event) => {
    navigate(`/collection/${address}`);
  };
  const handleChange = (event) => {
    setAddress(event.target.value);
    console.log(address);
  };
  return (
    <div className="page-container">
      <Box sx={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
        <TextField
          id="address-input"
          label="Collection Address"
          variant="outlined"
          placeholder="Insert Collection Address"
          onChange={handleChange}
        />

        <PrimaryButton text="Search Collection" icon="none" onClick={handleSubmit} />
      </Box>
    </div>
  );
};

export default MainPage;
