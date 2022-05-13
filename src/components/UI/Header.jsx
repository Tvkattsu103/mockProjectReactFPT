import React, { useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Badge,
  InputBase,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ShoppingCart } from "@mui/icons-material";
import MiniCart from "../MiniCart/MiniCart";

import { useDispatch, useSelector } from "react-redux";
import { changeStateMiniCart } from "../../redux/actions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import searchSlide from "../Search/searchSlide";
import { checkUserSelector } from "../../redux/selectors";
import userSlice from "../Login/userSlice";
import useFetchData from "../../customHooks/useFetchData";
import { stateMiniCart, miniCartItem } from '../../redux/selectors';
import miniCartSlice from '../MiniCart/miniCartSlice';

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

const Header = () => {
  const dispatch = useDispatch();

  const history = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [keyword, setKeyword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cart, setCart] = React.useState([]);
  const isMenuOpen = anchorEl;
  const isMobileMenuOpen = mobileMoreAnchorEl;

  const items = useSelector(miniCartItem);
  // useEffect(() => {
  //   if (localStorage.getItem("currentuser")) {
  //     setEmail(JSON.parse(localStorage.getItem("currentuser")).email);
  //   }
  // }, [localStorage.getItem("currentuser")]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    history("/PaymentMethods");
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

  const handleLogout = () => {
    history("/Login");
    dispatch(userSlice.actions.logout({ email: "", password: "" }));
    localStorage.removeItem("currentuser");
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(searchSlide.actions.searchKeyChange(keyword));
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [keyword]);

  const handleKeyword = (e) => {
    setKeyword(e.currentTarget.value);
  };

  const toggleMiniCart = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(miniCartSlice.actions.changeState(open));
  };

  const menuId = "primary-search-account-menu";
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
      {localStorage.getItem("currentuser") ? (
        <Box>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
            onClick={toggleMiniCart(true)}
          >
            <Badge
              badgeContent={items ? items.length : 0}
              color="error"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <MiniCart toggleMiniCart={toggleMiniCart} />
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
            aria-haspopup="true"
            onClick={handleLogout}
          >
            <LogoutIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      ) : (
        <Link to="/Login" sx={{ textDecoration: "none" }}>
          <IconButton size="large" edge="end" aria-haspopup="true">
            <LoginIcon sx={{ color: "black" }} />
          </IconButton>
        </Link>
      )}
    </Menu>
  );

  const currentUser = JSON.parse(localStorage.getItem('currentuser'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              GAP
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Link
              to="/Search"
              style={{ textDecoration: "none", color: "white" }}
            >
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={keyword}
                onChange={handleKeyword}
              />
            </Link>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {localStorage.getItem("currentuser") ? (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                  onClick={toggleMiniCart(true)}
                  mr={1}
                >
                  {/*số sản phẩm trong giỏ hàng */}
                  <Badge
                    badgeContent={items ? items.length : 0}
                    color="error"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <MiniCart toggleMiniCart={toggleMiniCart} />

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
                  aria-haspopup="true"
                  onClick={handleLogout}
                >
                  <LogoutIcon sx={{ color: "white" }} />
                </IconButton>
              </>
            ) : (
              <Link to="/Login" sx={{ textDecoration: "none" }}>
                <IconButton size="large" edge="end" aria-haspopup="true">
                  <LoginIcon sx={{ color: "white" }} />
                </IconButton>
              </Link>
            )}
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
      {/* {renderMenu} */}
    </Box>
  );
};
export default Header;
