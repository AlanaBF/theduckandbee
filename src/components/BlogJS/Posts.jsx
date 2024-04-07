import Post1 from "./Post1";
import { Container, Row, Col} from "react-bootstrap";

const Posts = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col md={4} >
          <Post1 />
        </Col>
      </Row>
    </Container>
  );
};

export default Posts;
