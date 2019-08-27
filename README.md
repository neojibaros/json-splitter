# json-splitter
Split Huge JSON File Into Smalled JSON Files

## Installation
`npm i json-splitter` / `yarn add json-splitter`

## Usage
```
const jsonSplitter = require('json-splitter');
```
or
```
import jsonSplitter from 'json-splitter';
```

#### Split local JSON file
```
const data = required('./data.json');
jsonSplitter(data);
```
> // Successfully created mini files

#### Split API
```
jsonSplitter('https://jsonplaceholder.typicode.com/users');
```
> // Successfully created mini files

## Split the mini files in a separate folder / sub folder / multilevel folder
```
jsonSplitter('https://jsonplaceholder.typicode.com/users', {
  location: 'folderName/'
});
```

## Select fileNames from JSON response key
e.g. https://jsonplaceholder.typicode.com/users
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
]
```
```
jsonSplitter('https://jsonplaceholder.typicode.com/users', {
  key: 'username'
});
```
> Bret.json

> Antonette.json

## to LowerCase
```
jsonSplitter('https://jsonplaceholder.typicode.com/users', {
  key: 'username',
  lowerCase: true
});
```
> Bret.json

> Antonette.json
