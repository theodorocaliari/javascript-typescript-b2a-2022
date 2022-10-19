//https://github.com/r-spacex/SpaceX-API
//https://api.spacexdata.com/v5/launches/latest

fetch("https://api.spacexdata.com/v5/launches/latest")
  .then((data) => data.json())
  .then((info) => recebeData(info));

function recebeData(api) {
  console.log(api);
}
