import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function PostList() {
  const history = useHistory()
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" component="p">
            Content
          </Typography>
        </CardContent>
      </Card>
    )
  })

  return <>
    <Button color="primary" onClick={() => history.push('/blog/new')}> Create New Blog</Button>
    <div className="d-flex flex-row flex-wrap justify-content-between" >
      {renderedPosts} </div>;
  </>
}