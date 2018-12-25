<template>
  <section class="window home">
    <div class="window-content">
      <div class="pane-group">
        <home-sidebar :collections="collections"/>
        <div class="pane">
          <home-content/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import HomeSidebar from "@/components/HomeSidebar.vue";
import HomeContent from "@/components/HomeContent.vue";

export default {
  name: "home",
  components: {
    HomeSidebar,
    HomeContent
  },
  data() {
    return {
      isShowNewCommand: false
    };
  },
  methods: {
    showNewCommand() {
      this.isShowNewCommand = true;
    }
  },
  computed: {
    ...mapState(["collections"])
  }
};
</script>

<style lang="scss" scoped>
</style>
