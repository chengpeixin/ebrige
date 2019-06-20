import DummyClass from '../src/ebrige'
import Ebrige from './../src/core/Ebrige'
/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(DummyClass).toBeInstanceOf(Ebrige)
  })
})
