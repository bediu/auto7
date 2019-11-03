<template>
  <Layout>
    <header class="site-header outer">
      <div class="inner">
        <Navbar :logo="true"/>
      </div>
    </header>

    <!-- <FloatingHeader/> -->

    <main id="site-main" class="site-main outer">
      <div class="inner">
        <article :class="postClass">
          <header class="post-full-header">
            <section class="post-full-meta">
              <time class="post-full-meta-date" :datetime="$page.post.date | moment('DD, MMMM YYYY')">{{ $page.post.date | moment("DD, MMMM YYYY") }}</time>
              <span class="date-divider">/</span>
              <a v-for="tag in $page.post.tags" :key="tag.title"
              :href="'/tag/' + tag.title">
                {{tag.title.replace('-', ' ') }}
              </a>
            </section>
            <h1 class="post-full-title">{{ $page.post.title }}</h1>
          </header>

          <figure v-if="$page.post.image" class="post-full-image">
            <g-image :src="$page.post.image" :alt="$page.post.title"/>
          </figure>

          <section class="post-full-content">
            <div class="post-content" v-html="$page.post.content"></div>
          </section>

          <bylineMultiple :author="$page.post.author" v-if="$page.post.author.length > 1"/>
          <bylineSingle :author="$page.post.author" v-else/>
          <PreviousNext :id="$page.post.id" :tag="$page.post.tags[0].title" :posts="$page.post.tags[0].belongsTo.edges"/>

          <!-- NOTE Comment section -->
          <!-- <section class="post-full-comments">
            If you want to embed comments, this is a good place to do it!
          </section>-->
        </article>
      </div>
    </main>

  </Layout>
</template>

<script>
import Admin from "../../data/admin.yml";
import Navbar from "../components/Navbar";
import FloatingHeader from "../components/FloatingHeader";
import bylineMultiple from "../components/bylineMultiple";
import bylineSingle from "../components/bylineSingle";
import PreviousNext from "../components/PreviousNext";

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        class: `post-template tag-${this.$page.post.tags[0].title}`
      }
    };
  },
  components: {
    Navbar,
    FloatingHeader,
    bylineMultiple,
    bylineSingle,
    PreviousNext
  },
  computed: {
    Admin() {
      return Admin;
    },
    postClass() {
      let classes = ["post-full", "post"];
      if (!this.$page.post.image) {
        classes.push("no-image");
      }
      const postTagClass = "tag-" + this.$page.post.tags[0].title;
      classes.push(postTagClass);
      return classes;
    }
  }
};
</script>
<page-query>
  query BlogPost ($path: String!) {
    post (path: $path) {
      id
      title
      date
      tags {
        title
        belongsTo {
          edges {
            node {
              ... on Post {
                id
                title
                path
              }
            }
          }
        }
      }
      image
      author {
        id
        name
        image
        tagline
        bio
      }
      content
    }
  }
</page-query>
