import React, {useState, useEffect} from "react";
import {
  Typography,
  Container,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

const Product = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_PATH}/api/product`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <>
      {product ? (
        <Box>
          <Box
          >
            <Container maxWidth="md">
              <CardMedia
                component="img"
                sx={{
                  width: "85%",
                  margin: "-50px auto 0",
                }}
                image={product.image}
                alt={product.name}
              />
            </Container>
          </Box>
          <Box
            sx={{
              color: "white",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "44px",
              }}
            >
              {product.name}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "14px 32px 14px 32px",
                borderRadius: "2px",
                mt: 4,
                backgroundColor: "#1BAD93",
                color: "#fff",
                fontWeight: 700,
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#1BAD93",
                },
              }}
            >
              Add to Cart | ${product.price}
            </Button>
          </Box>
          <Container maxWidth="md">
            <Box
              sx={{
                my: "100px",
                background:
                  "linear-gradient(90deg, #060217 0.07%, #CCDAFE 52.08%, #060217 99.93%)",
                height: "1px",
              }}
            />
            <Box
              component="ul"
              className="product-details"
              color="white"
              sx={{
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "90px",
              }}
            >
              {product?.productDetails.map((detail, index) => {
                return (
                  <Box component="li" key={index}>
                    {detail?.title && (
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "18px",
                          fontWeight: 400,
                          lineHeight: "25px",
                          letterSpacing: "0.24em",
                          textAlign: "left",
                          marginBottom: "10px",
                        }}
                      >
                        {detail?.title}
                      </Typography>
                    )}
                    {detail?.description && (
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 300,
                          lineHeight: "21px",
                          letterSpacing: "0em",
                          textAlign: "left",
                        }}
                      >
                        {detail?.description}
                      </Typography>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Container>
        </Box>
      ) : (
        <p>Loading product data...</p>
      )}
    </>
  );
};

export default Product;
