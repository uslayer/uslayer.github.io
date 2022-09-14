---
layout: page
title: Contact
permalink: "/contact/"
comments: false
---



<!-- Wrapper container -->
<p class="mb-4">Thank you for your interest in getting in touch with us. Please send your message here. We will reply as soon as possible!</p>
{% for item in site.data.menus.topmenu %}
{% if {{page.url}} =4 /{{item.url}} %}
{{page.url}} =4 /{{item.url}}
{% endif %}
{% endfor %}

  <!-- Bootstrap 5 starter form -->
  <form id="contactForm" action="https://formspree.io/{{site.formspree}}" method="POST">

    <!-- Name input -->
    <div class="mb-3">
      <label class="form-label" for="name">Name</label>
      <input class="form-control" name="name"  id="name" type="text" placeholder="Name" required>
    </div>

    <!-- Email address input -->
    <div class="mb-3">
      <label class="form-label" for="emailAddress">Email Address</label>
      <input class="form-control" id="emailAddress" type="email" name="_replyto" placeholder="Email Address" required>
    </div>

    <!-- Message input -->
    <div class="mb-3">
      <label class="form-label" for="message">Message</label>
      <textarea class="form-control" id="message" type="text" name="message" placeholder="Message" style="height: 10rem;" required></textarea>
    </div>

    <!-- Form submit button -->
    <div class="d-grid">
      <button class="btn btn-primary btn-lg" type="submit" value="Send">Submit</button>
    </div>

  </form>
  <div class="mb-5"></div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15869.695349090776!2d80.1989143!3d6.0734427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb02f17fc77ac0859!2sUS%20LAYER%20%5B%20CCTV%20-%20Security%20System%20-%20Galle%20Software%20Solutions%20%5D!5e0!3m2!1sen!2slk!4v1662982509037!5m2!1sen!2slk" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
