<template>
    <BlogLayout>
        <h1>{{$page.post.title}}</h1>
        <div v-html="$page.post.content"/>
    </BlogLayout>
</template>


<page-query>

query Post($path: String){
  post : post (path: $path){
    title,
    content,
    tags
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