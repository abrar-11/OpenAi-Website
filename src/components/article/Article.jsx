import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => {
   return (
      <div className="blog-container-article">
         <div className="blog-container-article-image">
            <img src={imgUrl} alt="blog_image" loading="lazy" />
         </div>
         <div className="blog-container-article-content">
            <div>
               <p>{date}</p>
               <h3>{text}</h3>
            </div>
            <p>Read Full Article</p>
         </div>
      </div>
   );
};

export default Article;
