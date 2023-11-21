# Once function

여러번 호출해도 한번만 실행되는 함수를 만들어주는 라이브러리 입니다.

## Install

`npm i oncefn`

**참고** : `ESM` 방식으로 작성되었으며 `CMS`에서 정상적으로 동작하지 않을 수 있습니다.

<br>

## Usage

```javascript
export const once = (fn) => {
  let flag = false;

  return (...args) => {
    if (!flag) {
      flag = true;
      fn(...args);
    }
  };
};
```

<br>

## Example

```javascript
import { once } from "oncefn";

const test = (x) => console.log(x);

const fn = once(test);
once(fn());
once(fn());
once(fn());
```
