import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import SingleArticle from "./SingleArticle"

interface Article {
  id: number
  title: string
  image_url: string
  summary: string
  published_at: string
}

const URL = "https://api.spaceflightnewsapi.net/v4/blogs"

const Blogs = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const getArticles = () => {
    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Qualcosa è andato storto")
        }
      })
      .then((allArticles) => {
        setArticles(allArticles.results)
        console.log(allArticles)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    getArticles()
  }, [])
  return (
    <Container>
      <Row className=" justify-content-center text-center row-cols-1 row-cols-md-2">
        {articles.map((article) => {
          return (
            <Col className="my-3">
              <SingleArticle key={article.id} article={article} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Blogs
