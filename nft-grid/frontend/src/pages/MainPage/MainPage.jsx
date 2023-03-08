import React from "react";
import "./MainPage.css";
import { Container } from "@mui/system";
import CardContainer from "../../components/Containers/CardContainers/CardContainers";
import { Button } from "@mui/material";

const MainPage = () => {
  return (
    <div className="page-container">
      <Container>Hello</Container>

      <Button>Get info</Button>
    </div>
  );
};

export default MainPage;
