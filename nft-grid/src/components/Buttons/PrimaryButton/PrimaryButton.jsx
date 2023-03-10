import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ReactComponent as OpenSeaLogo } from "../../../assets/icons/opensea_logo.svg";
import "./PrimaryButton.css";

export default function PrimaryButton({ text, icon, onClick, collectionId, tokenId }) {
  const handleNavigate = (event) => {
    window.location.href = `https://opensea.io/assets/ethereum/${collectionId}/${tokenId}`;
  };
  return (
    <>
      {icon === "KeyboardArrowRightIcon" ? (
        <Button className="primary-button" variant="contained" endIcon={<KeyboardArrowRightIcon />}>
          {text}
        </Button>
      ) : (
        <></>
      )}
      {icon === "openSeaLogo" ? (
        <Button
          sx={{ m: 2 }}
          className="openSea-button"
          variant="contained"
          endIcon={<OpenSeaLogo className="openSea-logo" height="24px" width="24px" />}
          onClick={handleNavigate}
        >
          {text}
        </Button>
      ) : (
        <></>
      )}
      {icon === "none" ? (
        <Button className="navigate-button" variant="contained" onClick={onClick}>
          {text}
        </Button>
      ) : (
        <></>
      )}
    </>
  );
}
