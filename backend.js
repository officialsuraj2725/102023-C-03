const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/comments', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
    const comments = response.data;
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching comments');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
