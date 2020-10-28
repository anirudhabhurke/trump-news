import React, { useEffect, useState } from 'react';
import { Feed, Header, Paginator, Error as ErrorHandler } from './components';
import Spinner from 'react-bootstrap/Spinner';

const App = () => {
      const [newsList, setNewsList] = useState([]);
      const [carouselArticles, setCarouselArticles] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [pageNo, setPageNo] = useState(1);
      const [totalResults, setTotalResults] = useState(0);

      useEffect(() => {
            setLoading(true);
            setNewsList([]);
            setCarouselArticles([]);
            fetch(`https://newsapi.org/v2/top-headlines?q=trump&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}&page=${pageNo}`)
                  .then((res) => {
                        if (res.status >= 400) {
                              throw new Error('Bad response from server');
                        }
                        return res.json();
                  })
                  .then((response) => {
                        setLoading(false);
                        setTotalResults(response.totalResults);
                        if (pageNo === 1) {
                              const carouselArticles = response.articles.slice(0, 5);
                              const feedArticles = response.articles.slice(5, response.articles.length);
                              setCarouselArticles(carouselArticles);
                              setNewsList(feedArticles);
                        } else {
                              setNewsList(response.articles);
                        }
                  })
                  .catch((err) => {
                        setLoading(false);
                        setError(err);
                  });
      }, [pageNo]);

      return (
            <div style={{ textAlign: 'center' }}>
                  <Header></Header>
                  {error && <ErrorHandler errorMessage={error.message}></ErrorHandler>}
                  {loading && <Spinner animation="border" className={'mt-5'} />}
                  {!loading && !error && <Feed articles={newsList} carouselArticles={carouselArticles} pageNo={pageNo}></Feed>}
                  <div className={'d-flex justify-content-md-center'}>
                        <Paginator totalPages={Math.ceil(totalResults / 20)} pageNo={pageNo} setPageNo={setPageNo}></Paginator>
                  </div>
            </div>
      );
};

export default App;
