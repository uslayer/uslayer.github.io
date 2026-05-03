---
layout: services_layout
title: Contact
permalink: "/contact/"
comments: false
description: "Contact US Layer in Galle, Sri Lanka — book a free site survey, request a quote or ask about our CCTV, alarm and networking services."
---

<div class="container py-5">

  <!-- Hero -->
  <div class="row justify-content-center text-center mb-5">
    <div class="col-lg-7">
      <h1 class="display-5 fw-bold mb-3">Contact Us</h1>
      <p class="lead text-secondary">Book a free site survey, request a quote or ask any questions about our services. We typically respond within one business day.</p>
    </div>
  </div>

  <div class="row g-5 mb-5">

    <!-- Contact details -->
    <div class="col-lg-4">
      <h2 class="fs-5 fw-semibold mb-4">Get in Touch</h2>

      <div class="d-flex gap-3 mb-4 align-items-start">
        <div class="service-icon flex-shrink-0"><i class="bi bi-telephone"></i></div>
        <div>
          <p class="fw-semibold mb-1">Phone</p>
          <a href="tel:+94769026918" class="text-secondary text-decoration-none">+94 76 902 6918</a>
          <p class="text-secondary small mb-0 mt-1">Mon–Sat, 8 am – 6 pm</p>
        </div>
      </div>

      <div class="d-flex gap-3 mb-4 align-items-start">
        <div class="service-icon flex-shrink-0"><i class="bi bi-envelope"></i></div>
        <div>
          <p class="fw-semibold mb-1">Email</p>
          <a href="mailto:contact@uslayer.com" class="text-secondary text-decoration-none">contact@uslayer.com</a>
        </div>
      </div>

      <div class="d-flex gap-3 mb-4 align-items-start">
        <div class="service-icon flex-shrink-0"><i class="bi bi-geo-alt"></i></div>
        <div>
          <p class="fw-semibold mb-1">Address</p>
          <p class="text-secondary mb-0">Hapugala, Wakwella<br>Galle, Sri Lanka</p>
        </div>
      </div>

      <hr class="my-4">
      <p class="text-secondary small">For urgent enquiries please call us directly. We cover all areas within the Galle District and can arrange a free on-site survey at a time that suits you.</p>
    </div>

    <!-- Contact form -->
    <div class="col-lg-8">
      <h2 class="fs-5 fw-semibold mb-4">Send a Message</h2>
      <form id="contactForm" action="https://formspree.io/{{ site.formspree }}" method="POST">
        <div class="row g-3">
          <div class="col-sm-6">
            <label class="form-label" for="name">Full Name</label>
            <input class="form-control" name="name" id="name" type="text" placeholder="Your name" required>
          </div>
          <div class="col-sm-6">
            <label class="form-label" for="emailAddress">Email Address</label>
            <input class="form-control" id="emailAddress" type="email" name="_replyto" placeholder="your@email.com" required>
          </div>
          <div class="col-12">
            <label class="form-label" for="subject">Subject</label>
            <input class="form-control" name="subject" id="subject" type="text" placeholder="e.g. CCTV installation quote for Unawatuna">
          </div>
          <div class="col-12">
            <label class="form-label" for="message">Message</label>
            <textarea class="form-control" id="message" name="message" placeholder="Please describe your project or enquiry. Include the property type, location and any specific requirements." style="height: 10rem;" required></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-primary btn-lg px-4" type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div>

  </div>

  <!-- Map -->
  <div class="mt-2">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15869.695349090776!2d80.1989143!3d6.0734427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb02f17fc77ac0859!2sUS%20LAYER%20%5B%20CCTV%20-%20Security%20System%20-%20Galle%20Software%20Solutions%20%5D!5e0!3m2!1sen!2slk!4v1662982509037!5m2!1sen!2slk"
      width="100%"
      height="500"
      style="border:0; border-radius: 12px;"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="US Layer location — Galle, Sri Lanka">
    </iframe>
  </div>

</div>
