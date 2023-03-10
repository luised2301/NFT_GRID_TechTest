import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { searchSchema } from "../../services/SchemesValidation/searchSchema";
import "./MainPage.css";
import Paper from "@mui/material/Paper";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AddToHomeScreenSharp } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const MainPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [searchButtonDisabled, setSearchButtonDisabled] = useState(true);

  const formik = useFormik({
    initialValues: {},
    validationSchema: searchSchema,
    onSubmit: (values) => {
      navigate(`/collection/${address}`);
    },
  });

  return (
    <div className="landing-page">
      <Typography sx={{ fontSize: "36px", fontWeight: 900 }}>
        Insert a NFT Collection Address to browse
      </Typography>
      <Paper
        elevation={12}
        sx={{ display: "flex", flexDirection: "column", width: "fit-content", m: 3, p: 3 }}
      >
        <form className="search-form" onSubmit={formik.handleSubmit}>
          <TextField
            id="addressInput"
            name="addressInput"
            label="Collection Address"
            value={formik.values.addressInput}
            onChange={formik.handleChange}
            error={formik.touched.addressInput && Boolean(formik.errors.addressInput)}
            helperText={formik.touched.addressInput && formik.errors.addressInput}
            placeholder="Insert Collection Address"
            sx={{ m: 3, fontSize: { xs: "8px", md: "16px" }, width: { lg: "42ch" } }}
          />

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ m: 2, width: "25ch" }}
          >
            SEARCH COLLECTION
          </Button>
        </form>
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
