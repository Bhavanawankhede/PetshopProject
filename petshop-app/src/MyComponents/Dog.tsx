


import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../MyComponents/StoreItem"
import storeItems from "../data/items.json"

export function Dog() {
  return (
    <>
      <h1>Dog</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.petId}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}