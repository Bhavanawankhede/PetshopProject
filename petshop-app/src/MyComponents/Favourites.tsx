import {  Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import { FavouriteItem } from "./FavouriteItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react"
import axios from "axios"
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type ShoppingCartProps = {
  isOpen: boolean
}

export function Favourites() {
  const { closeCart, wishItems } = useShoppingCart()
  const [pets, setPets] = useState<any[]>([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("wishItem");
  const [status,setStatus] = useState(true);

   useEffect(() => {

    if(token == null){
      setStatus(false)
    }
      axios.get('http://localhost:8080/pet/getAllPets').then((response) => {
        console.log("response")
         setPets(response.data);
         console.log(pets);
      });
   }, []);

   const checkout:any= () =>{
    navigate("/order")
  }




  return (
    <Card className="mainContainer">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Cart
        </Typography>
        {!token && <Typography>
          <h3>Favourite list is empty...</h3>
        </Typography>}
        <Stack >
          {wishItems.map((item) => (
            <FavouriteItem {...item} />
          ))}
        
        </Stack>

      </CardContent>
    </Card>
  )
}

