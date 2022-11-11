export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
        const followScroll = () => {
            /* Getting all the sections in the page. */
            let section = document.querySelectorAll('.custom-class-nav-scroll');

            /* Selecting all the links in the nav bar. */
            let menu = document.querySelectorAll('nav a');

            /* A function that is called when the user scrolls the page. */
            window.onscroll = () => {
                section.forEach((i: any) => {
                    let top = window.scrollY;
                    let offset = i.offsetTop - 150;
                    let height = i.offsetHeight;
                    let id = i.getAttribute('id');
                    if (top >= offset && top < offset + height) {
                        postStyle(id)
                    }

                    // the last section in page
                    if (endOfPage() >= 100) {
                        postStyle("contact")
                    }
                });
            };

            /**
             * When the user scrolls, the function will check the position of the scrollbar and compare it to the
             * position of each section. If the scrollbar is within the section, the function will add the class
             * 'active' to the corresponding menu item.
             * @param id - the id of the section you want to highlight
             */
            function postStyle(id: any) {
                const element: any = document.querySelector('nav a[href*=' + id + ']')
                menu.forEach(link => {
                    link.classList.remove('active');
                    element.classList.add('active');
                });
            }

            /**
             * It returns the percentage of the page that has been scrolled.
             * @returns The percentage of the page that has been scrolled.
             */
            const endOfPage = () => {
                const h = document.documentElement,
                    b = document.body,
                    st = 'scrollTop',
                    sh = 'scrollHeight';
                return Math.round((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100)
            }
        }
        followScroll()
    }
})