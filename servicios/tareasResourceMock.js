(function(){
    "use strict"
    
    var app = angular
    .module ("tareasResourceMock",
            ["ngMockE2E"]);
    
    app.run( function ($httpBackend){
        
        var tareas = [
            {
                "tareaId" : "1",
                "asignadoA" : {
                    "usuarioId" : "1",
                    "nombre" : "Juan Garcia",
                    "puestoId" : "2",
                },
                "descripcion" : "Crear view para listar tareas",
                "estado" : "PENDIENTE",
                "prioridad" : "ALTA"
                
            
            }];
        
        var tareasUrl = "/api/tareas";
        
        
        $httpBackend.whenGET(tareasUrl).respond(tareas);
        
        $httpBackend.whenGET(/paginas/).passThrough();
                             
        
            
            });
    
})();