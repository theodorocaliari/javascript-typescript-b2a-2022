function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Executando promise");
      resolve();
    }, 2000);
  });
}

export default async function () {
  await promise();
  console.log("Execução do script finalizada");
}
