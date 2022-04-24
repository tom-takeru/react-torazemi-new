import { useState } from 'react';
import { Title, Content, PublishButton } from './index';

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false);
  const publishArticle = () => {
    setIsPublished(true);
  }
  return (
    <div>
      <h1>Article.jsx</h1>
      <Title title={props.title}/>
      <Content content={props.content}/>
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  )
}

export default Article;