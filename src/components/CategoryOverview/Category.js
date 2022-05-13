import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, List, ListItem, Stack, ListItemButton, ListItemText, ButtonGroup, Popover, Button } from '@mui/material';
import Header from '../UI/Header';
import Carousel from '../CategoryOverview/Carousel';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Category() {
    const [category, setCategory] = useState([])

    const getCategories = () => {
        axios
            .get('http://localhost:1337/api/categories?populate=*')
            .then(response => 
                response.data.data
            )
            .then(data => {
                setCategory(data);
            })
    }
    console.log(category)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [itemHover, setItemHover] = React.useState(null);
    const categories = [
        { id: 1, name: "NEW" },
        { id: 2, name: "WOMEN" },
        { id: 3, name: "MATERNITY" },
        { id: 4, name: "MEN" },
        { id: 5, name: "TEEN" },
        { id: 6, name: "GIRLS" },
        { id: 7, name: "BOY" },
        { id: 8, name: "TODDLER" },
        { id: 9, name: "BABY" },
        { id: 10, name: "MATCHING" },
        { id: 11, name: "JEANS" },
        { id: 12, name: "SALE" },
        { id: 13, name: "FACTORY" },
    ];

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setItemHover(event.currentTarget.textContent);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    useEffect(()=> {
        getCategories();
    }, [])

    const open = Boolean(anchorEl);
    return (
        <>
            {/* <Header></Header> */}
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Box sx={{ backgroundColor: "#81d4fa" }}>
                        <ButtonGroup
                            variant="text"
                            aria-label="text button group"
                            size="large"
                        >
                            {categories.map((ca) => {
                                return (
                                    <Box
                                        key={ca.id}
                                        aria-owns={open ? "mouse-over-popover" : undefined}
                                        aria-haspopup="true"
                                        onMouseOver={handlePopoverOpen}
                                        onMouseLeave={handlePopoverClose}
                                    >
                                        <Button >{ca.name}</Button>
                                    </Box>
                                );
                            })}
                            <Popover
                                id="mouse-over-popover"
                                sx={{
                                    pointerEvents: "none",
                                }}
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                onClose={handlePopoverClose}
                                onMouseLeave={handlePopoverClose}
                            >
                                <Typography sx={{ p: 2 }} >{itemHover} use Popover.</Typography>
                            </Popover>
                        </ButtonGroup>
                    </Box>
                </Grid>
                <Grid container className="category-container" spacing={0}>
                    {category.map(category => (
                        <Grid item xs={3}>
                            <Link color="inherit" to="/categorypage">
                            <Card style={{ width: '100%' }} className="Card">
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        image={"http://localhost:1337"+category.attributes.image.data[0].attributes.url}
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
                                        <Typography variant="h5" style={{ textTransform: 'uppercase' }}>{category.attributes.name}</Typography>
                                    </Box>
                                </Box>

                            </Card>
                            </Link>
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
                                {category.map(category => (
                                    <ListItemButton style={{ padding: '0' }}>
                                        <ListItemText primary={category.attributes.name} style={{ padding: '0 12px' }} className="list-category" />
                                    </ListItemButton>
                                ))}
                            </ListItem>
                        </List>
                    </Grid>
                    {/* <Grid item xs={3} >
                        <List component={Stack} direction="row" style={{ padding: '0 7px' }}>
                            <ListItem disablePadding >
                                {listcategory2.filter((item, index) => index > 6).map(listcate => (
                                    <ListItemButton style={{ padding: '0' }}>
                                        <ListItemText primary={listcate} style={{ padding: '0 12px' }} className="list-category" />
                                    </ListItemButton>
                                ))}
                            </ListItem>
                        </List>
                    </Grid> */}
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
                            <Carousel />
                        </Grid>
                    </Grid>
                    <Grid item xs={1.5} />
                </Grid>
            </Grid>
        </>
    );
}

export default Category