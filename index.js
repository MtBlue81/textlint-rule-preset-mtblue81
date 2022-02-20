"use strict";
const { moduleInterop } = require("@textlint/module-interop");
const presetJapanese = moduleInterop(require("textlint-rule-preset-japanese"));

module.exports = {
  ...presetJapanese,
  rules: {
    ...presetJapanese.rules,
    "prh": moduleInterop(require("textlint-rule-prh")),
  },
  rulesConfig: {
    ...presetJapanese.rulesConfig,
    "prh": {
      "rulePaths" :["prh.yml"]
    },
  },
};
