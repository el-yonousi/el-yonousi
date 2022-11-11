export default defineNuxtPlugin(nuxtApp => {
    // if (process.client) {
    //     function sectionScroll() {
    //         var sectionScrolls = document.querySelectorAll("section");

    //         for (var i = 0; i < sectionScrolls.length; i++) {
    //             const element = sectionScrolls[i];
    //             if (element.getBoundingClientRect().top <= window.innerHeight - 50) {
    //                 element.style.opacity = "1";
    //                 element.style.transform = "translateY(0rem)";
    //             } else {
    //                 element.style.opacity = "0";
    //                 element.style.transform = "translateY(10rem)";
    //             }
    //         }
    //     }

    //     window.addEventListener("scroll", sectionScroll);
    //     window.addEventListener("load", sectionScroll);
    //     window.addEventListener("load", () => {
    //         document.documentElement.scrollTop = 0
    //     });

    //     window.onbeforeunload = () => {
    //         window.scrollTo(0, 0);
    //     }

    //     if (history.scrollRestoration) {
    //         history.scrollRestoration = 'manual';
    //     } else {
    //         window.onbeforeunload = function() {
    //             window.scrollTo(0, 0);
    //         }
    //     }

    // }
})