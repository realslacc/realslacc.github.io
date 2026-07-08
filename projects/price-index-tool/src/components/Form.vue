<script setup>
    import { ref } from 'vue'
    import { NewProduct } from '../js/db'

    const popupContainer = ref()

    const productName = ref('')
    const productPrice = ref('')
    const productQuantity = ref('')

    function pushItem() { // Insert into DB
        if (!productName.value == '' &&
            !productPrice.value == '' &&
            !productQuantity.value == '') {
                const newProduct = new NewProduct(productName.value, productPrice.value, productQuantity.value)
                newProduct.method();
        }
    }
</script>
<template>
    <span 
        @click="popupContainer.classList.toggle('hidden')"
        id="new-product" 
        class="white-box">+</span>
    <div 
        ref="popupContainer"
        class="popup-container hidden">
        <form
            @submit.prevent="handleSubmit">
            <input
                v-model.trim="productName" 
                type="text" 
                name="product-name" 
                id="product-name" 
                placeholder="Product name">
            <input 
                v-model.trim="productPrice" 
                type="number"
                pattern="\d*" 
                name="product-price" 
                id="product-price"
                placeholder="Product price">
            <select 
                v-model="productQuantity" 
                name="product-quantity" 
                id="product-quantity">
                <option disabled="" value="" default>Product Quantity</option>
                <option value="ea">EA</option>
                <option value="set">SET</option>
            </select>
            <input
                @click="pushItem"
                ref="submitBtn"
                type="button" 
                id="submit-btn"
                value="Add new product">
            </input>
        </form>
    </div>
</template>