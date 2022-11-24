import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
        AOS.init({})
    }
})