
function Vector2 (a,b){
	this.x = a;
	this.y = b;
	
	this.magnitude = function (){
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}
	
	this.Normalize = function (){
		var temp = this.magnitude();
		return new Vector2(this.x / temp, this.y / temp);
	}
	

}

function VectorMath (){
	
	this.Scale = function (a,b){
		return new Vector2 (a.x * b, a.y * b);
	}
	
	this.Distance = function (a,b){
		return new Vector2(b.x - a,x, b.y - a.y);
	}
	
	this.Angle = function (a,b){
		return Math.acos(VectorMath.Dot(a.Normalize, b.Normalize));
	}
	
	this.Dot = function (a,b){
		return a.x * b.x + a.y * b.y;
	}
	
	
	this.Add = function (a,b){
		return new Vector2(a.x + b.x,a.y + b.y);
	}
	
	this.forward = function (r){
		return new Vector2(-Math.sin(r),-Math.cos(r));
	}
	
	this.right = function (r){
		return new Vector2(Math.cos(r), -Math.sin(r));
	}
	
	
	
	this.Deg2Rad = Math.PI / 180;
	this.Rad2Deg = 180 / Math.PI;
	
	
}
