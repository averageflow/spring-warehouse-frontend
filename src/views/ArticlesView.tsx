import { useEffect, useState } from 'react';
import ArticleRow from '../components/ArticleRow';
import { ArticleResponse } from '../domain/ArticleModels';


function ArticlesView(): JSX.Element {
    const [articleRows, setArticleRows] = useState(<></> as JSX.Element);

    const fetchArticleRows = async () => {
        fetch(
            `http://localhost:8080/api/articles`,
            {
                method: "GET",
            }
        )
            .then(res => res.json())
            .then((response: ArticleResponse) => {
                setArticleRows(ArticleRow(response))
            })
            .catch(error => console.log(error));
    }


    useEffect(() => {
        fetchArticleRows()
    }, []);

    return (
        <>
            <div className="container">
                <h1 className="h4">Articles in the warehouse</h1>
                <div>
                    {articleRows}
                </div>
            </div>
        </>
    );
}


export default ArticlesView