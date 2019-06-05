<template>
    <div>
        <div id="app"> {{name}}</div>
        <v-button v-on:click="handleClick">CLICK</v-button>
        
        
    </div>
</template>
<script>
    import vButton from './button.vue';
    export default {
        data() {
            return {
                name:'wsx ggg'
            }
        },
        components: {
            vButton
        },
        methods: {
            handleClick(e) {
                console.log(e);
            }
        }
    }
</script>
<style scoped>
    div{
        color:rgba(150, 209, 13, 0.432);
        font-size:24px;
    }
</style>