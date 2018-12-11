
var wwd = new WorldWind.WorldWindow("canvasOne");

var layers = [
            // Imagery layers.
            {layer: new WorldWind.BMNGLayer(), enabled: true},
            {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
            {layer: new WorldWind.AtmosphereLayer(), enabled: true},
            {layer: new WorldWind.StarFieldLayer(), enabled: true},
            // WorldWindow UI layers.
            {layer: new WorldWind.CompassLayer(), enabled: false},
            {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
            {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
        ];

// MakeAnsonLayers here will help me blend things well within index.html
function makeAnsonLayers(layerData, goToLayer) {

    // Use line to connect with the txt file and then use template to build a layer

    line = layerData.split("|");

    var canvas = document.createElement("canvas"),
    ctx2d = canvas.getContext("2d"),
    size = 200, c = size / 2 - 0.5, innerRadius = 5, outerRadius = 10;

    canvas.width = size;
    canvas.height = size;

    var gradient = ctx2d.createRadialGradient(c, c, innerRadius, c, c, outerRadius);
    gradient.addColorStop(0.0, 'rgb(0,223,0)');
    gradient.addColorStop(1, 'rgb(255,0,0)');

    ctx2d.fillStyle = gradient;
    ctx2d.arc(c, c, outerRadius, 0, 2 * Math.PI, false);
    ctx2d.fill();

    // Set placemark attributes.
    var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
    placemarkAttributes.imageSource = new WorldWind.ImageSource(canvas);
    placemarkAttributes.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0.5, WorldWind.OFFSET_FRACTION, 0.5);
    placemarkAttributes.imageScale = 1;
    placemarkAttributes.imageColor = WorldWind.Color.WHITE;
    var highlightAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
    highlightAttributes.imageScale = 2;

    coordinates = line[4].slice(2, line[4].length);
    coordinates = coordinates.split(',');
    lat = parseFloat(coordinates[0]);
    lon = parseFloat(coordinates[1]);

    var placemarkPosition = new WorldWind.Position(lat, lon, 1e2);
    var placemark = new WorldWind.Placemark(placemarkPosition, false, placemarkAttributes);
    placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
    placemark.highlightAttributes = highlightAttributes;
    placemark.displayName = (line[1][1] === "\"") ? line[1].slice(2, -1) : line[1].slice(1)
    goToLayer.addRenderable(placemark);
}

for (var l = 0; l < layers.length; l++) {
    layers[l].layer.enabled = layers[l].enabled;
    wwd.addLayer(layers[l].layer);
}

var highlightController = new WorldWind.HighlightController(wwd);

////


