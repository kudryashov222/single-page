define(["knockout"], function(ko) {
    return function() {
        var vm = this;
       var urlImage = $(".gallery a img.current").attr("src");
       // var index = $(".gallery a img.current").parents("li").index();
       var arrayImg = [{
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, vero, natus. Consequatur laborum nihil quos sequi, commodi rem, fugit nisi.", nameImg: "Item name 1"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dolore ea nihil placeat, voluptas deserunt.", nameImg: "Item name 2"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, expedita.", nameImg: "Item name 3"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde at magni dignissimos temporibus obcaecati, tempora veniam autem illum aut aliquid repellat deleniti, aliquam ut.", nameImg: "Item name 4"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minus quibusdam soluta, accusantium hic quidem nesciunt dolore maxime vero dicta delectus praesentium suscipit modi porro, illo natus sint laudantium.", nameImg: "Item name 5"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dolorum.", nameImg: "Item name 6"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima cupiditate veritatis voluptatum inventore repudiandae reiciendis, nulla voluptates ipsa, beatae.", nameImg: "Item name 7"},
        {text: "Lorem ipsum dolor sit.", nameImg: "Item name 8"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem similique nulla officia at nobis placeat quas voluptatum velit? Earum quod consectetur, quaerat repellendus! Autem, quis omnis! Placeat quam, nesciunt.", nameImg: "Item name 9"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, obcaecati eligendi nobis?", nameImg: "Item name 10"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minus quibusdam soluta, accusantium hic quidem nesciunt dolore maxime vero dicta delectus praesentium suscipit modi porro, illo natus sint laudantium.", nameImg: "Item name 11"},
        {text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dolorum.", nameImg: "Item name 12"}];

      vm.textImg = ko.observable(arrayImg[1].text);
      vm.nameImg = ko.observable(arrayImg[1].nameImg);
      vm.src = ko.observable("http://lorempixel.com/image_output/food-q-c-640-480-1.jpg");
       this.gotoImage = function(obj, e) {
            $(".gallery a img").removeClass('current');
            $(e.target).addClass('current');
            var index =  $(e.target).parents("li").index();
            var urlImage = $(e.target).attr("src");
            $('#img-modal').modal();
            vm.textImg(arrayImg[index].text);
            vm.nameImg(arrayImg[index].nameImg);
            vm.src(urlImage);
        }
    };
});
