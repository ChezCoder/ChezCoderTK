"use strict";
$(function () {
    var eyecatchers = [
        "Self-taught",
        "Insane",
        "Experienced",
        "Sleep-deprived",
        "Dedicated",
        "Introverted",
        "Neighborhood"
    ];
    $("#eyecatcher").text(eyecatchers[Math.floor(Math.random() * eyecatchers.length)]);
    $("#experience-year").text(new Date().getFullYear() - 2016 + "+");
    setTimeout(languageScroller, 500);
});
function languageScroller(index) {
    if (index === void 0) { index = -1; }
    var languages = [
        "Java",
        "C++",
        "JavaScript",
        "HTML",
        "TypeScript",
        "node.js",
        "CSS",
        "SQL",
        "Python",
        "PHP",
    ];
    if (index == -1)
        index = Math.floor(Math.random() * languages.length);
    scroller(languages[index] + ".", function () {
        languageScroller((index + 1) % languages.length);
    });
}
function scroller(language, cb) {
    if (language === void 0) { language = ""; }
    var blinkTimes = 3;
    var $language = $("#language");
    var _loop_1 = function (i) {
        setTimeout(function () {
            $language.text(language.substring(0, i + 1) + "|");
        }, 100 * i);
    };
    for (var i = 0; i < language.length; i++) {
        _loop_1(i);
    }
    var _loop_2 = function (i) {
        setTimeout(function () {
            $language.text(language + ((i % 2 === 0) ? "|" : ""));
        }, 500 * i + (language.length * 100));
    };
    for (var i = 0; i < blinkTimes * 2; i++) {
        _loop_2(i);
    }
    var _loop_3 = function (i) {
        setTimeout(function () {
            $language.text(language.substring(0, language.length - (i + 1)) + "|");
        }, 100 * i + (language.length * 100) + (500 * blinkTimes * 2));
    };
    for (var i = 0; i < language.length; i++) {
        _loop_3(i);
    }
    setTimeout(cb, (2 * language.length * 100) + (500 * blinkTimes * 2) + 500);
}
//# sourceMappingURL=script.js.map