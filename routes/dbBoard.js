const express = require('express');
const boardDB = require('../controllers/boardController');

const router = express.Router();

// 게시판 페이지 호출
// localhost:4000/dbBoard
router.get('/', (req, res) => {
  boardDB.getAllArticles((data) => {
    const ARTICLE = data;
    const articleCounts = ARTICLE.length;
    res.render('db_board', {
      ARTICLE,
      articleCounts,
    });
  });
});

// 글쓰기 페이지 호출
router.get('/write', (req, res) => {
  res.render('db_board_write');
});

// 글쓰기
router.post('/write', (req, res) => {
  if (req.body.title && req.body.content) {
    boardDB.writeArticle(req.body, (data) => {
      console.log(data);
      // 쿼리 성공 여부 확인 if문
      if (data.affectedRows >= 1) {
        res.redirect('/dbBoard');
      } else {
        const err = new Error('글 쓰기 실패');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 없습니다!');
    err.statusCode = 400;
    throw err;
  }
});

// 글 수정 모드로 이동
// :id는 ID_PK 값
router.get('/modify/:id', (req, res) => {
  boardDB.getArticle(req.params.id, (data) => {
    if (data.length > 0) {
      res.render('db_board_modify', { selectedArticle: data[0] });
    } else {
      const err = new Error('해당 ID 값을 가지는 게시글이 없습니다!');
      err.statusCode = 500;
      throw err;
    }
  });
});

// 글 수정하기
router.post('/modify/:id', (req, res) => {
  if (req.body.title && req.body.content) {
    boardDB.modifyArticle(req.params.id, req.body, (data) => {
      if (data.affectedRows >= 1) {
        res.redirect('/dbBoard');
      } else {
        const err = new Error('글 수정 실패');
        err.statusCode = 500;
        throw err;
      }
    });
  } else {
    const err = new Error('글 제목 또는 내용이 존재하지 않습니다.');
    err.statusCode = 400;
    throw err;
  }
});

// 글 삭제
router.delete('/delete/:id', (req, res) => {
  boardDB.deleteArticle(req.params.id, (data) => {
    if (data.affectedRows >= 1) {
      res.redirect('/dbBoard');
    } else {
      const err = new Error('글 삭제 실패');
      err.statusCode = 500;
      throw err;
    }
  });
});

router.get('/getAll', (req, res) => {
  boardDB.getAllArticles((data) => {
    res.send(data);
  });
});

module.exports = router;
