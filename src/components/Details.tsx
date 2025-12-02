import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { type Article } from "../types"
import { Link } from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap"

const Details = () => {
  const { id } = useParams()
  const [art, setArt] = useState<Article | null>(null)

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Qualcosa è andato storto")
        }
      })
      .then((singleArticles) => {
        setArt(singleArticles)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  if (!art) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={art.image_url} />
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{art.title} </Card.Title>
              <Card.Text>
                {art.summary}
                <br />
                {art.published_at}
              </Card.Text>
              <Link className="btn bg-info " to="/">
                TORNA ALLA HOME
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
