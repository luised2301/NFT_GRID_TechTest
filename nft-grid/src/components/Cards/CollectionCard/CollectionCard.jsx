import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import "./CollectionCard.css";

export default function CollectionCard({ collectionData }) {
  return (
    <Card className="collection-card" sx={{}}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Typography
            sx={{ fontFamily: "Inter", fontSize: "70px", fontWeight: "900" }}
            component="div"
            children={collectionData.collection.name}
          />
        </Box>
        <Typography
          sx={{ fontFamily: "Inter", fontSize: "16px", fontWeight: "400", textAlign: "left" }}
          component="div"
          children={collectionData.collection.description}
        />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
