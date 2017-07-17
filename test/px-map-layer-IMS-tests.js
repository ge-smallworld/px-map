document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe('px-map-layer-geojson', function () {
    var IMSLayerFixture;
    var sandbox;

    beforeEach(function () {
      IMSLayerFixture = fixture('IMSLayerFixture');
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('creates an instance of L.GeoJson after attaching', function(done) {
      // Matching the wait used in the root-tests, Leaflet needs time to create and attach the layer.
      setTimeout(function(){
        var layerInstance = IMSLayerFixture.querySelector('px-map-layer-IMS').elementInst;
        expect(layerInstance).to.be.an.instanceof(L.Layer);
        done();
      }, 10);
    });

    it('adds itself as a layer to the px-map', function(done) {
      var layerInstance = IMSLayerFixture.elementInst;
      var layers = 0;

      setTimeout(function(){
        layerInstance.eachLayer(function(layer) {
          if (layer instanceof L.Polyline) {
            layers++;
          }
        });

        expect(layerInstance).to.exist;
        expect(layers).to.eql(1);
        done();
      }, 10);
    });

    it('doesn\'t create an instance if there is no layer-name supplied', function(done) {
      setTimeout(function() {
        var layerInstance = noLayerNameFixture.querySelector('px-map-layer-IMS').elementInst;

        expect(geoJSONLayerInstance).to.be.null;
        done();
      }, 10);
    });

  });

  describe('(events) px-map-layer-IMS', function () {
    var sandbox;

    beforeEach(function () {
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });


  });

}
