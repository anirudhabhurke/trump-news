import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Carousel from '../Carousel/Carousel';
import styles from './Feed.module.css';

const Feed = (props) => {
      return (
            <Container fluid className={styles.grid}>
                  {props.pageNo === 1 && <Carousel articles={props.carouselArticles}></Carousel>}
                  {props.articles.map((article, index) => {
                        return (
                              <Card className={styles.card} key={index} onClick={() => window.open(article.url, '_blank')}>
                                    <Card.Body>
                                          <Card.Img
                                                className={'rounded'}
                                                style={{ marginBottom: '10px', height: '10rem' }}
                                                variant="top"
                                                src={
                                                      article.urlToImage
                                                            ? article.urlToImage
                                                            : 'https://register.raceyaya.com/public/images/img_not_available.png'
                                                }
                                          />
                                          <Card.Title>{article.title ? article.title : ''}</Card.Title>
                                          <Card.Text>{article.description ? article.description.substring(0, 70) + '...' : ''}</Card.Text>
                                          <Card.Text>{article.author ? article.author : new URL(article.url).hostname}</Card.Text>
                                          <Card.Text>{article.publishedAt ? new Date(article.publishedAt).toLocaleString() : ''}</Card.Text>
                                    </Card.Body>
                              </Card>
                        );
                  })}
            </Container>
      );
};

export default Feed;
