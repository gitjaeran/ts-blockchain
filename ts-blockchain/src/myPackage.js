//해당 코드가 npm에 push되어 있는 것이고, 이걸 설치했다는 가정
export function init(config) {
  return true;
}

export function exit(code) {
  return code + 1;
}
