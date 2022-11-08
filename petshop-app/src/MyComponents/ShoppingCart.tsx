import { Card, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <Card>
    <Offcanvas show={isOpen} onHide={closeCart} >
      <Offcanvas.Header closeButton> 
        <Offcanvas.Title>Cart</Offcanvas.Title>
       
      </Offcanvas.Header>
      <Offcanvas.Body>
      Close button
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem {...item} />
          ))}
          <div className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}>
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.petId === cartItem.petId)
                return total + (item?.petPrice || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
    </Card>
  )
}

