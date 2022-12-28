import '../App.css'
import { Container, Form, InputGroup } from "react-bootstrap";
import { StoreItem } from "./StoreItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import PetFood from './PetFood';
import PetAccessories from './PetAccessories';
import Pet from './Pet';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useTranslation } from 'react-i18next';

export function Item() {
  const [items, setItems] = useState<any[]>([]);
  const [token] = useState(sessionStorage.getItem("token_CUSTOMER"));
  const [pet, setPet] = useState(true);
  const [petFood, setPetFood] = useState(false);
  const [petAccessories, setPetAccessories] = useState(false);

  const { t } = useTranslation(['home', 'main']);

  type itemCategoryIdType = {
    itemCategoryId: number;
  };

  const { itemCategoryId } = useParams() as any;
  const navigate = useNavigate();
  const itemCategoryName = localStorage.getItem("itemCategoryName")

  useEffect(() => {
    if (token == null) {
      navigate("/home");
    }
    axios
      .get(
        `http://localhost:8080/item/getAllItemsByItemCategoryId/${itemCategoryId}`
      )
      .then((response) => {
        setItems(response.data);
      });
  }, []);

  
  const displayPetFood = () => {
    setPet(false);
    setPetFood(true);
  }

  const displayPets = () => {
    setPet(true);
    setPetFood(false);
    setPetAccessories(false);
    
  }

  const displayPetAccessories = () => {
    setPet(false);
    setPetFood(false);
    setPetAccessories(true);
    
  }

  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('');

  const handleChangeFilter = (event: SelectChangeEvent) => {
    setFilterValue(event.target.value as string);
  };

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSortValue(event.target.value as string);
    localStorage.setItem("sortValue", sortValue);
  };


  return (
    <Container>
      <Form>
        <div>
          <h2>he</h2>
        </div>
        <InputGroup className="my-3">
        </InputGroup>
      </Form><br />

      <FormControl className="petSelect">
        <InputLabel className='inputlabel'><FilterListIcon color='primary' fontSize='medium' />{t("itemFilter", { ns: ['main', 'home'] })}</InputLabel>
        <Select
          value={filterValue}
          onChange={handleChangeFilter}
        >
          <MenuItem value={1} onClick={displayPets}>{itemCategoryName}</MenuItem>
          <MenuItem value={2} onClick={displayPetFood}>{itemCategoryName} food</MenuItem>
          <MenuItem value={3} onClick={displayPetAccessories}>{itemCategoryName} Accessories</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="petSelect">
        <InputLabel className='inputlabel'><FilterListIcon color='primary' fontSize='medium' />{t("itemSort", { ns: ['main', 'home'] })}</InputLabel>
        <Select
          value={sortValue}
          onChange={handleChangeSort}
        >
          <MenuItem value={1}>By Name</MenuItem>
          <MenuItem value={2}>By Price- Low to High</MenuItem>
          <MenuItem value={3} >By Price - High to Low</MenuItem>
        </Select>
       

      </FormControl>


      <h1>{t("itemResult", { ns: ['main', 'home'] })}</h1>
      <h3 className='h3Tag'>{t("itemDescription", { ns: ['main', 'home'] })}</h3>


      {pet && <Pet />}
      {petFood && <PetFood />}
      {petAccessories && <PetAccessories />}
    
    </Container>
  );
}
