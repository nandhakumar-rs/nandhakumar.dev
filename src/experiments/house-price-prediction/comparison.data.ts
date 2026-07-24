export const multiFeatureComparisonHeaders = [
  'Version / Run',
  'Features',
  'Epochs',
  'Train MSE',
  'Test MSE',
]

export const multiFeatureComparisonRows: string[][] = [
  ['v7', '`convenience_stores`', '5000', '129.8890', '102.6373'],
  ['v8', '`house_age`, `convenience_stores`', '5000', '148.1289', '114.6253'],
  ['v8', '`house_age`, `convenience_stores`', '10000', '124.2255', '92.2336'],
  ['v8', '`house_age`, `convenience_stores`', '20000', '120.3336', '88.6346'],
]

export const scalingComparisonHeaders = [
  'Training',
  'Epochs',
  'Train MSE',
  'Test MSE',
]

export const scalingComparisonRows: string[][] = [
  ['Without scaling', '20,000', '120.3336', '88.6346'],
  ['With scaling', '5,000', '120.2529', '88.5699'],
]

export const allFeaturesComparisonHeaders = [
  'Version',
  'Features',
  'Train MSE',
  'Test MSE',
]

export const allFeaturesComparisonRows: string[][] = [
  ['v9', '2 features', '120.2529', '88.5699'],
  ['v10', '6 features', '81.6658', '60.4505'],
]

export const sklearnMethodComparisonHeaders = [
  'Version',
  'Method',
  'Train MSE',
  'Test MSE',
]

export const sklearnMethodComparisonRows: string[][] = [
  ['v10', 'Manual gradient descent', '81.6658', '60.4505'],
  ['v11', 'Scikit-learn LinearRegression', '81.6658', '60.4546'],
]

export const sklearnWeightsComparisonHeaders = [
  'Feature',
  'v10 Manual',
  'v11 Scikit-learn',
]

export const sklearnWeightsComparisonRows: string[][] = [
  ['transaction_date', '1.5732', '1.5733'],
  ['house_age', '-2.8941', '-2.8941'],
  ['distance_to_mrt_m', '-6.5015', '-6.5036'],
  ['convenience_stores', '3.3362', '3.3358'],
  ['latitude', '2.2289', '2.2282'],
  ['longitude', '-0.4715', '-0.4730'],
  ['bias', '37.9202', '37.9202'],
]
