


import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../MyComponents/StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";

export function Dog() {
  const [pets, setPets] = useState<any[]>([]);

   useEffect(() => {
      axios.get('http://localhost:8080/pet/getAllPets').then((response) => {
        console.log("response")
         setPets(response.data);
         console.log(pets);
      });
   }, []);
  return (
    <>
      <h1>Dog</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
      {pets.map((pet) => (
          <Col key={pet.petId}>
            <StoreItem {...pet} />
          </Col>
        ))}
      </Row>
     
    </>
  )
}