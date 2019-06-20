import { isPlainObject } from '../../src/helpers/util'

describe('helpers:util', () => {
  describe('isXX', () => {
    test('should validate PlainObject', () => {
      expect(isPlainObject({})).toBeTruthy()
      expect(isPlainObject(new Date())).toBeFalsy()
    })
  })
})
