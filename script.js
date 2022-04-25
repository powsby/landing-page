// https://threejs.org/docs/#examples/en/controls/OrbitControls

function intGlobe(countries, flights) {
  const colorInterpolator = (t) => `rgba(255,255,255,${1 - t})`;
  let airports = [];

  for (var i = 0; i < flights.flights.length; i++) {
    var airportLocation = {};

    airportLocation["text"] = flights.flights[i]["from"];
    airportLocation["lat"] = flights.flights[i]["startLat"];
    airportLocation["lng"] = flights.flights[i]["startLng"];

    airports.push(airportLocation);
  }

  const world = Globe()(document.getElementById("globeViz"))
    // .globeImageUrl('https://unpkg.com/three-globe@2.24.3/example/img/earth-night.jpg')
    // .bumpImageUrl('https://unpkg.com/three-globe@2.24.3/example/img/earth-topology.png')
    // .backgroundImageUrl('https://unpkg.com/three-globe@2.24.3/example/img/night-sky.png')
    .backgroundColor("rgba(255,255,255, 0.0)")
    .ringsData(airports)
    .ringColor(() => colorInterpolator)
    .arcsData(flights.flights)
    .arcColor("color")
    .arcStroke(0.2)
    .arcCurveResolution(500)
    .arcDashLength(0.6)
    .arcDashGap(4)
    .arcDashInitialGap(() => Math.random() * 5)
    .arcDashAnimateTime(2000)
    .arcsTransitionDuration(1000)
    .hexBinPointWeight("pop")
    .hexBinResolution(4)
    .hexBinMerge(true)
    .enablePointerInteraction(false)
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonCurvatureResolution(0)
    .hexPolygonsTransitionDuration(1500)
    .hexPolygonMargin(0.7)
    .hexPolygonColor((e) => "rgba(255,255,255, 0.3)")
    .showAtmosphere(true)
    .atmosphereColor("#2E2E2E")
    .atmosphereAltitude(0.2)
    .pointsData(airports)
    .pointColor(() => "#ffffff")
    .pointsMerge(true)
    .pointAltitude(0)
    .pointRadius(0.5)
    .pointOfView({ lat: 39.6, lng: -98.5, altitude: 1 }); ;

  // Add auto-rotation
  world.controls().autoRotate = true;
  world.controls().autoRotateSpeed = -0.6;
  world.controls().enableZoom = false;

  // custom globe material
  const globeMaterial = world.globeMaterial();
  globeMaterial.bumpScale = 10;
  globeMaterial.opacity = 0.8;
  globeMaterial.shininess = 20;
  globeMaterial.color = new THREE.Color(0x02000a);
}

let flights = {
  type: "FlightsCollection",
  flights: [
    {
      type: "flight",
      order: 2,
      from: "ITL",
      to: "NYC",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 42.63843,
      startLng: 12.6743,
      endLat: 40.71273,
      endLng: -74.00602,
      arcAlt: 0.08,
      color: ["#20DC86", "#0092F4"]
    },
    {
      type: "flight",
      order: 3,
      from: "ILS",
      to: "SWE",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 31.53131,
      startLng: 34.86677,
      endLat: 59.64679,
      endLng: 17.93704,
      arcAlt: 0.08,
      color: ["#0092F4", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "BRL",
      to: "WAR",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 55,
      startLng: 15,
      endLat: 50,
      endLng: 20,
      arcAlt: 0.08,
      color: ["#FF4800", "#DA54D8"]
    },
    {
      type: "flight",
      order: 5,
      from: "UK",
      to: "FR",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 55,
      startLng: 0,
      endLat: 45,
      endLng: 5,
      arcAlt: 0.08,
      color: ["#20DC86", "#0092F4"]
    },
    {
      type: "flight",
      order: 4,
      from: "ES",
      to: "MAL",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 40,
      startLng: -5,
      endLat: 35,
      endLng: 15,
      arcAlt: 0.08,
      color: ["#0092F4", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "CN",
      to: "GR",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 30,
      startLng: 105,
      endLat: 40,
      endLng: 25,
      arcAlt: 0.08,
      color: ["#FF4800", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "IN",
      to: "PT",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 25,
      startLng: 80,
      endLat: 35,
      endLng: -5,
      arcAlt: 0.08,
      color: ["#20DC86", "#0092F4"]
    },
    {
      type: "flight",
      order: 4,
      from: "US",
      to: "CO",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 35,
      startLng: -110,
      endLat: 5,
      endLng: -75,
      arcAlt: 0.08,
      color: ["#0092F4", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "AU",
      to: "BR",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: -40,
      startLng: 145,
      endLat: -10,
      endLng: -55,
      arcAlt: 0.08,
      color: ["#FF4800", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "US",
      to: "CN",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 45,
      startLng: -125,
      endLat: 35,
      endLng: 105,
      arcAlt: 0.08,
      color: ["#20DC86", "#0092F4"]
    },
    {
      type: "flight",
      order: 4,
      from: "DE",
      to: "IN",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 50,
      startLng: 10,
      endLat: 20,
      endLng: 75,
      arcAlt: 0.08,
      color: ["#0092F4", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "DE",
      to: "IN",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 40,
      startLng: 70,
      endLat: -25,
      endLng: 150,
      arcAlt: 0.08,
      color: ["#FF4800", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "DE",
      to: "IN",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 0,
      startLng: 115,
      endLat: 15,
      endLng: 30,
      arcAlt: 0.08,
      color: ["#20DC86", "#0092F4"]
    },
    {
      type: "flight",
      order: 4,
      from: "DE",
      to: "IN",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 45,
      startLng: -65,
      endLat: 25,
      endLng: -105,
      arcAlt: 0.08,
      color: ["#0092F4", "#DA54D8"]
    },
    {
      type: "flight",
      order: 2,
      from: "ITL",
      to: "NYC",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 40.71273,
      startLng: -74.00602,
      endLat: 42.63843,
      endLng: 12.6743,
      arcAlt: 0.08,
      color: ["#FF4800", "#DA54D8"]
    },
    {
      type: "flight",
      order: 3,
      from: "ILS",
      to: "SWE",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 59.64679,
      startLng: 17.93704,
      endLat: 31.53131,
      endLng: 34.86677,
      arcAlt: 0.08,
      color: ["#20DC86", "#0092F4"]
    },
    {
      type: "flight",
      order: 4,
      from: "BRL",
      to: "WAR",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 50,
      startLng: 20,
      endLat: 55,
      endLng: 15,
      arcAlt: 0.08,
      color: ["#0092F4", "#DA54D8"]
    },
    {
      type: "flight",
      order: 5,
      from: "UK",
      to: "FR",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 45,
      startLng: 5,
      endLat: 55,
      endLng: 0,
      arcAlt: 0.08,
      color: ["#FF4800", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "ES",
      to: "MAL",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 35,
      startLng: 15,
      endLat: 40,
      endLng: -5,
      arcAlt: 0.08,
      color: ["#20DC86", "#0092F4"]
    },
    {
      type: "flight",
      order: 4,
      from: "CN",
      to: "GR",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 40,
      startLng: 25,
      endLat: 30,
      endLng: 105,
      arcAlt: 0.08,
      color: ["#0092F4", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "IN",
      to: "PT",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 35,
      startLng: -5,
      endLat: 20,
      endLng: 80,
      arcAlt: 0.08,
      color: ["#FF4800", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "US",
      to: "CO",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 5,
      startLng: -75,
      endLat: 35,
      endLng: 110,
      arcAlt: 0.08,
      color: ["#20DC86", "#0092F4"]
    },
    {
      type: "flight",
      order: 4,
      from: "AU",
      to: "BR",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: -10,
      startLng: -55,
      endLat: 50,
      endLng: 145,
      arcAlt: 0.08,
      color: ["#0092F4", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "US",
      to: "CN",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 45,
      startLng: -125,
      endLat: 35,
      endLng: 105,
      arcAlt: 0.08,
      color: ["#FF4800", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "DE",
      to: "IN",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 20,
      startLng: 75,
      endLat: 50,
      endLng: 10,
      arcAlt: 0.08,
      color: ["#20DC86", "#0092F4"]
    },
    {
      type: "flight",
      order: 4,
      from: "DE",
      to: "IN",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: -25,
      startLng: 150,
      endLat: 40,
      endLng: 70,
      arcAlt: 0.08,
      color: ["#0092F4", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "DE",
      to: "IN",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 15,
      startLng: 30,
      endLat: 0,
      endLng: 115,
      arcAlt: 0.08,
      color: ["#FF4800", "#DA54D8"]
    },
    {
      type: "flight",
      order: 4,
      from: "DE",
      to: "IN",
      flightCode: "KC 110",
      date: "Mar 8, 2020",
      status: false,
      startLat: 25,
      startLng: -105,
      endLat: 45,
      endLng: -65,
      arcAlt: 0.08,
      color: ["#20DC86", "#0092F4"]
    }
  ]
};

let countries = "";
fetch(
  "https://raw.githubusercontent.com/janarosmonaliev/github-globe/main/src/files/globe-data-min.json"
)
  .then((response) => response.json())
  .then((result) => intGlobe(result, flights));