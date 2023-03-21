const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://admin:ahdrhelql0105@cluster0.5arciio.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// insertOne
// client.connect((err) => {
//   const test = client.db('hee').collection('test');
//   // perform actions on the collection object
//   // 빈 객체를 넣으면 전부 지워줌.
//   // 저 쿼리문에 대한 응답이 들어오면 다음 코드를 실행해주세요 라는 뜻
//   // 지우고 에러가 발생하지 않으면 test 컬렉션에 데이터 다 지워짐

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//     test.insertOne(
//       {
//         name: 'pororo',
//         age: 5,
//       },
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
// });

// insertMany
// client.connect((err) => {
//   const test = client.db('hee').collection('test');
//   // perform actions on the collection object
//   // 빈 객체를 넣으면 전부 지워줌.
//   // 저 쿼리문에 대한 응답이 들어오면 다음 코드를 실행해주세요 라는 뜻
//   // 지우고 에러가 발생하지 않으면 test 컬렉션에 데이터 다 지워짐

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
// });

// deleteOne, deleteMany
// client.connect((err) => {
//   const test = client.db('hee').collection('test');
//   // perform actions on the collection object
//   // 빈 객체를 넣으면 전부 지워줌.
//   // 저 쿼리문에 대한 응답이 들어오면 다음 코드를 실행해주세요 라는 뜻
//   // 지우고 에러가 발생하지 않으면 test 컬렉션에 데이터 다 지워짐

//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         // deleteOne
//         // test.deleteOne(
//         //   {
//         //     name: 'crong',
//         //   },
//         //   (deleteOneErr, deleteOneResult) => {
//         //     if (deleteOneErr) throw deleteOneErr;
//         //     console.log(deleteOneResult);
//         //   },
//         // );

//         // deleteMany
//         test.deleteMany(
//           {
//             age: { $gte: 5 }, // gte 크거나 같을때
//           },
//           (deleteManyErr, deleteManyResult) => {
//             if (deleteManyErr) throw deleteManyErr;
//             console.log(deleteManyResult);
//           },
//         );
//       },
//     );
//   });
// });

// updateOne, updateMany 쿼리
// client.connect((err) => {
//   const test = client.db('hee').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         // test.updateOne(
//         //   { name: 'loopy' },
//         //   { $set: { name: '루피' } },
//         //   (updateErr, updateResult) => {
//         //     if (updateErr) throw updateErr;
//         //     console.log(updateResult);
//         //   },
//         // );

//         test.updateMany(
//           { age: { $gte: 5 } },
//           { $set: { name: '5살 이상인 친구들' } },
//           (updateErr, updateResult) => {
//             if (updateErr) throw updateErr;
//             console.log(updateResult);
//           },
//         );
//       },
//     );
//   });
// });

// find 쿼리
// client.connect((err) => {
//   const test = client.db('hee').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);
//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         // findOne
//         // test.findOne({ name: 'loopy' }, (findErr, findData) => {
//         //   if (findErr) throw findErr;
//         //   console.log(findData);
//         // });

//         // find
//         const findCursor = test.find({ age: { $gte: 5 } });
//         console.log(findCursor);
//         findCursor.toArray((toArrErr, toArrData) => {
//           if (toArrErr) throw toArrErr;
//           console.log(toArrData);
//         });
//       },
//     );
//   });
// });

client.connect((err) => {
  const test = client.db('hee').collection('member');
  test.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);
    // insertMany
    test.insertMany(
      [
        { name: '조성희', age: 24 },
        { name: '송민영', age: 25 },
        { name: '최인영', age: 25 },
        { name: '박성희', age: 27 },
        { name: '최두루', age: 31 },
      ],

      (insertErr, insertResult) => {
        if (insertErr) throw insertErr;
        console.log(insertResult);

        // insertOne
        test.insertOne(
          {
            name: '김민정',
            age: 25,
          },
          (insertOneErr, insertOneResult) => {
            if (insertOneErr) throw insertOneErr;
            console.log(insertOneResult);
          },
        );
        //  deleteOne
        test.deleteOne(
          {
            name: '송민영',
          },
          (deleteOneErr, deleteOneResult) => {
            if (deleteOneErr) throw deleteOneErr;
            console.log(deleteOneResult);
          },
        );

        // updateOne
        test.updateOne(
          { name: '김민정', age: 25 },
          { $set: { name: '송민영', age: 25 } },
          (updateErr, updateResult) => {
            if (updateErr) throw updateErr;
            console.log(updateResult);
          },
        );

        //find
        const findCursor = test.find({ age: { $gte: 25 } });
        console.log(findCursor);
        findCursor.toArray((toArrErr, toArrData) => {
          if (toArrErr) throw toArrErr;
          console.log(toArrData);
        });
      },
    );
  });
});
