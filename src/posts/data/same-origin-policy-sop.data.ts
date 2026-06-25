export const accessTableHeaders = ['Resource', 'Access from Browser']

export const accessTableRows: string[][] = [
  [
    'Images / Videos',
    'Can be viewed, but JavaScript cannot access the raw data.',
  ],
  ['Scripts', 'Allowed'],
  ['CSS / Fonts', 'Allowed'],
  [
    'API Requests (`fetch` / XMLHttpRequest)',
    'JavaScript cannot read the response unless the origin is whitelisted using CORS.',
  ],
  ['Cookies', 'Not allowed'],
  ['Session Storage', 'Not allowed'],
  ['Local Storage', 'Not allowed'],
  ['IndexedDB', 'Not allowed'],
  ['DOM', 'Not allowed'],
  [
    'iframe',
    "Can embed another origin, but JavaScript cannot inspect or modify the iframe's DOM if it belongs to a different origin.",
  ],
]
