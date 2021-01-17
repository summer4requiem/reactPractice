import React from 'react';
import { connect } from 'react-redux';
import { getNewsTC } from '../../Redux/news-reducer';
import s from "./News.module.css";

const NewsCard = (props) => {
  return (
    <article className={s.newsCard}>
      <div>
        {props.imgUrl ? <img src={props.imgUrl} width="100" alt="" />: <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/14466/production/_115964038_gettyimages-453153247.jpg" width="100" alt="" />}
      </div>
      <h2>{props.title}</h2>
      {/* <span>{props.sourceName.name}</span> */}
      <p>{props.content}</p>
    </article>
  )
}

const News = (props) => {
  let newsCards = props.news.map((n) => <NewsCard imgUrl = {n.urlToImage} title={n.title} sourceName={n.source.name} content={n.content} />);
  props.getNewsTC();
  return (
    <section className={s.feed}>
      <h1>Страница новостей</h1>
      <div className={s.newsContainer}>
      {newsCards}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
  }
}
export default connect(mapStateToProps, { getNewsTC })(News);


