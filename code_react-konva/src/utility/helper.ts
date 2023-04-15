import { graph } from '../mock/mock';
import { config } from './config';
import { NodePositions } from './interfaces';

export const getNodePositions = (): NodePositions => {
  const nodePositions: NodePositions = {};

  graph.nodes.forEach((node, index) => {
    const row = Math.floor(index / config.NODES_IN_ROW);
    const col = index % config.NODES_IN_COL; // TODO test
    const x = col * config.GRID_SPACING + config.GRID_OFFSET_X;
    var y = row * config.GRID_SPACING + config.GRID_OFFSET_Y;
    nodePositions[node.id] = { x, y };
  });
  return nodePositions;
};

export const getNodeColor = (id: string): string => {
  if (id.startsWith('in')) {
    return 'green';
  } else if (id.startsWith('mid')) {
    return 'white';
  }
  return 'orange';
};
