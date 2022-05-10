import * as React from 'react';
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton
} from '@mui/material';
import { Delete, AddCircle, RemoveCircle, Close } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux';
import { stateMiniCart, miniCartItem } from './../../redux/selectors';
import miniCartSlice from '../MiniCart/miniCartSlice';


export default function MiniCart({ toggleMiniCart }) {
  const dispatch = useDispatch();
  const open = useSelector(stateMiniCart)
  const items = useSelector(miniCartItem)
  console.log(items)

  const addQuantity = (e) => {
    e.preventDefault();
    dispatch(miniCartSlice.actions.addQuantity(1))
  }

  const list = () => (
    <Box
      sx={{ width: 550, height: '100%' }}
      role="presentation"
      onKeyDown={toggleMiniCart(false)}
    >
      <Box sx={{ height: '82%' }}>
        <Grid
          justifyContent="end" // Add it here :)
          container
        >
          <IconButton
            onClick={toggleMiniCart(false)}
          >
            <Close />
          </IconButton>
        </Grid>
        <List >
          <Typography variant="h5" sx={{ ml: 2, fontWeight: 'bold' }}>Your cart</Typography>
        </List>
        {items.map((item) => (
          <List>
            <Card sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.image}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'block', width: '100%' }}>
                <CardContent sx={{ pt: 0, height: '70%' }}>
                  <Grid
                    justifyContent="space-between" // Add it here :)
                    container
                  >
                    <Grid item>
                      <Typography component="div" variant="h6">
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <div>
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </div>
                    </Grid>
                  </Grid>
                  <Typography variant="subtitle2" color="text.secondary" component="div">
                    Small | Amber
                  </Typography>
                </CardContent>
                <CardContent sx={{ pt: 0 }}>
                  <Box sx={{ display: 'flex', alignContent: 'flex-end', pb: 5 }}>
                    <Grid
                      justifyContent="space-between" // Add it here :)
                      container
                    >
                      <Grid item>
                        <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ textDecoration: 'line-through', display: 'inline-block' }}>
                          $40
                        </Typography>
                        <Typography variant="h5" color="text.secondary" component="div" sx={{ fontWeight: 'bold', display: 'inline-block', ml: 2 }}>
                          ${item.price}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <div >
                          <Button variant="contained" size="small" style={{ minWidth: '0px' }}>
                            <RemoveCircle />
                          </Button>
                          <Button variant="outlined" size="small" style={{ minWidth: '30px', paddingTop: '4px', paddingBottom: '4px' }}>
                            {item.quantity}
                          </Button>
                          <Button variant="contained" size="small" style={{ minWidth: '0px' }} onClick={()=>addQuantity(item.name)}>
                            <AddCircle />
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          </List>

        ))}
      </Box>
      <Box sx={{ height: '18%', boxShadow: 15, pb: 0 }}>
        <List sx={{ pt: 0, pb: 0 }}>
          <CardContent sx={{ pt: 0 }}>
            <Grid
              justifyContent="space-between" // Add it here :)
              container
            >
              <Grid item>
                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold', display: 'inline-block', mt: 0.5 }}>
                  Subtotal
                </Typography>
                <Typography variant="h6" component="div" sx={{ display: 'inline-block' }}>
                  (2 items)
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h7" component="div" sx={{ fontWeight: 'bold' }}>
                  $25
                </Typography>

              </Grid>
            </Grid>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Or 4 installments of $7.00 with Afterpay
            </Typography>
            <ListItem button key="1" style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', borderRadius: '15px' }}>
              <ListItemText primary="Continue To Checkout" />
            </ListItem>
          </CardContent>
        </List>
      </Box>
    </Box >
  );

  return (
    <>
      <Drawer
        anchor='right'
        open={open}
        onClose={toggleMiniCart(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}