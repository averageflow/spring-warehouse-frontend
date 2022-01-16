import { Article, ArticleResponse } from "../domain/article/ArticleModels";
import { Table } from "react-bootstrap";

function ArticleRow(articleResponse: ArticleResponse): JSX.Element {
  return (
    <>
      <h1 className="mt-4 h4">Articles in the warehouse</h1>
      <Table striped responsive bordered hover className="table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Created on</th>
            <th>Updated on</th>
            <th>ID</th>
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
    </>
  );
}

export default ArticleRow;
