// 한번만 실행되는 함수 구현하기 (once functio 만들기)

export const once = (fn) => {
  let flag = false;

  return (...args) => {
    if (!flag) {
      flag = true;
      fn(...args);
    }
  };
};
