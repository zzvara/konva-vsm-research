// Utility
const getNodeColor = (id) => {
  if (id.startsWith('in')) {
    return 'green';
  } else if (id.startsWith('mid')) {
    return 'white';
  }
  return 'orange';
};
// -----------------

const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight,
});

const layer = new Konva.Layer();

// Node & Edge styles
const NODE_RADIUS = 20;

const ARROW_LENGTH = 20;
const ARROW_WIDTH = 10;
const ARROW_COLOR = '#333';

// Grid layout spacing
const GRID_SPACING = 300;
const GRID_OFFSET_X = 100;
const GRID_OFFSET_Y = 100;
const NODES_IN_ROW = 5;
const NODES_IN_COL = 5;

const graph = {
  nodes: [
    { id: 'in1', to: ['mid1', 'mid2'], from: [] },
    { id: 'in2', to: ['mid2', 'mid3'], from: [] },
    { id: 'in3', to: ['mid3', 'mid4'], from: [] },
    { id: 'in4', to: ['mid4', 'mid5'], from: [] },
    { id: 'in5', to: ['mid5', 'mid6'], from: [] },
    { id: 'mid1', to: ['mid3'], from: ['in1'] },
    { id: 'mid2', to: ['mid3', 'out1'], from: ['in1', 'in2'] },
    { id: 'mid3', to: ['mid4', 'mid6'], from: ['in2', 'mid2'] },
    { id: 'mid4', to: ['mid5', 'out2'], from: ['in3', 'mid3'] },
    { id: 'mid5', to: ['out3'], from: ['in4', 'mid4'] },
    { id: 'mid6', to: ['mid4', 'out2'], from: ['in5', 'mid3'] },
    { id: 'out1', to: [], from: ['mid2'] },
    { id: 'out2', to: [], from: ['mid4', 'mid6'] },
    { id: 'out3', to: [], from: ['mid5'] },
  ],
};

const nodePositions = {};

// Node positions
graph.nodes.forEach((node, index) => {
  const row = Math.floor(index / NODES_IN_ROW);
  const col = index % NODES_IN_COL; // TODO test
  const x = col * GRID_SPACING + GRID_OFFSET_X;
  var y = row * GRID_SPACING + GRID_OFFSET_Y;
  nodePositions[node.id] = { x, y };
});

// Nodes
graph.nodes.forEach((node) => {
  const position = nodePositions[node.id];
  const circle = new Konva.Circle({
    x: position.x,
    y: position.y,
    radius: NODE_RADIUS,
    fill: getNodeColor(node.id),
    stroke: 'black',
    strokeWidth: 2,
  });
  const text = new Konva.Text({
    text: node.id,
    x: circle.x() - circle.radius(),
    y: circle.y() - circle.radius() - 10,
    width: circle.radius() * 2,
    height: circle.radius() * 2,
    align: 'center',
    verticalAlign: 'middle',
  });

  layer.add(circle);
  layer.add(text);
});

// Edges
graph.nodes.forEach((node) => {
  node.to.forEach((endNodeId) => {
    const fromPosition = nodePositions[node.id];
    const toPosition = nodePositions[endNodeId];
    const arrow = new Konva.Arrow({
      points: [fromPosition.x, fromPosition.y, toPosition.x, toPosition.y],
      pointerLength: ARROW_LENGTH,
      pointerWidth: ARROW_WIDTH,
      fill: ARROW_COLOR,
      stroke: ARROW_COLOR,
      strokeWidth: 2,
    });

    layer.add(arrow);
  });
});

stage.add(layer);
layer.draw();
