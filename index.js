'use strict';

const Sizes = require('./data/sizes.json');
const Types = require('./data/types.json');

const isValid = (code) => {
  return code.length === 4;
};

const getLengthInMetrics = (code) => {
  return Sizes.metric.length[code[0]]
};

const getLengthInImperial = (code) => {
  return Sizes.imperial.length[code[0]]
};

const getHeightInMetrics = (code) => {
  return Sizes.metric.height[code[1]]
};

const getHeightInImperial = (code) => {
  return Sizes.imperial.height[code[1]]
};

const getWidthInMetrics = (code) => {
  return Sizes.metric.width[code[1]]
};

const getWidthInImperial = (code) => {
  return Sizes.imperial.width[code[1]]
};

const getDesignation = (code) => {
  return Types.designation.plain[code[2]];
};

const getSimpleDesignation = (code) => {
  return Types.designation.simplified[code[2]];
};

const getType = (code) => {
  return Types.type[code.substring(2, 4)];
};

module.exports = {
  isValid,
  getLengthInMetrics,
  getLengthInImperial,
  getHeightInMetrics,
  getHeightInImperial,
  getWidthInMetrics,
  getWidthInImperial,
  getDesignation,
  getSimpleDesignation,
  getType,
};