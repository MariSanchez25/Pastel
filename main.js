var arreglopastel;
function hornear() {
		var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	arreglopastel = new Array (
						new pastel("vainilla", "yellow", "#c8d11d",10, 40, 75, 50, 20, 5, 10, 5),
						new pastel("chocolate", "brown", "#6d313a", 200, 40, 95, 60, 15, 7, 10, 6),
						new pastel("fresa", "pink", "#e47979",	400, 40, 105, 43, 10, 5, 12, 5)
						);
	for (var i = arreglopastel.length - 1; i >= 0; i--) {
		arreglopastel[i].Dibujar(context); }
}
function porlargo() {
		var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	var n = arreglopastel.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arreglopastel[j].largo > arreglopastel[j+1].largo){
				//Intercambio
				aux = arreglopastel[j];
				aux_x_j = arreglopastel[j].X;
				aux_y_j = arreglopastel[j].Y;
				aux_x_j_1 = arreglopastel[j+1].X;
				aux_y_j_1 = arreglopastel[j+1].Y;
				
				arreglopastel[j] = arreglopastel[j+1];
				arreglopastel[j+1] = aux;

				arreglopastel[j].X = aux_x_j;
				arreglopastel[j].Y = aux_y_j;

				arreglopastel[j+1].X = aux_x_j_1;
				arreglopastel[j+1].Y = aux_y_j_1;
            }
        }
    }
		for (var i = arreglopastel.length - 1; i >= 0; i--) {
		arreglopastel[i].Dibujar(context); }
}
function porSabor() 
{
    var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	var n = arreglopastel.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arreglopastel[j].sabor > arreglopastel[j+1].sabor){
				//Intercambio
				aux = arreglopastel[j];
				aux_x_j = arreglopastel[j].X;
				aux_y_j = arreglopastel[j].Y;
				aux_x_j_1 = arreglopastel[j+1].X;
				aux_y_j_1 = arreglopastel[j+1].Y;
				
				arreglopastel[j] = arreglopastel[j+1];
				arreglopastel[j+1] = aux;

				arreglopastel[j].X = aux_x_j;
				arreglopastel[j].Y = aux_y_j;

				arreglopastel[j+1].X = aux_x_j_1;
				arreglopastel[j+1].Y = aux_y_j_1;

			}
		}
	}
		for (var i = arreglopastel.length - 1; i >= 0; i--) {
		arreglopastel[i].Dibujar(context); }
}
function porGrosor() 
{
    var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	var n = arreglopastel.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arreglopastel[j].grosor > arreglopastel[j+1].grosor){
				//Intercambio
				aux = arreglopastel[j];
				aux_x_j = arreglopastel[j].X;
				aux_y_j = arreglopastel[j].Y;
				aux_x_j_1 = arreglopastel[j+1].X;
				aux_y_j_1 = arreglopastel[j+1].Y;
				
				arreglopastel[j] = arreglopastel[j+1];
				arreglopastel[j+1] = aux;

				arreglopastel[j].X = aux_x_j;
				arreglopastel[j].Y = aux_y_j;

				arreglopastel[j+1].X = aux_x_j_1;
				arreglopastel[j+1].Y = aux_y_j_1;

			}
		}
	}
		for (var i = arreglopastel.length - 1; i >= 0; i--) {
		arreglopastel[i].Dibujar(context); }
}