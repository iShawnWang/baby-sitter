import fs from "node:fs";
import path from "node:path";

export const getContent = (script: string) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="${process.cwd()}/sdk.js"></script>
    <script>${script}</script>
    <title>Document</title>
  </head>
  <body>
  </body>
  </html>`;
};

export const autoGenerateTestHTML = (fileName: string) => {
  const p = path.parse(fileName);
  const dir = p.dir;
  const testcaseFilename = p.name.replace(".spec", "");
  const testcase = fs.readFileSync(
    path.resolve(dir, testcaseFilename + ".js"),
    { encoding: "utf-8" }
  );
  const pagePath = path.resolve(dir, testcaseFilename + ".html")
  createHTMLFile(getContent(testcase), path.resolve(dir, testcaseFilename + ".html"));
  return {pagePath: `file:///${pagePath}`}
};

export const createHTMLFile = (content: string, path: string) => {
  return fs.writeFileSync(path, content);
};
