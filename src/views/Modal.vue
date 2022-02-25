
<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div>
            <ul v-if="posts && posts.length">
              <li v-for="post of posts" v-bind:key="post.id">
                <p>
                  <button
                    v-on:click="postNow(post.name)"
                    type="button"
                    class="
                      px-2.5
                      py-1
                      text-xl text-black-700
                      border border-black
                      rounded-full
                    "
                  >
                    {{ post.label }}
                  </button>
                </p>
              </li>
            </ul>

            <ul v-if="errors && errors.length">
              <li v-for="error of errors" v-bind:key="error.id">
                {{ error.message }}
              </li>
            </ul>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div></Transition
  >
</template>

<script>
import axios from "axios";
export default {
  props: {
    show: Boolean,
  },
  methods: {
    postNow: function (message) {
      console.log(message);
      axios(
        `https://1src.tech/api/functions/sbp_applyPreset/run?key=XFKdw42rYH2pLgGZ9WGzzShWD9GfJZra`,
        {
          method: "POST",
          body: message,
        }
      );
    },
  },
  data() {
    return {
      posts: [],
      errors: [],
    };
  },
  // method: {
  //   sendClickedButton(buttonName: string) {},
  // },
  // Fetches posts when the component is created.
  created() {
    axios(
      `https://1src.tech/api/functions/sbp_getPresets/run?key=XFKdw42rYH2pLgGZ9WGzzShWD9GfJZra`,
      {
        method: "GET",
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    )
      .then((response) => {
        // JSON responses are automatically parsed.
        console.log(response);
        this.posts = response.data.data;
        console.log(this.posts);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>


<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  height: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>