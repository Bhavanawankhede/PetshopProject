import { Button, Card, CardActions, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import * as React from 'react';
import JsonData from './data.json';
import '../App.css';



export default function Favourites() {
  const [sortBy, setSortBy] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  // let DisplayData = () =>{

  //   if(sortBy == "Food"){
  //     JsonData.filter(e => e.category == "Food").map(
  //       (info)=>{
  //       return(
  //         <tr>
  //             <td>
  //                 <Card>
  //                 <CardMedia
  //       component="img"
  //       image={info.img}
  //     >
  //     </CardMedia>
  //     <CardContent>
    
  //       <Typography gutterBottom variant="h5" component="div">
  //         {info.name}
  //       </Typography>
  //       <Typography variant="body2" color="text.secondary">
  //         {info.city}
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //       <Button size="small" color='success'>Add to cart</Button>
  //       <Button size="small" color='error'>Remove</Button>
  //     </CardActions>
  //                 </Card>
  //                 </td>
  //           </tr>
  //       )
    
  //       })
  //     }
  //     else{
  //       JsonData.map(
  //         (info)=>{
  //             // if(info.category == "Food"){
  //               return(
  //                 <tr>
  //                     <td>
  //                         <Card>
  //                         <CardMedia
  //               component="img"
  //               image={info.img}
  //             >
  //             </CardMedia>
  //             <CardContent>
            
  //               <Typography gutterBottom variant="h5" component="div">
  //                 {info.name}
  //               </Typography>
  //               <Typography variant="body2" color="text.secondary">
  //                 {info.city}
  //               </Typography>
  //             </CardContent>
  //             <CardActions>
  //               <Button size="small" color='success'>Add to cart</Button>
  //               <Button size="small" color='error'>Remove</Button>
  //             </CardActions>
  //                         </Card>
  //                         </td>
  //                   </tr>
  //               )
  //             }
              
              
  //           // }
  //       )
        

  //     }
  // }

 
  

// const DisplayData = JsonData.map(
//   (info)=>{
//     if(info.category === "Food"){
//       return(
//         {DisplayFoodData}
//       )
//     }
//   }
// ) 

const DisplayData = JsonData.map(
        (info)=>{
        return(
          <tr>
              <td>
                  <Card>
                  <CardMedia
        component="img"
        image={info.img}
      >
      </CardMedia>
      <CardContent>
    
        <Typography gutterBottom variant="h5" component="div">
          {info.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.city}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='success'>Add to cart</Button>
        <Button size="small" color='error'>Remove</Button>
      </CardActions>
                  </Card>
                  </td>
            </tr>
        )
    
        }
)


  return (
    <div>
      <br/><br/><br/>

      <div style={{"float":"right"}}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          autoWidth
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value={'Food'}>Food</MenuItem>
          <MenuItem value={'Pet'}>Pet</MenuItem>
          <MenuItem value={'Accessories'}>Accessories</MenuItem>
        </Select>
      </FormControl>
    </div>
    <br/><br/><br/>
    <div>
    <table className="table" >
        <tbody className="showProducts">
            {DisplayData}
        </tbody>
    </table>
    </div>
</div>
  );
}
