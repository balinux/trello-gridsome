<template>
  <BlogLayout>
    <h1>Blog</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque
      omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum
      odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
      Iusto.
    </p>
    <ul>
      <li v-for=" post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path"> {{post.node.title}}</g-link>
      </li>
    </ul>
  </BlogLayout>
</template>

<page-query>

query Post{
  posts: allPost(sortBy: "title" order: ASC){
    edges{
      node{
        title,
        path,
        content
      }
    }
  }
}
</page-query>



<script>
export default {
  metaInfo: {
    title: "Blog",
  },
};
</script>
