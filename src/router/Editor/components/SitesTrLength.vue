<template>
<div id="sites_tr_length">
<h2>sites_tr_length（每行显示几个站点）</h2>
<hr/>
{{sites_tr_length}}
<button @click="sites_tr_length_down">-</button>
<button @click="sites_tr_length_up">+</button>
<hr/>
</div>
</template>

<script>
export default {
  props: {
    sites_tr_length: Number,
    sites_tr_length_up: Function,
    sites_tr_length_down: Function
  },
  methods: {}
};
</script>

<style>
</style>
