define(["knockout", "section"], function(ko, Section) {
    window.ko = ko;
    return function() {
        var self = this;
        var flag = true;

        this.sections = ko.observableArray([
            new Section("Home"),
            new Section("Gallery"),
            new Section("Clients")
        ]);

        this.sectionsJ = ko.observableArray([
            new Section("one")
        ]);

        this.updateSection = function(name) {
            var newIndex, i, length, sections = self.sections();

            for (i = 0, length = sections.length; i < length; i++) {
                if (sections[i].name === name) {
                    newIndex = i;
                    break;
                }
            }
            if (!flag) {
                newIndex = 3;
            }
            setTimeout(function() {
                  $('.select_c select').styler();
              }, 10)
            flag = true;
            self.index(newIndex === undefined ? 0 : newIndex);
        };

        this.index = ko.observable(0);
        this.currentSection = ko.computed(function() {
            var newSection = self.sections()[self.index()];
            if (!flag) {
                var newSection = new Section("one");
            }
            newSection.activate();
            return newSection;
        });

        this.goItem = function() {
            flag = false;
            self.index(3);
            $('.nav a').removeClass('selected');
            $('.modal-backdrop').remove();
        };

        this.modalOpen = function() {
            $('#Callback').modal();
        };
    };
});
