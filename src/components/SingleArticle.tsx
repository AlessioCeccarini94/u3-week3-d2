import { Card, Button } from "react-bootstrap"
import { type Article } from "../types"

interface Props {
  article: Article
}

const SingleArticle = ({ article }: Props) => {
  return (
    <>
      <Card className="h-100">
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{article.title} </Card.Title>
          <Card.Text>
            {article.summary}
            <br />
            {article.published_at}
          </Card.Text>
          <Button href={`/details/${article.id}`} variant="primary">
            VAI AI DETTAGLI
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}
export default SingleArticle
