import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchItemDetail({ collectionId, itemId }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(
          `${REACT_APP_API_ENDPOINT}/item/${collectionId}/${itemId}`
        );
        setData(response.data.data.item);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
