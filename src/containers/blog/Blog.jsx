import React from 'react';
import Article from '../../components/article/Article';
import { art1, art2, art3, art4, art5 } from './imports';
import './blog.css';

const art = ['https://www.newyorker.com/culture/culture-desk/sweet-morsels-a-history-of-the-chocolate-chip-cookie', 'https://www.smithsonianmag.com/history/the-timeless-draw-of-decorating-cookies-180981699/', 'https://whatscookingamerica.net/history/cookiehistory.htm', 'https://www.deseret.com/2023/4/18/23688408/why-are-crumbl-cookies-so-popular', 'https://www.hersheyland.com/stories/the-science-behind-the-perfect-cookie.html'];

const Blog = () => (
  <div className="cookieapp__blog section__padding" id="blog">
    <div className="cookieapp__blog-heading">
      <h1 className="gradient__text">What&apos;s been baking? <br /> Let&apos;s find out.</h1>
    </div>
    <div className="cookieapp__blog-container">
      <div className="cookieapp__blog-container_groupA">
        <Article imgUrl={art1} date="Dec 19, 2013" text={<a href={art[0]} target="_blank" rel="noopener noreferrer">Sweet Morsels: A History of the Chocolate-Chip Cookie</a>} link={art[0]} />
      </div>
      <div className="cookieapp__blog-container_groupB">
        <Article imgUrl={art2} date="Feb 28, 2023" text={<a href={art[1]} target="_blank" rel="noopener noreferrer">The Timeless Draw of Decorating Cookies</a>} link={art[1]} />
        <Article imgUrl={art3} date="Oct 16, 2016" text={<a href={art[2]} target="_blank" rel="noopener noreferrer">History of Cookies</a>} link={art[2]} />
        <Article imgUrl={art4} date="Apr 18, 2023" text={<a href={art[3]} target="_blank" rel="noopener noreferrer">Crumbl Cookie is leading the dessert industry — what’s behind its popularity?</a>} link={art[3]} />
        <Article imgUrl={art5} date="Dec 29, 2020" text={<a href={art[4]} target="_blank" rel="noopener noreferrer">The Science Behind the Perfect Cookie</a>} link={art[4]} />
      </div>
    </div>
  </div>
);

export default Blog;
