import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Container, Typography, Box, Paper } from "fantasy-baseball-ui";

const NewsItem = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/src/pages/news/content/${id}.md`)
      .then((response) => response.text())
      .then((text) => {
        console.log("Fetched content:", text); // Debug log
        setContent(text);
      })
      .catch((error) => console.error("Error loading markdown file:", error));
  }, [id]);

  console.log("Rendering with content:", content); // Debug log

  return (
    <Container maxWidth="md" className="py-8">
      <Box component="article" alignContent="center">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <Typography
                variant="h2"
                component="h1"
                style={{ color: "#1976d2", marginBottom: "16px" }}
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <Typography
                variant="h3"
                component="h2"
                style={{ color: "#1976d2", marginBottom: "16px" }}
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <Typography
                variant="h4"
                component="h3"
                style={{ color: "#1976d2", marginBottom: "16px" }}
                {...props}
              />
            ),
            h4: ({ node, ...props }) => (
              <Typography
                variant="h5"
                component="h4"
                style={{ color: "#1976d2", marginBottom: "16px" }}
                {...props}
              />
            ),
            h5: ({ node, ...props }) => (
              <Typography
                variant="h6"
                component="h5"
                style={{ color: "#1976d2", marginBottom: "16px" }}
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <Typography component="p" marginBottom={2} {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <Paper
                elevation={0}
                sx={{
                  borderLeft: 4,
                  borderColor: "primary.main",
                  pl: 2,
                  py: 1,
                  my: 2,
                  bgcolor: "background.paper",
                }}
              >
                <Typography
                  variant="body1"
                  component="blockquote"
                  sx={{ fontStyle: "italic" }}
                  {...props}
                />
              </Paper>
            ),
            ul: ({ node, ...props }) => (
              <Typography variant="body1" component="ul" {...props} />
            ),
            li: ({ node, ...props }) => (
              <Typography variant="body1" component="li" {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </Box>
    </Container>
  );
};

export default NewsItem;
