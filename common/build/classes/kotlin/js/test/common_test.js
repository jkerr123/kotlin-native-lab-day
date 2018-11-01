if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'common_test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'common_test'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'common_test'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'common_test'.");
}
if (typeof this['kotlin-test'] === 'undefined') {
  throw new Error("Error loading module 'common_test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'common_test'.");
}
var common_test = function (_, Kotlin, $module$common, $module$kotlin_test) {
  'use strict';
  var Sample = $module$common.sample.Sample;
  var assertTrue = $module$kotlin_test.kotlin.test.assertTrue_ifx8ge$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var hello = $module$common.sample.hello;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function SampleTests() {
  }
  SampleTests.prototype.testMe = function () {
    assertTrue((new Sample()).checkMe() > 0);
  };
  SampleTests.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTests',
    interfaces: []
  };
  function SampleTestsJS() {
  }
  SampleTestsJS.prototype.testHello = function () {
    assertTrue(contains(hello(), 'JS'));
  };
  SampleTestsJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTestsJS',
    interfaces: []
  };
  var package$sample = _.sample || (_.sample = {});
  package$sample.SampleTests = SampleTests;
  package$sample.SampleTestsJS = SampleTestsJS;
  suite('sample', false, function () {
    suite('SampleTests', false, function () {
      test('testMe', false, function () {
        return (new SampleTests()).testMe();
      });
    });
    suite('SampleTestsJS', false, function () {
      test('testHello', false, function () {
        return (new SampleTestsJS()).testHello();
      });
    });
  });
  Kotlin.defineModule('common_test', _);
  return _;
}(typeof common_test === 'undefined' ? {} : common_test, kotlin, common, this['kotlin-test']);
