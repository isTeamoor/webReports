<template>
    <h1>Study D3.js</h1>
    <div> Div with background image</div>
    <button @click="go">Show</button>
    <svg id="TSVG" :style="{ 'width': chartWidth + 'px', 'height': chartHeight + 'px' }"></svg>
</template>


<script>
import * as d3 from 'd3';
import { svgShow } from "@/assets/js/stud"
export default {
    name: "studyd3",

    data() {
        return {
            chartWidth: 1000,
            chartHeight: 1000,
        }
    },

    methods: {
        go() {

            let svg = d3.select('#TSVG')

            svgShow(svg, this.chartHeight, this.chartWidth);
        }
    },

}
</script>


<style scoped>
h1 {
    text-align: center;
}

div {
    height: 200px;
    background-image: url('@/assets/foto.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom left;

}

#TSVG {
    border: 1px solid black;
    background-repeat: no-repeat;
    background-size: contain;

}

button {
    background-color: azure;
    transition: background-color 2s, transform 2s;
}

button:hover {
    background-color: blueviolet;
    transform: scale(150%);
}
</style>
    