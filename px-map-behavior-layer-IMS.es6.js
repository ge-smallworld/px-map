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
       * The visible feature collection displayed by this layer.
       *
       * @type {Object}
       */
      featureCollection: {
        type: Object
      },

      /**
       * Defines whether non-editable features are rendered directly on a canvas instead of creating Leaflet objects.
       * Rendering directly on a canvas improves the performance of map.
       * Currenly this only applies to point features.
       * Defaults to false.
       * @type {Boolean}
       */
      enableCanvasRendering: {
        type: Boolean,
        value: false
      },

      /**
       * Canvas for rendering non-editable features directly.
       *
       * @type {Object}
       */
      _IMSCanvas: {
        type: Object
      },

      _iconImages: {
        type: Object,
        value: {}
      },

      /**
       * Rtree for storing point position data.
       *
       * @type {Object}
       */
      _iconTree: {
        type: Object
      },

      /**
       * Object to store the visible feature id and feature pairs.
       *
       * @type {Object}
       */
      _featureMap: {
        type: Object,
        value: {}
      },

       /**
       * Defines whether features are cached to improve performance and reduce the number
       * of request to the IMS service.
       * Defaults to true.
       * @type {Boolean}
       */
      enableCache: {
        type: Boolean,
        value: true
      },

      /**
       * Cache of feature ids.
       * @type {Set}
       */
      _featureCache: {
        type: Set
      },

      /**
       * An rtree cache of features.
       * @type {Object}
       */
      _featureTreeCache: {
        type: Object
      },

      /**
       * Array of map bounds to track the cached features.
       * @type {Array}
       */
      _boundsCache: {
        type: Array
      },

      /**
       * Maximum size of the bounds cache. Defaults to 20.
       * @type {Number}
       */
      maxBoundsCacheSize: {
        type: Number,
        value: 20
      }
    },

    /**
     * Returns whether otherBounds interacts (overlaps or touches) with bounds.
     */
    _boundsInteracts(bounds, otherBounds) {
      return !(otherBounds.minX > bounds.maxX ||
        otherBounds.minY > bounds.maxY ||
        otherBounds.maxX < bounds.minX ||
        otherBounds.maxY < bounds.minY);
    },

    /**
     * Returns whether otherBounds overlaps bounds.
     */
    _boundsOverlaps(bounds, otherBounds) {
      return !(otherBounds.minX >= bounds.maxX ||
        otherBounds.minY >= bounds.maxY ||
        otherBounds.maxX <= bounds.minX ||
        otherBounds.maxY <= bounds.minY);
    },

    /**
     * Returns whether otherBounds contains bounds.
     */
    _boundsContains(bounds, otherBounds) {
      return !(otherBounds.minX > bounds.minX ||
        otherBounds.minY > bounds.minY ||
        otherBounds.maxX < bounds.maxX ||
        otherBounds.maxY < bounds.maxY);
    },

    /**
     * Returns the intersection between bounds and otherBounds if they overlap.
     */
    _getBoundsIntersection(bounds, otherBounds) {
      if (this._boundsOverlaps(bounds, otherBounds)) {
        return {
          minX: Math.max(bounds.minX, otherBounds.minX),
          minY: Math.max(bounds.minY, otherBounds.minY),
          maxX: Math.min(bounds.maxX, otherBounds.maxX),
          maxY: Math.min(bounds.maxY, otherBounds.maxY)
        };
      }
    },

    // Divide bounds not intersecting otherBounds if otherBounds.minX <= bounds.minX
    _splitBoundsLeft(bounds, otherBounds) {
      if (otherBounds.minY <= bounds.minY && otherBounds.maxY >= bounds.maxY) {
        return [{minX: otherBounds.maxX, minY: bounds.minY, maxX: bounds.maxX, maxY: bounds.maxY}];
      }
      if (otherBounds.maxX >= bounds.maxX) {
        if (otherBounds.minY >= bounds.minY && otherBounds.maxY >= bounds.maxY) {
          return [{minX: bounds.minX, minY: bounds.minY, maxX: bounds.maxX, maxY: otherBounds.minY}];
        }
        if (otherBounds.minY <= bounds.minY && otherBounds.maxY <= bounds.maxY) {
          return [{minX: bounds.minX, minY: otherBounds.maxY, maxX: bounds.maxX, maxY: bounds.maxY}];
        }
        if (otherBounds.minY >= bounds.minY && otherBounds.maxY <= bounds.maxY) {
          return [{minX: bounds.minX, minY: otherBounds.maxY, maxX: bounds.maxX, maxY: bounds.maxY},
            {minX: bounds.minX, minY: bounds.minY, maxX: bounds.maxX, maxY: otherBounds.minY}];
        }
      }
      if (otherBounds.minY > bounds.minY && otherBounds.maxY < bounds.maxY) {
        return [{minX: bounds.minX, minY: otherBounds.maxY, maxX: bounds.maxX, maxY: bounds.maxY},
          {minX: otherBounds.maxX, minY: otherBounds.minY, maxX: bounds.maxX, maxY: otherBounds.maxY},
          {minX: bounds.minX, minY: bounds.minY, maxX: bounds.maxX, maxY: otherBounds.minY}];
      }
      if (otherBounds.maxY >= bounds.maxY) {
        return [{minX: otherBounds.maxX, minY: otherBounds.minY, maxX: bounds.maxX, maxY: bounds.maxY},
          {minX: bounds.minX, minY: bounds.minY, maxX: bounds.maxX, maxY: otherBounds.minY}];
      }
      if (otherBounds.minY <= bounds.minY) {
        return [{minX: bounds.minX, minY: otherBounds.maxY, maxX: bounds.maxX, maxY: bounds.maxY},
          {minX: otherBounds.maxX, minY: bounds.minY, maxX: bounds.maxX, maxY: otherBounds.maxY}];
      }
    },

    // Divide bounds not intersecting otherBounds if otherBounds.maxX >= bounds.maxX
    _splitBoundsRight(bounds, otherBounds) {
      if (otherBounds.minY <= bounds.minY && otherBounds.maxY >= bounds.maxY) {
        return [{minX: bounds.minX, minY: bounds.minY, maxX: otherBounds.minX, maxY: bounds.maxY}];
      }
      if (otherBounds.minY > bounds.minY && otherBounds.maxY < bounds.maxY) {
        return [{minX: bounds.minX, minY: otherBounds.maxY, maxX: bounds.maxX, maxY: bounds.maxY},
          {minX: bounds.minX, minY: otherBounds.minY, maxX: otherBounds.minX, maxY: otherBounds.maxY},
          {minX: bounds.minX, minY: bounds.minY, maxX: bounds.maxX, maxY: otherBounds.minY}];
      }
      if (otherBounds.maxY >= bounds.maxY) {
        return [{minX: bounds.xmin, minY: otherBounds.minY, maxX: otherBounds.minX, maxY: bounds.maxY},
          {minX: bounds.minX, minY: bounds.minY, maxX: bounds.maxX, maxY: otherBounds.minY}];
      }
      if (otherBounds.minY <= bounds.minY) {
        return [{minX: bounds.xmin, minY: otherBounds.maxY, maxX: bounds.maxX, maxY: bounds.maxY},
          {minX: bounds.minX, minY: bounds.minY, maxX: otherBounds.minX, maxY: otherBounds.maxY}];
      }
    },

    _splitBoundsCentre(bounds, otherBounds) {
      if (otherBounds.minY <= bounds.minY && otherBounds.maxY >= bounds.maxY) {
        return [{minX: bounds.minX, minY: bounds.minY, maxX: otherBounds.minX, maxY: bounds.maxY},
          {minX: otherBounds.maxX, minY: bounds.minY, maxX: bounds.maxX, maxY: bounds.maxY}];
      }
      if (otherBounds.maxY >= bounds.maxY) {
        return [{minX: bounds.minX, minY: otherBounds.minY, maxX: otherBounds.minX, maxY: bounds.maxY},
          {minX: bounds.minX, minY: bounds.minY, maxX: bounds.maxX, maxY: otherBounds.minY},
          {minX: otherBounds.maxX, minY: otherBounds.minY, maxX: bounds.maxX, maxY: bounds.maxY}];
      }
      if (otherBounds.minY <= bounds.minY) {
        return [{minX: bounds.minX, minY: otherBounds.maxY, maxX: bounds.maxX, maxY: bounds.maxY},
          {minX: bounds.minX, minY: bounds.minY, maxX: otherBounds.minX, maxY: otherBounds.maxY},
          {minX: otherBounds.maxX, minY: bounds.minY, maxX: bounds.maxX, maxY: otherBounds.maxY}];
      }
      // otherBounds inside bounds
      return [{minX: bounds.minX, minY: otherBounds.maxY, maxX: bounds.maxX, maxY: bounds.maxY},
        {minX: bounds.minX, minY: otherBounds.minY, maxX: otherBounds.minX, maxY: otherBounds.maxY},
        {minX: otherBounds.maxX, minY: otherBounds.minY, maxX: bounds.maxX, maxY: otherBounds.maxY},
        {minX: bounds.minX, minY: bounds.minY, maxX: bounds.maxX, maxY: otherBounds.minY}];
    },

    /**
     * Returns an array of bounds defining the area of bounds that is not overlapped by otherBounds.
     */
    _splitBounds(bounds, otherBounds) {
      if (otherBounds.minX <= bounds.minX) {
        return this._splitBoundsLeft(bounds, otherBounds);
      } else if (otherBounds.maxX >= bounds.maxX) {
        return this._splitBoundsRight(bounds, otherBounds);
      } else {
        return this._splitBoundsCentre(bounds, otherBounds);
      }
    },

    /**
     * Returns whether testBounds is overlapped by all of the bounds in boundsArray.
     */
    _boundsCovered(testBounds, boundsArray) {
      if (!boundsArray) {
        boundsArray = this._boundsCache;
      }
      for (let otherBounds of boundsArray) {
        if (this._boundsContains(testBounds, otherBounds)) {
          return true;
        }
      }
      const boundsLength = boundsArray.length;
      for (let i = 0; i < boundsLength; i++) {
        const bounds = boundsArray[i];
        if (this._boundsOverlaps(testBounds, bounds)) {
          const splits = this._splitBounds(testBounds, bounds);
          const newBoundsArray = boundsArray.slice();
          let covered = true;

          newBoundsArray.splice(i, 1); // remove bounds for efficiency
          for (let split of splits) {
            if (!this._boundsCovered(split, newBoundsArray)) {
              covered = false;
              break;
            }
          }
          return covered;
        }
      }
      return false;
    },

    /**
     * Returns the current map bounds.
     */
    _getMapBounds() {
      const mapBounds = this.parentNode.elementInst.getBounds();
      return {
        minX: mapBounds._southWest.lng,
        minY: mapBounds._southWest.lat,
        maxX: mapBounds._northEast.lng,
        maxY: mapBounds._northEast.lat
      };
    },

    /**
     * Returns an array of position pairs from the feature coordinates.
     */
    _getFeatureCoords(feature) {
      let coords = [];
      const featureCoords = feature.geometry.coordinates;

      switch (feature.geometry.type) {
        case 'Point':
          coords.push(featureCoords);
          break;
        case 'LineString':
        case 'MultiPoint':
          coords = featureCoords;
          break;
        case 'Polygon':
        case 'MultiLineString':
          featureCoords.forEach(someCoords => {
            coords.push.apply(coords, someCoords);
          });
          break;
        case 'MultiPolygon':
          featureCoords.forEach(someCoords => {
            someCoords.forEach(someMoreCoords => {
              coords.push.apply(coords, someMoreCoords);
            });
          });
      }

      return coords;
    },

    /**
     * Remove older bounds from the cache if exceeding max cache size - but only
     * if they don't overlap with the current bounds.
     */
    _removeOldBoundsFromCache() {
      const mapBounds = this._getMapBounds();
      const cacheSize = this.maxBoundsCacheSize - 2;

      for (let i = this._boundsCache.length - 1; i > cacheSize; i--) {
        const bounds = this._boundsCache[i];
        if (!this._boundsOverlaps(bounds, mapBounds)) {
          const elementsToRemove = this._featureTreeCache.search(bounds);
          elementsToRemove.forEach(element => {
            let remove = true;
            for (let otherBounds of this._boundsCache) {
              if (otherBounds !== bounds && this._boundsInteracts(element, otherBounds)) {
                remove = false;
                break;
              }
            }
            if (remove) {
              this._featureCache.delete(element.feature.id);
              this._featureTreeCache.remove(element);
            }
          });
          this._boundsCache.splice(i, 1);
        }
      }
    },

    /**
     * Add new features from the current feature collection to the cache
     */
    _addNewBoundsToCache() {
      const mapBounds = this._getMapBounds();
      const features = this.featureCollection.features;
      const elementsToAdd = [];

      features.forEach(feature => {
        if (!this._featureCache.has(feature.id)) {
          const coords = this._getFeatureCoords(feature);
          let minX = coords[0][0];
          let minY = coords[0][1];
          let maxX = coords[0][0];
          let maxY = coords[0][1];
          for (let i = 1; i < coords.length; i++) {
            const c = coords[i];
            if (c[0] < minX) {
              minX = c[0];
            } else if (c[0] > maxX) {
              maxX = c[0];
            }
            if (c[1] < minY) {
              minY = c[1];
            } else if (c[1] > maxY) {
              maxY = c[1];
            }
          }
          elementsToAdd.push({
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            feature: feature
          });
          this._featureCache.add(feature.id);
        }
      });

      this._featureTreeCache.load(elementsToAdd); // Load as an array for efficiency
      this._boundsCache.unshift(mapBounds);
    },

    /**
     * Maintains the cache of features.
     * Removes older bounds from the cache if exceeding max cache size.
     * Adds new bounds and features to the cache.
     */
    _updateFeatureCache() {
      if (this.enableCache) {
        this._removeOldBoundsFromCache();
        this._addNewBoundsToCache();
      }
    },

    /**
     * Clear the cache of map bounds and features.
     */
    clearFeatureCache() {
      this._featureCache.clear();
      this._featureTreeCache.clear();
      this._boundsCache = [];
    },

    /**
     * Returns a feature collection for the current bounds from the cache if possible.
     */
    _getFeatureCollectionFromCache() {
      if (this.enableCache) {
        const mapBounds = this._getMapBounds();
        if (this._boundsCovered(mapBounds)) {
          const result = this._featureTreeCache.search(mapBounds);
          const features = [];
          result.forEach(element => {
            features.push(element.feature);
          });
          return {
            type: 'FeatureCollection',
            features: features
          };
        }
      }
    },

    /**
     * Updates the data displayed by this layer from the cache.
     * This is a temporary update while data is being fetched from IMS.
     * Only updates if there is more feature in the cache to show.
     */
    _updateFeaturesFromCache() {
      if (!this.enableCache) {
        return;
      }
      const nBounds = this._boundsCache.length
      if (nBounds === 0) {
        return;
      }

      const mapBounds = this._getMapBounds();
      const lastBounds = this._boundsCache[nBounds - 1];
      const intersect = this._getBoundsIntersection(mapBounds, lastBounds);
      if (intersect) {
        const elements = this._featureTreeCache.search(mapBounds);
        const oldElements = this._featureTreeCache.search(intersect);
        /*
         * Update the map if there is significantly more features available in the cache for the
         * new bounds compared to what is currently displayed.
         */ 
        if (elements.length > oldElements.length * 1.1) {
          const features = [];
          elements.forEach(element => {
            features.push(element.feature);
          });
          const featureCol = {
            type: 'FeatureCollection',
            features: features
          };

          this._clearIMSLayer();
          this._updateIMSCanvas();
          this._updateFeatures(featureCol);
        }
      }
    },

    /**
     * Update the data displayed by this layer.
     * Refreshes the feature map for lookup by id.
     * @param {Object} featureCol - feature collection to display
     */
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
     * @param {String} featureId - id of the feature
     * @return {object} feature object
     */
    getFeature(featureId) {
      const data = this._featureMap[featureId];
      if (data) {
        return data[0];
      }
    },

    /**
     * Clears the IMS canvas.
     */
    _clearIMSCanvas() {
      if (this._IMSCanvas) {
        this._IMSCanvas.getContext('2d').clearRect(0, 0, this._IMSCanvas.width, this._IMSCanvas.height);
      }
    },

    /**
     * Removes the features from the layer.
     */
    _clearIMSLayer() {
      this._clearIMSCanvas();
      this.elementInst.clearLayers();
      // Clear current visible data caches
      this._featureMap = {};
      this.featureCollection = undefined;
      this._iconTree.clear();
    },

    /**
     * Clears the IMS canvas and redraws the features in the default style.
     */
    _redrawIMSCanvas() {
      if (this._IMSCanvas) {
        const map = this._featureMap;
        // Clear the IMS canvas
        this._IMSCanvas.getContext('2d').clearRect(0, 0, this._IMSCanvas.width, this._IMSCanvas.height);
        // Redraw the icons
        for (let featureId in map) {
          const iconData = map[featureId][2];
          if (iconData) {
            this._drawIcon(iconData);
          }
        }
      }
    },

    /**
     * Redraws the Leaflet Layers in this IMS layer.
     */
    _redrawLayers() {
      // Adds the appropriate feature data to the layer again to create new layers.
      const map = this._featureMap;
      const features = [];

      for (let featureId in map) {
        const data = map[featureId];
        if (data[1]) {
          features.push(data[0]);
        }
      }

      const featureCol = {
        type: 'FeatureCollection',
        features: features
      };

      this.elementInst.clearLayers();
      this.elementInst.addData(featureCol);
      
      // Add new layers to the feature map.
      const layers = this.elementInst._layers;
      for (let i in layers) {
        const layer = layers[i];
        map[layer.feature.id][1] = layer;
      }
    },

    /**
     * Redraws the features in the layer.
     * Note: Does NOT fire event 'IMS-layer-ready'
     */
    redrawIMSLayer() {
      if (!this.featureCollection) {
        return;
      }
      if (this.parentNode.elementInst.getZoom() < this._getLayerStartingZoomValue()) {
        return;
      }

      const layersLength = Object.keys(this.elementInst._layers).length;

      this._redrawIMSCanvas();
      if (layersLength > 0) {
        this._redrawLayers();
      }
    },

    _drawIcon(iconData, styleOptions) {
      let iconUrl = iconData.iconUrl;
      let x = iconData.minX;
      let y = iconData.minY;
      let width = iconData.maxX - x;
      let height = iconData.maxY - y;

      if (styleOptions) {
        iconUrl = styleOptions.iconUrl || styleOptions.iconSrc || iconUrl;
        if (styleOptions.iconAnchor) {
          x = iconData.pixelPoint.x - styleOptions.iconAnchor[0];
          y = iconData.pixelPoint.y - styleOptions.iconAnchor[1];
        }
        if (styleOptions.iconSize) {
          width = styleOptions.iconSize[0];
          height = styleOptions.iconSize[1];
        }
      }

      let img = this._iconImages[iconUrl];
      const context = this._IMSCanvas.getContext('2d');
      if (img) {
        context.drawImage(img, x * devicePixelRatio, y * devicePixelRatio, width * devicePixelRatio, height * devicePixelRatio);
      } else {
        img = new Image();
        img.onload = () => {
          this._iconImages[iconUrl] = img;
          context.drawImage(img, x * devicePixelRatio, y * devicePixelRatio, width * devicePixelRatio, height * devicePixelRatio);
        };
        img.src = iconUrl;
      }
    },

    /**
     * Creates a canvas in the layer pane for direct rendering of point features.
     * @param {String} paneName - name of the layer element
     */
    _addIMSCanvas(paneName) {
      if (!this.enableCanvasRendering || this.editable) return;

      const mapInst = this.parentNode.elementInst;
      const width = window.getComputedStyle(mapInst._container).width;
      const height = window.getComputedStyle(mapInst._container).height;

      this._IMSCanvas = document.createElement('canvas');
      this._IMSCanvas.width = parseInt(width);
      this._IMSCanvas.height = parseInt(height);
      this._IMSCanvas.style.pointerEvents = 'none';

      mapInst.getPane(paneName).appendChild(this._IMSCanvas);

      mapInst.addEventListener('click', (evt) => {
        this._handleIMSCanvasClicked(evt);
      });

      // Sort handlers by z index
      const clickHandlers = mapInst._events.click;
      clickHandlers[clickHandlers.length - 1].zIndex = this.pane.zIndex;
      clickHandlers.sort((a, b) => {
        return a.zIndex - b.zIndex;
      });
    },

    /**
     * Adds a point to the layer.
     * Creates a Marker if the layer is editable, otherwise renders the point directly
     * on a canvas.
     */
    _addIcon(feature, latlng, paneName, options) {
      const iconOptions = options.markerIconOptions;
      iconOptions.iconUrl = iconOptions.iconUrl || this.markerIconOptions.iconUrl;
      iconOptions.iconSize = iconOptions.iconSize || [16, 16];
      iconOptions.iconAnchor = iconOptions.iconAnchor || [8, 8];

      if (!this.enableCanvasRendering || this.editable) {
        let markerIcon;
  
        if (iconOptions.divIcon) {
            iconOptions.html = iconOptions.html || this.markerIconOptions.html;
            markerIcon = L.divIcon(iconOptions);
        } else {
            markerIcon = L.icon(iconOptions);
        }
        return new L.Marker(latlng, {icon: markerIcon, pane: paneName});
      } else {
        const mapInst = this.parentNode.elementInst;
        const pixelPoint = mapInst.latLngToContainerPoint(latlng);
        const x = pixelPoint.x - iconOptions.iconAnchor[0];
        const y = pixelPoint.y - iconOptions.iconAnchor[1];
        const iconData = {
          minX: x,
          minY: y,
          maxX: x + iconOptions.iconSize[0],
          maxY: y + iconOptions.iconSize[1],
          feature: feature,
          latlng: latlng,
          pixelPoint: pixelPoint,
          iconUrl: iconOptions.iconUrl
        };

        // Store icon data in rtree for selection lookup and feature map for highlight lookup
        this._iconTree.insert(iconData);
        this._featureMap[feature.id][2] = iconData;

        this._drawIcon(iconData);
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
      const mapInst = this.parentNode.elementInst;
      const paneName =  options.pane.name || options.layerName;
      const attributeProperties = this.getInstOptions().featureStyle;

      // Set default icon if required
      if (!this.markerIconOptions) {
        this.markerIconOptions = {};
      }
      if (!this.markerIconOptions.html) {
        this.markerIconOptions.html = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  height="16" width="16"><circle cx="8" cy="8" r="6" stroke="#3E87E8" stroke-width="3" fill="#88BDE6" fill-opacity="0.4"/></svg>';
      }
      if (!this.markerIconOptions.iconUrl) {
        this.markerIconOptions.iconUrl = "data:image/svg+xml;base64," + btoa(this.markerIconOptions.html);
      }

      // Create default icon image
      const img = new Image();
      img.onload = () => {
        this._iconImages[this.markerIconOptions.iconUrl] = img;
      };
      img.src = this.markerIconOptions.iconUrl;

      //Create a custom pane to draw onto so that we can control the draw order.
      mapInst.createPane(paneName);
      mapInst.getPane(paneName).classList.add('custom-pane');
      mapInst.getPane(paneName).style.zIndex = options.pane.zIndex;

      this._addIMSCanvas(paneName);

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

      if (this.editable) {
        this._addEditableTools(mapInst, IMSLayer);
      }

      if (this.parentNode.elementInst.getZoom() >= this._getLayerStartingZoomValue()) {
        this._requestCollectionsFromIMS(options, initialBounds);
      }

      // Setup rtree for storing points for selection
      this._iconTree = new rbush(16);

      // Caches to store features
      this._featureCache = new Set();
      this._featureTreeCache = new rbush();
      this._boundsCache = [];

      //Bind to px-maps moveend to re-request the data with new bounds
      //If layer is not going to be rendered at the current zoom level, don't load
      mapInst.on({
        zoomstart: () => {
          // TODO update the transform of the canvas whilst zooming
          this._clearIMSCanvas();
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
      if (options.demo) this.url = 'demo/px-map-layer-geojson-data.json';
      this.querySelector('#get-collection').generateRequest();
    },

    //Ensures that layer is visible at the current zoom level only if it should be, if not it clears it
    _checkZoomLevelVisibilities() {
      if (this.parentNode.elementInst.getZoom() >= this._getLayerStartingZoomValue()) {
        const bounds = this.parentNode.elementInst.getBounds();
        const boundsArray = [bounds._southWest.lng, bounds._northEast.lng, bounds._southWest.lat, bounds._northEast.lat];
        this.setNewBounds(boundsArray);
      } else {
        this._clearIMSLayer();
      }
    },

    /**
     * Updates the width, height and transform of the IMS canvas.
     */
    _updateIMSCanvas() {
      if (!this._IMSCanvas) return;

      const mapInst = this.parentNode.elementInst;

      // Update canvas transform
      const trans = window.getComputedStyle(this._IMSCanvas.parentNode.parentNode).transform;
      const transParts = trans.match(/-?[\d\.]+/g);
      const transX = - parseInt(transParts[4]);
      const transY = - parseInt(transParts[5]);
      this._IMSCanvas.style.transform = `translate(${transX}px, ${transY}px)`;

      const width = parseFloat(window.getComputedStyle(mapInst._container).width);
      const height = parseFloat(window.getComputedStyle(mapInst._container).height);

      if (this._IMSCanvas.width != width * devicePixelRatio || this._IMSCanvas.height != height * devicePixelRatio) {
        // Upscale the canvas content
        this._IMSCanvas.width = width * devicePixelRatio;
        this._IMSCanvas.height = height * devicePixelRatio;
        // Downscale the presentation
        this._IMSCanvas.style.width = width.toString() + 'px';
        this._IMSCanvas.style.height = height.toString() + 'px';
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

      this._clearIMSLayer();
      this._updateIMSCanvas();
      this._updateFeatures(eventContext.detail.response);
      this._updateFeatureCache();

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
      const paneName = lastOptions.pane.name || lastOptions.layerName;

      if (nextOptions.layerName.length < 0) {
        this._clearIMSLayer();
      }
      else if (nextOptions.layerName.length > 0 && (lastOptions.layerName !== nextOptions.layerName || lastOptions.featureStyleHash !== nextOptions.featureStyleHash)) {
        const styleAttributeProperties = this.getInstOptions().featureStyle;

        this.clearFeatureCache();
        this._clearIMSLayer();

        this.elementInst.options.style = (feature) => {
          const featureProperties = feature.properties.style || {};
          return this._getStyle(featureProperties, styleAttributeProperties);
        };

        //Request the new IMS collection
        const mapBounds = this.parentNode.elementInst.getBounds();
        if (this.parentNode.elementInst.getZoom() >= this._getLayerStartingZoomValue()) {
          this._requestCollectionsFromIMS(nextOptions, mapBounds);
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
        this.elementInst.options.pointToLayer = (feature, latlng) => {
          this._addIcon(feature, latlng, paneName, nextOptions);
        };

        // Clear cache because icons have changed
        this.clearFeatureCache();
        // Clear IMS canvas and layers
        this._clearIMSCanvas();
        this.elementInst.clearLayers();
        // Add current feature collection to update
        this._updateFeatures(this.featureCollection);

        if (nextOptions.showFeatureProperties) {
          this._bindFeaturePopups();
        }

        this.fire('IMS-layer-ready', this.layerName);
      }
      else if (lastOptions.pane.zIndex !== nextOptions.pane.zIndex) {
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
      if (boundsArray && boundsArray.length === 4 && !boundsArray.some(isNaN)) {

        boundsArray[0] < -180 ? boundsArray[0] = -180 : null;
        boundsArray[1] > 180 ? boundsArray[1] = 180 : null;
        boundsArray[2] < -90 ? boundsArray[2] = 90 : null;
        boundsArray[3] > 90 ? boundsArray[3] = 90 : null;

        this.url = `/v1/collections/${this.layerName}/spatial-query/bbox-interacts?`+
          `left=${boundsArray[0]}&right=${boundsArray[1]}&top=${boundsArray[2]}&bottom=${boundsArray[3]}`;
        if (this.demo) this.url = 'demo/px-map-layer-geojson-data.json';

        //Cancel existing request (if there is one) and generate a new one.
        const ironAjax = this.querySelector('#get-collection');
        if (ironAjax.lastRequest) {
          ironAjax.lastRequest.abort();
        }

        // Try and get data from cache
        const featureCol = this._getFeatureCollectionFromCache();
        if (featureCol) {
          this._clearIMSLayer();
          this._updateIMSCanvas();
          this._updateFeatures(featureCol);

          this.fire('IMS-layer-ready', this.layerName);
        } else {
          ironAjax.generateRequest();
          this._updateFeaturesFromCache();
        }
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
      if (!data || this.parentNode.elementInst.getZoom() < this._getLayerStartingZoomValue()) {
        return done;
      }

      if (data[1]) {
        const layer = data[1];
        layer._icon ? (layer._icon.setAttribute('src', styleOptions.iconSrc))
                      : (layer.setStyle(styleOptions));
        done = true;
      } else if (data[2]) {
        this._drawIcon(data[2], styleOptions)
        done = true;
      }

      return done;
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

    _handleIMSCanvasClicked(evt) {
      const conPoint = evt.containerPoint;
      const x = conPoint.x;
      const y = conPoint.y;
      const points = this._iconTree.search({
        minX: x,
        minY: y,
        maxX: x,
        maxY: y
      });

      if (points.length) {
        // Find the closest point to the click event
        let result;
        let minDist = Infinity;
        points.forEach(point => {
          const dist = point.pixelPoint.distanceTo(conPoint);
          if (dist < minDist) {
            minDist = dist;
            result = point.feature;
          }
        });
        this.fire('px-map-layer-geojson-feature-tapped', {
          feature: result,
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
