'use strict';
const path = require('path');
const ref = require('ref-napi');
const assert = require('assert');

assert(ref.instance);

// const bindings = require('node-gyp-build')(path.join(__dirname, '..'));
const bindings = require('bindings')('ffi_bindings.node');
module.exports = bindings.initializeBindings(ref.instance);
