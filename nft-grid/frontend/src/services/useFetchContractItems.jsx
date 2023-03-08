import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchContractItems({ collectionId }) {
  const [itemsData, setData] = useState(null);
  const [itemsError, setError] = useState(null);
  const [itemsLoading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(
          `${REACT_APP_API_ENDPOINT}/item?collectionAddress=${collectionId}&slim=true`
        );
        setData(response.data.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [collectionId]);

  return { itemsData, itemsError, itemsLoading };
}
