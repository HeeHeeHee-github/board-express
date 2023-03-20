// 배열 구조 분해
// const arr = [1, 2, 3];
// const one = arr[0];
// const two = arr[1];
// const three = arr[2];
// console.log(one, two, three);

// 배열 구조 분해 사용
// const [deOne, deTwo, deThree] = arr;
// console.log(deOne, deTwo, deThree);

// 날짜
// const today = new Date();
// console.log(today); // 2023-03-19T15:57:58.774Z
// const formattedDay = today.toISOString().substring(0, 10);
// console.log(formattedDay); // "2023-03-19"
// const [year, month, day] = formattedDay.split('-');
// console.log(year, month, day); // 2023, 03, 19

// 객체 구조 분해 할당 전
const obj = { firstName: '성희', lastName: '조' };
// const firstName = obj.firstName;
// const lastName = obj.lastName;
// console.log(lastName, firstName);

const { firstName, lastName } = obj;
console.log(lastName, firstName);

const person = {
  name: 'Cho',
  address: {
    zipcode: '03068',
    city: 'Seoul',
  },
};
const {
  address: { zipcode, city },
} = person;
console.log(city, zipcode);
