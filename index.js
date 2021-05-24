'use strict';

const Sizes = require('./data/sizes.json');
const Types = require('./data/types.json');

class Container {
  constructor(code) {
    this.code = code;
  }

  isValid(){
    return this.code.length === 4;
  }

  getLengthInMetrics(){
    return Sizes.metric.length[this.code[0]]
  }

  getLengthInImperial(){
    return Sizes.imperial.length[this.code[0]]
  }

  getHeightInMetrics(){
    return Sizes.metric.height[this.code[1]]
  }

  getHeightInImperial(){
    return Sizes.imperial.height[this.code[1]]
  }

  getWidthInMetrics(){
    return Sizes.metric.width[this.code[1]]
  }

  getWidthInImperial(){
    return Sizes.imperial.width[this.code[1]]
  }

  getDesignation(){
    return Types.designation[this.code[2]];
  }
  
  getType(){
    return Types.type[this.code.substring(2, 4)];
  }
}

module.exports = Container;