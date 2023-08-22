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

//npm i @types/node : DefinitelyTyped
import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}
class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new BlockChain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

blockchain
  .getBlocks()
  .push(new Block("hacked check", 1234, "HACKED CHECK!!!!!!!"));

console.log(blockchain.getBlocks());
