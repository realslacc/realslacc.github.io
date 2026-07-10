<script setup>
  import { ref } from 'vue'

  const inputField = ref('')
  const currentSelection = ref('')

  let storedProducts = JSON.parse(localStorage.getItem('products')) || [];

  function deleteItem(product) {
    const confirmAction = prompt(`Are you sure you would like to delete '${product}'? Press OK to confirm, or type anything else to cancel.`)
    if (confirmAction == '') {
      const filtered = storedProducts.filter(product => product.id !== currentSelection.value)
      localStorage.setItem('products', JSON.stringify(filtered))
      location.reload();
    }
  }
</script>
<template>
  <div class="products-container">
    <div 
    class="item" 
    v-for="(product, key) in storedProducts"
    v-show="product.name.toLowerCase().includes(inputField.toLowerCase())"
    @click="currentSelection=product.id, deleteItem(product.name)"
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
</template>