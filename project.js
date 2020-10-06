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

 var makeTranslateString = function(x,y)
{
    return "translate("+x+","+y+")";
}
 
 var drawAxes = function(graphDim,margins,
                         xScale,yscale)
{

  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yscale);

  var axes = d3.select("svg")
      .append("g")
  axes.append("g")
      .attr("transform","translate("+margins.left+","
           +(margins.top+graphDim.height)+")")
      .call(xAxis)
  axes.append("g")
      .attr("transform","translate("+margins.left+","
           +(margins.top)+")")
      .call(yAxis)

}

 var drawLabels = function(graphDim,margins)
{
  var labels = d3.select("svg")
  .append("g")
  .classed("labels",true)

labels.append("text")
  .text("GDP")
  .classed("title",true)
  .attr("text-anchor","middle")
  .attr("x",margins.left+(graphDim.width/2))
  .attr("y",margins.top)

labels.append("text")
  .text("% of Minorities in Management")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("x",margins.left+(graphDim.width/2))
  .attr("y",screen.height)

labels.append("g")
  .attr("transform","translate(20,"+
        (margins.top+(graphDim.height/2))+")")
  .append("text")
  .text("% of Minorities in Management")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("transform","rotate(90)")

}



var intialgraph=function(data)
{ var screen= {width:250, height:300}
d3.select("#graph")
.attr("width", screen.width)
.attr("height", screen.height)

  var margins = {left:65,right:30,top:20,bottom:20} 
 
var xScale=d3.scaleLinear()
.domain([27,35])
.range([0,screen.width])

var yscale=d3.scaleLinear()
.domain([16,20])
.range([screen.height,0])


 
 
var createAxes = function(screen,margins,counties,
                           target,xScale,yscale)
{
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    
    var axes = d3.select(target)
        .append("g")
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.top+graph.height)+")")
        .call(xAxis)
    axes.append("g")
        .attr("transform","translate("+margins.left+","
             +(margins.top)+")")
        .call(yAxis)
}   

    var createLabels = function(screen,margins,
data,target)
{
        var labels = d3.select("target")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("GDP")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",margins.top)
    
    labels.append("text")
        .text("Minority Percentage")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",screen.height)
    
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graph.height/2))+")")
        .append("text")
        .text("GDP")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(90)")
    
}

 var graph =
        {
            width:screen.width-margins.left-margins.right,
            height:screen.height - margins.top-margins.bottom
        }
    console.log(graph);

    d3.select("#graph")
    .attr("width",screen.width)
    .attr("height",screen.height)

    var target = d3.select("svg")
    .append("g")
    .attr("id","#graph")
    .attr("transform",
          "translate("+margins.left+","+
                        margins.top+")");

 
    d3.select("#graph")
     .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
      .x(function(data)
  { 
      return xScale(data.divp)})
      .y (function(data)
  {return yscale(data.gdp)}))
 
 drawAxes(graph,margins,xScale,yscale)
 drawPlot(data,screen,xScale,yscale)
 drawLabels(graph,margins)
 createLabels(screen,margins,
data,target)
}

intialgraph(data)

var getgdp= function(mper){
    return mper.gdp
}

var allgdp=mper.map(getgdp)

var getper= function(mper){
    return mper.per
}

var allper=mper.map(getper)



var drawPlot2=function(mper,screen2,xScale2,yscale2 )
{   
console.log("mper", mper)
  d3.select("#graph")
  .selectAll("circle")
  .data(mper)
  .enter()
  .append("circle")
.classed("circle", true)
  .attr("cx", function(mper)
  {return xScale2(mper.per)})
  .attr("cy", function(mper)
  {return yscale2(mper.gdp)})
   .attr("r",2)
    .attr("fill", "blue")
    

}

 var makeTranslateString2 = function(x,y)
{
    return "translate("+x+","+y+")";
}
 
 var drawAxes2 = function(graphDim2,margins2,
                         xScale2,yscale2)
{

  var xAxis2 = d3.axisBottom(xScale2);
  var yAxis2 = d3.axisLeft(yscale2);

  var axes = d3.select("#graph2")
      .append("g")
  axes.append("g")
      .attr("transform","translate("+margins2.left+","
           +(margins2.top+graphDim2.height)+")")
      .call(xAxis2)
  axes.append("g")
      .attr("transform","translate("+margins2.left+","
           +(margins2.top)+")")
      .call(yAxis2)

}

 var drawLabels2 = function(graphDim2,margins2)
{
  var labels2 = d3.select("#graph2")
  .append("g")
  .classed("labels2",true)

labels2.append("text")
  .text("GDP")
  .classed("title",true)
  .attr("text-anchor","middle")
  .attr("x",margins2.left+(graphDim2.width/2))
  .attr("y",margins2.top)

labels2.append("text")
  .text("% of Minorities in Management")
  .classed("label2",true)
  .attr("text-anchor","middle")
  .attr("x",margins2.left+(graphDim2.width/2))
  .attr("y",screen2.height)

labels2.append("g")
  .attr("transform","translate(20,"+
        (margins2.top+(graphDim2.height/2))+")")
  .append("text")
  .text("% of Minorities in Management")
  .classed("label",true)
  .attr("text-anchor","middle")
  .attr("transform","rotate(90)")

}



var intialgraph2=function(mper)
{ var screen= {width:250, height:300}
d3.select("#graph2")
 
.attr("height", screen.height)

  var margins2 = {left:65,right:30,top:20,bottom:20} 
 
var xScale2=d3.scaleLinear()
.domain([25, 80])
.range([0,screen2.width])

var yscale2=d3.scaleLinear()
.domain([0,2600])
.range([screen2.height,0])


 
 
var createAxes2 = function(screen2,margins2,mper,
                           target2,xScale2,yscale2)
{
    var xAxis2 = d3.axisBottom(xScale2);
    var yAxis2 = d3.axisLeft(yScale2);
    
    var axes2 = d3.select(target2)
        .append("g")
    axes2.append("g")
        .attr("transform","translate("+margins2.left+","
             +(margins2.top+graph2.height)+")")
        .call(xAxis2)
    axes2.append("g")
        .attr("transform","translate("+margins2.left+","
             +(margins2.top)+")")
        .call(yAxis2)
}   

    var createLabels2 = function(screen2,margins2,
mper,target2)
{
        var labels2 = d3.select("target2")
        .append("g")
        .classed("labels2",true)
        
    labels2.append("text")
        .text("GDP")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins2.left+(graph2.width/2))
        .attr("y",margins2.top)
    
    labels2.append("text")
        .text("Minority Percentage")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins2.left+(graph2.width/2))
        .attr("y",screen.height)
    
    labels2.append("g")
        .attr("transform","translate(20,"+ 
              (margins2.top+(graph2.height/2))+")")
        .append("text")
        .text("GDP")
        .classed("label2",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(90)")
    
}

 var graph2 =
        {
            width:screen2.width-margins2.left-margins2.right,
            height:screen2.height - margins2.top-margins2.bottom
        }
    console.log(graph2);

    d3.select("#graph2")
    .attr("width",screen2.width)
    .attr("height",screen2.height)

    var target = d3.select("#graph2")
    .append("g")
    .attr("id","#graph2")
    .attr("transform",
          "translate("+margins2.left+","+
                        margins2.top+")");

 
    d3.select("#graph2")
     .append("path")
      .datum(mper)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
      .x(allgdp)
      .y (allper))
 
 drawAxes2(graph2,margins2,xScale2,yscale2)
 drawPlot2(mper,screen,xScale2,yscale2)
 drawLabels2(graph2,margins2)
 createLabels2(screen,margins2,
mper,target)
}

intialgraph2(mper)


    





