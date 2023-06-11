//example of user store
export default {
  state: {
    name: 'John Doe',
    age: 30
  },
  getters: {
    getName: state => state.name,
    getAge: state => state.age
  },
  mutations: {
    setName(state, name) {
      state.name = name
    },
    setAge(state, age) {
      state.age = age
    }
  },
  actions: {
    updateName({ commit }, name) {
      commit('setName', name)
    },
    updateAge({ commit }, age) {
      commit('setAge', age)
    }
  }
}
