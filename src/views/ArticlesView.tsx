import { useEffect, useState } from "react";
import ArticleRow from "../components/ArticleRow";
import { ArticleResponse } from "../domain/article/ArticleModels";
import { redirectToLogin } from "../domain/auth/UnauthorizedPolicies";
import { defaultHost } from "../domain/Constants";

const getArticles = (): Promise<ArticleResponse> => {
  const host = process.env.REACT_APP_BACKEND_URL ?? defaultHost
  const url = `${host}/api/articles`;
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
      <div>{articleRows}</div>
    </div>
  );
}

export default ArticlesView;
