# kebab-case

![checks-status](https://img.shields.io/github/checks-status/LukasPolak/kebab-case/main?style=flat-square) ![workflow/status](https://img.shields.io/github/workflow/status/lukaspolak/kebab-case/CI?style=flat-square) ![codecov](https://img.shields.io/codecov/c/github/lukaspolak/kebab-case?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@lukaspolak/kebab-case?style=flat-square) ![npm](https://img.shields.io/npm/v/@lukaspolak/kebab-case?style=flat-square)

Convert a string to kebab-case, i.e. its dash-separated form

## Getting started

To use this package, you only need to install this dependency, import it and invoke the `kebabCase` function, e.g.:

```js
import { kebabCase } from '@lukaspolak/kebab-case'

kebabCase('Lorem ipsum dolor sit amet') // returns "lorem-ipsum-dolor-sit-amet"
```

### Install

```bash
npm install @lukaspolak/kebab-case
```

or

```bash
yarn add @lukaspolak/kebab-case
```

## Documentation

| passed value                                      | expected value             |
| ------------------------------------------------- | -------------------------- |
| loremIpsumDolorSitAmet                            | lorem-ipsum-dolor-sit-amet |
| LOREM_IPSUM_DOLOR_SIT_AMET                        | lorem-ipsum-dolor-sit-amet |
| lorem.ipsum.dolor.sit.amet                        | lorem-ipsum-dolor-sit-amet |
| lorem ipsum dolor sit amet                        | lorem-ipsum-dolor-sit-amet |
| lorem-ipsum-dolor-sit-amet                        | lorem-ipsum-dolor-sit-amet |
| LoremIpsumDolorSitAmet                            | lorem-ipsum-dolor-sit-amet |
| lorem/ipsum/dolor/sit/amet                        | lorem-ipsum-dolor-sit-amet |
| lorem_ipsum_dolor_sit_amet                        | lorem-ipsum-dolor-sit-amet |
| Lorem Ipsum Dolor Sit Amet                        | lorem-ipsum-dolor-sit-amet |
| LOREM IPSUM DOLOR SIT AMET                        | lorem-ipsum-dolor-sit-amet |
| Lorem ipsum dolor sit amet                        | lorem-ipsum-dolor-sit-amet |
| Lorem ipsum dolor sit amet.,/#!$%^&\*;:{}=-\_`~() | lorem-ipsum-dolor-sit-amet |
| Lorem ipsum #!$%^&*;(dolor sit amet)#!$%^&\*;'    | lorem-ipsum-dolor-sit-amet |

## Contributing

Please read the [Contribution guidelines](.github/CONTRIBUTING.md) to start with your awesome contributions!

## Why the library is prefixed with `@lukaspolak/`

There are a lot of similar libraries/packages on [GitHub](https://github.com/features/packages) and [npm](https://www.npmjs.com/), that can do the same. I wanted to enhance my programming skills, and I didn't want to find a unique name for the package.
