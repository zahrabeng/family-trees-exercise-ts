import { createBaratheonTree } from "../families/baratheon";
import { createBritishSuccessionTree as createBritishSuccessionTree } from "../families/britain";
import { createLannisterTree } from "../families/lannister";
import { createStarkTree } from "../families/stark";
import { toGraphViz } from "./extraTreeFunctions";
import { printPersonTreeAsAscii } from "../utils/toAsciiTree";


// cmd-shift-v to view preview of graphviz file

async function generateGraphs() {

    console.log("GRAPH VIZ: STARK");
    toGraphViz(createStarkTree());

    console.log("GRAPH VIZ: LANNISTER");
    toGraphViz(createLannisterTree());

    console.log("GRAPH VIZ: BARATHEON");
    toGraphViz(createBaratheonTree());

    console.log("GRAPH VIZ: BRITISH")
    toGraphViz(createBritishSuccessionTree());

    console.log("ASCII: BRITISH ROYAL SUCCESSION")
    printPersonTreeAsAscii(createBritishSuccessionTree());

    console.log("BARATHEON" + ("=".repeat(40)));
    printPersonTreeAsAscii(createBaratheonTree());
}
generateGraphs();
