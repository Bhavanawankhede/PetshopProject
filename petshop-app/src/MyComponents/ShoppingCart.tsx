import { Button, Card, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  const [pets, setPets] = useState<any[]>([]);
  const navigate = useNavigate();

   useEffect(() => {
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
    <Card>
    <Offcanvas show={isOpen} onHide={closeCart} >
      <Offcanvas.Header closeButton> 
        <Offcanvas.Title>Cart</Offcanvas.Title>
       
      </Offcanvas.Header>
      <Offcanvas.Body>
      Close button
        <Stack >
          {cartItems.map(item => (
            <CartItem {...item} />
          ))}
          <div className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}>
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = pets.find(i => i.petId === cartItem.petId)
                return total + (item?.petPrice || 0) * cartItem.quantity
              }, 0)
            )}
                <Button className="shoppingcartbtn" href="/order">Proceed to checkout</Button>

          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
    </Card>
  )
}

