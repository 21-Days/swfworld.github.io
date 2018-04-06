from turtle import Turtle

main=Turtle()
main.hideturtle()
main.tracer(0, 0)
screen=main.getscreen()
framespeed=30

def inclevel():
	framespeed+=1
	return True

def drawbackground(inp):
	if(inp=='red'):
		main.bgcolor("#FF0000")
	if(inp=='rg1'):
		main.bgcolor(204,51,0)
	if(inp=='rg2'):
		main.bgcolor(153,102,0)
	if(inp=='rg3'):
		main.bgcolor(102,153,0)
	if(inp=='rg4'):
		main.bgcolor(51,204,0)
	if(inp=='green'):
		main.bgcolor(0,255,0)
	if(inp=='gb1'):
		main.bgcolor(0,204,51)
	if(inp=='gb2'):
		main.bgcolor(0,153,102)
	if(inp=='gb3'):
		main.bgcolor(0,102,153)
	if(inp=='gb4'):
		main.bgcolor(0,51,204)
	if(inp=='blue'):
		main.bgcolor(0,0,255)

def drawspike():
exit()

def startbtn(width, height, x, y):
	cursor=Turtle()
	cursor.speed(0)
	cursor.hideturtle()
	cursor.pendown()
	cursor.tracer(0, 0)
	cursor.sety(y)
	cursor.setx(x)
	cursor.forward(width)
	cursor.right(90)
	cursor.forward(height)
	cursor.right(90)
	cursor.forward(width)
	cursor.right(90)
	cursor.forward(height)
	screen.onclick(cursor.forward(100))
	cursor.update()
	return True

def getPos(x,y):
	print(x+y)

def renderframe():
	main.update()
#hnn=startbtn(128, 32, -64, 22)
main.write("Click to start!", align="center", font=("Arial", 12, "normal"))
main.update()
main.showturtle()
screen.onscreenclick(screen.bgcolor("red"))
main.mainloop()
