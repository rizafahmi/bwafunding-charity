<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Map from "../components/Map.svelte";

  export let ready;
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCy7becgYuLwns3uumNm6WdBYkBpLfy44k&callback=initMap">

  </script>
</svelte:head>

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
            {#if ready}
              <Map />
            {/if}
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
