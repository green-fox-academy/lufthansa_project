'use strict'

var SetIntervalMixin = {
  componentWillMount: function () {
    this.intervals = [];
  },

  componentWillUnmount: function () {
    this.intervals.map(clearInterval);
  },

  setInterval: function () {
    this.intervals.push(setInterval.apply(null, arguments));
  }
};

module.exports = SetIntervalMixin;
