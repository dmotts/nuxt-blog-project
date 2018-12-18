<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  fetch(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '1', 
              title: 'First Post', 
              previewText: 'This is my first post', 
              thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDvWGQMA7U_9bhiEM-yDbciODL9kmnwv6qhj7I0UqWXZSBjk-'
            },
            {
              id: '2', 
              title: 'Second Post', 
              previewText: 'This is my second post', 
              thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDvWGQMA7U_9bhiEM-yDbciODL9kmnwv6qhj7I0UqWXZSBjk-'
            }
          ]
        }) 
      }, 1500);
      // reject(new Error())
    })
    .then(data => {
      context.store.commit('setPosts', data.loadedPosts)
    })
    .catch(e => {
      context.error(new Error());
    })
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>