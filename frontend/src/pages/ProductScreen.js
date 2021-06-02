import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Divider } from "@material-ui/core";
import Rating from "../components/Rating";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useStyles from "../material-styles/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import axios from "axios";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProducts();
  }, [match]);
  console.log(product);
  const classes = useStyles();
  return (
    <>
      <>
        <Link to="/" className={classes.linkovi}>
          <Button color="primary">Go Back</Button>
        </Link>
        <Grid container>
          <Grid item md={6}>
            <img
              src={product.image}
              alt={product.name}
              fluid
              className={classes.gridImg}
            ></img>
          </Grid>
          <Grid item md={3} className={classes.grid3RatingName}>
            <List>
              <ListItem>
                <h3>{product.name}</h3>
              </ListItem>
              <Divider></Divider>
              <ListItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListItem>
              <Divider></Divider>
              <ListItem>Price: ${product.price}</ListItem>
              <Divider></Divider>
              <ListItem>{product.description}</ListItem>
            </List>
          </Grid>
          <Grid item md={3}>
            <Card>
              <CardActionArea className={classes.cardCart}>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item md={9}>
                        Price:
                      </Grid>
                      <Grid item>${product.price}</Grid>
                    </Grid>
                  </ListItem>
                  <Divider></Divider>
                  <ListItem>
                    <Grid container>
                      <Grid item md={9}>
                        Status:
                      </Grid>
                      <Grid item>
                        {product.countInStock >= 0 ? (
                          <strong>In stock</strong>
                        ) : (
                          <strong>Out of stock</strong>
                        )}
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider></Divider>
                  <ListItem>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth="true"
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </ListItem>
                </List>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default ProductScreen;