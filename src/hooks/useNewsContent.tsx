import { useState, useEffect } from "react";
import { BASE_URL } from "../config/api";

export const useNewsContent = (id: string) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch(`${BASE_URL}/news/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Markdown file not found");
        }
        return response.text();
      })
      .then((text) => {
        console.log("Fetched content:", text); // Debug log
        setContent(text);
      })
      .catch((error) => {
        console.error("Error loading markdown file:", error);
        setContent(
          "# Article Not Found\n\nSorry, the requested article could not be found."
        );
      });
  }, [id]);

  return {
    content,
  };
};
