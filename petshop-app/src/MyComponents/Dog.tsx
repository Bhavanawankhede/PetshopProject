import { Box, CardActions, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

type Props = {}

export default function Dog({ }: Props) {
  return (
    <Box textAlign={'center'}>
      <Typography>
        <h3>Select Categeory</h3>
      </Typography>
      <Typography variant='h3'>
        <h3>Select Categeory</h3>
      </Typography>
      <br />
      <Box display={'flex'} justifyContent={['center']} >


        <Card sx={{ paddingRight: 1}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://th.bing.com/th/id/OIP.REim2BL_Fi8015JZT1cqpAHaE7?pid=ImgDet&rs=1"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Breeds
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get Different breeds of dogs at one stop. Shop now!!!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" variant='contained'>Shop Now</Button>
            </CardActions>
          </CardActionArea>
        </Card>

        <Card sx={{ paddingRight: 1}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/31651_petsproducts_VS-pets-page-February_6_tall-tile_592x721._CB301973642_.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Food
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get Different food of dogs at one stop. Shop now!!!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" variant='contained'>Shop Now</Button>
            </CardActions>
          </CardActionArea>
        </Card>

        <Card sx={{ paddingRight: 1}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://th.bing.com/th/id/OIP.z9j9qGE9NzXHq0i8Ojbw4wHaEs?pid=ImgDet&rs=1"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Accessories
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get Different accessories of dogs at one stop. Shop now!!!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" variant='contained'><FavoriteIcon/></Button>
            </CardActions>
          </CardActionArea>
        </Card>


      </Box>
    </Box>
  )
}