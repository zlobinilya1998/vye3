import {ref } from "vue"


export default function () {
    let messages = ref([]);
    return {
        messages
    }
}