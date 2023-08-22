//해당 코드가 npm에 push되어 있는 것이고, 이걸 설치했다는 가정

//@ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exit the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
