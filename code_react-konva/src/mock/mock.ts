export const graph = {
  nodes2: [
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
  nodes: [
    { id: 'in1', to: ['mid1', 'mid4'], from: [] },
    { id: 'in2', to: ['mid1', 'mid3'], from: [] },
    { id: 'in3', to: ['mid1', 'mid2', 'mid3'], from: [] },
    { id: 'in4', to: ['mid2', 'mid3', 'mid4'], from: [] },
    { id: 'in5', to: ['mid1', 'mid4'], from: [] },
    { id: 'mid1', to: ['mid2', 'mid5', 'out1'], from: ['in1', 'in2', 'in3'] },
    { id: 'mid2', to: ['mid3', 'mid4', 'out1'], from: ['mid1', 'in4'] },
    { id: 'mid3', to: ['mid4', 'mid6', 'out2'], from: ['mid1', 'in2', 'in3', 'in4', 'mid2'] },
    { id: 'mid4', to: ['mid1', 'mid7', 'out2'], from: ['in1', 'in4', 'in5', 'mid2'] },
    { id: 'mid5', to: ['mid3', 'mid8'], from: ['mid1'] },
    { id: 'mid6', to: ['mid4', 'mid8'], from: ['mid3'] },
    { id: 'mid7', to: ['mid5', 'mid9'], from: ['mid4'] },
    { id: 'mid8', to: ['mid6', 'mid9'], from: ['mid5', 'mid6'] },
    { id: 'mid9', to: ['mid7', 'out3'], from: ['mid8', 'mid7'] },
    { id: 'out1', to: [], from: ['mid1', 'mid2'] },
    { id: 'out2', to: [], from: ['mid3', 'mid4'] },
    { id: 'out3', to: [], from: ['mid9'] },
  ],
};