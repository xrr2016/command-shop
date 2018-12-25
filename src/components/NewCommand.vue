<template>
  <div class="new-command">
    <div class="new-command__body">
      <div class="pane-group">
        <div class="pane-sm sidebar pane-sidebar">
          <div class="search-input">
            <input class="form-control" type="text" placeholder="Search for commands">
          </div>
          <ul class="list-group command-list">
            <li class="list-group-item" title="ls">ls</li>
            <li class="list-group-item" title="mkdir">mkdir</li>
            <li class="list-group-item" title="ls">ls</li>
            <li class="list-group-item" title="mkdir">mkdir</li>
            <li class="list-group-item" title="ls">ls</li>
            <li class="list-group-item" title="mkdir">mkdir</li>
            <li class="list-group-item" title="ls">ls</li>
            <li class="list-group-item" title="mkdir">mkdir</li>
            <li class="list-group-item" title="ls">ls</li>
            <li class="list-group-item" title="mkdir">mkdir</li>
            <li class="list-group-item" title="ls">ls</li>
            <li class="list-group-item" title="mkdir">mkdir</li>
            <li class="list-group-item" title="ls">ls</li>
            <li class="list-group-item" title="mkdir">mkdir</li>
          </ul>
        </div>
        <form class="pane pane-content form" @submit.prevent="addNewCommand">
          <div class="form-groups">
            <div class="form-group">
              <label>Command</label>
              <input type="text" class="form-control" placeholder="Input command here">
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" rows="2"></textarea>
            </div>
            <select class="form-control">
              <option>Option one</option>
              <option>Option two</option>
              <option>Option three</option>
              <option>Option four</option>
              <option>Option five</option>
              <option>Option six</option>
              <option>Option seven</option>
              <option>Option eight</option>
            </select>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-form btn-default">Cancel</button>
            <button type="submit" class="btn btn-form btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewCommand",
  data() {
    return {
      newComment: ""
    };
  },
  methods: {
    addNewCommand(event) {}
  }
};
</script>

<style lang="scss" scoped>
.new-command {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  &__body {
    position: relative;
    width: 640px;
    height: 480px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 6px;
  }
}
.search-input {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
.command-list {
  max-height: calc(100% - 48px);
  overflow-x: hidden;
  overflow-y: auto;
  .list-group-item {
    cursor: pointer;
  }
}
.form {
  display: flex;
  flex-flow: column wrap;
  padding: 10px;
  .form-groups {
    flex: 1;
  }
  .form-actions {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
