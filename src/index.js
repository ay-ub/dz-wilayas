const { wilayas } = require("./data.js");

const getAllWilayas = () => {
  return wilayas;
};

const getWilayaByCode = (code) => {
  const wilaya = wilayas.find((w) => w.code === code);
  if (!wilaya) {
    throw new Error(`Wilaya with code ${code} not found`);
  }
  return wilaya;
};

const getWilayaByName = (name) => {
  const wilaya = wilayas.find(
    (w) => w.name.toLowerCase() === name.toLowerCase()
  );
  if (!wilaya) {
    throw new Error(`Wilaya with name ${name} not found`);
  }
  return wilaya;
};

const getWilayaByArName = (ar_name) => {
  const wilaya = wilayas.find(
    (w) => w.ar_name.toLowerCase() === ar_name.toLowerCase()
  );
  if (!wilaya) {
    throw new Error(`Wilaya with Arabic name ${ar_name} not found`);
  }
  return wilaya;
};

const getWilayaByRegion = (region) => {
  const filteredWilayas = wilayas.filter(
    (w) => w.region.toLowerCase() === region.toLowerCase()
  );
  if (filteredWilayas.length === 0) {
    throw new Error(`No wilayas found in region ${region}`);
  }
  return filteredWilayas;
};

module.exports = {
  getAllWilayas,
  getWilayaByCode,
  getWilayaByName,
  getWilayaByArName,
  getWilayaByRegion,
  wilayas,
};
