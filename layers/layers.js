var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ken_admbnda_adm1_iebc_20191031_1 = new ol.format.GeoJSON();
var features_ken_admbnda_adm1_iebc_20191031_1 = format_ken_admbnda_adm1_iebc_20191031_1.readFeatures(json_ken_admbnda_adm1_iebc_20191031_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_admbnda_adm1_iebc_20191031_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_admbnda_adm1_iebc_20191031_1.addFeatures(features_ken_admbnda_adm1_iebc_20191031_1);
var lyr_ken_admbnda_adm1_iebc_20191031_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_admbnda_adm1_iebc_20191031_1, 
                style: style_ken_admbnda_adm1_iebc_20191031_1,
                popuplayertitle: "ken_admbnda_adm1_iebc_20191031",
                interactive: true,
                title: '<img src="styles/legend/ken_admbnda_adm1_iebc_20191031_1.png" /> ken_admbnda_adm1_iebc_20191031'
            });
var format_KEN_Populatedplaces_2002_DEPHA_2 = new ol.format.GeoJSON();
var features_KEN_Populatedplaces_2002_DEPHA_2 = format_KEN_Populatedplaces_2002_DEPHA_2.readFeatures(json_KEN_Populatedplaces_2002_DEPHA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEN_Populatedplaces_2002_DEPHA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEN_Populatedplaces_2002_DEPHA_2.addFeatures(features_KEN_Populatedplaces_2002_DEPHA_2);
var lyr_KEN_Populatedplaces_2002_DEPHA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEN_Populatedplaces_2002_DEPHA_2, 
                style: style_KEN_Populatedplaces_2002_DEPHA_2,
                popuplayertitle: "KEN_Populated places_2002_DEPHA",
                interactive: true,
                title: '<img src="styles/legend/KEN_Populatedplaces_2002_DEPHA_2.png" /> KEN_Populated places_2002_DEPHA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ken_admbnda_adm1_iebc_20191031_1.setVisible(true);lyr_KEN_Populatedplaces_2002_DEPHA_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ken_admbnda_adm1_iebc_20191031_1,lyr_KEN_Populatedplaces_2002_DEPHA_2];
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_KEN_Populatedplaces_2002_DEPHA_2.set('fieldAliases', {'Z__': 'Z__', 'UFI': 'UFI', 'UNI': 'UNI', 'DLAT': 'DLAT', 'DLONG': 'DLONG', 'LAT': 'LAT', 'LONG': 'LONG', 'MGRS': 'MGRS', 'UTM': 'UTM', 'JOG': 'JOG', 'FC': 'FC', 'DSG': 'DSG', 'PC': 'PC', 'CC1': 'CC1', 'ADM1': 'ADM1', 'ADM2': 'ADM2', 'DIM': 'DIM', 'CC2': 'CC2', 'NT': 'NT', 'LC': 'LC', 'SHORT_FORM': 'SHORT_FORM', 'GENERIC': 'GENERIC', 'SORT_NAME': 'SORT_NAME', 'FULL_NAME': 'FULL_NAME', 'FULL_NAME_': 'FULL_NAME_', 'NEWDLAT': 'NEWDLAT', 'NEWDLONG': 'NEWDLONG', 'CODE': 'CODE', 'DISTRICT': 'DISTRICT', 'REGION': 'REGION', 'LOCATION': 'LOCATION', 'SUB_LOCATI': 'SUB_LOCATI', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_KEN_Populatedplaces_2002_DEPHA_2.set('fieldImages', {'Z__': 'Range', 'UFI': 'Range', 'UNI': 'Range', 'DLAT': 'TextEdit', 'DLONG': 'TextEdit', 'LAT': 'Range', 'LONG': 'Range', 'MGRS': 'TextEdit', 'UTM': 'TextEdit', 'JOG': 'TextEdit', 'FC': 'TextEdit', 'DSG': 'TextEdit', 'PC': 'Range', 'CC1': 'TextEdit', 'ADM1': 'Range', 'ADM2': 'Range', 'DIM': 'Range', 'CC2': 'Range', 'NT': 'TextEdit', 'LC': 'Range', 'SHORT_FORM': 'Range', 'GENERIC': 'Range', 'SORT_NAME': 'TextEdit', 'FULL_NAME': 'TextEdit', 'FULL_NAME_': 'TextEdit', 'NEWDLAT': 'TextEdit', 'NEWDLONG': 'TextEdit', 'CODE': 'Range', 'DISTRICT': 'TextEdit', 'REGION': 'TextEdit', 'LOCATION': 'TextEdit', 'SUB_LOCATI': 'TextEdit', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_KEN_Populatedplaces_2002_DEPHA_2.set('fieldLabels', {'Z__': 'no label', 'UFI': 'no label', 'UNI': 'no label', 'DLAT': 'no label', 'DLONG': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'MGRS': 'no label', 'UTM': 'no label', 'JOG': 'no label', 'FC': 'no label', 'DSG': 'no label', 'PC': 'no label', 'CC1': 'no label', 'ADM1': 'no label', 'ADM2': 'no label', 'DIM': 'no label', 'CC2': 'no label', 'NT': 'no label', 'LC': 'no label', 'SHORT_FORM': 'no label', 'GENERIC': 'no label', 'SORT_NAME': 'no label', 'FULL_NAME': 'no label', 'FULL_NAME_': 'no label', 'NEWDLAT': 'no label', 'NEWDLONG': 'no label', 'CODE': 'no label', 'DISTRICT': 'inline label - always visible', 'REGION': 'no label', 'LOCATION': 'inline label - always visible', 'SUB_LOCATI': 'inline label - always visible', });
lyr_KEN_Populatedplaces_2002_DEPHA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});