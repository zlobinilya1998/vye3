<template>
    <div class="w-1/3 bg-indigo-300 p-4">
        <div class="bg-indigo-500 text-white">Chat</div>
        <div class="border-4 mt-4 p-4">
            <div v-if="connection">
                <div class="flex flex-wrap">
                    <div v-for="msg in messages" class="flex justify-between w-full">
                        <p>{{msg.time}}</p>
                        <p>{{msg.text}}</p>
                    </div>
                </div>
                <div class="relative">
                    <input v-model="input" class="w-full mt-4 p-2"/>
                    <div class="bg-red-500 w-6 h-6 rounded-full absolute right-2 top-1/2" @click="sendMessage"></div>
                </div>
                <div @click="closeConnection">Закрыть соединение</div>
            </div>
            <div v-else class="flex justify-center">
                <div class="h-5 bg-indigo-500 rounded-full w-5 animate-bounce m-2"></div>
                <div class="h-5 bg-indigo-500 rounded-full w-5 animate-bounce m-2"></div>
                <div class="h-5 bg-indigo-500 rounded-full w-5 animate-bounce m-2"></div>
                <div @click="reconnect">Переподключиться</div>
            </div>

        </div>
    </div>
</template>

<script>
    import useMessenger from "@/hooks/useMessenger";
    export default {
        name:"Messenger",
        data:()=>({
            connection:null,
            messages: [],
            input:'',
        }),
        methods:{
            sendMessage(){
                this.connection.send(this.input);
            },
            closeConnection(){
                this.connection.close();
                console.log(this.connection.readyState)
            },
            reconnect(){
                this.connection = new WebSocket("wss://echo.websocket.org");
            }
        },
        beforeMount() {
            this.connection = new WebSocket("wss://echo.websocket.org");
        },
        mounted() {
            this.connection.onmessage = (e) => {
                this.messages.push({time: new Date().toLocaleTimeString('ru-Ru',{hour:'numeric',minute:'numeric'}),text:e.data})
                this.input = '';
            }
            this.connection.onclose = (e) => {
                this.connection = null
            }
        },
        watch:{
            connection(newVal){
                if (newVal){
                    newVal.onopen = e => {
                        console.log('Соединение установленно')
                    }
                }
            },
        },
        setup(){
            let {messages} = useMessenger();
            return {
                messages
            }
        },
    }
</script>

<style scoped>

</style>