import { Stage, Layer, Circle, Text, Arrow, Group } from 'react-konva';
import { getNodeColor, getNodePositions } from './utility/helper';
import { graph } from './mock/mock';
import { config } from './utility/config';

function App() {
  const nodePositions = getNodePositions();

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {graph.nodes.map((node) => {
          const position = nodePositions[node.id];
          return (
            <Group key={node.id}>
              <Circle x={position.x} y={position.y} radius={config.NODE_RADIUS} fill={getNodeColor(node.id)} stroke={'black'} strokeWidth={2} />
              <Text
                text={node.id}
                x={position.x - config.NODE_RADIUS}
                y={position.y - config.NODE_RADIUS - 10}
                width={config.NODE_RADIUS * 2}
                height={config.NODE_RADIUS * 2}
                align={'center'}
                verticalAlign={'middle'}
              />
            </Group>
          );
        })}
        {graph.nodes.map((node) => {
          return (
            <Group key={node.id}>
              {node.to.map((endNodeId) => {
                const fromPosition = nodePositions[node.id];
                const toPosition = nodePositions[endNodeId];
                return (
                  <Arrow
                    key={`${node.id}-${endNodeId}`}
                    points={[fromPosition.x, fromPosition.y, toPosition.x, toPosition.y]}
                    pointerLength={config.ARROW_LENGTH}
                    pointerWidth={config.ARROW_LENGTH}
                    fill={config.ARROW_COLOR}
                    stroke={config.ARROW_COLOR}
                    strokeWidth={2}
                  />
                );
              })}
            </Group>
          );
        })}
      </Layer>
    </Stage>
  );
}

export default App;
