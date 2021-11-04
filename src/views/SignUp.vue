<template>
  <div class="main">
    <div class="bp-image">
      <img class="desktop" src="../assets/bp.jpg" alt="" />
      <img class="mobile" src="../assets/mobile-bp.jpg" alt="" />
    </div>
    <div class="side-section">
      <h2>BPSL MAINTAINCE SIGN UP</h2>
      <div class="profiles">
        <div class="profile">
          <div class="image">
            <img src="../assets/jisoo.jpg" alt="" />
          </div>
          <div class="nametag" v-on:click="overlayOn">JISOO</div>
        </div>
        <div class="profile">
          <div class="image">
            <img src="../assets/jisoo.jpg" alt="" />
          </div>
          <div class="nametag" @click="getPosts()">JISOO</div>
        </div>
        <div class="profile">
          <div class="image">
            <img src="../assets/jisoo.jpg" alt="" />
          </div>
          <div class="nametag">JISOO</div>
        </div>
        <div class="profile">
          <div class="image">
            <img src="../assets/jisoo.jpg" alt="" />
          </div>
          <div class="nametag">JISOO</div>
        </div>
      </div>
    </div>
    <div v-on:click.self="overlayClose" id="overlay">
      <input type="text" class="input" placeholder="Enter your password.." />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  methods: {
    overlayOn() {
      document.getElementById("overlay").style.height = "100%";
    },
    overlayClose(e) {
      document.getElementById("overlay").style.height = "0";

      console.log(e.target);
    },
    getPosts() {
      axios
        .get(
          "https://script.google.com/macros/s/AKfycbzCTAL17chofGcxUv_SLen6Lc0yOsLJesfK_D09AHGjt8O2Md5e8ZQT2yjs9PUnESNfQQ/exec"
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // $('#overlay').on('click', function(e) {
    //   if (e.target == this){
    //     document.getElementById('overlay').style.height = "0";
    //   }
    // });
  },
};
</script>

<style lang="scss">
@import "../assets/scss/_shared.scss";

body {
  background: $primary-color;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
#app {
  display: flex;
  justify-content: center;
}

.main {
  background: $primary-color;
  display: flex;
  // flex: 1 1 100%;
  max-width: 95vw;
  border-radius: 10px;
  box-shadow: 0px 10px 30px 0px rgba(255, 192, 203, 0.6);
}
.bp-image {
  flex-basis: 30%;
  .desktop {
    display: block;
    width: 80%;
    min-width: 270px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
  .mobile {
    display: none;
  }
}
.side-section {
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  color: $secondary-color;
  h2 {
    text-align: left;
    padding: 10px;
    margin-bottom: 20px;
  }
  .profiles {
    display: flex;
    overflow: auto;
    white-space: nowrap;
    &::-webkit-scrollbar {
      height: 6px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: $primary-color;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: $secondary-color;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: $secondary-color;
    }

    .profile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px;
      &:hover .nametag {
        color: white;
        border: 1px solid white;
        background: $secondary-color;
      }
      &:hover .image {
        transform: translateY(-13px);
      }
      .image {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 3px solid $primary-color;
        overflow: hidden;
        box-sizing: content-box;
        transition: all 0.5s ease-out;
        img {
          object-fit: cover;
          width: 200px;
          height: 200px;
        }
      }
      .nametag {
        width: 250px;
        border: 1px solid $secondary-color;
        padding: 5px 0px;
        cursor: pointer;
        transition: all 0.5s ease-out;
      }
    }
  }
}
#overlay {
  width: 100%;
  height: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.85);
  transition: all 0.5s ease-out;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    height: 40px;
    width: 200px;
  }
}

@media only screen and (max-width: 950px) {
  .main {
    flex-direction: column-reverse;
    .side-section {
      width: 100%;
    }
    .bp-image {
      .desktop {
        display: none;
      }
      .mobile {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
      }
    }
  }
}
</style>
