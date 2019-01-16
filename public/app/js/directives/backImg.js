const app = require('../app');

function backImg(){
    return function ($scope, elements, attrs){
        attrs.$observe('backImg', function(value){
            elements.css({
                "background-image": `url(${value})`
            });
        });
    
}
}

app.directive('backImg',[backImg]);

module.exports = app;