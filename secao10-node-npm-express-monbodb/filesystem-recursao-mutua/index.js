//https://stackoverflow.com/questions/71269994/returning-values-from-fs-readdir-by-using-promise-in-node-js-javascript
const fs = require("fs");
const path = require("path");

fs.readdir(path.resolve(__dirname), (err, data) => {
  if (err) throw err;
  //console.log(data);
});

function myReaddir(rootDir) {
  return new Promise((resolve, reject) => {
    fs.readdir(rootDir, (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        return resolve(data.map((file) => file));
      }
    });
  });
}

function fileStat(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, data) => {
      if (err) {
        reject(err);
        return;
      } else {
        return resolve(data);
      }
    });
  });
}

async function filesTree(rootDir) {
  rootDir = rootDir ? rootDir : path.resolve(__dirname);
  const dirContent = await myReaddir(rootDir);

  for (let content of dirContent) {
    const filePath = path.resolve(rootDir, content);
    const stats = await fileStat(filePath);

    //retirando o diretorio git da listagem
    if (/\.git/g.test(filePath)) {
      continue;
    }
    if (/node_modules/g.test(filePath)) {
      continue;
    }

    if (stats.isDirectory()) {
      filesTree(filePath);
      continue;
    }

    //encontrando arquivos com extensão definida
    if (!/\.scss$/g.test(filePath)) {
      continue;
    }

    //console.log(`${content} :: ${stats.isDirectory()}`);
    console.log(`${filePath}`);
  }
}

filesTree("D:/estudos/javascript-typescript-b2a-2022");
