test('can be used to pull apart objects', () => {
  const {city, state, zip} = getAddress()
  expect(city).toBe('Salt Lake City')
  expect(state).toBe('UT')
  expect(zip).toBe(84115)
})

test('sets missing values to undefined', () => {
  const {address} = getAddress()
  expect(address).toBeUndefined()
})

test('can alias destructured variables', () => {
  const {city: c, state: s, zip: z} = getAddress()
  expect(c).toBe('Salt Lake City')
  expect(s).toBe('UT')
  expect(z).toBe(84115)
  expect(() => console.log(city)).toThrow()
  expect(() => console.log(state)).toThrow()
  expect(() => console.log(zip)).toThrow()
})

test('can destructure nested variables', () => {
  const {coords: {lat, long}} = getAddress()
  expect(lat).toBe(40.776608)
  expect(long).toBe(-111.920485)
  expect(() => console.log(coords)).toThrow()
})

test('can be used to pull apart arrays', () => {
  const [one, two] = getNumbers()
  expect(one).toBe(1)
  expect(two).toBe(2)
})

test('can skip indexes in arrays', () => {
  const [one, , three] = getNumbers()
  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(() => console.log(two)).toThrow()
})

test('can reach nested arrays', () => {
  const [one, , [three, , [, six]]] = getNestedNumbers()
  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(six).toBe(6)
})

function getAddress() {
  return {
    city: 'Salt Lake City',
    state: 'UT',
    zip: 84115,
    coords: {
      lat: 40.776608,
      long: -111.920485,
    },
  }
}

function getNumbers() {
  return [1, 2, 3, 4, 5, 6]
}

function getNestedNumbers() {
  return [1, 2, [3, 4, [5, 6]]]
}

// MORE AT http://www.2ality.com/2015/01/es6-destructuring.html