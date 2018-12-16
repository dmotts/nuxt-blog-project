<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
    import AdminPostForm from '@/components/Admin/AdminPostForm'
    
    export default {
        components: {
            AdminPostForm
        },
        data() {
            return {
                loadedPost: {
                    author: 'Daley',
                    title: 'My awesome post',
                    content: 'Super amazing.',
                    thumbnailLink: 'https://www.factoriadigital.com/blog/wp-content/uploads/2015/04/super-post-en-wordpress.png'
                }
            }
        }
    }
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
    
</style>