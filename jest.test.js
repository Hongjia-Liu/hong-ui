test('common matcher test', () => {
    expect( 2 + 2 ).toBe(4)
    expect(2 + 2).not.toBe(5)
})

test('true or false test', () => {
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})

test('number test', () => {
    expect(4).toBeGreaterThan(3)
    expect(2).toBeLessThan(3)
})

test('object test', () => {
    expect({name: 'viking'}).toEqual({name: 'viking'})
})