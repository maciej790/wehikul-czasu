<template>
  <footer class="footer">
    <div class="footer__left">
      <div class="logo">
        <img src="../../../src/assets/images/logo.jpg" alt="logo" />
      </div>
      <p class="left__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        nostrum repudiandae odio tempore quis reprehenderit ullam excepturi
        maxime eligendi nam blanditiis eveniet dolorem rerum asperiores
        repellat, ipsam iste ratione nemo.
      </p>
    </div>
    <div class="footer__right">
      <h3 class="contact__title">Kontakt</h3>
      <ul class="contact__box">
        <li class="contact__item">+48 21374202</li>
        <li class="contact__item">2137@gmail.com</li>
      </ul>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";

.footer {
  width: 100%;
  margin: 5rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid $gray-color;
  padding: 0 1rem 1rem 1rem;

  @media only screen and (min-width: $desktop) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .footer__left {
    width: 100%;

    .left__description {
      margin: 1rem 0 1rem 0;
      text-align: justify;
      color: $gray-color;

      @media only screen and (min-width: $desktop) {
        width: 40%;
      }
    }
    .logo {
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
      }

      @media only screen and (min-width: $desktop) {
        margin: 0 1rem 0 0;
      }
    }

    @media only screen and (min-width: $desktop) {
      display: flex;
      align-items: center;
    }
  }

  .footer__right {
    width: 100%;
    color: $gray-color;

    .contact__title {
      color: $white-color;
      font-weight: bold;
      text-transform: uppercase;
      margin: 2rem 0 1rem 0;
    }

    .contact__box {
      list-style-type: none;
      margin: 0;
      padding: 0;

      .contact__item {
        margin: 0.5rem 0 0.5rem 0;
      }
    }
    .right__title {
      color: $white-color;
    }

    .right__options {
      list-style-type: none;
      padding: 0;
      margin: 1rem 0 0 0;
    }

    .option__link {
      padding: 0 0 0.5rem 0;
      color: $gray-color;
    }

    @media only screen and (min-width: $desktop) {
      width: 10%;
      align-items: center;
    }
  }
}
</style>
