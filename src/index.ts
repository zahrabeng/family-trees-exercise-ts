import { createBaratheonTree } from "./families/baratheon";
import { createBritishSuccessionTree } from "./families/britain";
import { createLannisterTree } from "./families/lannister";
import { createStarkTree } from "./families/stark";
// import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./solutions/solution";
import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./treeLogging";
import { printBanner } from "./utils/bannerUtils";
import { printPersonTreeAsAscii } from "./utils/toAsciiTree";

async function mainProgram() {
  printBanner("BARATHEON");
  printPersonTreeAsAscii(createBaratheonTree());

  printBanner("STARK");
  printPersonTreeAsAscii(createStarkTree());

  printBanner("LANNISTER");
  printPersonTreeAsAscii(createLannisterTree());

  printBanner("All people in STARK")
  logAllPeopleInTree(createStarkTree());

  printBanner("WITH STACK - british royals")
  logAllPeopleInTree(createBritishSuccessionTree());
  printBanner("WITH QUEUE - british royals")
  logAllPeopleInTreeWithQueue(createBritishSuccessionTree());
}

mainProgram();
