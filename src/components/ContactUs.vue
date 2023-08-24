<template>
  <div class="container-fluid px-5 my-5">
    <div class="row justify-content-center">
      <div class="col-xl-10">
        <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-sm-6 d-none d-sm-block bg-image">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.495128478417!2d18.627532675510704!3d-33.876900019478164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41e6218f7ab3%3A0xbdd802ca53b92d43!2sSharenet%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1692865182094!5m2!1sen!2sza"
                  width="600"
                  height="600"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="col-sm-6 p-4">
                <div class="text-center">
                  <div class="h3 fw-light">FIND US HERE</div>
                  <p class="mb-4 text-muted"><i class="fa-solid fa-map-pin" style="color: #ff0000;"></i>
                    301, 3rd Floor Imperial Terraces Tyger Waterfront Carl
                    Cronje Drive Bellville, Cape Town 7530
                  </p>
                  <p class="mb-4 text-muted"><i class="fa-solid fa-phone" style="color: #55bd00;"></i>(021) 700 4800 +27 21 700 4800 (International)</p>
                </div>

                <form id="contactForm">
                  <!-- Name Input -->
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="name"
                      type="text"
                      placeholder="Name"
                      data-sb-validations="required"
                    />
                    <label for="name">Name</label>
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      Name is required.
                    </div>
                  </div>

                  <!-- Email Input -->
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="emailAddress"
                      type="email"
                      placeholder="Email Address"
                      data-sb-validations="required,email"
                    />
                    <label for="emailAddress">Email Address</label>
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="emailAddress:required"
                    >
                      Email Address is required.
                    </div>
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="emailAddress:email"
                    >
                      Email Address Email is not valid.
                    </div>
                  </div>

                  <!-- Message Input -->
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      id="message"
                      type="text"
                      placeholder="Message"
                      style="height: 10rem"
                      data-sb-validations="required"
                    ></textarea>
                    <label for="message">Message</label>
                    <div
                      class="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      Message is required.
                    </div>
                  </div>

                  <!-- Submit success message -->
                  <div class="d-none" id="submitSuccessMessage">
                    <div class="text-center mb-3">
                      <div class="fw-bolder">Form submission successful!</div>
                      <p>To activate this form, sign up at</p>
                      <a
                        href="https://startbootstrap.com/solution/contact-forms"
                        >https://startbootstrap.com/solution/contact-forms</a
                      >
                    </div>
                  </div>

                  <!-- Submit error message -->
                  <div class="d-none" id="submitErrorMessage">
                    <div class="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>

                  <!-- Submit button -->
                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-lg disabled"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <!-- End of contact form -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background: #007bff;
  background: linear-gradient(to right, #0062e6, #33aeff);
  background-image: url("https://source.unsplash.com/kKvQJ6rK6S4/660x1000");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
