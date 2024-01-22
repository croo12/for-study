import init, {greet, give_me_message} from "./pkg/hello_wasm.js";

const result = await init();


give_me_message("Jimmy"); // Jimmy, go outside and run.

greet("3b"); //Hello, 3b!
