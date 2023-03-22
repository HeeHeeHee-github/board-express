const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);
console.log(...arr);

const obj = {
  name: '조성희',
  status: '졸림',
};

console.log(obj);
console.log({ ...obj });

const tetzData = {
  name: '조성희',
  age: 24,
};

const tetzInfo = {
  nickName: 'HEE',
  status: '피곤',
};

const tetz = {
  ...tetzData,
  ...tetzInfo,
};

console.log(tetz);

const arr1 = [1, 2, 3];
const arr2 = ['4', '5', '6'];

const merge = [...arr1, ...arr2];

console.log(merge);

const str = 'test';
console.log([...str]);

const tetz2 = {
  name: '조성희',
  gender: 'F',
  nickName: 'HEE',
  email: 'hee@naver.com',
};

const { name, ...restInfo } = tetz2;
console.log(name, restInfo);

const arr3 = [1, 2, 3, 4, 5, 6, 7];

const [first, ...rest] = arr3;
console.log(first, rest);

function spread(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

spread(1, 2, 3, 4, 5, 6, 7, 8);
