<template>
  <nav class="nav-group sidebar">
    <ul class="list-group">
      <li
        class="list-group-item"
        :class="{'is-active': activeCollection === collection}"
        v-for="(collection, index) of collections"
        :key="index"
        @click="setActiveCollection(collection)"
      >
        <strong class="item-title">{{ collection.title }}</strong>
        <p class="item-number">{{ collection.commands.length }}</p>
        <p class="icon icon-pencil item-icon" @click="toggleShowEditModal"></p>
      </li>
    </ul>

    <div class="add-collection-btn">
      <span class="icon icon-plus"></span>
    </div>

    <div class="edit-collection-modal" :class="{'is-show': isShowEditModal}">
      <div class="form-groups">
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Title"
            ref="editedTitle"
            :value="activeCollection.title"
          >
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Description"
            ref="editedDesc"
            :value="activeCollection.desc"
          >
        </div>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-form btn-default" @click="toggleShowEditModal">Cancel</button>
        <button type="submit" class="btn btn-form btn-primary" @click="saveCollectionChange">Confirm</button>
      </div>
    </div>

    <form class="new-collection-modal" :class="{'is-show': false}" @submit.prevent>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" placeholder="Name">
      </div>
      <div class="form-group">
        <label>Desc</label>
        <input type="text" class="form-control" placeholder="Desc">
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-form btn-default">Cancel</button>
        <button type="submit" class="btn btn-form btn-primary">Confirm</button>
      </div>
    </form>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "HomeSidebar",
  props: {
    collections: {
      type: Array,
      required: true,
      default: []
    }
  },
  data() {
    return {
      activeCollection: this.collections[0],
      isShowEditModal: false,
      isShowAddModal: false
    };
  },
  methods: {
    ...mapMutations(["changeCollectionInfo"]),
    setActiveCollection(collection) {
      this.activeCollection = collection;
    },
    toggleShowEditModal() {
      this.isShowEditModal = !this.isShowEditModal;
    },
    saveCollectionChange() {
      const desc = this.$refs.editedDesc.value;
      const title = this.$refs.editedTitle.value;

      if (title) {
        return;
      }
    }
  },
  computed: {}
};
</script>

<style lang='scss' scoped>
.icon {
  cursor: pointer;
}
.sidebar {
  display: flex;
  flex-flow: column wrap;
}
.list-group {
  flex: 1;
  .list-group-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: none;
    width: 180px;
    height: 32px;
    padding: 0;
    padding-left: 12px;
    transition: background ease 0.3s;
    &.is-active {
      color: #fff;
      background-color: #388df8;
      .item-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &:hover {
      color: #fff;
      background-color: #388df8;
    }
    .icon {
      color: inherit;
    }
    .item-title {
      flex: 1;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-transform: capitalize;
    }
    .item-number {
      opacity: 0.8;
      margin-right: 12px;
    }
    .item-icon {
      display: none;
      width: 32px;
      height: 32px;
      border-left: 1px solid #fff;
    }
  }
}
.add-collection-btn {
  opacity: 0.9;
  color: #666;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  border-top: 1px solid #ddd;
  background-color: #fff;
  &:hover {
    opacity: 1;
  }
}
.edit-collection-modal,
.new-collection-modal {
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-flow: column wrap;
  padding: 10px;
  width: 320px;
  height: 240px;
  background-color: #fff;
  border: 1px solid #ddd;
  transition: top ease 0.3s;
  &.is-show {
    top: 0;
  }
  .form-groups {
    flex: 1;
  }
  .form-actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
