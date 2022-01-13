import Vue from 'vue'
import Vuex from 'vuex'
<% if (storeModuleName) { -%>
import <%- storeModuleName %> from '@/store/<%- storeModuleName %>'
<% } -%>

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
<% if (storeModuleName) { -%>
    <%- storeModuleName %>,
<% } -%>
  }
})
