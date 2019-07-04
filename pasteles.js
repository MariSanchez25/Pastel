class pastel {
	constructor(sa,co,col,x,y,an,la,gro, anv, lav, grov){
		this.sabor = sa;
		this.color = co;
		this.colorpan = col;
		this.X = x;
		this.Y = y;
		this.ancho = an;
		this.largo = la;
		this.grosor = gro;
		this.anchovela = anv;
		this.largovela = lav;
		this.grosorvela = grov;
	}
	
	
	
	
Dibujar(context){
		//parte de abajo
		context.beginPath();
		context.strokeStyle = "black";
		context.fillStyle = this.color;
		context.moveTo(this.X, this.Y);
		context.lineTo(this.X, this.Y+this.largo);
		context.bezierCurveTo(this.X, this.Y+this.largo+this.grosor,
							this.X+this.ancho, this.Y+this.largo+this.grosor,
							this.X+this.ancho,	this.Y+this.largo);
		context.lineTo(this.X+this.ancho, this.Y);
		context.closePath();
		context.fill();
		context.stroke();
		//parte de arriba
		context.beginPath();
		context.fillStyle = this.colorpan;
		context.moveTo(this.X, this.Y);		
		context.bezierCurveTo(this.X, this.Y+this.grosor,
							this.X+this.ancho, this.Y+this.grosor,
							this.X+this.ancho,	this.Y);
		context.bezierCurveTo(this.X+this.ancho, this.Y-this.grosor,
							this.X, this.Y-this.grosor,
							this.X,	this.Y);
		context.fill();
		context.stroke();
		context.beginPath();
		context.fillStyle = "white";
		context.moveTo(this.X, this.Y+this.largo/2.2);
		context.lineTo(this.X, this.Y+this.largo/1.8);
		context.bezierCurveTo(this.X, this.Y+this.largo/1.8+this.grosor,
							this.X+this.ancho, this.Y+this.largo/1.8+this.grosor,
							this.X+this.ancho,	this.Y+this.largo/1.8);
		context.lineTo(this.X+this.ancho, this.Y+this.largo/2.2);
		context.bezierCurveTo(this.X+this.ancho, this.Y+(this.largo/2.2)+this.grosor,
							this.X, this.Y+(this.largo/2.2)+this.grosor,
							this.X,	this.Y+this.largo/2.2);
		context.fill();
		context.stroke();
		//vela
		context.beginPath();		
		context.fillStyle = "white";
		context.moveTo(this.X+this.largo/1.5, this.Y);
		context.lineTo(this.X+this.largo/1.5, this.Y-this.largovela);
		context.bezierCurveTo(this.X+this.largo/1.5, this.Y-this.largovela-this.anchovela,
							this.X+this.largo/1.5+this.anchovela, this.Y-this.largovela-this.anchovela,
							this.X+this.largo/1.5+this.anchovela, this.Y-this.largovela);
		context.lineTo(this.X+this.largo/1.5+this.anchovela, this.Y);
		context.closePath();
		context.fill();
		context.stroke();
		context.beginPath();		
		context.fillStyle = "white";
		context.moveTo(this.X+this.largo/1.2, this.Y);
		context.lineTo(this.X+this.largo/1.2, this.Y-this.largovela);
		context.bezierCurveTo(this.X+this.largo/1.2, this.Y-this.largovela-this.anchovela,
							this.X+this.largo/1.2+this.anchovela, this.Y-this.largovela-this.anchovela,
							this.X+this.largo/1.2+this.anchovela, this.Y-this.largovela);
		context.lineTo(this.X+this.largo/1.2+this.anchovela, this.Y);
		context.closePath();
		context.fill();
		context.stroke();
		context.beginPath();		
		context.fillStyle = "white";
		context.moveTo(this.X+this.largo/0.9, this.Y);
		context.lineTo(this.X+this.largo/0.9, this.Y-this.largovela);
		context.bezierCurveTo(this.X+this.largo/0.9, this.Y-this.largovela-this.anchovela,
							this.X+this.largo/0.9+this.anchovela, this.Y-this.largovela-this.anchovela,
							this.X+this.largo/0.9+this.anchovela, this.Y-this.largovela);
		context.lineTo(this.X+this.largo/0.9+this.anchovela, this.Y);
		context.closePath();
		context.fill();
		context.stroke();
	}
}