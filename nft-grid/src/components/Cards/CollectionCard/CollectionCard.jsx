import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./CollectionCard.css";

export default function CollectionCard({ collectionData }) {
  if (collectionData) {
    return (
      <Card
        className="collection-card"
        sx={{ maxWidth: "50vw", justifyContent: "center", alignItems: "center" }}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <Typography
              sx={{ fontFamily: "Inter", fontSize: "70px", fontWeight: "900" }}
              component="div"
              children={collectionData.name}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "left",
              borderColor: "primmary",
              borderStyle: "solid",
              p: 2,
              borderRadius: "8px",
            }}
            component="div"
            children={collectionData.token_address}
          />
        </CardContent>
      </Card>
    );
  }
}
