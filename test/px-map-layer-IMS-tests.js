document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe('px-map-layer-geojson', function () {
    var IMSLayerFixture;
    var noLayerNameFixture;
    var sandbox;

    beforeEach(function () {
      IMSLayerFixture = fixture('IMSLayerFixture');
      noLayerNameFixture = fixture('noLayerNameFixture');
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
      setTimeout(function(){
        var layerInstance = IMSLayerFixture.querySelector('px-map-layer-IMS').elementInst;
        console.log(IMSLayerFixture.elementInst);
        console.log(layerInstance);

        expect(layerInstance).to.exist;
        expect(IMSLayerFixture.elementInst.hasLayer(layerInstance)).to.be.true;
        done();
      }, 10);
    });

    it('doesn\'t create an instance if there is no layer-name supplied', function(done) {
      setTimeout(function() {
        var layerInstance = noLayerNameFixture.querySelector('px-map-layer-IMS').elementInst;

        expect(layerInstance).to.be.null;
        done();
      }, 10);
    });

    it('can store the bounding box of the layer internally', function(done) {
      setTimeout(function() {
        var layerInstance = IMSLayerFixture.querySelector('px-map-layer-IMS').elementInst;
        layerInstance.setNewBounds([1,0,1,0]);

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
