require.config({
    paths: {
        "knockout": "ext/knockout",
        "jquery": "ext/jquery.min",
        "text": "ext/text",
        "formstyler": "ext/jquery.formstyler.min",
        "bootstrap": "../lib/bootstrap/dist/js/bootstrap.min"
    },
    shim: {
        "bootstrap": ["jquery"]
    }
});

require(["knockout", "app", "jquery", "bootstrap", "utilities", "stringTemplateEngine", "text", "formstyler"], function(ko, App, $) {
    var vm = new App();

    //simple client-side routing - update hash when current section is changed
    vm.currentSection.subscribe(function(newValue) {
        location.hash = newValue.name;
    });

    var updateSection = function() {
        vm.updateSection(location.hash.substr(1));
    };

    //respond to hashchange event
    window.onhashchange = updateSection;

    //initialize
    updateSection();

    jQuery(document).ready(function($) {
        $('.select_c select').styler();
    });


    ko.applyBindings(vm);
});
