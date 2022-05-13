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
import {useNavigate} from 'react-router-dom'

const ProductCard = ({ id, title, image, price, maxWidth }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = (variant) => () => {
    if (!localStorage.getItem("currentuser")) {
      navigate("/Login");
    } else {
      usePostData("http://localhost:1337/api/carts?populate=*", {
        quantity: 1,
        size: "38",
        products: id,
        email: JSON.parse(localStorage.getItem("currentuser")).email,
      });
      enqueueSnackbar("Thêm vào giỏ hàng thành công!", {variant});
    }  
  };

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
          <Button size="small">Buy now</Button>
        </CardActions>
      </Card>
    </>
  );
};
export default ProductCard;
