import { kebabCase } from '../src'

describe('kebabCase', () => {
  const expected = 'lorem-ipsum-dolor-sit-amet'

  const testCases = [
    'loremIpsumDolorSitAmet',
    'LOREM_IPSUM_DOLOR_SIT_AMET',
    'lorem.ipsum.dolor.sit.amet',
    'lorem ipsum dolor sit amet',
    'lorem-ipsum-dolor-sit-amet',
    'LoremIpsumDolorSitAmet',
    'lorem/ipsum/dolor/sit/amet',
    'lorem_ipsum_dolor_sit_amet',
    'Lorem Ipsum Dolor Sit Amet',
    'LOREM IPSUM DOLOR SIT AMET',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet.,/#!$%^&*;:{}=-_`~()',
    'Lorem ipsum #!$%^&*;(dolor sit amet)#!$%^&*;',
  ]

  testCases.forEach((testCase) => {
    it(`should format ${testCase}`, () => {
      expect(kebabCase(testCase)).toBe(expected)
    })
  })
})
