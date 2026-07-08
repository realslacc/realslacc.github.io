<script setup>
  import { ref } from 'vue'
  // import { storedProducts } from '../js/db';

  const inputField = ref('')
  const currentSelection = ref()

  let storedProducts = JSON.parse(localStorage.getItem('products'));
  // console.log(localStorage.getItem(JSON.stringify('products')))
  console.log(storedProducts)
</script>
<template>
  <div class="products-container">
    <div 
    class="item" 
    @click="currentSelection = product.id"
    v-for="(product, key) in storedProducts"
    :key="key">
      <div class="product-name">
        {{ product.name }}
      </div>
      <div class="divider"></div>
      ${{ product.price }}
      <div class="product-quantity">
        {{ product.quantity }}
      </div>
    </div>
  </div>
  <div class="search-box-container">
    <input
    v-model="inputField"
    type="text" 
    name="search-box" 
    id="search-box" 
    placeholder="Search" 
    ref="input-field"
    class="white-box">   
  </div>
  <h2>
    {{ currentSelection }}
  </h2>
</template>