import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useNewsContent } from "../../hooks/useNewsContent";
import { Container, Typography, Box, Paper } from "fantasy-baseball-ui";

const NewsItem = () => {
  const { id } = useParams();
  const { content } = useNewsContent(id || "");

  console.log("Rendering with content:", content); // Debug log

  return (
    <Container maxWidth="md" className="py-8">
      <Box component="article" alignContent="center">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              // @ts-ignore//
              <Typography
                variant="h2"
                component="h1"
                style={{ marginBottom: "16px" }}
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              // @ts-ignore
              <Typography
                variant="h3"
                component="h2"
                style={{ marginBottom: "16px" }}
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              // @ts-ignore
              <Typography
                variant="h4"
                component="h3"
                style={{ marginBottom: "16px" }}
                {...props}
              />
            ),
            h4: ({ node, ...props }) => (
              // @ts-ignore
              <Typography
                variant="h5"
                component="h4"
                style={{ marginBottom: "16px" }}
                {...props}
              />
            ),
            h5: ({ node, ...props }) => (
              // @ts-ignore
              <Typography
                variant="h6"
                component="h5"
                style={{ marginBottom: "16px" }}
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              // @ts-ignore
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
                {/* @ts-ignore */}
                <Typography
                  variant="body1"
                  component="blockquote"
                  sx={{ fontStyle: "italic" }}
                  {...props}
                />
              </Paper>
            ),
            ul: ({ node, ...props }) => (
              // @ts-ignore
              <Typography variant="body1" component="ul" {...props} />
            ),
            li: ({ node, ...props }) => (
              // @ts-ignore
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
