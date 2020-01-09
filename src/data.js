import data from "./continents.json";

const continetData = [];
for (let item of data) {
  continetData.push(item.continent);
}

export { continetData, data };
