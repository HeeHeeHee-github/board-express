const connection = require('./dbConnect');

const userDB = {
  // 중복 유저 찾기
  userCheck: (userId, cb) => {
    connection.query(
      `SELECT * FROM mydb1.user WHERE USER_ID = '${userId}';`,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(data);
      },
    );
  },
  // 회원가입 하기
  registerUser: (newUser, cb) => {
    connection.query(
      `INSERT INTO mydb1.user (USER_ID, PASSWORD) VALUES ('${newUser.id}','${newUser.password}');`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
};

module.exports = userDB;
