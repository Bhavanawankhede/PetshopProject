import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AllPetFood from './AllPetFood';
import AllPets from './AllPets';
import AllUsers from './AllUsers';
import '../App.css';


type Props = {}

export default function Admin({ }: Props) {

  const navigate = useNavigate();

  const [showUser, setShowUser] = useState(false);
  const [showPets, setShowPets] = useState(false);
  const [showPetFood, setShowPetFood] = useState(false);




  useEffect(() => {
    const token = localStorage.getItem('userEmail');

    var loggedin = false;
    if (token == null) {
      loggedin = true;
    }
    if (loggedin == true) {
      navigate('/home');
    }

  })

  const formWidth = {
    width: 400
  }

  const showUserData = () => {
    setShowUser(true);
    setShowPets(false);
    setShowPetFood(false);
  }

  const showAllPetsData = () => {
    setShowUser(false);
    setShowPets(true);
    setShowPetFood(false);
  }

  const showAllPetFoodData = () => {
    setShowUser(false);
    setShowPets(false);
    setShowPetFood(true);
  }


  return (
    <>
      <div className="outerDiv">
        <div className="mainContainer" style={formWidth} >
          <table>
            <tr >
              <td>
                <Button className='rows' variant="contained" size="large" fullWidth onClick={showUserData}>All Users</Button>
              </td>
            </tr>

            <tr>
              <td>
                <Button className='rows' variant="contained" size="large" fullWidth onClick={showAllPetsData}>All pets</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button className='rows' variant="contained" size="large" fullWidth onClick={showAllPetFoodData}>All Pet Food</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button className='rows' variant="contained" size="large" fullWidth>Pet Accessories</Button>
              </td>
            </tr>
          </table>



        </div>
        <div>
          {showUser && <AllUsers />}
          {showPets && <AllPets />}
          {showPetFood && <AllPetFood />}
        </div>
      </div>
    </>

  )
}