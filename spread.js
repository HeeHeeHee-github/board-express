const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log(...arr);

const obj = {
  name: '조성희',
  status: '졸림',
};

console.log(obj);
console.log({ ...obj });

const cshData = {
  name: 'csh',
  age: 24,
};

const cshInfo = {
  nickName: '0',
  status: '짜증',
};

const csh = {
  ...cshData,
  ...cshInfo,
};

console.log(csh);

const arr1 = [1, 2, 3];
const arr2 = ['4', '5', '6'];

const merge = [...arr1, ...arr2];

console.log(merge);

const str = 'test';
console.log(...str);

const hee = {
  name: '조성희',
  gender: 'F',
  nickName: 'hee',
  email: 'hee@naver.com',
};

const { name, ...restInfo } = hee;
console.log(name, restInfo);

const arr3 = [1, 2, 3, 4, 5, 6, 7];

const [first, ...rest] = arr3;
console.log(first, rest);

function spread(first1, second1, ...rest1) {
  console.log(first1);
  console.log(second1);
  console.log(rest1);
}
spread(1, 2, 3, 4, 5, 6, 7, 8);

// 3.실제 백엔드에서 쓰일법한 나머지 연산자.

const spread = (first, second, ...rest) => {
  console.log(first);
  console.log(second);
  console.log(rest);
};

spread(1, 2, 3, 4, 5, 6, 7);
