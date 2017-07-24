(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.GeoJSONLayer
   */
  PxMapBehavior.GeoJSONLayerImpl = {
    properties: {
      /**
       * An object formatted as a GeoJSON FeatureCollection with one or many Features.
       * Each feature can be formatted as any valid GeoJSON geometry type: Point,
       * LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon,
       * or GeometryCollection. See the [GeoJSON spec](http://geojson.org/geojson-spec.html)
       * for guidance on generating valid GeoJSON.
       *
       * Each feature should contain a `properties` object that can hold metadata
       * about the feature. Optionally, the feature's `properties.style` can be
       * set to an object that will be used to style the feature when it is drawn.
       * Styles set in a feature's `properties.style` will override the styles
       * set in the `featureStyle` attribute. See the `featureStyle` attribute
       * documentation for a list of available style options.
       *
       * @type {Object}
       */
      data: {
        type: Object,
        observer: 'shouldUpdateInst'
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
      }
    },

    /**
     * Forces the GeoJSON layer to deeply check the `data` attribute for differences
     * in the data from the last draw, and make any necessary updates. Call this
     * method if you are passing an object by reference to `data` and making deep
     * updates that don't trigger property observers.
     *
     * @return {undef}
     */
    update() {
      if (!this.elementInst) return;

      this.shouldUpdateInst();
    },

    canAddInst() {
      return this.data && typeof this.data === 'object' && Object.keys(this.data).length;
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
      const geoJsonPaneName = options.pane.name || 'overlayPane';
      this.parentNode.elementInst.createPane(geoJsonPaneName);
      this.parentNode.elementInst.getPane(geoJsonPaneName).classList.add('custom-pane');
      this.parentNode.elementInst.getPane(geoJsonPaneName).style.zIndex = options.pane.zIndex;

      const geojsonLayer = L.geoJson(options.data, {
        pointToLayer: (feature, latlng) => {
          const iconOptions = options.markerIconOptions;
          iconOptions.iconSize = options.markerIconOptions.iconSize || [16, 16];
          iconOptions.iconAnchor = options.markerIconOptions.iconAnchor || [8, 8];

          let markerIcon;

          if (iconOptions.divIcon) {
            iconOptions.html = iconOptions.html || defaultMarkerIcon;
            markerIcon = L.divIcon(iconOptions);
          } else {
            iconOptions.iconUrl = iconOptions.iconUrl || defaultMarkerIconURL;
            markerIcon = L.icon(iconOptions);
          }

          return new L.Marker(latlng, {icon: markerIcon, pane: geoJsonPaneName});
        },

        onEachFeature: (feature, layer) => {
          if (!this.showFeatureProperties) return;
          this._bindPopup(feature, layer);
        },

        style: (feature) => {
          const featureProperties = feature.properties.style || {};
          const attributeProperties = this.getInstOptions().featureStyle;

          return this._getStyle(featureProperties, attributeProperties);
        },

        pane: geoJsonPaneName
      });

      if(this.editable) {
        this._addEditableTools(this.parentNode.elementInst, geojsonLayer);
      }

      return geojsonLayer;
    },

    _addEditableTools(leafletMap, geojsonLayer) {
      if(!leafletMap.editTools) {
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

      if(this.sketch) {
        leafletMap.editTools.featuresLayer = geojsonLayer;
      }

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
     * new style is not the same as the old. (Stringifying is needed here to be
     * able to do a deep equality check).
     */
    updateInst(lastOptions, nextOptions) {
      if (!Object.keys(nextOptions.data).length) {
        this.elementInst.clearLayers();
      }
      else if (Object.keys(nextOptions.data).length && (lastOptions.dataHash !== nextOptions.dataHash || lastOptions.featureStyleHash !== nextOptions.featureStyleHash)) {
        const styleAttributeProperties = this.getInstOptions().featureStyle;

        this.elementInst.clearLayers();
        this.elementInst.options.style = (feature) => {
          const featureProperties = feature.properties.style || {};
          return this._getStyle(featureProperties, styleAttributeProperties);
        };

        this.elementInst.addData(nextOptions.data);
        if (nextOptions.showFeatureProperties) {
          this._bindFeaturePopups();
        }
      }
      else if (lastOptions.showFeatureProperties !== nextOptions.showFeatureProperties) {
        if (nextOptions.showFeatureProperties) this._bindFeaturePopups();
        if (!nextOptions.showFeatureProperties) this._unbindFeaturePopups();
      }
      else if (lastOptions.markerIconOptionsHash !== nextOptions.markerIconOptionsHash) {
        this.elementInst.pointToLayer = (feature, latlng) => {
          const iconOptions = nextOptions.markerIconOptions;
          iconOptions.iconSize = nextOptions.markerIconOptions.iconSize || [16, 16];
          iconOptions.iconAnchor = nextOptions.markerIconOptions.iconAnchor || [8, 8];
          iconOptions.iconUrl = nextOptions.markerIconOptions.iconSize || defaultMarkerIconURL;

          const markerIcon = L.icon(iconOptions);

          return new L.Marker(latlng, {icon: markerIcon});
        };

        this.elementInst.clearLayers();
        this.elementInst.addData(nextOptions.data);
        if (nextOptions.showFeatureProperties) {
          this._bindFeaturePopups();
        }
      } else if (lastOptions.pane.zIndex !== nextOptions.pane.zIndex) {
        this.parentNode.elementInst.getPane(customPaneName).style.zIndex = nextOptions.pane.zIndex;
      }
    },

    getInstOptions() {
      return {
        data: this.data || {},
        dataHash: JSON.stringify(this.data || {}),
        featureStyle: this.featureStyle || {},
        featureStyleHash: JSON.stringify(this.featureStyle || {}),
        featureSVG: this.featureSvg,
        markerIconOptions: this.markerIconOptions || {},
        markerIconOptionsHash: JSON.stringify(this.markerIconOptions || {}),
        pane: this.pane || {},
        showFeatureProperties: this.showFeatureProperties
      };
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
      }
      this.fire('px-map-layer-geojson-feature-tapped', detail);
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
  /* Bind GeoJSONLayer behavior */
  /** @polymerBehavior */
  PxMapBehavior.GeoJSONLayer = [
    PxMapBehavior.Layer,
    PxMapBehavior.GeoJSONLayerImpl
  ];
})();
