import React from "react";
import "./CollectionPage.css";
import { Container } from "@mui/system";
import CardContainer from "../../components/Containers/CardContainers/CardContainers";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useParams } from "react-router-dom";
import useFetchCollection from "../../services/useFetchCollection";
import useFetchCollectionItems from "../../services/useFetchCollectionItems";
import items from "../../data/items";
import collection from "../../data/collection";
import users from "../../data/creator";
import CreatorCard from "../../components/Cards/CreatorCard/CreatorCard";
import CollectionCard from "../../components/Cards/CollectionCard/CollectionCard";
import "./CollectionPage.css";
import SearchBar from "../../components/Input/SearchBar/Search";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";

const CollectionPage = () => {
  const params = useParams();
  const { collectionId } = params;
  // const { collectionData, collectionLoading, collectionError } = useFetchCollection(collectionId);
  // const { itemsData, itemsLoading, itemsError } = useFetchCollectionItems(collectionId);
  return (
    <div className="page-container">
      <Box className="page-header" sx={{ justifyContent: "space-between" }}>
        <CreatorCard creatorData={users.users[0]} />
        <CollectionCard collectionData={collection} />
      </Box>

      <Box className="browse-collection-title">
        <Typography sx={{ fontSize: "30px", fontWeight: 900, fontFamily: "Inter" }}>
          Browse Collection
        </Typography>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            spacing: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchBar />
          <SecondaryButton text="Sort By" icon="SortIcon" />
          <SecondaryButton text="Filter" icon="FilterAltIcon" />
        </Box>
      </Box>
      <CardContainer
        itemsData={items.items}
        collectionName={collection.collection.name}
        creatorName={users.users[0].name}
        creatorAdress={users.users[0].address}
      ></CardContainer>
    </div>
  );
};

export default CollectionPage;
