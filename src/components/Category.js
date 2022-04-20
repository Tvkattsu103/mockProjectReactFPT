import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, List, ListItem, Stack, ListItemButton, ListItemText, imageListItemClasses } from '@mui/material';

function Category() {
    const category = [
        {
            name: 'New Arrivals',
            img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/NEW_ARRIVALS.jpg'
        },
        {
            name: 'Jeans',
            img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/JEANS.jpg'
        },
        {
            name: 'Pants',
            img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/PANTS.jpg'
        },
        {
            name: 'Sweats',
            img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/SWEATS.jpg'
        },
        {
            name: 'Sweaters',
            img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/SWEATERS.jpg'
        },
        {
            name: 'Dresses',
            img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/DRESSES.jpg'
        },
        {
            name: 'Outerwear',
            img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/OUTERWEAR.jpg'
        },
        {
            name: 'Tees',
            img: 'https://www.gap.com/Asset_Archive/GPWeb/content/0028/619/791/assets/TEES.jpg'
        }
    ]
    const listcategory2 = [
        'New Arrivals', 'Jeans', 'Dresses', 'Jumpsuits & Rompers', 'T-shirts', 'Shirts & Tops', 'Sweatshirts & Sweatpants',
        'Sweaters', 'Outerwear & Jacket', 'Pants', 'Shorts', 'Skirts', 'Swim', 'Shoes & Accessories', 'Gapfit',
        'Gapbody', 'Sale'
    ]
    const data = [
        {
            name: "Pizza Begin",
            link: "pizza-begin.co.il",
        },
        {
            name: "Mia Luz",
            link: "mia-luz.com",
        },
        {
            name: "Nuda Swim",
            link: "nudaswim.com"
        }
       ];
    // const sliderItems = data.length > 3 ? 3 : data.length;
    // const items = [];

    // for (let i = 0; i < data.length; i += sliderItems) {
    //     if (i % sliderItems === 0) {
    //         items.push(
    //             <Card raised className="Banner" key={i.toString()}>
    //                 <Grid container spacing={0} className="BannerGrid">
    //                     {data.slice(i, i + sliderItems).map((da, index) => {
    //                         return <SubCategory key={index.toString()} item={da} />;
    //                     })}
    //                 </Grid>
    //             </Card>
    //         );
    //     }
    // }
    return (
        <>
            <Grid container className="category-container">
                {category.map(category => (
                    <Grid item xs={3}>
                        <Card style={{ width: '100%' }} className="Card">
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    image={category.img}
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
                                    <Typography variant="h5" style={{ textTransform: 'uppercase' }}>{category.name}</Typography>
                                </Box>
                            </Box>

                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={3} >
                    <List component={Stack} direction="row" style={{ padding: '0 7px' }}>
                        <ListItem disablePadding >
                            {listcategory2.filter((item, index) => index <= 6).map(listcate => (
                                <ListItemButton style={{ padding: '0' }}>
                                    <ListItemText primary={listcate} style={{ padding: '0 12px' }} className="list-category" />
                                </ListItemButton>
                            ))}
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={3} >
                    <List component={Stack} direction="row" style={{ padding: '0 7px' }}>
                        <ListItem disablePadding >
                            {listcategory2.filter((item, index) => index > 6).map(listcate => (
                                <ListItemButton style={{ padding: '0' }}>
                                    <ListItemText primary={listcate} style={{ padding: '0 12px' }} className="list-category" />
                                </ListItemButton>
                            ))}
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={0}
                marginTop={7}
            >
                <Grid item xs={1.5} />
                <Grid container xs={9} >
                    <Grid item xs={12}>
                        <Typography hy variant="h5">We Know You’ll Love These</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <Carousel animation="slide" autoPlay={false} cycleNavigation timeout={300}>
                            {items}
                        </Carousel> */}
                    </Grid>
                </Grid>
                <Grid item xs={1.5} />
            </Grid>
        </>
    );
}

export default Category