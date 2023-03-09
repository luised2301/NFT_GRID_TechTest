import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCollectionItems(collectionAddress) {
  const [collectionData, setData] = useState(null);
  const [collectionError, setError] = useState(null);
  const [collectionLoading, setLoading] = useState(false);

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
          setData(response.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [collectionAddress]);

  return { collectionData, collectionError, collectionLoading };
}
