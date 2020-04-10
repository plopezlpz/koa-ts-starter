describe('Sample test', () => {
  it('sample 1', () => {
    expect(1).toBe(1);
  });
});

// Table test example
test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${2} | ${2} | ${4}
`('returns $expected when $a is added to $b', ({a, b, expected}) => {
  expect(a + b).toBe(expected);
})
