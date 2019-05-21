const leaflet = jest.mock(`leaflet`);

const tileLayer = {
  addTo() {
    return {};
  }
};

const marker = {
  addTo() {
    return {};
  },
};

const layerGroup = {
  addTo() {
    return {};
  }
};

leaflet.map = () => leaflet;
leaflet.remove = () => leaflet;
leaflet.icon = () => {};
leaflet.tileLayer = () => tileLayer;
leaflet.setView = () => {};
leaflet.marker = () => marker;
leaflet.layerGroup = () => layerGroup;
leaflet.removeLayer = () => leaflet;
leaflet.invalidateSize = () => {};

export default leaflet;
