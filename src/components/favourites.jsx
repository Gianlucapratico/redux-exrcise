import { Col, ListGroup, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.Favourites.content);
  const dispatch = useDispatch();
  return (
    <Col sm={12} className="mb-5">
      <ListGroup variant="flush">
        {favourites.length > 0 ? (
          favourites.map((favourites, i) => (
            <ListGroup.Item key={i}>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_FAVOURITE", payload: i });
                }}
              ></Button>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item className="lead ">
            <span className="text-primary opacity-50 fs-1 me-2"> </span>
            Your cart is empty
          </ListGroup.Item>
        )}
      </ListGroup>
    </Col>
  );
};
export default Favourites;
