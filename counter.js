/*自定义组件*/
const counter = {
    template:"<button @click='count++'>你点击了我{{count}}次，我记住你了</button>",
    data(){
        return {
            "count":0
        }
    }
}
/*注册全局组件*/
Vue.component("counter",counter);