import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ReactComponent as OpenSeaLogo } from "../../../assets/icons/opensea_logo.svg";
import "./PrimaryButton.css";

export default function PrimaryButton({ text, icon, onClick }) {
  return (
    <>
      {icon == "KeyboardArrowRightIcon" ? (
        <Button className="primary-button" variant="contained" endIcon={<KeyboardArrowRightIcon />}>
          {text}
        </Button>
      ) : (
        <></>
      )}
      {icon == "openSeaLogo" ? (
        <Button
          className="openSea-button"
          variant="contained"
          endIcon={<OpenSeaLogo className="openSea-logo" height="24px" width="24px" />}
        >
          {text}
        </Button>
      ) : (
        <></>
      )}
      {icon == "none" ? (
        <Button className="navigate-button" variant="contained" onClick={onClick}>
          {text}
        </Button>
      ) : (
        <></>
      )}
    </>
  );
}
