define(["knockout"], function(ko) {
    return function() {
        var self = this;

        self.people = ko.observableArray([
            {firstName:'James',lastName:'Smith',phone:"8 (977) 507-63-96",activity: "java developer"},
            {firstName:'Susan',lastName:'Abramson',phone:"8 (924) 332-96-26",activity: "php developer"},
            {firstName:'Jeremy',lastName:'Smith',phone:"8 (956) 507-63-96",activity: "c++ developer"},
            {firstName:'Megan',lastName:'Edwards',phone:"8 (977) 507-63-96",activity: "html/css developer"},
            {firstName:'Thomasina',lastName:'Jones',phone:"8 (956) 407-33-96",activity: "python developer"},
            {firstName:'Megan',lastName:'Austin',phone:"8 (977) 507-63-94",activity: "javascript developer"},
            {firstName:'James',lastName:'Blare',phone:"8 (977) 507-63-96",activity: "java developer"},
            {firstName:'Susan',lastName:'Clapton',phone:"8 (924) 332-96-26",activity: "php developer"},
            {firstName:'Tribby',lastName:'Conors',phone:"8 (956) 507-63-96",activity: "c++ developer"},
            {firstName:'Megan',lastName:'Donovan',phone:"8 (977) 507-63-96",activity: "html/css developer"},
            {firstName:'James',lastName:'Jones',phone:"8 (956) 407-33-96",activity: "python developer"},
            {firstName:'Megan',lastName:'Black',phone:"8 (977) 507-63-94",activity: "javascript developer"}
        ]);

        self.headers = [
            {title:'First Name',sortPropertyName:'firstName', asc: true},
            {title:'Last Name',sortPropertyName:'lastName', asc: true},
            {title:'Phone',sortPropertyName:'phone', asc: true},
            {title:'Activity',sortPropertyName:'activity', asc: true}
        ];

        self.filter = ko.observable('');
        self.select = ko.observable('');
        self.activeSort = self.headers[0];

        self.sort = function(header, event){
            if(self.activeSort === header) {
                header.asc = !header.asc;
            } else {
                self.activeSort = header;
            }
            var prop = self.activeSort.sortPropertyName;
            var ascSort = function(a,b){ return a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : a[prop] == b[prop] ? 0 : 0; };
            var descSort = function(a,b){ return a[prop] > b[prop] ? -1 : a[prop] < b[prop] ? 1 : a[prop] == b[prop] ? 0 : 0; };
            var sortFunc = self.activeSort.asc ? ascSort : descSort;
            self.people.sort(sortFunc);
        };

        self.filteredPeople = ko.computed(function(){
            var filter = self.filter();
            var select = self.select().sortPropertyName;
            if (!filter) { return self.people(); }
            return self.people().filter(function(i) {
              return i[select].toLowerCase().indexOf(filter.toLowerCase()) > -1;
            });
        });

    };
});
