<template>
  <div id="app" class="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <h1 class="title title-1">NIKKI VAN RIET</h1>
      <h2 class="title title-2">PORTFOLIO</h2>
        <parallax :fixed=true :speedFactor=0.5 >
    <img src="./assets/img/boats.jpg" alt="very cool bg">
  </parallax>
  <div class="container">
    <h1 class="title title-2">CV</h1>


<div class="container">
    <div class="meta">
        <div class="image"></div>
        <div class="info">
            <h1>Curriculum Vitae</h1>
            <p class="subtitle">Grafisk Designer</p>
            <div class="author">
                <div class="authorImage"></div>
                <div class="authorInfo">
                    <div class="authorName"><a href="https://codepen.io/lucagez">Nikki van Riet</a></div>
                    <div class="authorSub">073-835 00 18 <span class="median-divider">·</span> nikkivanriet@outlook.com</div>
                </div>
            </div></div>
    </div>
    <main class="article">
        <p><span class="first-letter">W</span>eb Typography obsessed me. As many others, I fell in the trap of optimizing legibility. Definitly not an easy task.<br/>Among all the contenders for the best reading experience on the Web, a name is always present
            and noteworthy: <strong>Medium.com</strong> .</p>
        <p>Looking for the arcane secrets that regulates good legibility, I immediately realized that I needed to follow in the footsteps of the masters. So I started dissecting the rules that makes <strong>Medium</strong> typography, well, great.</p>
        <p>There were long hours of <strong>tremendous effort</strong>, days and days of <strong>prolonged pains</strong>...</p>
        <blockquote>Now I want to share with you the results of those long hours 🦋</blockquote>
        <h2>An unexpected journey</h2>
        <p><span class="first-letter">C</span>omes out that nothing is better than a big first letter to super-charge your style. Rules are simples. A big letter that spans exactly two rows. Play with <code>line-height</code> to get it right.</p>
        <h2>The hero</h2>
        <p>We all know who the leader is.<br/>When designing a website you have to take into account fonts for three sectors: the <strong>content</strong>, the <strong>UI</strong>, the <strong>brand</strong>.<br/>Specifically I found that the best free alternatives
            <i>(Google Fonts)</i> to the handcrafted fonts that <strong>Medium</strong> uses are respectively <span class="highlighted">Lora</span>,
            <span class="highlighted">Montserrat</span> and <span class="highlighted">Playfair Display</span>. <br/>I discovered with delight that the last one mimics almost perfectly the effect created especially for <code>blockquote</code>.</p>
        <h2>Content font</h2>
        <p> The content font should be a serif one, to gently bring your eyes from one letter to the other with the lowest amount of effort.<br/><code>line-height</code> and <code>letter-spacing</code> are vital here. Play with those parameters to make the
            most out of your font of choice. However at <strong>Medium</strong> you'll find almost an empty line of space in the middle of two lines of text (<code>line-height: 1.58;</code>). While the space between the charachters is kept a little bit
            on the negative side (<code>letter-spacing: -0.03;</code>) to make words feel more compacts.</p>
        <h2>Brand font</h2>
        <p> The purpose of this font is to enforce the presence of our brand during the navigation experience. We can use it for titles and, here and there, for some minutiae.</p>
        <blockquote>Blockquotes, for example 🤫</blockquote>
        <h2>UI font</h2>
        <p> The font used for all the UI elements is preferably a sans-serif one. It should create contrast with the content font. Its color could be a little bit lighter than the one used for the main content. <br/>It needs to be readable given the background-color
            of your page but not distracting from the main purpose of the page. <span class="highlighted">Reading!</span><br/>You can use it also for <code>h2</code> making the titles for your paragraphs. Here the color should be the same as the one used
            for the main title.</p>
        <h2><span class="highlighted">The highlight</span></h2>
        <p>To highlight a word or phrase you can wrap them in a <code>span</code> element and <span class="highlighted">set the background to a color that reminds of your brand color identity</span>.</p>
        <h1>Every Title</h1>
        <p class="subtitle">`Needs a subtitle`</p>
        <p>Here we find <code>rgba(0, 0, 0, 0.54)</code> to give meaningful informations without grabbing the attention that the title, main charachter, deserves.</p>
        <h2>The length</h2>
        <p class="lineLength"> The length of a line of text should never be longer than <code>740px</code>. So our eyes are not forced to run from left to right on the page. </p>
        <h2>The color</h2>
        <p> The text color should be <code>rgba(0, 0, 0, 0.84)</code> on a <code>rgba(255, 255, 255, 1)</code> background to ensure the best contrast possible.</p>
        <h2>Conclusion</h2>
        <p>As always, the strict first rule of design is that there are no strict rules.<br/>But, if you are in trouble... </p>
        <blockquote>Use Medium.css ✍️</blockquote><br/><br/>
        <p>Let me know what are your toughts about Web Typography, I am eager to hear from you!</p>
        <p> Happy readings,<br/><i><a href="https://codepen.com/lucagez">Gez</a></i></p><a class="github-button" href="https://github.com/lucagez/medium.css" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star lucagez/medium.css on GitHub">Star</a></main>
</div>
  </div>


<!--<div class="parallax-albin"></div> -->

<div id="app" class="container2">
  <card data-image="https://www.lofbergs.se/wp-content/uploads/2018/05/granatapple-1080-400x400.jpg" id="show-modalL" @click.native="openL()">
    <h1 slot="header">LÖFBERGS</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
  <card data-image="https://vildmarken.se/wp-content/uploads/2018/07/1-Large.jpg"  id="show-modalV" @click.native="openV()">
    <h1 slot="header">VILDMARKEN</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
  <card data-image="https://shop.textalk.se/shop/ws12/75712/files/NIKKIS/new%20sportsbra%20%28Custom%29.jpg?max-width=2280&max-height=1368&quality=50&resize=crop" id="show-modalN" @click.native="openN()">
    <h1 slot="header">NIKKIS Sportswear</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
  <card data-image="https://payload.cargocollective.com/1/22/722062/12239993/Kreta3_1_1340_c.jpg"  id="show-modalP" @click.native="openP()">
    <h1 slot="header">PHOTO</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
</div>
<div id="app">
  <!--  <button id="show-modal" @click="sml = true">Show Modal</button>
   use the modal component, pass in the prop -->
    <modall v-if="sml"></modall>
    <modalv v-if="smv"></modalv>
    <modaln v-if="smn"></modaln>
    <modalp v-if="smp"></modalp>
  </div>
    </div>
   <!-- <router-view/> -->
  </div>
</template>
<script>
import card from '@/components/Card1'
import modall from '@/components/ModalLofberg'
import modalv from '@/components/ModalVildmark'
import modaln from '@/components/ModalNikkis'
import modalp from '@/components/ModalPhoto'
import Parallax from "vue-parallaxy";
import Parallax2 from "vue-parallaxy";

import { mapState } from 'vuex'
export default {
  components: {
    card,
    modall,
    modalv,
    modaln,
    modalp,
    Parallax,
    Parallax2,
  },
  data () {
    return {
      greeting: 'Hello',
      greeting2: this.$store.state.messagee,
  //    sml: this.$store.state.showModalL,
   //   smv: this.$store.state.showModalV,
    //  smn: this.$store.state.showModalN,
    //  smp: this.$store.state.showModalP,
    }
  },  
  computed: mapState({
    // arrow functions can make the code very succinct!
    greeting3: state => state.messagee,
    sml: state => state.showModalL,
    smv: state => state.showModalV,
    smn: state => state.showModalN,
    smp: state => state.showModalP
    },
  ),
  methods: {
    openL: function(event) {
      this.greeting = 'HEJPODAJDU';
      this.$store.commit('changeModalL');
    },
    openV: function(event) {
      this.greeting = 'HEJPODAJDU';
      this.$store.commit('changeModalV');
    },
    openN: function(event) {
      this.greeting = 'HEJPODAJDU';
      this.$store.commit('changeModalP');
    },
    openP: function(event) {
      this.greeting = 'HEJPODAJDU';
      this.$store.commit('changeModalN');
    },
  }

}


</script>

<style lang="scss">
@import './assets/styles/card.scss';
</style>

<style lang="css">
@import "./assets/styles/own.css";
@import './assets/styles/fonts.css';
@import './assets/styles/modal.css';
</style>



