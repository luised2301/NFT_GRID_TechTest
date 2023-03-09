import * as React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./SecondaryButton.css";

export default function SecondaryButton({ text, icon }) {
  return (
    <>
      {icon === "KeyboardArrowRightIcon" ? (
        <Button
          className="secondary-button"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          {text}
        </Button>
      ) : (
        <></>
      )}
      {icon === "ArrowForwardIcon" ? (
        <Button
          className="secondary-button"
          variant="contained"
          color="secondary"
          endIcon={<ArrowForwardIcon />}
        >
          {text}
        </Button>
      ) : (
        <></>
      )}
      {icon === "SortIcon" ? (
        <Button
          className="secondary-button"
          variant="contained"
          color="secondary"
          endIcon={<SortIcon />}
        >
          {text}
        </Button>
      ) : (
        <></>
      )}
      {icon === "FilterAltIcon" ? (
        <Button
          className="secondary-button"
          variant="contained"
          color="secondary"
          endIcon={<FilterAltIcon />}
        >
          {text}
        </Button>
      ) : (
        <></>
      )}
    </>
  );
}
