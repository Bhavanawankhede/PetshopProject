import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "../MyComponents/StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";

export function Dog() {
  const [pets, setPets] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/petCategory/findByCategoryName/dog').then((response) => {
      console.log(response.data)
      setPets(response.data.pets);

    });
  }, []);

  const DisplayData = pets.map((pet) => {
    return (
      <tr>
        <td>
          <StoreItem {...pet} />
        </td>
      </tr>
    )
  })
  console.log(pets);
  return (
    <Container>

      <table className="table" >
        <tbody className="ShowDogs">
          {DisplayData}
        </tbody>
      </table>

    </Container>
  )
}