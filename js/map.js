
$(document).ready(function(){

            var map, editor;
           
           
            OpenLayers.Lang.setCode('fr');

            map = new OpenLayers.Map('map');
            map.addLayer(new OpenLayers.Layer.OSM());
            map.setCenter(new OpenLayers.LonLat(10, 50), 5);

             editor = new OpenLayers.Editor(map, {
                activeControls: ['TransformFeature', 'Separator',  'DragFeature', 'SelectFeature', 'Separator', 'ModifyFeature', 'Separator'],
                featureTypes: ['path']
            });
            editor.startEditMode();
        });