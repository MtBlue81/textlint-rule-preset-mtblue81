"use strict";
const {moduleInterop} = require("@textlint/module-interop");
module.exports = {
    rules: {
        "preset-japanese": moduleInterop(require("textlint-rule-preset-japanese")),
        "prh": moduleInterop(require("textlint-rule-prh")),
    },
    rulesConfig: {
    }
};
