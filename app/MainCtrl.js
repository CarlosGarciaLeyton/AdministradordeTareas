(function () {
    "use strict";
    
    angular.module("AdministradordeTareas").controller("MainCtrl", [MainCtrl]);
    
    
    
    function MainCtrl() {
        
        var vm = this;
        
        vm.saludo = "Hola Que Tal puto?";
        vm.despedida = "Adios";
    }
})();