/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/preline/dist/*.js",
   
  ],
  plugins: [require("preline/plugin")],
  theme: {
    extend: {
      colors: {
        Metric: "#222222",
        cyangreen: "#273e3f",
        /* cyangreen: "black", */
        smooth: "#FAF9F7",
        elipse: "#191919",
        //smooth: "#FAF9F7"
        // Primary
        "teal-vivid-050": "#F0FCF9",
        "teal-vivid-100": "#C6F7E9",
        "teal-vivid-200": "#8EEDD1",
        "teal-vivid-300": "#5FE3C0",
        "teal-vivid-400": "#2DCCA7",
        "teal-vivid-500": "#17B897",
        "teal-vivid-600": "#079A82",
        "teal-vivid-700": "#048271",
        "teal-vivid-800": "#016457",
        "teal-vivid-900": "#004440",

        // Neutrals
        "grey-050": "#F7F7F7",
        "grey-100": "#E1E1E1",
        "grey-200": "#CFCFCF",
        "grey-300": "#B1B1B1",
        "grey-400": "#9E9E9E",
        "grey-500": "#7E7E7E",
        "grey-600": "#626262",
        "grey-700": "#515151",
        "grey-800": "#3B3B3B",
        "grey-900": "#222222",

        // Supporting
        "yellow-vivid-050": "#FFFBEA",
        "yellow-vivid-100": "#FFF3C4",
        "yellow-vivid-200": "#FCE588",
        "yellow-vivid-300": "#FADB5F",
        "yellow-vivid-400": "#F7C948",
        "yellow-vivid-500": "#F0B429",
        "yellow-vivid-600": "#DE911D",
        "yellow-vivid-700": "#CB6E17",
        "yellow-vivid-800": "#B44D12",
        "yellow-vivid-900": "#8D2B0B",

        "red-vivid-050": "#FFE3E3",
        "red-vivid-100": "#FFBDBD",
        "red-vivid-200": "#FF9B9B",
        "red-vivid-300": "#F86A6A",
        "red-vivid-400": "#EF4E4E",
        "red-vivid-500": "#E12D39",
        "red-vivid-600": "#CF1124",
        "red-vivid-700": "#AB091E",
        "red-vivid-800": "#8A041A",
        "red-vivid-900": "#610316",
      },
    },
  },
};
