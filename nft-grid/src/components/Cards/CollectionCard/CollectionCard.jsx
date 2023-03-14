import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./CollectionCard.css";
import { Skeleton } from "@mui/material";

export default function CollectionCard({ collectionData }) {
  console.log(collectionData);
  if (collectionData?.name) {
    return (
      <Card className="collection-card" sx={{ justifyContent: "center", alignItems: "center" }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <Typography variant="h1Bold" children={collectionData.name} />
          </Box>
          <Box className="outlined-box">
            <Typography variant="bodyRegular" children={collectionData.address} />
          </Box>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card
        className="collection-card"
        sx={{ maxWidth: "90vw", justifyContent: "center", alignItems: "center" }}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <Typography
              variant="h2"
              component="div"
              children={<Skeleton sx={{ width: { xs: 300, md: 400 } }} />}
            />
          </Box>
          <Typography
            sx={{
              display: "flex",
              width: "auto",

              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "400",
              textAlign: "left",
              borderColor: "primmary",
              borderStyle: "solid",
              p: 2,
              borderRadius: "8px",
            }}
            component="div"
            children={<Skeleton sx={{ width: { xs: 300, md: 400 } }} />}
          />
        </CardContent>
      </Card>
    );
  }
}
