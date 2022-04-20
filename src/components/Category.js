import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, List, ListItem, Stack, ListItemButton, ListItemText } from '@mui/material';

function Category() {
    return (
        <>
            <Grid container className="category-container">
                <Grid container xs={12}>
                    <Grid item xs={3}>
                        <Card style={{ width: '100%' }} className="Card">
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    image="https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/NEW_ARRIVALS.jpg"
                                    alt="Paella dish"
                                />
                                <Box className="Box"
                                    sx={{
                                        position: 'absolute',
                                        left: '50%',
                                        bottom: '50%',
                                        transform: 'translateX(-50%)',
                                        bgcolor: 'transparent',
                                        color: 'white',
                                    }}
                                >
                                    <Typography variant="h5">Lizard</Typography>
                                </Box>
                            </Box>

                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card style={{ width: '100%' }} className="Card">
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    image="https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/JEANS.jpg"
                                    alt="Paella dish"
                                />
                                <Box className="Box"
                                    sx={{
                                        position: 'absolute',
                                        left: '50%',
                                        bottom: '50%',
                                        transform: 'translateX(-50%)',
                                        bgcolor: 'transparent',
                                        color: 'white'
                                    }}
                                >
                                    <Typography variant="h5">Animal Store life</Typography>
                                </Box>
                            </Box>

                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card style={{ width: '100%' }} className="Card">
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    image="https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/PANTS.jpg"
                                    alt="Paella dish"
                                />
                                <Box className="Box"
                                    sx={{
                                        position: 'absolute',
                                        left: '50%',
                                        bottom: '50%',
                                        transform: 'translateX(-50%)',
                                        bgcolor: 'transparent',
                                        color: 'white'
                                    }}
                                >
                                    <Typography variant="h5">Animal Store life</Typography>
                                </Box>
                            </Box>

                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card style={{ width: '100%' }} className="Card">
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    image="https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/SWEATS.jpg"
                                    alt="Paella dish"
                                />
                                <Box className="Box"
                                    sx={{
                                        position: 'absolute',
                                        left: '50%',
                                        bottom: '50%',
                                        transform: 'translateX(-50%)',
                                        bgcolor: 'transparent',
                                        color: 'white'
                                    }}
                                >
                                    <Typography variant="h5">Animal Store life</Typography>
                                </Box>
                            </Box>

                        </Card>
                    </Grid>
                </Grid>
                {/* <Grid item xs={0.5} style={{ backgroundColor: 'red' }}></Grid> */}
            </Grid>
            <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
>

  <Grid item xs={3}>
  <List component={Stack} direction="row" >
                    <ListItem disablePadding style={{width: 'auto', minWidth: '0'}}>
                        <ListItemButton>
                            <ListItemText primary="Inbox"/>
                        </ListItemButton>
                        <ListItemButton>

                            <ListItemText primary="Inbox"/>
                        </ListItemButton>
                        <ListItemButton>

                            <ListItemText primary="Inbox"/>
                        </ListItemButton>
                        <ListItemButton>

                            <ListItemText primary="Inbox"/>
                        </ListItemButton>
                    </ListItem>
                </List>
  </Grid>   
   
</Grid> 
            {/* <Box sx={{bgcolor: 'background.paper', width: '350px', maxWidth: '550px', margin:'auto' }}>
                <List component={Stack} direction="row" >
                    <ListItem disablePadding style={{width: 'auto', minWidth: '0'}}>
                        <ListItemButton>
                            <ListItemText primary="Inbox"/>
                        </ListItemButton>
                        <ListItemButton>

                            <ListItemText primary="Inbox"/>
                        </ListItemButton>
                        <ListItemButton>

                            <ListItemText primary="Inbox"/>
                        </ListItemButton>
                        <ListItemButton>

                            <ListItemText primary="Inbox"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box> */}
        </>
    );
}

export default Category