var wms_layers = [];

var lyr_gtavatlas8k_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "gtav atlas 8k",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/gtavatlas8k_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-19999212.967289, -10047228.753157, -19991021.289658, -10039028.331010]
                            })
                        });
var format_RollsStep1_1 = new ol.format.GeoJSON();
var features_RollsStep1_1 = format_RollsStep1_1.readFeatures(json_RollsStep1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RollsStep1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RollsStep1_1.addFeatures(features_RollsStep1_1);
var lyr_RollsStep1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RollsStep1_1, 
                style: style_RollsStep1_1,
                popuplayertitle: "Rolls Step 1",
                interactive: true,
                title: '<img src="styles/legend/RollsStep1_1.png" /> Rolls Step 1'
            });
var format_Rollsstep2_2 = new ol.format.GeoJSON();
var features_Rollsstep2_2 = format_Rollsstep2_2.readFeatures(json_Rollsstep2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rollsstep2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rollsstep2_2.addFeatures(features_Rollsstep2_2);
var lyr_Rollsstep2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rollsstep2_2, 
                style: style_Rollsstep2_2,
                popuplayertitle: "Rolls step 2",
                interactive: true,
                title: '<img src="styles/legend/Rollsstep2_2.png" /> Rolls step 2'
            });
var format_POIs_3 = new ol.format.GeoJSON();
var features_POIs_3 = format_POIs_3.readFeatures(json_POIs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIs_3.addFeatures(features_POIs_3);
var lyr_POIs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIs_3, 
                style: style_POIs_3,
                popuplayertitle: "POIs",
                interactive: true,
                title: '<img src="styles/legend/POIs_3.png" /> POIs'
            });
var format_ATMOUTDOOR_4 = new ol.format.GeoJSON();
var features_ATMOUTDOOR_4 = format_ATMOUTDOOR_4.readFeatures(json_ATMOUTDOOR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATMOUTDOOR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATMOUTDOOR_4.addFeatures(features_ATMOUTDOOR_4);
var lyr_ATMOUTDOOR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATMOUTDOOR_4, 
                style: style_ATMOUTDOOR_4,
                popuplayertitle: "ATM OUTDOOR",
                interactive: true,
                title: '<img src="styles/legend/ATMOUTDOOR_4.png" /> ATM OUTDOOR'
            });
var format_ATMINDOOR_5 = new ol.format.GeoJSON();
var features_ATMINDOOR_5 = format_ATMINDOOR_5.readFeatures(json_ATMINDOOR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ATMINDOOR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATMINDOOR_5.addFeatures(features_ATMINDOOR_5);
var lyr_ATMINDOOR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATMINDOOR_5, 
                style: style_ATMINDOOR_5,
                popuplayertitle: "ATM INDOOR",
                interactive: true,
                title: '<img src="styles/legend/ATMINDOOR_5.png" /> ATM INDOOR'
            });
var format_Sellingspots_6 = new ol.format.GeoJSON();
var features_Sellingspots_6 = format_Sellingspots_6.readFeatures(json_Sellingspots_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sellingspots_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sellingspots_6.addFeatures(features_Sellingspots_6);
var lyr_Sellingspots_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sellingspots_6, 
                style: style_Sellingspots_6,
                popuplayertitle: "Selling spots",
                interactive: true,
                title: '<img src="styles/legend/Sellingspots_6.png" /> Selling spots'
            });
var format_Apartments_Homes_7 = new ol.format.GeoJSON();
var features_Apartments_Homes_7 = format_Apartments_Homes_7.readFeatures(json_Apartments_Homes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Apartments_Homes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apartments_Homes_7.addFeatures(features_Apartments_Homes_7);
var lyr_Apartments_Homes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apartments_Homes_7, 
                style: style_Apartments_Homes_7,
                popuplayertitle: "Apartments_Homes",
                interactive: true,
                title: '<img src="styles/legend/Apartments_Homes_7.png" /> Apartments_Homes'
            });
var format_SOAKLABS_8 = new ol.format.GeoJSON();
var features_SOAKLABS_8 = format_SOAKLABS_8.readFeatures(json_SOAKLABS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOAKLABS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOAKLABS_8.addFeatures(features_SOAKLABS_8);
var lyr_SOAKLABS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOAKLABS_8, 
                style: style_SOAKLABS_8,
                popuplayertitle: "SOAKLABS",
                interactive: true,
                title: '<img src="styles/legend/SOAKLABS_8.png" /> SOAKLABS'
            });
var format_Deaddrops_9 = new ol.format.GeoJSON();
var features_Deaddrops_9 = format_Deaddrops_9.readFeatures(json_Deaddrops_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deaddrops_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deaddrops_9.addFeatures(features_Deaddrops_9);
var lyr_Deaddrops_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Deaddrops_9, 
                style: style_Deaddrops_9,
                popuplayertitle: "Dead drops",
                interactive: true,
                title: '<img src="styles/legend/Deaddrops_9.png" /> Dead drops'
            });
var format_DROPCIRCLES_10 = new ol.format.GeoJSON();
var features_DROPCIRCLES_10 = format_DROPCIRCLES_10.readFeatures(json_DROPCIRCLES_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DROPCIRCLES_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DROPCIRCLES_10.addFeatures(features_DROPCIRCLES_10);
var lyr_DROPCIRCLES_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DROPCIRCLES_10, 
                style: style_DROPCIRCLES_10,
                popuplayertitle: "DROP CIRCLES",
                interactive: true,
                title: '<img src="styles/legend/DROPCIRCLES_10.png" /> DROP CIRCLES'
            });

lyr_gtavatlas8k_0.setVisible(true);lyr_RollsStep1_1.setVisible(true);lyr_Rollsstep2_2.setVisible(true);lyr_POIs_3.setVisible(true);lyr_ATMOUTDOOR_4.setVisible(true);lyr_ATMINDOOR_5.setVisible(true);lyr_Sellingspots_6.setVisible(true);lyr_Apartments_Homes_7.setVisible(true);lyr_SOAKLABS_8.setVisible(true);lyr_Deaddrops_9.setVisible(true);lyr_DROPCIRCLES_10.setVisible(true);
var layersList = [lyr_gtavatlas8k_0,lyr_RollsStep1_1,lyr_Rollsstep2_2,lyr_POIs_3,lyr_ATMOUTDOOR_4,lyr_ATMINDOOR_5,lyr_Sellingspots_6,lyr_Apartments_Homes_7,lyr_SOAKLABS_8,lyr_Deaddrops_9,lyr_DROPCIRCLES_10];
lyr_RollsStep1_1.set('fieldAliases', {'Day': 'Day', });
lyr_Rollsstep2_2.set('fieldAliases', {'id': 'id', });
lyr_POIs_3.set('fieldAliases', {'INFO': 'INFO', });
lyr_ATMOUTDOOR_4.set('fieldAliases', {'ID': 'ID', });
lyr_ATMINDOOR_5.set('fieldAliases', {'id': 'id', });
lyr_Sellingspots_6.set('fieldAliases', {'INFO': 'INFO', });
lyr_Apartments_Homes_7.set('fieldAliases', {'info': 'info', });
lyr_SOAKLABS_8.set('fieldAliases', {'DAY': 'DAY', });
lyr_Deaddrops_9.set('fieldAliases', {'Area': 'Area', });
lyr_DROPCIRCLES_10.set('fieldAliases', {'id': 'id', });
lyr_RollsStep1_1.set('fieldImages', {'Day': 'TextEdit', });
lyr_Rollsstep2_2.set('fieldImages', {'id': 'TextEdit', });
lyr_POIs_3.set('fieldImages', {'INFO': 'TextEdit', });
lyr_ATMOUTDOOR_4.set('fieldImages', {'ID': 'TextEdit', });
lyr_ATMINDOOR_5.set('fieldImages', {'id': '', });
lyr_Sellingspots_6.set('fieldImages', {'INFO': 'TextEdit', });
lyr_Apartments_Homes_7.set('fieldImages', {'info': 'TextEdit', });
lyr_SOAKLABS_8.set('fieldImages', {'DAY': 'TextEdit', });
lyr_Deaddrops_9.set('fieldImages', {'Area': 'TextEdit', });
lyr_DROPCIRCLES_10.set('fieldImages', {'id': 'TextEdit', });
lyr_RollsStep1_1.set('fieldLabels', {'Day': 'inline label - always visible', });
lyr_Rollsstep2_2.set('fieldLabels', {'id': 'no label', });
lyr_POIs_3.set('fieldLabels', {'INFO': 'inline label - always visible', });
lyr_ATMOUTDOOR_4.set('fieldLabels', {'ID': 'no label', });
lyr_ATMINDOOR_5.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Sellingspots_6.set('fieldLabels', {'INFO': 'no label', });
lyr_Apartments_Homes_7.set('fieldLabels', {'info': 'inline label - always visible', });
lyr_SOAKLABS_8.set('fieldLabels', {'DAY': 'no label', });
lyr_Deaddrops_9.set('fieldLabels', {'Area': 'no label', });
lyr_DROPCIRCLES_10.set('fieldLabels', {'id': 'no label', });
lyr_DROPCIRCLES_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});