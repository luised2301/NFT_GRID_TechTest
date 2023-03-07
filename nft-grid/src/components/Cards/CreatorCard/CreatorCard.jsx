import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import "./CreatorCard.css";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";

export default function CreatorCard({ creatorData }) {
  return (
    <Card className="creator-card" sx={{ minWidth: 275, maxWidth: 410 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 69, height: 69, m: 1 }}
          />
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "900",
              color: "primary",
            }}
            children={creatorData.name}
            className="primary-title"
          />
        </Box>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            spacing: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PrimaryButton text="Creator´s website" icon="KeyboardArrowRightIcon" />
          <SecondaryButton text="More Collections" icon="ArrowForwardIcon" />
        </Box>
      </CardActions>
    </Card>
  );
}
