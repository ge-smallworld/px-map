document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {

  describe('px-map-layer-IMS', function () {
    var IMSLayerFixture;
    var noLayerNameFixture;
    var styledIMSLayerFixture;
    var sandbox;

    before(function () {
      const testCollection = '{"type": "FeatureCollection",' +
        '"features": [{"type": "Feature", "properties": {}, "geometry": {"type": "LineString", "coordinates": [[0,0], [1,0]] }}]}';

      let server = sinon.fakeServer.create();
      server.respondImmediately = true;
      server.respondWith(
        'GET',
        /\/v1\/collections/, [
          200,
          {'Content-Type': 'application/json'},
          testCollection
        ]
      );
    });

    beforeEach(function () {
      IMSLayerFixture = fixture('IMSLayerFixture');
      noLayerNameFixture = fixture('noLayerNameFixture');
      styledIMSLayerFixture = fixture('styledIMSLayerFixture');
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

    it('styles features correctly through attributes (via `feature-style=`)', function(done) {
      var featureStyles = {color: 'green'};

      styledIMSLayerFixture.addEventListener('IMS-layer-ready', (e) => {
        var IMSLayer = styledIMSLayerFixture.querySelector('px-map-layer-IMS');
        var IMSLayerInstance = IMSLayer.elementInst;
        var IMSLayerOptions = IMSLayer.getInstOptions();
        var drawnLayer = IMSLayerInstance.getLayers()[0];

        expect(IMSLayerOptions).to.have.property('featureStyle').that.eql(featureStyles);
        expect(drawnLayer.options).to.have.property('color').that.eql('green');
        done();
      }, {once: true});
    });

    it('updates feature styles when they are changed', function(done) {
      var newStyles = {'color': 'orange'};

      styledIMSLayerFixture.addEventListener('IMS-layer-ready', (e) => {
        var IMSLayer = styledIMSLayerFixture.querySelector('px-map-layer-IMS');
        var IMSLayerInstance = IMSLayer.elementInst;
        IMSLayer.set('featureStyle', newStyles);

        //Wait for layer re-render
        setTimeout(function() {
          var IMSLayerOptions = IMSLayer.getInstOptions();
          var drawnLayer = IMSLayerInstance.getLayers()[0];

          expect(IMSLayerOptions).to.have.property('featureStyle').that.eql(newStyles);
          expect(drawnLayer.options).to.have.property('color').that.eql('orange');
          done();
        }, 10);
      }, {once: true});
    });

  });

  describe('(events) px-map-layer-IMS', function () {
    var sandbox;

    beforeEach(function () {
      IMSLayerFixture = fixture('IMSLayerFixture');
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('fires an event when the bounding box of the layer is changed', function(done) {
      setTimeout(function() {
        var layer = IMSLayerFixture.querySelector('px-map-layer-IMS');

        IMSLayerFixture.addEventListener('IMS-layer-ready', (e) => {
          expect(e.detail).to.be.a('string');
          done();
        });

        layer.setNewBounds([1,0,1,0]);
      }, 10);
    });

  });

}
