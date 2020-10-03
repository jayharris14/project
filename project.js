

 var drawAxes = function(graphDim,margins,
                         xScale,yscale)
{

  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yscale);

  var axes = d3.select("svg")
      .append("g")
  axes.append("g")
      .attr("transform","translate("+margins.left+","
           +(margins.bottom+graphDim.height)+")")
      .call(xAxis)
  axes.append("g")
      .attr("transform","translate("+margins.bottom+","
           +(margins.bottom)+")")
      .call(yAxis)

}
 
 

var drawPlot=function(data,screen,xScale,yscale )
{   
console.log("data", data)
  d3.select("#graph")
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
.classed("circle", true)
  .attr("cx", function(data)
  { 
      return xScale(data.divp)})
  .attr("cy", function(data)
  {return yscale(data.gdp)})
   .attr("r",2)
    .attr("fill", "blue")
}


var intialgraph=function(data)
{ var screen= {width:200, height:200}
d3.select("#graph")
.attr("width", screen.width)
.attr("height", screen.height)

  var margins = {left:30,right:20,top:20,bottom:30} 
 
var xScale=d3.scaleLinear()
.domain([28,35])
.range([0,screen.width])

var yscale=d3.scaleLinear()
.domain([16,20])
.range([screen.height,0])

drawPlot(data,screen,xScale,yscale)
 
 var createAxes = function(screen,margins,counties,
                           target,xScale,yscale)
 {
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yscale);
    
    var axes = d3.select(target)
        .append("g")
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.bottom+graph.height)+")")
        .call(xAxis)
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.bottom)+")")
        .call(yAxis)
}   
drawAxes(graph,margins,xScale,yscale)
 
 

 
}

intialgraph(data)


