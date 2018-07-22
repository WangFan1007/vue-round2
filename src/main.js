
import Vue from 'vue'
import App from './App.vue'

import {Button} from 'mint-ui'
import 'mint-ui/lib/style.css'

import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import './lib/mui/css/mui.css'

Vue.component(Button.name, Button)

new Vue({
    el:"#app",
    render: c => c(App)
})