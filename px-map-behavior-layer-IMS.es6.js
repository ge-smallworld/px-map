(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.IMSLayer
   */
  PxMapBehavior.IMSLayerImpl = {
    properties: {
      /**
       * The name of the IMS collection to be loaded onto the layer.
       *
       * @type {String}
       */
      layerName: {
        type: String,
        observer: 'shouldUpdateInst'
      },

      /**
       * The url to talk to the IMS instance, will change depending on the layerName.
       *
       * @type {String}
       */
      url: {
        type: String
      },

      /**
       * The object containing the name and z-index of the custom pane to use to render this layer on.
       *
       * The name property is not dynamic and can only be set once when the map is
       * first initialized.
       *
       * - {String} `name`: [default=null] Name of the custom pane
       * - {Number} `zIndex`: [default=400] z-index of the custom pane
       *
       * @type {Object}
       */
      pane: {
        type: Object
      },

      // Canvas for rendering non-editable point images.
      _iconCanvas: {
        type: Object
      },

      // Rtree for storing point position data.
      _iconTree: {
        type: Object
      },

      /**
       * A switch to use certain settings for when the layer is being use on the demo page.
       *
       * @type {String}
       */
      demo: {
        type: Boolean,
        value: false
      },

      /**
       * Set to enable Leaflet.Editable
       *
       * @type {Boolean}
       */
      editable: {
        type: Boolean,
        value: false
      },

      /**
       * A property used to determine the zoom level at which features become visible
       * default value is 1+
       *
       * @type {String}
       */
      visibilityZoomLevels: {
        type: String,
        value: "1+"
      },

      /**
       * An object with settings that will be used to style each feature when
       * it is added to the map. The following options are available:
       *
       * - {Boolean} `stroke`: [default=true] Set to false to disable borders on polygons/circles
       * - {String} `color`: [default=$primary-blue] Color for polygon/circle borders
       * - {Number} `weight`: [default=2] Weight for polygon/circle borders in pixels
       * - {Number} `opacity`: [default=1.0] Opacity for polygon/circle borders
       * - {Boolean} `fill`: [default=true] Set to false to disable filling polygons/circles
       * - {String} `fillColor`: [default=$dv-light-blue] Color for polygon/circle fill
       * - {Number} `fillOpacity`: [default=0.4] Opacity for polygon/circle fill
       * - {String} `fillRule`: [default='evenodd'] Defines how the [inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined
       * - {String} `lineCap`: [default='round'] Defines the [shape to be used](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) at the end of the stroke
       * - {String} `lineJoin`: [default='round'] Defines the [shape to be used](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) at the corner of a stroke
       * - {String} `dashArray`: [default=null] Defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray)
       * - {String} `dashOffset`: [default=null] Defines the [distance into the dash to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset)
       *
       * Note that styles can also be added to each feature individually (see
       * the `data` attribute documentation). Styles defined on each feature will
       * override the `featureStyle`.
       *
       * @type {Object}
       */
      featureStyle: {
        type: Object,
        observer: 'shouldUpdateInst'
      },

      /**
       * If set, a popup containing a feature's properties will be opened when
       * the user taps that feature. The following properties will be filtered
       * out: the property key `style` and its value; any properties with the
       * value "unset" as a string.
       *
       * Note: A data-style popup will be used. This popup currently cannot be
       * configured and will use its default configuration.
       *
       * @type {Boolean}
       */
      showFeatureProperties: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },

      /**
       * Leaflet.Icon options that can be set to use custom icons for drawing markers.
       * The following options are available:
       *
       * - {Boolean} `divIcon`: [default=false] Set to use L.divIcon instead of L.Icon.
       * - {String} `iconUrl`: [default=null] The URL to the icon image (absolute or relative to your script path). Ignored if divIcon is set to 'true'.
       * - {String} `iconRetinaUrl`: [default=null] The URL to a retina sized version of the icon image (absolute or relative to your script path). Used for Retina screen devices. Ignored if divIcon is set to 'true'.
       * - {Array} `iconSize`: [default=[16,16]] 	Size of the icon image in pixels.
       * - {Array} `iconAnchor`: [default=[8,8]] The coordinates of the "tip" of the icon (relative to its top left corner). The icon will be aligned so that this point is at the marker's geographical location. Centered by default if size is specified, also can be set in CSS with negative margins.
       * - {Array} `popupAnchor`: [default=null] The coordinates of the point from which popups will "open", relative to the icon anchor.
       * - {String} `shadowUrl`: [default=null] The URL to the icon shadow image. If not specified, no shadow image will be created. Ignored if divIcon is set to 'true'.
       * - {String} `shadowRetinaUrl`: [default=null] Ignored if divIcon is set to 'true'.
       * - {Array} `shadowSize`: [default=null] Size of the shadow image in pixels. Ignored if divIcon is set to 'true'.
       * - {Array} `shadowAnchor`: [default=null] The coordinates of the "tip" of the shadow (relative to its top left corner) (the same as iconAnchor if not specified). Ignored if divIcon is set to 'true'.
       * - {String} `className`: [default=''] A custom class name to assign to both icon and shadow images. Empty by default.
       * - {String} `html`: [default=''] Custom HTML code to put inside the div element, empty by default. Ignored if divIcon is set to 'false'.
       * - {Array} `bgos`: [default=[0,0]] Optional relative position of the background, in pixels. Ignored if divIcon is set to 'false'.
       *
       * @type {Object}
       */
      markerIconOptions: {
        type: Object,
        observer: 'shouldUpdateInst'
      },

      /**
       * Set this to specify this layer as the layer where drawn features will be stored.
       * The editable tag must also be set to true on this layer.
       *
       * This property is not dynamic and can only be set once when the map is
       * first initialized.
       *
       * @type {Boolean}
       */
      sketch: {
        type: Boolean,
        value: false
      },

      /**
       * The current feature collection displayed by this layer.
       * @type {Object}
       */
      featureCollection: {
        type: Object
      },

      // Object to store feature id and feature pairs.
      _featureMap: {
        type: Object,
        value: {}
      }
    },

    _updateFeatures(featureCol) {
      const newMap = {};
      const {features} = featureCol;
      for (let feature of features) {
        // Store feature, layer, icon data
        newMap[feature.id] = [feature, undefined, undefined];
      }
      this._featureMap = newMap;
      this.featureCollection = featureCol;
      this._iconTree.clear();

      this.elementInst.addData(featureCol);

      const layers = this.elementInst._layers;
      for (let i in layers) {
        const layer = layers[i];
        newMap[layer.feature.id][1] = layer;
      }
    },

    /**
     * Returns a feature object displayed in this layer for the supplied id.
     * @return {object} feature object
     */
    getFeature(featureId) {
      const data = this._featureMap[featureId];
      if (data) {
        return data[0];
      }
    },

    _clearIMSLayer() {
      this.elementInst.clearLayers();
      if (this._iconCanvas) {
        this._iconCanvas.getContext('2d').clearRect(0, 0, this._iconCanvas.width, this._iconCanvas.height);
      }
    },

    _redrawIMSLayer() {
      if (!this.featureCollection) {
        return;
      }
      this._clearIMSLayer();
      if (this._iconCanvas) {
        const context = this._iconCanvas.getContext('2d');
        const map = this._featureMap;

        for (let featureId in map) {
          const iconData = map[featureId][2];
          if (iconData) {
            const img = new Image();
            img.onload = () => {
              context.drawImage(img, iconData.minX, iconData.minY, iconData.maxX - iconData.minX, iconData.maxY - iconData.minY);
            }
            img.src = iconData.iconSrc;
          }
        }
      } else {
        this._updateFeatures(this.featureCollection);
      }
    },

    _addIconCanvas(paneName) {
      if (this.editable || !this.markerIconOptions) {
        return;
      }

      const mapInst = this.parentNode.elementInst;
      const width = window.getComputedStyle(mapInst._container).width;
      const height = window.getComputedStyle(mapInst._container).height;

      this._iconCanvas = document.createElement('canvas');
      this._iconCanvas.width = parseInt(width);
      this._iconCanvas.height = parseInt(height);
      this._iconCanvas.style.pointerEvents = 'none';

      mapInst.getPane(paneName).appendChild(this._iconCanvas);

      mapInst.addEventListener('click', (evt) => {
        this._handleIconCanvasClicked(evt);
      });
    },

    _addIcon(feature, latlng, paneName, options) {
      if (this.editable) {
        let markerIcon;
        const iconOptions = options.markerIconOptions;

        iconOptions.iconSize = options.markerIconOptions.iconSize || [16, 16];
        iconOptions.iconAnchor = options.markerIconOptions.iconAnchor || [8, 8];
        if (iconOptions.divIcon) {
            iconOptions.html = iconOptions.html || defaultMarkerIcon;
            markerIcon = L.divIcon(iconOptions);
        } else {
            iconOptions.iconUrl = iconOptions.iconUrl || defaultMarkerIconURL;
            markerIcon = L.icon(iconOptions);
        }
        return new L.Marker(latlng, {icon: markerIcon, pane: paneName});
      } else {
        const mapInst = this.parentNode.elementInst;
        const iconUrl = options.markerIconOptions.iconUrl || defaultMarkerIconURL;
        const iconSize = options.markerIconOptions.iconSize || [16, 16];
        const iconAnchor = options.markerIconOptions.iconAnchor || [8, 8];
        const conPoint = mapInst.latLngToContainerPoint(latlng);
        const x = conPoint.x - iconAnchor[0];
        const y = conPoint.y - iconAnchor[1];
        const context = this._iconCanvas.getContext('2d');
        const img = new Image();
        const iconData = {
          minX: x,
          minY: y,
          maxX: x + iconSize[0],
          maxY: y + iconSize[1],
          feature: feature,
          latlng: latlng,
          iconSrc: iconUrl
        };

        // Store icon data in rtree for selection lookup and feature map for highlight lookup
        this._iconTree.insert(iconData);
        this._featureMap[feature.id][2] = iconData;
        // Draw image on canvas
        img.onload = () => {
          context.drawImage(img, x, y, iconSize[0], iconSize[1]);
        }
        img.src = iconUrl;
      }
    },

    canAddInst() {
      return this.layerName && typeof this.layerName === 'string' && this.layerName.length > 0;
    },

    // extends the layer `addInst` method to harvest and fire events
    addInst(parent) {
      // Bind custom events. Events will be unbound automatically.
      const addedFn = this._handleFeatureAdded.bind(this);
      const removedFn = this._handleFeatureRemoved.bind(this);
      this.bindEvents({
        'layeradd' : addedFn,
        'layerremove' : removedFn
      });

      // If any layers already added before events bound, manually fire layer
      // added events to attach listeners/notify the world the layer is added
      if (this.elementInst.getLayers().length !== 0) {
        this.elementInst.eachLayer((layer) => {
          this.elementInst.fire('layeradd', { layer: layer });
        });
      }

      // Now call layer's add
      PxMapBehavior.LayerImpl.addInst.call(this, parent);
    },

    createInst(options) {
      const defaultMarkerIcon = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  height="16" width="16"><circle cx="8" cy="8" r="6" stroke="#3E87E8" stroke-width="3" fill="#88BDE6" fill-opacity="0.4"/></svg>';
      const defaultMarkerIconURL = "data:image/svg+xml;base64," + btoa(defaultMarkerIcon);
      const mapInst = this.parentNode.elementInst;
      const paneName =  options.pane.name || options.layerName;
      const attributeProperties = this.getInstOptions().featureStyle;

      //Create a custom pane to draw onto so that we can control the draw order.
      mapInst.createPane(paneName);
      mapInst.getPane(paneName).classList.add('custom-pane');
      mapInst.getPane(paneName).style.zIndex = options.pane.zIndex;

      this._addIconCanvas(paneName);

      //Get the initial bounds of the map to use for the first request to IMS
      const initialBounds = this.parentNode.elementInst.getBounds();

      const IMSLayer = L.geoJson(null, {
        pointToLayer: (feature, latlng) => {
          return this._addIcon(feature, latlng, paneName, options);
        },

        onEachFeature: (feature, layer) => {
          if (!options.showFeatureProperties) return;
          this._bindPopup(feature, layer);
        },

        style: (feature) => {
          const featureProperties = feature.properties.style || {};
          return this._getStyle(featureProperties, attributeProperties);
        },

        pane: paneName
      });

      if(this.editable) {
        this._addEditableTools(mapInst, IMSLayer);
      }

      if(this.parentNode.elementInst.getZoom() >= this._getLayerStartingZoomValue()) {
        this._requestCollectionsFromIMS(options, initialBounds);
      }

      // Setup rtree for storing points for selection
      this._iconTree = new rbush(16);

      //Bind to px-maps moveend to re-request the data with new bounds
      //If layer is not going to be rendered at the current zoom level, don't load
      mapInst.on({
        zoomstart: () => {
          // TODO update the transform of the canvas whilst zooming
          if (this._iconCanvas) {
            this._iconCanvas.getContext('2d').clearRect(0, 0, this._iconCanvas.width, this._iconCanvas.height);
          }
        },
        moveend: () => {
          this._checkZoomLevelVisibilities();
        }
      });

      return IMSLayer;
    },

    //Make request to IMS to get collection
    _requestCollectionsFromIMS(options, bounds) {
      this.url = `/v1/collections/${options.layerName}/spatial-query/bbox-interacts?`+
      `left=${bounds._southWest.lng}&right=${bounds._northEast.lng}&top=${bounds._northEast.lat}&bottom=${bounds._southWest.lat}`;
      if(options.demo) this.url = 'demo/px-map-layer-geojson-data.json';
      this.querySelector('#get-collection').generateRequest();
    },

    //Ensures that layer is visible at the current zoom level only if it should be, if not it clears it
    _checkZoomLevelVisibilities() {
      if(this.parentNode.elementInst.getZoom() >= this._getLayerStartingZoomValue()) {
        const bounds = this.parentNode.elementInst.getBounds();
        const boundsArray = [bounds._southWest.lng, bounds._northEast.lng, bounds._southWest.lat, bounds._northEast.lat];
        this.setNewBounds(boundsArray);
      } else {
        this.elementInst.clearLayers();
      }
    },

    _updateIconCanvas() {
      if (!this._iconCanvas) {
        return;
      }
      const mapInst = this.parentNode.elementInst;

      // Update canvas transform
      const trans = window.getComputedStyle(this._iconCanvas.parentNode.parentNode).transform;
      const transParts = trans.match(/-?[\d\.]+/g);
      const transX = - parseInt(transParts[4]);
      const transY = - parseInt(transParts[5]);
      this._iconCanvas.style.transform = `translate(${transX}px, ${transY}px)`;

      // Update canvas size to match the map
      const width = parseInt(window.getComputedStyle(mapInst._container).width);
      const height = parseInt(window.getComputedStyle(mapInst._container).height);
      if (this._iconCanvas.width != width || this._iconCanvas.height != height) {
        this._iconCanvas.width = width;
        this._iconCanvas.height = height;
      }
    },

    _getLayerStartingZoomValue() {
      const start = 0;
      const end = this.visibilityZoomLevels.indexOf("+");
      // if '+' was not given, return the value as it is
      return end > -1 ? this.visibilityZoomLevels.substring(start, end) : this.visibilityZoomLevels;
    },

    _displayData(eventContext) {
      let collectionName = eventContext.detail.url.split('/v1/collections/')[1];
      if (this.demo) {
        collectionName = 'demo';
      }

      //Now that we have the data, add it to the instance
      this._clearIMSLayer();
      this._updateIconCanvas()
      this._updateFeatures(eventContext.detail.response);

      this.fire('IMS-layer-ready', collectionName);
    },

    _getCollectionError(event) {
      //If we are aborting the request, don't show an error
      if (event.detail.error.message !== "Request aborted.") {
        this.fire('IMS-layer-error', event.detail.error);
      }
    },

    _addEditableTools(leafletMap, IMSLayer) {
      if (!leafletMap.editTools) {
        leafletMap.editTools = new L.Editable(leafletMap);
        //Disable doubleclick zoom when drawing to prevent zooming when double clicking to end a line
        leafletMap.editTools.addEventListener('editable:drawing:start', () => {
          leafletMap.doubleClickZoom.disable();
        });

        leafletMap.editTools.addEventListener('editable:drawing:end', () => {
          //0ms timeout to ensure that double clicking doesn't zoom when placing vertex and immeditaley finishing drawing
          setTimeout(() => {
            leafletMap.doubleClickZoom.enable();
          },0);
        });

        leafletMap.editTools.addEventListener('editable:dragstart', () => {
          leafletMap.doubleClickZoom.disable();
        });

        leafletMap.editTools.addEventListener('editable:dragend', () => {
          //0ms timeout to ensure that double clicking doesn't zoom when placing vertex and immeditaley finishing drawing
          setTimeout(() => {
            leafletMap.doubleClickZoom.enable();
          },0);
        });
      }

      if (this.sketch) {
        leafletMap.editTools.featuresLayer = IMSLayer;
      }

      this.fire('IMS-editTools-ready');
    },

    _getStyle(featureProperties, attributeProperties) {
      return {
        radius: featureProperties.radius           || attributeProperties.radius      || 5,
        color: featureProperties.color             || attributeProperties.color       || '#3E87E8', //primary-blue,
        fillColor: featureProperties.fillColor     || attributeProperties.fillColor   || '#88BDE6', //$dv-light-blue
        weight: featureProperties.weight           || attributeProperties.weight      || 2,
        opacity: featureProperties.opacity         || attributeProperties.opacity     || 1,
        fillOpacity: featureProperties.fillOpacity || attributeProperties.fillOpacity || 0.4
      };
    },

    _bindFeaturePopups() {
      if (!this.elementInst) return;
      this.elementInst.eachLayer((layer) => this._bindPopup(layer.feature, layer));
    },

    _bindPopup(feature, layer) {
      // Filter keys to remove info that should not be displayed in a popup.
      // If no keys remain, do not bind a popup.
      const popupDataKeys = Object.keys(feature.properties).filter(key => feature.properties.hasOwnProperty(key) && feature.properties[key] !== 'unset' && key !== 'style');
      if (!popupDataKeys.length) return;

      const popupData = popupDataKeys.reduce((accum, key) => {
        accum[key] = feature.properties[key];
        return accum;
      }, {});

      const popup = new PxMap.DataPopup({
        title: 'Feature Properties',
        data: popupData,
        autoPanPadding: [1,1]
      });

      layer.bindPopup(popup);
    },

    _unbindFeaturePopups() {
      if (!this.elementInst) return;
      this.elementInst.eachLayer((layer) => this._unbindPopup(layer));
    },

    _unbindPopup(layer) {
      if (typeof layer.getPopup() !== 'undefined') {
        layer.unbindPopup();
      }
    },

    /*
     * Update the instance if the new data is not the same as the old OR if the
     * new style is not the same as the old.
     */
    updateInst(lastOptions, nextOptions) {
      const defaultMarkerIcon = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  height="16" width="16"><circle cx="8" cy="8" r="6" stroke="#3E87E8" stroke-width="3" fill="#88BDE6" fill-opacity="0.4"/></svg>';
      const defaultMarkerIconURL = "data:image/svg+xml;base64," + btoa(defaultMarkerIcon);
      const paneName = lastOptions.pane.name || lastOptions.layerName;

      if (nextOptions.layerName.length < 0) {
        this.elementInst.clearLayers();
      }
      else if (nextOptions.layerName.length > 0 && (lastOptions.layerName !== nextOptions.layerName || lastOptions.featureStyleHash !== nextOptions.featureStyleHash)) {
        const styleAttributeProperties = this.getInstOptions().featureStyle;

        this.elementInst.clearLayers();

        this.elementInst.options.style = (feature) => {
          const featureProperties = feature.properties.style || {};
          return this._getStyle(featureProperties, styleAttributeProperties);
        };

        //Request the new IMS collection
        const currentBounds = this.parentNode.elementInst.getBounds();
        if(this.parentNode.elementInst.getZoom() >= this._getLayerStartingZoomValue()) {
          this._requestCollectionsFromIMS(nextOptions, currentBounds);
          if (nextOptions.showFeatureProperties) {
            this._bindFeaturePopups();
          }
        }
      }
      else if (lastOptions.showFeatureProperties !== nextOptions.showFeatureProperties) {
        if (nextOptions.showFeatureProperties) this._bindFeaturePopups();
        if (!nextOptions.showFeatureProperties) this._unbindFeaturePopups();
      }
      else if (lastOptions.markerIconOptionsHash !== nextOptions.markerIconOptionsHash) {
        this.elementInst.pointToLayer = (feature, latlng) => {
          this._addIcon(feature, latlng, paneName, nextOptions);
        };

        this._clearIMSLayer();
        this._updateFeatures(this.featureCollection);

        if (nextOptions.showFeatureProperties) {
          this._bindFeaturePopups();
        }
      } else if (lastOptions.pane.zIndex !== nextOptions.pane.zIndex) {
        this.parentNode.elementInst.getPane(paneName).style.zIndex = nextOptions.pane.zIndex;
      }
    },

    /*
     * Stringifying is needed here to be able to do a deep equality check.
     */
    getInstOptions() {
      return {
        layerName: this.layerName || {},
        pane: this.pane || {name: null, zIndex: 400},
        demo: this.demo,
        featureStyle: this.featureStyle || {},
        featureStyleHash: JSON.stringify(this.featureStyle || {}),
        featureSVG: this.featureSvg,
        markerIconOptions: this.markerIconOptions || {},
        markerIconOptionsHash: JSON.stringify(this.markerIconOptions || {}),
        showFeatureProperties: this.showFeatureProperties
      };
    },

    setNewBounds(boundsArray) {
      //Ensure it is a valid numeric array first
      if(boundsArray && boundsArray.length === 4 && !boundsArray.some(isNaN)) {

        boundsArray[0] < -180 ? boundsArray[0] = -180 : null;
        boundsArray[1] > 180 ? boundsArray[1] = 180 : null;
        boundsArray[2] < -90 ? boundsArray[2] = 90 : null;
        boundsArray[3] > 90 ? boundsArray[3] = 90 : null;

        this.url = `/v1/collections/${this.layerName}/spatial-query/bbox-interacts?`+
          `left=${boundsArray[0]}&right=${boundsArray[1]}&top=${boundsArray[2]}&bottom=${boundsArray[3]}`;
        if(this.demo) this.url = 'demo/px-map-layer-geojson-data.json';

        //Cancel existing request (if there is one) and generate a new one.
        const ironAjax = this.querySelector('#get-collection');
        if (ironAjax.lastRequest) {
          ironAjax.lastRequest.abort();
        }
        ironAjax.generateRequest();
      }
    },

    /**
     * Redraws the feature matching the supplied id with the style attributes.
     * @param {string} featureId - id of the feature to redraw.
     * @param {object} styleOptions - An object with settings that will be used
     * to style the feature. See featureStyle for available options.
     * @return {boolean} If the feature has been highlighted.
     */
    highlightFeature(featureId, styleOptions) {
      let done = false;
      const data = this._featureMap[featureId];

      if (data) {
        if (data[1]) {
          const layer = data[1];
          layer._icon ? (layer._icon.setAttribute('src', styleOptions.iconSrc))
                        : (layer.setStyle(styleOptions));
          done = true;
        } else if (data[2]) {
          const iconData = data[2];
          const context = this._iconCanvas.getContext('2d');
          const img = new Image();
          
          img.onload = () => {
            context.drawImage(img, iconData.minX, iconData.minY, iconData.maxX - iconData.minX, iconData.maxY - iconData.minY);
          }
          img.src = styleOptions.iconSrc;
          done = true;
        }
      }
      return done;
    },

    /**
     * Redraws the IMS layer to remove any highlighting.
     */
    clearHighlights() {
      this._redrawIMSLayer();
    },

    _handleFeatureAdded(evt) {
      if (!evt || !evt.layer) return;

      // Bind layer click events
      evt.layer.on('click', this._handleFeatureTapped.bind(this));
      evt.layer.on('popupopen', this._handleFeaturePopupOpened.bind(this));
      evt.layer.on('popupclose', this._handleFeaturePopupClosed.bind(this));

      const detail = {};
      if (evt.layer && evt.layer.feature) {
        detail.feature = evt.layer.feature;
      }
      this.fire('px-map-layer-geojson-feature-added', detail);
    },
    /**
     * Fired when a feature is attached the map. Note that every feature is
     * added/removed when any part of the `data` attribute is updated.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-layer-geojson-feature-added
     */

    _handleFeatureRemoved(evt) {
      if (!evt || !evt.layer) return;

      // Unbind layer click events
      evt.layer.off();

      const detail = {};
      if (evt.layer && evt.layer.feature) {
        detail.feature = evt.layer.feature;
      }
      this.fire('px-map-layer-geojson-feature-removed', detail);
    },
    /**
     * Fired when a feature is removed from the map. Note that every feature is
     * added/removed when any part of the `data` attribute is updated.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-layer-geojson-feature-added
     */

    _handleFeatureTapped(evt) {
      const detail = {};
      if (evt.target && evt.target.feature) {
        detail.feature = evt.target.feature;
        detail.layerId = this.id;
      }
      this.fire('px-map-layer-geojson-feature-tapped', detail);
    },

    _handleIconCanvasClicked(evt) {
      const conPoint = evt.containerPoint;
      const points = this._iconTree.search({
        minX: conPoint.x,
        minY: conPoint.y,
        maxX: conPoint.x,
        maxY: conPoint.y
      });
      // Note - only returns first match
      if (points.length) {
          this.fire('px-map-layer-geojson-feature-tapped', {
            feature: points[0].feature,
            layerId: this.id
          });
      }
    },
    /**
     * Fired when a feature is tapped by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-layer-geojson-feature-tapped
     */

    _handleFeaturePopupOpened(evt) {
      const detail = {};
      if (evt.target && evt.target.feature) {
        detail.feature = evt.target.feature;
      }
      this.fire('px-map-layer-geojson-feature-popup-opened', detail);
    },
    /**
     * Fired when a feature's popup is opened by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-layer-geojson-feature-popup-opened
     */

    _handleFeaturePopupClosed(evt) {
      const detail = {};
      if (evt.target && evt.target.feature) {
        detail.feature = evt.target.feature;
      }
      this.fire('px-map-layer-geojson-feature-popup-closed', detail);
    }
    /**
     * Fired when a feature's popup is closed by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-layer-geojson-feature-popup-closed
     */
  };
  /* Bind IMSLayer behavior */
  /** @polymerBehavior */
  PxMapBehavior.IMSLayer = [
    PxMapBehavior.Layer,
    PxMapBehavior.IMSLayerImpl
  ];
})();
