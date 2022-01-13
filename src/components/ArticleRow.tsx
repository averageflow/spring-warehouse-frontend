import { Article, ArticleResponse } from "../domain/article/ArticleModels";
import { Table } from "react-bootstrap";

function ArticleRow(articleResponse: ArticleResponse): JSX.Element {
  return (
    <Table striped responsive bordered hover>
      <thead>
        <tr>
          <th>name</th>
          <th>stock</th>
          <th>createdAt</th>
          <th>updatedAt</th>
          <th>uuid</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(articleResponse.content).map(
          (article: Article, index: number) => {
            return (
              <tr key={index}>
                <td>{article.name}</td>
                <td>{article.stock}</td>
                <td>{new Date(article.createdAt).toLocaleString()}</td>
                <td>{new Date(article.updatedAt).toLocaleString()}</td>
                <td>
                  <small>
                    <code>{article.uid}</code>
                  </small>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </Table>
  );
}

export default ArticleRow;
