export const tokenProbabilityHeaders = ['Token', 'Probability']

export const tokenProbabilityRows: string[][] = [
  ['United', '90%'],
  ['States', '60%'],
  ['of', '30%'],
  ['America', '10%'],
]

export const fewShotJsonPrompt = `Convert the following sentences into JSON.

Example

Input:
John is 25 years old.

Output:
{
  "name": "John",
  "age": 25
}

Now convert:

Alice is 30 years old.`
