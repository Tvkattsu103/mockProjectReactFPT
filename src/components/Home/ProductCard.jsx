import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import usePostData from "../../customHooks/usePostData";
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { stateMiniCart, miniCartItem } from '../../redux/selectors';
import miniCartSlice from '../MiniCart/miniCartSlice';
import axios from "axios";
import {productCardSliceAction} from './ProductCardSlice'

const ProductCard = ({ id, title, image, price, maxWidth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var cartID = 0; 
  const { enqueueSnackbar } = useSnackbar();
  const handleAddToCart = (variant) => () => {
    if (!localStorage.getItem("currentuser")) {
      navigate("/Login");
    } else {
      axios
        .post("http://localhost:1337/api/carts?populate=*", {
          data: {
            quantity: 1,
            size: "38",
            products: id,
            image: image,
            price: price,
            title: title,
            email: JSON.parse(localStorage.getItem("currentuser")).email,
            account: JSON.parse(localStorage.getItem("currentuser")).id,
          }
        })
        .then((response) => {
          console.log(response);
          cartID=response.data.data.id;
          dispatch(miniCartSlice.actions.addItem({
            id:cartID,
            quantity: 1,
            size: "38",
            products: id,
            image: image,
            price: price,
            title: title,
            email: JSON.parse(localStorage.getItem("currentuser")).email,
            account: JSON.parse(localStorage.getItem("currentuser")).id,
          }));
        })
      enqueueSnackbar("Thêm vào giỏ hàng thành công!", { variant });
    }
  };
  const handleClick = () => {
    dispatch(productCardSliceAction(image))
    navigate(`/${title}/${price}`)
  }
  return (
    <>
      <Card sx={{ maxWidth: maxWidth }}>
        <CardMedia component="img" height="400" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='product-title'>
            {title}
          </Typography>
          {/* <Typography variant="h6" color="text.secondary">
                      {p.category}
                    </Typography> */}
          <Typography variant="h5" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleAddToCart('success')}>
            <AddShoppingCartIcon />
          </Button>
          <Button size="small" onClick={ handleClick}>
            Xem chi tiết sản phẩm</Button>
        </CardActions>
      </Card>
    </>
  );
};
export default ProductCard;
