<template>
  <div class="content">
    <form class="search">
      <span class="icon icon-search"></span>
      <input class="form-control search-input" type="text" placeholder="Search commands">
    </form>
    <ul class="list-group command-list">
      <command-item v-for="(command, index) of commands" :key="index"/>
    </ul>
    <button class="btn btn-primary new-command-btn" @click="showNewCommandModel">
      <span class="icon icon-plus"></span>New command
    </button>
    <new-command v-show="isShowNewCommand"/>
  </div>
</template>

<script>
import CommandItem from "@/components/CommandItem.vue";
import NewCommand from "@/components/NewCommand.vue";

export default {
  name: "HomeContent",
  data() {
    return {
      isShowNewCommand: false,
      commands: [0, 1, 2, 3, 4, 5, 6, 7]
    };
  },
  components: {
    CommandItem,
    NewCommand
  },
  methods: {
    showNewCommandModel() {
      this.isShowNewCommand = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  .search {
    position: relative;
    padding: 12px;
    padding-bottom: 0;
    .search-input {
      padding-left: 24px;
      &:focus {
        box-shadow: none;
      }
    }
    .icon-search {
      position: absolute;
      top: 40%;
      left: 20px;
      color: #999;
    }
  }
  .command-list {
    max-height: calc(100vh - 44px);
    padding: 12px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .new-command-btn {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    .icon-plus {
      color: inherit;
    }
  }
}
</style>
