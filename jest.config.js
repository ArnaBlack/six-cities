module.exports = {
  "transform": {
    "^.+\\.(ts|tsx)?$": `ts-jest`,
    "^.+\\.(js|jsx)?$": `babel-jest`,
  },
  "testRegex": `.test.(js?|jsx?|tsx?)$`,
  "moduleFileExtensions": [
    `ts`,
    `tsx`,
    `js`,
    `jsx`,
    `json`,
    `node`
  ],
};
