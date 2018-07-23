<template>
    <div>
        这是App
        <mt-button type="default" @click="show">default</mt-button>
        <mt-button type="primary" size="large" @click="closeAlert">primary</mt-button>
        <mt-button type="primary" size="large" plain>primary</mt-button>
        <mt-button type="danger" size="large">danger</mt-button>
        <mt-button type="danger" size="large" icon="back">danger</mt-button>

        {{ msg }}

        <button type="button" class="mui-btn mui-btn-royal">
			紫色
		</button>
    </div>
</template>

<script>

    import { Toast } from 'mint-ui'

    export default {
        data: () => {
            return {
                msg:"你好",
                alert:{}
            }
        },
        methods: {
            show(){
                this.alert = Toast({
                    message:"Toast message",
                    position:'bottom',
                    duration:-1,
                    iconClass:'glyphicon glyphicon-heart',
                    className:'mytoast',
                })
            },
            closeAlert(){
                this.alert.close()
            }
        }
    }
</script>

<style scoped>
    
</style>