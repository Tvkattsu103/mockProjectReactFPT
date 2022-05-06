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
import Link from '@mui/material/Link';
import Header from './../UI/Header';
import Carousel from './../Home/Carousel';
import axios from 'axios';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  
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
          <Container maxWidth="">
            <Carousel />
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
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
                    image={"http://localhost:1337"+product.attributes.Image.data[0].attributes.url}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>
                      {product.attributes.Title}
                    </Typography>
                    <Typography variant='h7'>
                      ${product.attributes.Price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{margin: 'auto', bgcolor:'black', color:'white', pl:2, pr:2}}>Add To Cart</Button>
                  </CardActions>
                </Card>
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