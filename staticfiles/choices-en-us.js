this.Choices = (function () {
  var rawChoices = [
    [
      ["JS", "JavaScript"],
      ["PY", "Python"],
      ["REACT", "React"],
    ],
    [
      [1, "Addition"],
      [2, "Change"],
      [3, "Deletion"],
    ],
  ];
  var namedChoices = {
    skills: 0,
    profile_skills: 0,
    main_app_profile_skills: 0,
    action_flag: 1,
    logentry_action_flag: 1,
    admin_logentry_action_flag: 1,
  };
  return {
    pairs: function (name) {
      var choices = rawChoices[namedChoices[name]];
      var mapper = function (pair) {
        return { value: pair[0], label: pair[1] };
      };
      return choices && choices.map(mapper);
    },
    display: function (name, choice) {
      var choices = rawChoices[namedChoices[name]];
      var finder =
        choice !== Object(choice)
          ? function (pair) {
              return pair[0] == choice;
            }
          : function (pair) {
              return pair[0] == choice[name];
            };
      var pair = choices && choices.filter(finder)[0];
      return pair && pair[1];
    },
  };
})();
