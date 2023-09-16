<template>
  <div class="footer">
    <div class="footer_ctn">
      <div class="footer_inner">
        <div class="footer_lhs">
          <div class="logo">
            <img src="~assets/images/anycar_logo.png" alt="">
          </div>
          <p class="sub_title">
            Get streamlined, simplified and digitized experience owning a car.
          </p>
        </div>
        <div class="footer_middle">
          <div class="menu_list">
            <p class="menu_item">
              Home
            </p>
            <p class="menu_item">
              Catalog
            </p>
            <p class="menu_item">
              Delivery
            </p>
            <p class="menu_item">
              About
            </p>
            <p class="menu_item">
              Contacts
            </p>
          </div>
        </div>
        <div class="footer_rhs" />
      </div>
      <hr class="footer_line">
      <p class="copyright">
        Copyright &copy; 2023 Powered by Motherboard Foods
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  color: #000;
}
.footer {
  background-color: #000000;
  box-shadow: 0px 5px 20px #dadada;
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  z-index: 5;
}
.footer_ctn {
  border-radius: 30px;
  background-color: #FFF9F4;
  max-width: 1344px;
  width: 80%;
  margin: auto;
}
.footer_inner {
  padding-top: 4rem;
  /* height: 120px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer_lhs {
  flex-basis: 30%;
}

.logo {
  margin-right: 5rem;
  width: 50%;
}

.logo img {
  width: 100%;
}

.footer_middle {
  flex-basis: 40%;
  display: flex;
  justify-content: center;
}

.footer_rhs {
  flex-basis: 30%;
  display: flex;
  justify-content: flex-end;
}

.menu_list {
  width: 80%;
}

.menu_item {
  cursor: pointer;
}

.social_ctn {
  display: flex;
  align-items: center;
}

.social_ctn svg {
 margin-right: 15px;
}

.footer_line {
  border: none;
  border-top: 1px solid #9999995e;
  margin: 3rem 0;
}

.copyright {
  color: white;
  text-align: center;
  font-size: 12px;
  padding-bottom: 3rem;
}

@media only screen and (max-width: 900px) {
  .footer_middle {
    display: none;
  }
}
@media only screen and (max-width: 500px) {
  .footer_lhs {
    flex-basis: 80%;
  }
  .logo {
    margin-right: 5rem;
    width: 80%;
  }
  .footer_rhs {
  flex-basis: 20%;
}

.social_ctn svg {
  width: 14px;
  height: 14px;
}
}
</style>
