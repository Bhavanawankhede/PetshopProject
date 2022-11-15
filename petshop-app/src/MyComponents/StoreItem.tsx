
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import FavoriteIcon from '@mui/icons-material/Favorite'
import '../App.css';
import { useState } from "react";
import { display } from "@mui/system";
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';




type StoreItemProps = {
  

  petId: number
  petName: string
  petPrice: number
  petImage: string

}

export function StoreItem({ petId, petName, petPrice, petImage }: StoreItemProps) {

  // const { hideStoreItem,  } = useShoppingCart()

 

  const {
    getItemQuantity,
    // getItemLike,
    increaseCartQuantity,
    wishlistIncrease,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()



  const quantity = getItemQuantity(petId);

  const Style: any ={
      width:300
  }

  // const like = getItemLike(petId)

  return (

    <Box className="mainContainer">
     
     
      {/* <br></br><br/><br/>
      <br></br> */}
    <Card >
      <CardMedia
        component="img"
        image={petImage}
        style={Style}
        // variant="top"
        // src={petImage}
        // height="200px"
        // style={{ objectFit: "cover" }}
      />
      <CardContent >
        
        <Typography variant="body2" color="text.secondary">
          <div className="price">PetName:  {petName}</div>
          <div className="price">Price:  {formatCurrency(petPrice)}</div>
        </Typography>
        <div className="buttonDiv">
        <div className="row">
          {quantity === 0 ? (
            <Button className="row" onClick={() => increaseCartQuantity(petId)} variant="contained" >
              <AddShoppingCartSharpIcon style={{"color":"white"}}></AddShoppingCartSharpIcon>
            </Button>

          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="btn-add-delete"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(petId)} variant="text" size="large"><RemoveIcon/></Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(petId)} variant="text" size="large"><AddIcon/></Button>
             
              <br/>
              <Button
                onClick={() => removeFromCart(petId)}
                variant="contained"
                size="medium"
                color="error"
              >
                Remove 
              </Button>
              </div>
            </div>
          )}
        </div>
        {/* <div className="row">
          {like === 0 ? (
            <Button className="row" onClick={() => wishlistIncrease(petId)}  style={{"backgroundColor":"#8ceaf5"}}>

              <FavoriteIcon></FavoriteIcon>
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
            
              <Button className="w-100"  >

                <FavoriteIcon></FavoriteIcon>
              </Button>
            </div>
          )}

        </div> */}
        </div>
      </CardContent>
      
    </Card>
    </Box>
  
  )
}