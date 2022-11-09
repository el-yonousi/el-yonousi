export default defineEventHandler(() => [
    {
        name: "home",
        href: "#home",
        icon: 'tabler:home',
        current: true
    },
    {
        name: "my works",
        href: "#works",
        icon: 'eos-icons:job',
        current: false
    },
    {
        name: "testimonials",
        href: "#testimonials",
        icon: 'codicon:feedback',
        current: false
    },
    {
        name: "about me",
        href: "#about",
        icon: 'fluent:person-info-20-regular',
        current: false
    },
    {
        name: "contact me",
        href: "#contact",
        icon: 'fluent-mdl2:contact-info',
        current: false
    },
]);