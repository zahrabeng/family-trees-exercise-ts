import { createBaratheonTree } from "./families/baratheon";
import { createBritishSuccessionTree as createBritishSuccessionTree } from "./families/britain";
import { createLannisterTree } from "./families/lannister";
import { createStarkTree } from "./families/stark";
import { createRandomTree, toGraphViz } from "./graph";
import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./solution";
import { printPersonTreeAsAscii } from "./toAsciiTree";


// cmd-shift-v to view preview of graphviz file

async function mainProgram() {
  const tree = createRandomTree(5);
  // console.log("DFS")
  // depthFirstTraverse(tree, n => console.log(n.value));
  // console.log("BFS")
  // breadthFirstTraverse(tree, n => console.log(n.value));
  // toGraphViz(tree);

  console.log("STARK" + ("=".repeat(40)));
  printPersonTreeAsAscii(createStarkTree());

  console.log("LANNISTER" + ("=".repeat(40)));
  printPersonTreeAsAscii(createLannisterTree());

  console.log("BARATHEON" + ("=".repeat(40)));
  printPersonTreeAsAscii(createBaratheonTree());
  logAllPeopleInTree(createStarkTree());

  toGraphViz(createStarkTree());
  // toGraphViz(createLannisterTree());
  // toGraphViz(createBaratheonTree());
  toGraphViz(createBritishSuccessionTree());
  console.log("BRITISH ROYAL SUCCESSION")
  printPersonTreeAsAscii(createBritishSuccessionTree());
  console.log("WITH STACK")
  logAllPeopleInTree(createBritishSuccessionTree());
  console.log("WITH QUEUE")
  logAllPeopleInTreeWithQueue(createBritishSuccessionTree());
}

mainProgram();
