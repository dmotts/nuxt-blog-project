import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
               return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    vuexContext.commit('setPosts', [
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
                      ])
                    resolve() 
                  }, 1500);
                  // reject(new Error())
                })
             
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore