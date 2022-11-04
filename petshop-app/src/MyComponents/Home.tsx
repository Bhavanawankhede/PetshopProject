import * as React from 'react';
import { Box, Button, CardActionArea, CardActions, Grid, Paper, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SimpleImageSlider from 'react-simple-image-slider';

type Props = {}

const images = [
  { url: "https://cdn.shopify.com/s/files/1/1788/4235/articles/PPF-Blog-FelineTransitioning-Blog-Banner_2800x420.jpg?v=1590000174" },
  { url: "https://th.bing.com/th/id/R.ab2cad50e6088746c12bb6f6759ff6d7?rik=soKlqPReOMWP%2fg&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fwestie_dog-1920x1080.jpg&ehk=1mKpcv%2bv9dB7SDSMH9gKlu%2bzWFjmB809UbLNiXAooDA%3d&risl=&pid=ImgRaw&r=0" },
  { url: "https://th.bing.com/th/id/R.603f427267e6db5c9a2166673adddd93?rik=BAad27YV%2f3MgCg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-rfq7e5EocW4%2fToBydjwh2OI%2fAAAAAAAAABU%2fq7wLqsf1xLw%2fs1600%2fExotic%2bbirds%2bin%2bflight1.png&ehk=D7SlrdULOLDlUs4KGbWYFgpMRugpdOLGccHfhsqvgDU%3d&risl=&pid=ImgRaw&r=0" },
  { url: "https://th.bing.com/th/id/R.60c3b8d1819b871f536d60e774a3cbeb?rik=Kvd5P6BZI1FmKA&riu=http%3a%2f%2fimagebank.biz%2fwp-content%2fuploads%2f2014%2f10%2f187572.jpg&ehk=en81dZzsFEX9KFZbWPITdnaDzMBBef94rhzAdYYNWuw%3d&risl=&pid=ImgRaw&r=0" },
  { url: "https://th.bing.com/th/id/OIP.hbaRuOnAkzWU1Jr0E7TagQHaE6?pid=ImgDet&rs=1" },
  { url: "https://th.bing.com/th/id/OIP.0ym7BjR9J3vk7zBbtrCwlgHaE7?pid=ImgDet&w=1280&h=853&rs=1" },
  { url: "https://th.bing.com/th/id/OIP.kvYsfUHAAQlEVW3Z3_EEWwHaEK?pid=ImgDet&rs=1" },
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Home({ }: Props) {
  return (
    
      <Box>
        <SimpleImageSlider
        width="100%"
        height={504}
        images={images}
        showBullets={true}
        showNavs={true} /><br></br>
      {/* //////////////////////////// PET CATEGEORY ////////////////////////////////// */}
      <Box sx={{ padding: 3 }}>

        <Typography variant="h4" gutterBottom>
          Pet Categeory
        </Typography><br></br>
        <Grid container rowSpacing={0.5}>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ paddingRight: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.shopify.com/s/files/1/0272/4904/9675/collections/pexels-photo-164186_1512x.jpg?v=1573673289"
                    alt="Dog" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Dog
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of dogs their food and the accessories which will give you all the things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" href="/dog">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>

              <Card sx={{ paddingRight: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/R.7f8c8dd3e8a288b749bee614fde2250a?rik=eQvgvQub4PSewA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f4%2f9%2f157295.jpg&ehk=kJ7fttjuDD1IjM2UyznSgsG1T6ozT5Ob8UdpVCd5%2b%2bI%3d&risl=&pid=ImgRaw&r=0"
                    alt="Cat" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Cat
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of cats their food and the accessories which will give you all the things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.BMpeAKmleh7kJIE0-GYfcAHaFE?pid=ImgDet&rs=1"
                    alt="Aquerium Pets" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Aquerium Pets
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of Aquerium Pets their food and the accessories which will give things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.o06ERS51HCwiMujQnDX3EgHaEK?pid=ImgDet&rs=1"
                    alt="Birds" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Birds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of birds their food and the accessories which will give you all the things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        </Grid>
        <br /><br />

        {/* //////////////////////////FOOD CATEGEORY////////////////////////////// */}
        <Typography variant="h4" gutterBottom>
          Food Categeory
        </Typography><br></br>
        <Grid container rowSpacing={0.5}>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ paddingRight: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/31651_petsproducts_VS-pets-page-February_6_tall-tile_592x721._CB301973642_.jpg"
                    alt="Dog" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Dog
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of dogs their food and the accessories which will give you all the things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>

              <Card sx={{ paddingRight: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.qud4m2LslXO1CjzdDTSx4gHaEM?pid=ImgDet&rs=1"
                    alt="Cat" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Cat
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of cats their food and the accessories which will give you all the things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i0.wp.com/product-best.com/wp-content/uploads/2020/08/HTB1gj_AX.Y1gK0jSZFCq6AwqXXa7.jpg?fit=800%2C800&ssl=1"
                    alt="Aquerium Pets" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Aquerium Pets
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of Aquerium Pets their food and the accessories which will give things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://ak8.picdn.net/shutterstock/videos/12175748/thumb/10.jpg?i10c=img.resize(height:160)"
                    alt="Birds" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Birds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of birds their food and the accessories which will give you all the things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        </Grid>
        <br /><br />
        {/* //////////////////////////// ACCESSORIES CATEGEORY ////////////////////////////////// */}
        <Typography variant="h4" gutterBottom>
          Accessories
        </Typography><br></br>
        <Grid container rowSpacing={0.5}>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ paddingRight: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.KJNxO6BXmw0ygwHq2MUcLQHaE7?pid=ImgDet&rs=1"
                    alt="Dog" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Dog
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of dogs their food and the accessories which will give you all the things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>

              <Card sx={{ paddingRight: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://image.shutterstock.com/image-photo/accessories-cat-on-wooden-background-260nw-515237152.jpg"
                    alt="Cat" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Cat
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of cats their food and the accessories which will give you all the things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.2vEhR5HMbsl-Nqizgj_E9AHaFj?pid=ImgDet&rs=1"
                    alt="Aquerium Pets" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Aquerium Pets
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of Aquerium Pets their food and the accessories which will give things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.h38HSFleXZuyyuKARxYmUAHaHa?pid=ImgDet&rs=1"
                    alt="Birds" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Birds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of birds their food and the accessories which will give you all the things in very affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">Shop Now</Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        </Grid>
        <Box display={'flex'} sx={{ paddingTop: 5 }}>

          <Card sx={{ maxWidth: 1000 }}>
            <Typography variant='h3' color={'#595554'}>Best Quality Pet Products</Typography>
            <Typography color={'#827f85'}>
              Best online pet store for all your pet supplies and pet products. Buy pet essentials online at Pawsindia. Shop For Interactive pet toys, dog foods, dog toys, cat toys & Much more.Free and Fast shipining in All Over India. We care about the well-being of all pets, and as a socially conscious company, asiapets.in proudly sponsors a donations program to help animals in need.
              We also offer a selection of safe supplements, toys, and supplies. Pet owners choose us time and time again, and we can’t wait to show you why!

            </Typography>
          </Card>

          <Card sx={{ maxWidth: 1000 }}>
            <CardMedia
              component="img"
              height="200"

              image="https://th.bing.com/th/id/R.bec9cc8b9cdbe891f18888067f36b5ab?rik=EFFcls8fldWACg&riu=http%3a%2f%2fpavbca.com%2fwalldb%2foriginal%2f0%2f3%2f3%2f88562.jpg&ehk=C2H0OR6d%2fTTLkpVemqqcK7SmFGEfrK4m2gxl13JPRWQ%3d&risl=&pid=ImgRaw&r=0" />
          </Card>

        </Box>
      </Box>
      </Box>




  )
}