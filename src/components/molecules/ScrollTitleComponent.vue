<template>
  <section class="hidden">
    <h1>Product Number 1</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil
      necessitatibus consequuntur quisquam at! Quo unde commodi aliquam odit
      possimus esse aut distinctio, magni sint saepe quam dolorum maxime itaque.
    </p>
  </section>

  <section class="hidden">
    <h1>Our Customers</h1>
    <div class="logos">
      <div class="logo hidden">🐟</div>
      <div class="logo hidden">🐠</div>
      <div class="logo hidden">🐡</div>
    </div>
  </section>

  <section class="hidden">
    <h1>Product Number 1</h1>
  </section>
</template>
<script>
export default {
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((el) => observer.observe(el));
  },
};
</script>
<style lang="scss">
section {
  h1 {
    font-size: 4em;
  }

  .logos {
    margin-left: 50%;
    transform: translateX(-50%);

    display: flex;
  }

  .logos {
    div {
      font-size: 4em;
      margin: 40px;
    }
  }

  .logo:nth-child(2) {
    transition-delay: 200ms;
  }
  .logo:nth-child(3) {
    transition-delay: 400ms;
  }

  .logo:nth-child(4) {
    transition-delay: 600ms;
  }
  .logo:nth-child(5) {
    transition-delay: 00ms;
  }
}

@media (prefers-reduced-motion) {
  .hidden {
    transition: none;
  }
}

.hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s;
}

.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
