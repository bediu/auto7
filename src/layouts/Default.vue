<template>
  <div class="site-wrapper">
    <!-- All the main content gets inserted here, index.vue, blogPost.vue, etc -->
    <slot />

    <!-- The footer at the very bottom of the screen -->
    <Footer />

    <!-- TODO Showing upon clicking the button -->
    <!-- The big email subscribe modal content -->
    <div v-if="Admin.site.subscribers" id="subscribe" class="subscribe-overlay">
      <a class="subscribe-overlay-close" href="#"></a>
      <div class="subscribe-overlay-content">
        <img v-if="!Admin.site.logo" class="subscribe-overlay-logo" :src="Admin.site.logo" :alt="Admin.site.title" />
        <h1 class="subscribe-overlay-title">Subscribe to {{ Admin.site.title }}</h1>
        <p class="subscribe-overlay-description">Stay up to date! Get all the latest &amp; greatest posts delivered
          straight to your inbox</p>
        <subscribeForm placeholder="youremail@example.com" />
      </div>
    </div>

    <!-- TODO Add pagination -->
    <!-- <script v-if="Admin.site.pagination" src=""></script> -->
  </div>
</template>

<script>
  import Footer from '../components/Footer';
  import Admin from '../../data/admin.yml';
  import subscribeForm from '../components/subscribeForm'

  export default {
    components: {
      Footer,
      subscribeForm
    },
    computed: {
      Admin() {
        return Admin
      }
    },
    mounted() {
      ! function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
      }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '458018424820466');
      fbq('track', 'PageView'); 
    }
  }
</script>