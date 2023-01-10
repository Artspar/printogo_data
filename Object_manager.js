 <script src="https://api-maps.yandex.ru/2.1/?apikey=5347aed0-4504-450e-b3f7-c6ecbb40453b&lang=ru_RU" type="text/javascript"></script>

	<style>
       #map1 {
           /*Задаём ширину, высоту и отступы у карты*/
            max-width: 1200px; height: 500px; padding: 0; margin: 0 auto;
        }
    </style>
    


<script>
    
 ymaps.ready(init);

function init() {
    var myMap1 = new ymaps.Map('map1', {
            center: [59.933054, 30.347354],
            zoom: 10,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });
        
    objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
        clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
        gridSize: 32,
        clusterDisableClickZoom: true
    });
        
    var geolocationControl = new ymaps.control.GeolocationControl({
            options: {
            layout: 'round#buttonLayout',
            float: 'none',
            position: {
                 top: '20px',
                 left: '20px'
            }
            }
        });
            myMap1.controls.add(geolocationControl);
    var zoomControl = new ymaps.control.ZoomControl({
            options: {
            layout: 'round#zoomLayout',
            float: 'none',
            position: {
                 bottom: '50px',
                 right: '20px'
            }
           }
        });
        myMap1.controls.add(zoomControl);
    
    objectManager.objects.options.set('preset', 'islands#greenDotIcon');
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    myMap1.geoObjects.add(objectManager);

    $.ajax({
        url: "https://github.com/Artspar/printogo_data/blob/a2fd6535696b1aab0c76a59f7dd9f4595e917b13/data.json"
    }).done(function(data) {
        objectManager.add(data);
    });

}
    
  </script>
