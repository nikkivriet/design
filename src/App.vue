<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <h1 class="title">Hover over the cards</h1>

<div id="app" class="container">
  <card data-image="https://www.lofbergs.se/wp-content/uploads/2018/05/granatapple-1080-400x400.jpg">
    <h1 slot="header">LÖFBERGS</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
  <card data-image="https://vildmarken.se/wp-content/uploads/2018/07/1-Large.jpg">
    <h1 slot="header">VILDMARKEN</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
  <card data-image="https://shop.textalk.se/shop/ws12/75712/files/NIKKIS/new%20sportsbra%20%28Custom%29.jpg?max-width=2280&max-height=1368&quality=50&resize=crop">
    <h1 slot="header">NIKKIS Sportswear</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
  <card data-image="https://payload.cargocollective.com/1/22/722062/12239993/Kreta3_1_1340_c.jpg">
    <h1 slot="header">PHOTO</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
</div>
    </div>
   <!-- <router-view/> -->
  </div>
</template>
<script>
import card from './components/Card1'
export default {
  components: {
    card,
  },
  data () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style>
@import './assets/styles/card.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
