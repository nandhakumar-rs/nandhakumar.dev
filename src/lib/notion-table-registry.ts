import {
  allFeaturesComparisonHeaders,
  allFeaturesComparisonRows,
  multiFeatureComparisonHeaders,
  multiFeatureComparisonRows,
  scalingComparisonHeaders,
  scalingComparisonRows,
  sklearnMethodComparisonHeaders,
  sklearnMethodComparisonRows,
  sklearnWeightsComparisonHeaders,
  sklearnWeightsComparisonRows,
} from '../experiments/house-price-prediction/comparison.data'
import {
  benchmarkTableHeadersExport,
  gemma3270mBenchmarkRows,
  qwen306bBenchmarkRows,
  qwen317bBenchmarkRows,
} from '../experiments/local-slm-benchmark/benchmark.data'
import {
  accessTableHeaders,
  accessTableRows,
} from '../posts/data/same-origin-policy-sop.data'
import {
  tokenProbabilityHeaders,
  tokenProbabilityRows,
} from '../posts/data/prompting-with-llms-when-building-ai-agents.data'

export type NotionTableData = {
  headers: string[]
  rows: string[][]
}

export const notionTableRegistry: Record<string, NotionTableData> = {
  'house-price-sklearn-method-comparison': {
    headers: sklearnMethodComparisonHeaders,
    rows: sklearnMethodComparisonRows,
  },
  'house-price-sklearn-weights-comparison': {
    headers: sklearnWeightsComparisonHeaders,
    rows: sklearnWeightsComparisonRows,
  },
  'house-price-all-features-comparison': {
    headers: allFeaturesComparisonHeaders,
    rows: allFeaturesComparisonRows,
  },
  'house-price-scaling-comparison': {
    headers: scalingComparisonHeaders,
    rows: scalingComparisonRows,
  },
  'house-price-multi-feature-comparison': {
    headers: multiFeatureComparisonHeaders,
    rows: multiFeatureComparisonRows,
  },
  'slm-benchmark-gemma3-270m': {
    headers: benchmarkTableHeadersExport,
    rows: gemma3270mBenchmarkRows,
  },
  'slm-benchmark-qwen3-0.6b': {
    headers: benchmarkTableHeadersExport,
    rows: qwen306bBenchmarkRows,
  },
  'slm-benchmark-qwen3-1.7b': {
    headers: benchmarkTableHeadersExport,
    rows: qwen317bBenchmarkRows,
  },
  'same-origin-access': {
    headers: accessTableHeaders,
    rows: accessTableRows,
  },
  'llm-token-probability': {
    headers: tokenProbabilityHeaders,
    rows: tokenProbabilityRows,
  },
}
