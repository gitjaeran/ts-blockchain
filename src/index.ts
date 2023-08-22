/**일반적인 build(npm run build && npm start)
 * package.json - "start": "node build/index.js"
 *
 * => build하여 index.js를 보여주는 방식
 */

/**npm i -D ts-node(npm run dev)
 * package.json - "dev": "ts-node src/index" | "nodemon --exec ts-node src/index.ts"
 * build 없이 타입스크립트 실행(빌드 없이 새로고침하고 싶을 때, 개발환경에서만 사용)
 * => ts-node가 컴파일할 필요없이 ts 코드를 대신 실행
 */
console.log("hi!");
