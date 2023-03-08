import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./ItemCard.css";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";
import DetailModal from "../../DetailModal/DetailModal";

export default function ItemCard({ cardData, collectionName, creatorName }) {
  console.log(cardData);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="item-card" sx={{ maxWidth: 410, m: 2 }}>
      <CardMedia
        component="img"
        image={cardData.imageUrl}
        sx={{ aspectRatio: "1/1" }}
        alt="Paella dish"
      />
      <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Typography
          color="text.primary"
          fontSize="16px"
          fontWeight={900}
          textAlign="left"
          fontFamily="Inter"
        >
          {cardData.name}
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="primary" children="likes" />
        </IconButton>
      </CardContent>
      <CardActions disableSpacing>
        <DetailModal
          creator={creatorName}
          collectionName={collectionName}
          creatorName={creatorName}
        />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{cardData.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
