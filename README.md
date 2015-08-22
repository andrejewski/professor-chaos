
![Professor Chaos](https://raw.githubusercontent.com/andrejewski/professor-chaos/master/professor.jpg)

# Professor Chaos

Professor Chaos is a tool to help unexpectently break your programs to see how they handle errors.

```sh
npm install professor-chaos
```

## Usage

Professor Chaos has two methods of destruction: **time** and **call** based error triggers.
These errors are instances of `ChaosError` as to be more easily identifiable.

```js
var pc = require('professor-chaos');

/*
  Calling `timer` will set an error to be thrown within a given timeframe.
*/
var clock = pc.timer(1000);

/*
  Calling `fault` creates a break point where an error will be thrown/handled
  within a random number of `hasError` calls between a given interval.
*/
var fault = pc.fault(10);

function handler(value1, value2, callback) {
  if(fault.hasError()) {
    fault.error('Random handler error', callback);
  } else {
    // do something
  }
}

```

## Methods

### timer()

```js
/*
timer(max: number): number
timer(min: number, max: number): number
*/
```

Accepts a required maximum time `max` to wait to throw an error.
Accepts an optional minimum time `min` to wait to throw an error which defaults to zero.
Returns the `setTimeout` ID to allow you to use `clearTimeout` if necessary.

This function will asynchronously throw an error some time between `min` and `max`.

### fault()

```js
/*
fault(max: number): Fault
fault(min: number, max: number): Fault
*/
```

Accepts a required maximum `max` to count to until throwing an error.
Accepts an optional minimum `min` to count to until throwing an error which defaults to zero.
Returns a `Fault` object.

This method creates a `Fault` object to be used inside the scope of a given function
 to create an error to then either throw or pass to a provided callback.

```
/*
interface Fault {
  hasError(): boolean
  error(): void
  error(message: string): void
  error(callback: (error) => any): void
  error(message: string, callback: (error) => any): void
}
*/
```

The `hasError()` method returns whether or not an error if ready to be thrown.
The `hasError()` method is managed internally to see how often it is called
 and will signal `error()` to throw somewhere within the given `min` and `max` parameters.

The `error()` method accepts an optional error message which by default is awesome.
The `error()` method accepts an optional callback function which receives the
 error that would otherwise be thrown if no callback is provided.

Note: `error()` will continue to create random errors after the first and each
 will be just as unpredictable as the last.

## Contributing

We can always have more tests: if you find a bug, create an issue or be **fabulous**
and fix the problem and write the tests up yourself in a coherent pull request.

Run tests with the `npm test` command.

Follow me on [Twitter](http://chrisandrejewski.com/twitter) for updates or just for the lolz
and please check out my other [repositories](https://github.com/andrejewski) if I have earned it.
I thank you for reading.

