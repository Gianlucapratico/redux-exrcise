import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const favouriteCompany = useSelector(
    (state) => state.favouriteCompany.content
  );
  const dispatch = useDispatch();
  return (
    <>
      <Row
        className="mx-0 mt-3 p-3 "
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
        <Col xs={12} className="d-flex justify-content-end ms-auto">
          <Button
            onClick={() =>
              dispatch({ type: "ADD_TO_FAVOURITE", payload: data })
            }
          >
            Wishlist
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default Job;
