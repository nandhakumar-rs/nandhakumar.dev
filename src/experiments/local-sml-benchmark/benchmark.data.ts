export const benchmarkPrompts = [
  'Explain what a local language model is in simple words.',
  'Explain the difference between an LLM and an SLM.',
  'Give 3 benefits of running AI models locally.',
  'Write a short Python function to add two numbers.',
  'Summarize why privacy matters in enterprise AI.',
]

const benchmarkTableHeaders = [
  'Prompt',
  'Wall time (ms)',
  'Total time (ms)',
  'Load time (ms)',
  'Input tokens',
  'Output tokens',
  'Generation time (ms)',
  'Speed (tokens/s)',
]

export const gemma3270mBenchmarkRows: string[][] = [
  ['P1', '3920.67', '3897.69', '222.49', '20', '188', '2221.02', '84.65'],
  ['P2', '12994.91', '12925.63', '221.36', '21', '759', '10002.53', '75.88'],
  ['P3', '5183.45', '5134.99', '212.33', '19', '174', '2084.76', '83.46'],
  ['P4', '4259.88', '4220.06', '221.90', '19', '95', '872.65', '108.86'],
  ['P5', '2887.74', '2864.77', '187.14', '18', '294', '2647.39', '111.05'],
]

export const qwen306bBenchmarkRows: string[][] = [
  ['P1', '18895.84', '18794.33', '8537.19', '22', '320', '4077.64', '78.48'],
  ['P2', '21138.75', '20956.15', '299.79', '23', '858', '12529.13', '68.48'],
  ['P3', '9574.01', '9523.32', '337.91', '20', '298', '3696.75', '80.61'],
  ['P4', '7398.72', '7350.39', '182.84', '20', '269', '3247.53', '82.83'],
  ['P5', '9755.14', '9727.93', '175.61', '20', '424', '4999.88', '84.80'],
]

export const qwen317bBenchmarkRows: string[][] = [
  ['P1', '29379.37', '29267.35', '3614.03', '22', '441', '11166.17', '39.49'],
  ['P2', '95636.71', '95405.84', '259.57', '23', '1637', '51033.84', '32.08'],
  ['P3', '32295.54', '32065.33', '953.85', '20', '430', '18257.82', '23.55'],
  ['P4', '37551.83', '37418.14', '665.17', '20', '440', '16620.39', '26.47'],
  ['P5', '54625.45', '54572.58', '184.69', '20', '821', '28669.31', '28.64'],
]

export const benchmarkTableHeadersExport = benchmarkTableHeaders
