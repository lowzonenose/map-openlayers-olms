import Map from "ol/Map.js";
import View from "ol/View.js";
import MVT from "ol/format/MVT.js";
import VectorTileLayer from "ol/layer/VectorTile.js";
import VectorTileSource from "ol/source/VectorTile.js";
import { Fill, Icon, Stroke, Style, Text } from "ol/style.js";

var key =
  "pk.eyJ1IjoibG93em9uZW5vc2UiLCJhIjoiY2pqNW9pM3BnMDh3YzNxc3d1NDBrOXJiYiJ9.fpJA4mi3Dau4qgEHiqdbpw";

var map = new Map({
  layers: [
    new VectorTileLayer({
      declutter: true,
      source: new VectorTileSource({
        attributions:
          '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
          '© <a href="https://www.openstreetmap.org/copyright">' +
          "OpenStreetMap contributors</a>",
        format: new MVT(),
        url:
          "https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/" +
          "{z}/{x}/{y}.vector.pbf?access_token=" +
          key
      }),
      style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text)
    })
  ],
  target: "map",
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
