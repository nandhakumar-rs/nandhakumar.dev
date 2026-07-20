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
