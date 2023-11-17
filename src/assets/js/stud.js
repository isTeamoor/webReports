import * as d3 from "d3";

function svgShow(svg, height, width){
    let scale = d3.scaleLinear().domain([0, width]).range([0, width])
    let axis = d3.axisBottom(scale)
    svg.append('g').attr('transform', 'translate(50,0)').call(axis)

    console.log(d3.range(5))
    }



    /*
    let group = svg.append('g').attr('transform', 'translate(50,0)')
    let data = [
        {x:0, y:0},
        {x:100, y:50},
        {x:200, y:120},
        {x:300, y:150},
        {x:400, y:200},
        {x:500, y:250}
    ]

    let line = d3.line( ((d)=>d.x), ((d)=>d.y) )

    group.append('path').attr('d', line(data)).style('stroke', 'black').attr('fill', 'none')




    let dat = [10, 30, 50, 60]
    var r = 150;

    var color = d3.scaleOrdinal().range(["red", "blue", "orange", 'aqua'])

    let gr = svg.append('g').attr('transform', 'translate(150,200)')

    let arc = d3.arc()
    .innerRadius(0)
    .outerRadius(r)

    let pie = d3.pie().value(d=>d)

    let arcs = gr.selectAll('.arc').data(pie(dat)).join('g').attr('class', 'arc')

    arcs.append('path').attr('d', arc).attr('fill', d=>color(d.data))

    arcs.append('text')
    .attr('text-anchor', 'middle')
    .attr('transform', d=>"translate("+arc.centroid(d)+")")
    .text(d=>d.data)*/
  


export { svgShow };