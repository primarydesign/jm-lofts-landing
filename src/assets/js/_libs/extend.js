(function(window, $, undefined){$(document).ready(function() {

  function toggleState(stateName) {
    var positive = 'is-' + stateName;
    var negative = 'not-' + stateName;
    if (this.hasClass(positive)) {
      this.removeClass(positive).addClass(negative);
    } else {
      this.removeClass(negative).addClass(positive);
    }
  }
  function negateState(stateName) {
    var positive = 'is-' + stateName;
    var negative = 'not-' + stateName;
    this.removeClass(positive).addClass(negative);
  }
  function affirmState(stateName) {
    var positive = 'is-' + stateName;
    var negative = 'not-' + stateName;
    this.removeClass(negative).addClass(positive);
  }
  function scry(options) {
    var target = this.data('scry');
    if (typeof options === 'number') {
      $(target).velocity('scroll', {
        duration: 300,
        easing: 'easeInSine',
        offset: options
      });
    } else if (typeof options === 'object') {
      $(target).velocity('scroll', options);
    }
  }

  $.fn.extend({
    affirmState: affirmState,
    negateState: negateState,
    toggleState: toggleState,
    scry: scry
  });

})}(window, jQuery));
