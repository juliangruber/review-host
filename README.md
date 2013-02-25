# review-host

Host multiple [reviews](https://github.com/juliangruber/review) in one app server.

![preview](http://f.cl.ly/items/3O1w3Y0X2i0s1F1M273x/Screen%20Shot%202013-01-24%20at%2012.50.38%20PM.png)

## Usage

First install `review-host`.

```bash
$ npm install -g review-host
```

Then create a directory for your host to live in.

```bash
$ mkdir review && cd review
```

Now create the reviews you wish to host. Check [example/](https://github.com/juliangruber/review-host/tree/master/example) for
a complete example.

Each site (e.g. `sites/bootstrap/index.js`) needs to export a function that returns an express request handler that came
from `review()`.

Example:

```js
module.exports = function (cacheDir) {
  return review()
    .sites({ google : 'http://google.com' })
    .cache({
      dir : cacheDir,
      expires : 60
    })
}
```

```bash
$ mkdir -p sites/bootstrap
$ vim sites/bootstrap/index.js
$ # ...
```

Finally start the server from your `review`-directory. It will now start serving all reviews in `sites/`.

```bash
$ review-host
review-host listening on port 8899
```

## API

### CLI

Issue `review-host --help`

### host(opts)

Returns an `express` request handler. `opts` can be:

* `sites` : The directory your sites are in. Defaults to `./sites`
* `cache` : The directory to write cache files to. Defaults to `./cache`

## Installation

There is no need to have phantomjs installed, it will be fetched automatically together with `review`.

```bash
$ npm install -g review-host # for cli
$ npm install review-host    # for library
```

## License

(MIT)

Copyright (c) 2012 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
