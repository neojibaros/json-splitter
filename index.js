const fs = require('fs');

function split(data, { key, location = undefined, lowerCase }) {
  if (location && !fs.existsSync(location)) {
    fs.mkdirSync(location, { recursive: true });
  }

  return data.forEach((item, index) => {
    const fileName = (key && item[key] && (typeof item[key] === 'string'))
      ? (lowerCase ? item[key].toLowerCase() : item[key]).trim()
      : (index + 1);

    fs.writeFileSync(`${location || ''}${fileName}.json`, JSON.stringify(item));
    console.log('Successfully created file','\x1b[32m',`${location || ''}${fileName}.json`, '\x1b[0m');
  });
}

function jsonSplitter(data, options = {}) {
  if (typeof data === 'object') {
    return split(data, options);
  }

  if (
    typeof data === 'string' &&
    (data.startsWith('https://') || data.startsWith('http://'))
  ) {
    return new Promise((resolve, reject) => {
      const lib = data.startsWith('https') ? require('https') : require('http');
      const request = lib.get(data, response => {
        const body = [];

        if (response.statusCode < 200 || response.statusCode > 299) {
          reject(new Error('Failed to load page, status code: ' + response.statusCode));
        }

        response.on('data', (chunk) => body.push(chunk));
        response.on('end', () => resolve(body.join('')));
      });

      request.on('error', (err) => reject(err))
    })
      .then(result => {
        const parseResultsToJson = JSON.parse(result) || [];

        return split(parseResultsToJson, options);
      })
      .catch(err => console.error(err));
  }

  return console.log(data, 'Please use proper JSON File / JSON Api');
}

module.exports = jsonSplitter;
