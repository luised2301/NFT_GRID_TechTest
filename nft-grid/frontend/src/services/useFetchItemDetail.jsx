import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCollectionMetadata(collectionAddress, tokenId) {
  const [itemData, setData] = useState(null);

  const [itemMetadata, setItemMetadata] = useState(null);
  const [itemError, setError] = useState(null);
  const [itemLoading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
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
          setData(response.data);

          setItemMetadata(JSON.parse(response.data.metadata));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [collectionAddress, tokenId]);

  return { itemData, itemError, itemLoading, itemMetadata };
}
