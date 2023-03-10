import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchUSer({ collectionId, itemId }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        let token = localStorage.getItem("token");

        if (!token) {
          token = "";
        }
        setLoading(true);
        const response = await axios.get(
          `https://us-central1-moralisapicall-b62d8.cloudfunctions.net/item/${collectionId}/${itemId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
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
