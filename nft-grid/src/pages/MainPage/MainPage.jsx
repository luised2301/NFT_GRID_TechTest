import React from "react";
import "./MainPage.css";
import { Container } from "@mui/system";
import CardContainer from "../../components/Containers/CardContainers/CardContainers";

const MainPage = () => {
  return (
    <div className="page-container">
      <Container>Hello</Container>
      <CardContainer></CardContainer>
    </div>
  );
};

export default MainPage;
