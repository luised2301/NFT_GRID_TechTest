import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCollection(collectionId) {
  const [collectionData, setData] = useState(null);
  const [collectionError, setError] = useState(null);
  const [collectionLoading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/collection/${collectionId}`);
        setData(response.data.collection);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [collectionId]);

  return { collectionData, collectionError, collectionLoading };
}
