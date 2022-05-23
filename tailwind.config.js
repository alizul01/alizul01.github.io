module.exports = {
    content: ['./index.html'],
    theme: {
        container: {
            center: true,
            padd: '1rem',
        },
        extend: {
            colors: {
                'primary': '#4C4C6D',
                'secondary': '#FF896B',
                'bg': '#FEF6FB',
            },
            screens: {
                '2xl': '1320px',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}