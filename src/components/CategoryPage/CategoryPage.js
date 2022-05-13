import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as LinkHref } from '@mui/material';
import Header from './../UI/Header';
import Carousel from './../Home/Carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductCard from "../Home/ProductCard";
import miniCartSlice from '../MiniCart/miniCartSlice';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <LinkHref color="inherit" href="https://mui.com/">
        Your Website
      </LinkHref>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function CategoryPage() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  // const addToCard = (e, product) => {
  //   e.preventDefault();
  //   console.log(product.attributes);
  //   const img = "http://localhost:1337" + product.attributes.image.data[0].attributes.url;
  //   dispatch(miniCartSlice.actions.addItem({title:product.attributes.title, image:img, price:product.attributes.price, quantity:1}))
  // }

  const getCategoryPage = () => {
    axios
      .get('http://localhost:1337/api/products?populate=*')
      .then(response =>
        response.data.data
      )
      .then(data => {
        setProducts(data);
      })
  }
  console.log(products)
  useEffect(() => {
    getCategoryPage();
  }, [])
  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
          }}
        >
          <Container maxWidth="lg">
            <Carousel />
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={2}>
            
            {products.map((p) => (
              <Grid item key={p.id} xs={12} sm={6} md={3}>
                {/* <Link color="inherit" to="/Product">
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        height: '350px',
                        width: '100%'
                      }}
                      image={"http://localhost:1337" + product.attributes.image.data[0].attributes.url}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography>
                        {product.attributes.title}
                      </Typography>
                      <Typography variant='h7'>
                        ${product.attributes.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={(e)=>addToCard(e,product)} className="Button" size="small" sx={{ margin: 'auto', bgcolor: 'black', color: 'white', pl: 2, pr: 2 }}>Add To Cart</Button>
                    </CardActions>
                  </Card>
                </Link> */}
                <ProductCard
                  id={p.id}
                  title={p.attributes.title}
                  image={
                    "http://localhost:1337" +
                    p.attributes.image.data[0].attributes.url
                  }
                  price={p.attributes.price}
                  maxWidth={450}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}