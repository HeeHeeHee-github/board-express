const express = require('express');

const router = express.Router();

const ARTICLE = [
  {
    title: 'title1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perspiciatis, placeat nihil excepturi, dicta quae cumque eius quod ad iste in, vel blanditiis vitae numquam? Eum, optio vel! Quia, consectetur.',
  },
  {
    title: 'title2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perspiciatis, placeat nihil excepturi, dicta quae cumque eius quod ad iste in, vel blanditiis vitae numquam? Eum, optio vel! Quia, consectetur.',
  },
];

// localhost:4000/board

// 글 전체 목록 보여주기
router.get('/', (req, res) => {
  res.render('board', { ARTICLE, articleCounts: ARTICLE.length });
});

// write
// 글 쓰기 모드로 이동
router.get('/write', (req, res) => {
  res.render('board_write');
});

// 글 추가
router.post('/write', (req, res) => {
  if (req.body.title && req.body.content) {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
    };
    ARTICLE.push(newPost);
    res.redirect('/board');
  } else {
    const err = new Error('폼 입력을 확인 해주세요!');
    err.statusCode = 400;
    throw err;
  }
});

// modify
// 글 수정 모드로 이동
router.get('/modify/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex(
    (article) => req.params.title === article.title
  );
  const selectedArticle = ARTICLE[arrIndex];
  res.render('board_modify', { selectedArticle });
});

// 글 수정
router.post('/modify/:title', (req, res) => {
  if (req.body.title && req.body.content) {
    const arrIndex = ARTICLE.findIndex(
      (article) => article.title === req.params.title
    );
    ARTICLE[arrIndex].title = req.body.title;
    ARTICLE[arrIndex].content = req.body.content;
    res.redirect('/board');
  } else {
    const err = new Error('폼 입력을 확인 해주세요!');
    err.statusCode = 400;
    throw err;
  }
});

// 글 삭제
router.delete('/delete/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex(
    (article) => article.title === req.params.title
  );
  ARTICLE.splice(arrIndex, 1);
  res.send('삭제 완료!');
});

module.exports = router;
