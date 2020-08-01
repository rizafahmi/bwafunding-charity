<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  google.maps.event.addDomListener(window, "load", init);

  function init() {
    // Basic options for a simple Google Map

    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: true,
      scaleControl: false,
      draggable: true,
      disableDefaultUI: true,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.67, -73.94), // New York

      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [
        {
          featureType: "administrative",
          elementType: "all",
          stylers: [{ saturation: "-100" }],
        },
        {
          featureType: "administrative.province",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            { saturation: -100 },
            { lightness: 65 },
            { visibility: "on" },
          ],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            { saturation: -100 },
            { lightness: "50" },
            { visibility: "simplified" },
          ],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: "-100" }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "all",
          stylers: [{ lightness: "30" }],
        },
        {
          featureType: "road.local",
          elementType: "all",
          stylers: [{ lightness: "40" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ saturation: -100 }, { visibility: "simplified" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            { hue: "#ffff00" },
            { lightness: -25 },
            { saturation: -97 },
          ],
        },
        {
          featureType: "water",
          elementType: "labels",
          stylers: [{ lightness: -25 }, { saturation: -100 }],
        },
      ],
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById("xs-map");

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.67, -73.94),
      map: map,
      title: "Snazzy!",
    });
  }
</script>

<Header />
<!-- welcome section -->
<!--breadcumb start here-->
<section
  class="xs-banner-inner-section parallax-window"
  style="background-image:url('assets/images/contact_bg.png')">
  <div class="xs-black-overlay" />
  <div class="container">
    <div class="color-white xs-inner-banner-content">
      <h2>Contact Us</h2>
      <p>Give a helping hand for poor people</p>
      <ul class="xs-breadcumb">
        <li class="badge badge-pill badge-primary">
          <a href="index.html" class="color-white">Home /</a>
          Contact
        </li>
      </ul>
    </div>
  </div>
</section>
<!--breadcumb end here-->
<!-- End welcome section -->

<main class="xs-main">
  <!-- contact section -->
  <section class="xs-contact-section-v2">
    <div class="container">
      <div class="xs-contact-container">
        <div class="row">
          <div class="col-lg-6">
            <div class="xs-contact-form-wraper">
              <h4>Drop us a line</h4>
              <form
                action="#"
                method="POST"
                id="xs-contact-form"
                class="xs-contact-form contact-form-v2">
                <div class="input-group">
                  <input
                    type="text"
                    name="name"
                    id="xs-name"
                    class="form-control"
                    placeholder="Enter Your Name....." />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <i class="fa fa-user" />
                    </div>
                  </div>
                </div>
                <!-- .input-group END -->
                <div class="input-group">
                  <input
                    type="email"
                    name="email"
                    id="xs-email"
                    class="form-control"
                    placeholder="Enter Your Email....." />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <i class="fa fa-envelope-o" />
                    </div>
                  </div>
                </div>
                <!-- .input-group END -->
                <div class="input-group massage-group">
                  <textarea
                    name="massage"
                    placeholder="Enter Your Message....."
                    id="xs-massage"
                    class="form-control"
                    cols="30"
                    rows="10" />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <i class="fa fa-pencil" />
                    </div>
                  </div>
                </div>
                <!-- .input-group END -->
                <button class="btn btn-success" type="submit" id="xs-submit">
                  submit
                </button>
              </form>
              <!-- .xs-contact-form #xs-contact-form END -->
            </div>
            <!-- .xs-contact-form-wraper END -->
          </div>
          <div class="col-lg-6">
            <div class="xs-maps-wraper map-wraper-v2">
              <div id="xs-map" class="xs-box-shadow-2" />
            </div>
          </div>

        </div>
        <!-- .row end -->
      </div>
      <!-- .xs-contact-container END -->
    </div>
    <!-- .container end -->
  </section>
  <!-- End contact section -->
</main>

<Footer />
