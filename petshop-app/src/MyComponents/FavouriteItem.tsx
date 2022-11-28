import axios from "axios"
import { useEffect, useState } from "react"
import { Stack } from "react-bootstrap"
import { Navigate, useNavigate } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import Button from '@mui/material/Button';

type CartItemProps = {
  id: number
}

export function FavouriteItem({ id }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity } = useShoppingCart()
  const [pets, setPets] = useState<any[]>([]);
  const [status, setStatus] = useState(true);
  const token: any = localStorage.getItem("wishItem");
  const userEmail = localStorage.getItem("userEmail")

  useEffect(() => {
    axios.get(`http://localhost:8080/favouriteList/getFavouriteList/${userEmail}`).then((response) => {
      console.log("response")
      console.log(response.data[0]);
      
        setPets(response.data);
      
      
      console.log(pets);
    });
    
  }, []);
  const item = pets.find(i => i.petId === id)
  if (item == null) return null



  const removeFavourite = (petId: any) => {
    removeFromCart(petId)
    setStatus(false);
    localStorage.removeItem("wishItem")
  }


  return (
    <div>
      {status && <div>
        <img
          src={item.petImage}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.petName}{" "}


          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.petPrice)}
          </div>
        </div>
        <div className="outerDiv">
          <div className="innerDiv">
            <Button
              variant="contained"
              size="large"
              color="error"
              onClick={() => removeFavourite(item.petId)}
              className="shoppingcartbtn"
            >
              Remove
            </Button></div>
          <div>
            <Button
              variant="contained"
              size="large"
              color="success"
              onClick={() => increaseCartQuantity(item.petId)}
              className="shoppingcartbtn"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      }
    </div>
  )
}