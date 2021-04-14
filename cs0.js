function circleFractal(start_x,start_y,radius,depth)
{
	return (depth==0) ? [] : 
	[{type: "circle", x: start_x, y: start_y, r: radius, d: depth}]
	.concat(circleFractal(start_x-(radius/2),start_y,radius/2,depth-1))
	.concat(circleFractal(start_x+(radius/2),start_y,radius/2,depth-1))
}
function kochCurve(x_s,y_s,x_e,y_e,depth)
{
	return (depth==0) ? [{type: "path", start: "M "+x_s+" "+y_s, end: "L"+x_e+" "+y_e}] :
	kochCurve(x_s,y_s,(x_e-x_s)/3+x_s,(y_e-y_s)/3+y_s,depth-1)
	.concat(kochCurve((x_e-x_s)/3+x_s,(y_e-y_s)/3+y_s,(x_e-x_s)/2-Math.sqrt(3)*(y_e-y_s)/6+x_s,Math.sqrt(3)*(x_e-x_s)/6+(y_e-y_s)/2+y_s,depth-1))
	.concat(kochCurve((x_e-x_s)/2-Math.sqrt(3)*(y_e-y_s)/6+x_s,Math.sqrt(3)*(x_e-x_s)/6+(y_e-y_s)/2+y_s,x_e-(x_e-x_s)/3,y_e-(y_e-y_s)/3,depth-1))
	.concat(kochCurve(x_e-(x_e-x_s)/3,y_e-(y_e-y_s)/3,x_e,y_e,depth-1))	
}