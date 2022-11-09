// import { CardContent, CardMedia } from "@mui/material"
// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Button, Card, Stack } from "react-bootstrap"
// import { useShoppingCart } from "../context/ShoppingCartContext"
// import storeItems from "../data/items.json"
// import { formatCurrency } from "../utilities/formatCurrency"

// type CartItemProps = {
//   petId: number
//   quantity: number
// }


// export function CartItem({ petId, quantity }: CartItemProps) {
//   console.log("selected Pet",petId);
//   const { removeFromCart } = useShoppingCart()
//   // const [item, setItem] = useState({});
//   let item: any;

//   const [pets, setPets] = useState<any[]>([]);

//    useEffect(() => {
//       axios.get('http://localhost:8080/pet/getAllPets').then((response) => {
//          setPets(response.data);
//          item = response.data.filter((i:any) => {
//           let match
//           if(i.petId == petId) {
//            match =  i;
//           }
//           return match;
//         })
         
//          console.log("***",item);
//       });
//       // .then(item = pets.find(i => i.petId === petId));
      
//    }, [item]);
  
//   console.log(item)
//   if (item == null) return null

//   return (
//     <>
//     <div>demo check</div>
//     {/* {item &&
//     <Card>
//       <CardMedia
//       component="img"
//       height="140"
//       image={item[0]?.petImage}
//       >
//     {/* <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
//       <img
//         src={item?.petImage}
//         style={{ width: "125px", height: "75px", objectFit: "cover" }}
//       /> 
//       </CardMedia>
//       <CardContent>
//       <div className="me-auto">
//         <div>
//           {item[0]?.petName}{" "}
//           {quantity > 1 && (
//             <div className="text-muted" style={{ fontSize: ".65rem" }}>
//               x{quantity}
//             </div>
//           )}
//         </div>
//         <div className="text-muted" style={{ fontSize: ".75rem" }}>
//           {formatCurrency(item?.petPrice)}
//         </div>
//       </div>
//       </CardContent>
//       <div> {formatCurrency(item?.petPrice * quantity)}</div>
//       <Button
//         variant="outline-danger"
//         size="sm"
//         onClick={() => removeFromCart(item?.petId)}
//       >
//         &times;
//       </Button>
   
//     </Card> 
//     }*/}
//     </>
//     )}

import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Stack } from "react-bootstrap"
import { Navigate, useNavigate } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  petId: number
  quantity: number
}

export function CartItem({ petId, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const [pets, setPets] = useState<any[]>([]);
  

  useEffect(() => {
     axios.get('http://localhost:8080/pet/getAllPets').then((response) => {
       console.log("response")
        setPets(response.data);
        console.log(pets);
     });
  }, []);
  const item = pets.find(i => i.petId === petId)
  if (item == null) return null

 

  return (
    <div>
    <div>
      <img
        src={item.petImage}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.petName}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.petPrice)}
        </div>
      </div>
      <div> {formatCurrency(item.petPrice * quantity)}</div>
      <Button
        variant="outline-danger"
        size="lg"
        onClick={() => removeFromCart(item.petId)}
        className="shoppingcartbtn"
      >
        Remove
      </Button>
      
    </div>
    </div>
  )
}