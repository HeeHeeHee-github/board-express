const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const PORT = 4000;

app.use(cors()); // 서버 설정
app.set('view engine', 'ejs');
app.use(express.static('public'));

// body.parser을 선언하는 이유 -> 폼 태그에 있는 정보들을 req.body 에 담기 위해
// 밑에 ROUTER 위에 써야함
// 아니면 undefinded가 출력
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'hee',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1시간
    },
  }),
);

const mainRouter = require('./routes/index'); // index 생략 가능
const userRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');
const dbBoardRouter = require('./routes/dbBoard');
const cookieRouter = require('./routes/cookie');

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);
app.use('/dbBoard', dbBoardRouter);
app.use('/cookie', cookieRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 실행 중입니다!`);
});
