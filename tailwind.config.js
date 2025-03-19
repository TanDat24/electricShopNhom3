// eslint-disable-next-line no-undef
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            spacing: {
                7.5: "30px", // Thêm giá trị tùy chỉnh cho spacing
            },
            overflow: {
                initial: "initial",
            },
            colors: {
                transparent: "transparent",
                colorText: "#111827",
                background: "#f5f5f5",
                white: "#ffffff",
                textGray: "#848484",
                darkBlue: "#162137",
                header: "#f9f9ff",
                OutPro: "#f5f5f5",
                borderColor: "#cecece",
                bgText: "#2e2e2e",
                bgModel: "#f0f0f0",
                bgCartWatch: "#cad3d6",
            },
            keyframes: {
                slideDown: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(0)" },
                },
                slideUp: {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(-100%)" },
                },
                bounce: {
                    "0%, 100%": { transform: "translateY(-5%)" },
                    "50%": { transform: "translateY(5%)" },
                },
            },
            animation: {
                slideDown: "slideDown 0.3s ease-out",
                slideUp: "slideUp 0.3s ease-out",
                bounce: "bounce 1s infinite",
            },
            fontFamily: {
                inherit: "inherit",
            },
            transitionProperty: {
                custom: "width, height, background-color, background-position",
            },
            transitionDuration: {
                600: "600ms",
                1500: "1500ms",
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("tailwind-scrollbar-hide")],
    variants: {},
    corePlugins: {},
};
