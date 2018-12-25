import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const uuidv1 = require('uuid/v1');
const commands = [{
    command: 'ls -al | grep file',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis, odio inventore suscipit labore asperiores! Sed delectus doloribus nostrum, aliquid rerum libero vel tempora dolores in eveniet voluptate quia dolorem!'
  },
  {
    command: 'ls -al | grep file',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis, odio inventore suscipit labore asperiores! Sed delectus doloribus nostrum, aliquid rerum libero vel tempora dolores in eveniet voluptate quia dolorem!'
  }, {
    command: 'ls -al | grep file',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis, odio inventore suscipit labore asperiores! Sed delectus doloribus nostrum, aliquid rerum libero vel tempora dolores in eveniet voluptate quia dolorem!'
  }, {
    command: 'ls -al | grep file',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis, odio inventore suscipit labore asperiores! Sed delectus doloribus nostrum, aliquid rerum libero vel tempora dolores in eveniet voluptate quia dolorem!'
  }, {
    command: 'ls -al | grep file',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis, odio inventore suscipit labore asperiores! Sed delectus doloribus nostrum, aliquid rerum libero vel tempora dolores in eveniet voluptate quia dolorem!'
  }, {
    command: 'ls -al | grep file',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis, odio inventore suscipit labore asperiores! Sed delectus doloribus nostrum, aliquid rerum libero vel tempora dolores in eveniet voluptate quia dolorem!'
  }, {
    command: 'ls -al | grep file',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis, odio inventore suscipit labore asperiores! Sed delectus doloribus nostrum, aliquid rerum libero vel tempora dolores in eveniet voluptate quia dolorem!'
  }
]
const collections = []

for (let index = 1; index < 12; index++) {
  const collection = {
    id: uuidv1(),
    title: `collection0${index}`,
    desc: 'this is description',
    commands
  }
  collections.push(collection)
}

export default new Vuex.Store({
  state: {
    collections,
  },
  mutations: {
    changeCollectionInfo({
      state
    }, ) {}
  },
  actions: {}
})
