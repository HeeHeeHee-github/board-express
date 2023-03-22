const express = require('express');

const userDB = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', (req, res) => {
  userDB.userCheck(req.body.id, (data) => {
    if (data.length === 0) {
      // 회원가입 진행
      // 동일한 data를 못 찾았을때
      userDB.registerUser(req.body, (result) => {
        if (result.affectedRows >= 1) {
          res.status(200);
          // json으로 보내면 표시 안 되고, 아래처럼 해야함
          res.send('회원가입 성공! <br><a href="/login">로그인으로 이동</a>');
        } else {
          res.status(500);
          res.send(
            '회원가입 실패! 알 수 없는 문제 발생 <br><a href="/register">회원가입으로 다시 이동</a>',
          );
        }
      });
    } else {
      res.status(400);
      res.send(
        '동일한 아이디를 가진 회원이 존재합니다. <br><a href="/register">회원가입으로 이동</a>',
      );
    }
  });
});

module.exports = router;
