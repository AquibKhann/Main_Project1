const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');
if(typeof inputs == undefined){
  map.setStyle('mapbox://styles/mapbox/streets-v12');
}
for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
}
    
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
      container: "map", // container ID

      center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
      zoom: 9 // starting zoom
    });

    const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
      `<h4>${listing.title}</h4> <p>Exact location will be provided after booking</p>`))
    .addTo(map);
  

