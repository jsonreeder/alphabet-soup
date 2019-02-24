# Alphabet Soup

## Development

### To run

Install dependencies:

```sh
cd functions
npm i
cd ../alphabet-soup
npm i
```

Start the Ionic app: `npm start`.

### To deploy

#### Both functions and client

Run `firebase deploy`.

#### Only functions

`firebase deploy --only functions`

#### Only client

`firebase deploy --only hosting`