<template>
    <BlogLayout>
        <h1>{{$page.post.title}}</h1>
        <g-image style="width:300px" :src="$page.post.image"/>
        <div v-html="$page.post.content"/>
    </BlogLayout>
</template>

<page-query>

query TrelloPost($id: ID!){
  post : trelloPost (id: $id){
    title,
    content,
    image
  }
}

</page-query>

<script>
export default {
    metaInfo(){
        return{
            title: this.$page.post.title
        }
    }
}
</script>

<style>

</style>