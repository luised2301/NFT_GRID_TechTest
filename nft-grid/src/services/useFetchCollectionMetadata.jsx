import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCollectionMetadata(collectionAddress) {
  const [collectionData, setData] = useState(null);
  const [collectionError, setError] = useState(null);
  const [collectionLoading, setLoading] = useState(false);
  const [collectionMetadata, setCollectionMetadata] = useState(false);
  const [nftList, setNftList] = useState(null);
  const [tokenId, setTokenID] = useState(null);
  const [tokenDetails, setTokenDetails] = useState(null);

  async function getCollectionMetadata(collectionAddress) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://us-central1-moralisapicall-b62d8.cloudfunctions.net/getNFTContractMetadata?address=${collectionAddress}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response !== undefined) {
        setCollectionMetadata(response.data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function getTokenDetails(collectionAddress, tokenId) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://us-central1-moralisapicall-b62d8.cloudfunctions.net/getNFTMetadata?address=${collectionAddress}&tokenId=${tokenId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response !== undefined) {
        setTokenDetails(response.data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://us-central1-moralisapicall-b62d8.cloudfunctions.net/getNFTsFromCollection?limit=20&address=${collectionAddress}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response !== undefined) {
          setNftList(response.data.result);
          getTokenDetails(collectionAddress, response.data.result[0].token_id);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [collectionAddress]);

  return { collectionData, collectionError, collectionLoading, nftList };
}
