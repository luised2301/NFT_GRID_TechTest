import * as React from "react";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ItemDetailCard.css";
import { Avatar } from "@mui/material";

export default function ItemDetailCard({ itemDetail }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <CardMedia
        component="img"
        image={itemDetail.imageUrl}
        sx={{
          aspectRatio: "1/1",
          maxWidth: "25%",
          borderColor: "primary",
          borderStyle: "solid",
          borderRadius: "8px",
        }}
        alt="NFT IMAGE"
      />

      <CardActions disableSpacing></CardActions>
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "60%" }}>
        <Box>
          <Typography fontWeight={900} fontSize="70px">
            {itemDetail.name}
          </Typography>
          <Avatar />
        </Box>
        <Box className="owner-box" sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: "50%" }}>
            <Typography fontWeight={700} fontSize="16px">
              Owner
            </Typography>
            <Avatar />
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography fontWeight={700} fontSize="16px">
              Owner´s adress
            </Typography>
          </Box>
        </Box>
        <Box className="description-box">
          <Typography fontWeight={700} fontSize="16px" paddingY="5px">
            Description
          </Typography>
          <Typography fontWeight={400} fontSize="14px" paddingY="5px">
            {itemDetail.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
