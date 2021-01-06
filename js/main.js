function loc(){
    // select query 
    let lati = document.getElementById('latitude');
    let longi = document.getElementById('longitude');
    let accur = document.getElementById('accuracy');
    let er = document.getElementById('error');

    let options = {
        enableHighAccuracy : true,
        timeOut:5000,
        maximumAge:0
    }
    function sucess (pos){
        crd = pos.coords;
        lati.textContent = `Latitude : ${crd.latitude}`;
        longi.textContent = `Longitude :${crd.longitude}`;
        accur.textContent = `Accuracy: ${Math.trunc(crd.accuracy)/1000} km`;
    }
    function error(err){
        er.textContent = `ERROR(${err.code}): ${err.message}`
    }
    navigator.geolocation.getCurrentPosition(sucess, error, options);
    console.warn('Your data is stored anywhere don\'t worry');
}