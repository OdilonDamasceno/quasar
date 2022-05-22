import yargs from "yargs";
import quasar from "./quasar.json" assert { type: "json" };
import { YargsInstance } from "yargs/build/lib/yargs-factory.js";
import home from "./src/defaults/home.tsx";

import { Webview } from "webview";

/**
 * initial function
 * @param {string[]} args
 * @returns {void}
 */
const main = (args: string[]): void => {
  yargs(args)
    .usage(`Quasar ${quasar.version}\n\nUsage: $0 [options] [path]`)
    .command("$0", "default command", (yargs: YargsInstance) => {
      return yargs;
    }, (argv: any) => {
      const webview = new Webview();
      webview.navigate(`data:text/html,${encodeURIComponent(home)}`);

      webview.run();
    })
    .scriptName(quasar.name)
    .strictCommands()
    .version(quasar.version)
    .parse();
};

if (import.meta.main) main(Deno.args);
