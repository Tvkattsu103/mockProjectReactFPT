import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
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
  Menu,
  MenuItem,
  Badge,
  InputBase,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Delete, AddCircle, RemoveCircle, Close, ShoppingCart } from '@mui/icons-material'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [keyword, setKeyword] = React.useState("");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  const handleKeyword = (e) => {
    setKeyword(e.currentTarget.value);
  }
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 550, height: '100%' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ height: '82%' }}>
        <Grid
          justifyContent="end" // Add it here :)
          container
        >
          <IconButton
            onClick={toggleDrawer(false)}
          >
            <Close />
          </IconButton>
        </Grid>
        <List >
          <Typography variant="h5" sx={{ ml: 2, fontWeight: 'bold' }}>Your cart</Typography>
          <Card sx={{ display: 'flex' }}>
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              image="https://www3.assets-gap.com/webcontent/0028/965/940/cn28965940.jpg"
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
                      The Weekend Spring Dress
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
                        $40
                      </Typography>
                    </Grid>
                    <Grid item>
                      <div >
                        <Button variant="contained" size="small" style={{ minWidth: '0px' }}>
                          <RemoveCircle />
                        </Button>
                        <Button variant="outlined" size="small" style={{ minWidth: '30px', paddingTop: '4px', paddingBottom: '4px' }}>
                          1
                        </Button>
                        <Button variant="contained" size="small" style={{ minWidth: '0px' }}>
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
        <Divider />
        <List>
          <Card sx={{ display: 'flex' }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://www3.assets-gap.com/webcontent/0028/965/940/cn28965940.jpg"
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
                      The Weekend Spring Dress
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
                        $40
                      </Typography>
                    </Grid>
                    <Grid item>
                      <div >
                        <Button variant="contained" size="small" style={{ minWidth: '0px' }}>
                          <RemoveCircle />
                        </Button>
                        <Button variant="outlined" size="small" style={{ minWidth: '30px', paddingTop: '4px', paddingBottom: '4px' }}>
                          1
                        </Button>
                        <Button variant="contained" size="small" style={{ minWidth: '0px' }}>
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

  console.log(keyword);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            GAP
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={keyword}
              onChange={handleKeyword}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <ShoppingCart />
            </IconButton>
            <Drawer
              anchor='right'
              open={state}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
