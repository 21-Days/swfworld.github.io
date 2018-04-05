from turtle import Turtle

main=Turtle()
main.hideturtle()
main.tracer(0, 0)
screen=main.getscreen()
framespeed=30

screen.winfo_pointery())
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

while(True):
	main.write(screen.winfo_pointerx()+", "+screen.winfo_pointery())
	main.update()
	main.mainloop()
