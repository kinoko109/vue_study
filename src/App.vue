<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input id="name" v-model="name" type="text"/>
    <br><br>
    <label for="comment">コメント：</label>
    <textarea id="comment" v-model="comment" type="text"></textarea>
    <br>
    <button @click="createComment">投稿する</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <p>名前：{{ post.fields.name.stringValue }}</p>
      <p>コメント：{{ post.fields.comment.stringValue }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const url = "https://firestore.googleapis.com/v1/projects/vuejs-axios-23bc6/databases/(default)/documents/comments";

export default {
  created() {
    axios.get(url)
    .then(response => {
      this.posts = response.data.documents;
      console.log(response.data.documents);
    })
    .catch(error => console.log(error));
  },
  data() {
    return {
      name: "",
      comment: "",
      posts: [],
    }
  },
  methods: {
    createComment() {
      const requestData = {
        fields: {
          name: {
            stringValue: this.name,
          },
          comment: {
            stringValue: this.comment,
          }
        }
      }
      axios.post(url, requestData)
          .then(response => {
            console.log(response.data.documents);
          })
          .catch(error => console.log(error));
      this.name = "";
      this.comment = "";
    },

  }
}
</script>

<style>
</style>
