import React from "react";
import "./CollectionPage.css";
import { Container } from "@mui/system";
import CardContainer from "../../components/Containers/CardContainers/CardContainers";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetchCollection from "../../services/useFetchCollection";
import useFetchCollectionItems from "../../services/useFetchCollectionItems";
import items from "../../data/items";
import collection from "../../data/collection";
import users from "../../data/creator";
import CreatorCard from "../../components/Cards/CreatorCard/CreatorCard";
import CollectionCard from "../../components/Cards/CollectionCard/CollectionCard";
import "./CollectionPage.css";

const CollectionPage = () => {
  const params = useParams();
  const { collectionId } = params;
  // const { collectionData, collectionLoading, collectionError } = useFetchCollection(collectionId);
  // const { itemsData, itemsLoading, itemsError } = useFetchCollectionItems(collectionId);
  return (
    <div className="page-container">
      <Box className="page-header">
        <CreatorCard creatorData={users.users[0]} />
        <CollectionCard collectionData={collection} />
      </Box>

      <Box className="browse-collection-title">
        <Typography sx={{ fontSize: "30px", fontWeight: 900, fontFamily: "Inter" }}>
          Browse Collection
        </Typography>
      </Box>
      <CardContainer itemsData={items.items}></CardContainer>
    </div>
  );
};

export default CollectionPage;
