import React from "react";

import useResizeObserver from "../../utils/ResizeObserver";

import {
  select,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  stackOrderAscending,
  area,
  scalePoint,
  curveCardinal,
} from "d3";
function Chart({ data, keys, colors }) {
  const svgRef = React.useRef();
  const wrapperRef = React.useRef();
  const dimensions = useResizeObserver(wrapperRef);
  React.useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();
    // stacks and layers
    const stackGenerator = stack().keys(keys).order(stackOrderAscending);
    console.log(stackGenerator(data));
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, (layer) => max(layer, (sequence) => sequence[1])),
    ];
    console.log(extent);

    // scales
    const xScale = scalePoint()
      .domain(data.map((d) => d.date))
      .range([0, width]);
    const yScale = scaleLinear().domain(extent).range([height, 0]);
    // area generator
    const areaGenerator = area()
      .x((sequence) => xScale(sequence.data.date))
      .y0((sequence) => yScale(sequence[0]))
      .y1((sequence) => yScale(sequence[1]))
      .curve(curveCardinal);
    //axis
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").call(yAxis);

    // rendering
    svg
      .selectAll(".layer")
      .data(layers)
      .join("path")
      .attr("class", "layer")
      .attr("fill", (layer) => colors[layer.key])
      .attr("d", areaGenerator);

    //start
  }, [colors, data, dimensions, keys]);
  return (
    <React.Fragment>
     
      <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </React.Fragment>
  );
}

export default Chart;
