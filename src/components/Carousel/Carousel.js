import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css';

const CarouselComponent = (props) => {
      return (
            <Container className={styles.carouselContainer}>
                  <Carousel>
                        {props.articles.map((article, index) => (
                              <Carousel.Item key={index}>
                                    <img
                                          className="d-block w-100"
                                          src={
                                                article.urlToImage
                                                      ? article.urlToImage
                                                      : 'https://register.raceyaya.com/public/images/img_not_available.png'
                                          }
                                          style={{ height: '30rem' }}
                                          alt="Slide"
                                    />
                                    <Carousel.Caption className={styles.carouselText} onClick={() => window.open(article.url, '_blank')}>
                                          <h3>{article.title ? article.title : ''}</h3>
                                          <p>{article.description ? article.description.substring(0, 50) + '...' : ''}</p>
                                    </Carousel.Caption>
                              </Carousel.Item>
                        ))}
                  </Carousel>
            </Container>
      );
};

export default CarouselComponent;
