/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [],
    theme: {
        extend: {
            colors: {
                'casetrue-1': '#ffaa00',
                'casetrue-2': '#ffcc00',
                'dark-1': "#262626",
                'dark-2': "#3F403B",
                'dark-3': "#727365",
                'dark-4': "#BFBFAE",
                'dark-5': "#F2F2E4",
            },
            // fontSize: {
            //     h1: "clamp(1rem, 10vw, 3rem)",
            // },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
}