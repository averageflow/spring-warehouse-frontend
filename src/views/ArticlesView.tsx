import { useEffect, useState } from "react";
import ArticleRow from "../components/ArticleRow";
import { ArticleResponse } from "../domain/article/ArticleModels";
import { redirectToLogin } from "../domain/auth/UnauthorizedPolicies";

const getArticles = (): Promise<ArticleResponse> => {
  const url = `http://localhost:8080/api/articles`;
  const options: RequestInit = {
    method: "GET",
    credentials: "include",
  };

  return fetch(url, options)
    .then((res: Response) => {
      if (res.status != 200) {
        return redirectToLogin();
      }

      return res.json();
    })
    .catch((error) => {
      console.log("error occured", error);
    });
};

function ArticlesView(): JSX.Element {
  const [articleRows, setArticleRows] = useState((<></>) as JSX.Element);

  useEffect(() => {
    getArticles().then((articles: ArticleResponse) => {
      setArticleRows(ArticleRow(articles));
    });
  }, []);

  return (
    <div className="container">
      <h1 className="h4">Articles in the warehouse</h1>
      <div>{articleRows}</div>
    </div>
  );
}

export default ArticlesView;
