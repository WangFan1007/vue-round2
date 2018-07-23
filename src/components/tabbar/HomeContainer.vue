<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        getLunbotu(){
            this.$http.get("http://vue.studyit.io/api/getlunbo").then(
                res => {
                    console.log(res.body)
                }
            )
        }
    },
    created(){
        this.getLunbotu()
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
}
</style>
