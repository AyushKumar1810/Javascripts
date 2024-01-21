from turtle import* 
import time
title('Jai Shree Ram')
bgcolor('black')
pensize(6)
pencolor("orange")

Ram_naam = ["जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम","जय श्री राम","जय श्री राम",
"जय श्री राम","जय श्री राम"]

angle = 360/49
penup()
sety(-1)
speed(-5)
for i in range(50):
    left(angle)
    forward(260)
    write(Ram_naam[i], align="right",
    font=('Arial',12,"bold"))
    backward(260)


penup()    
goto(-40,-20)
pendown()
write("|| राम ||", font=("Arial", 60,
"normal"), align="center")
time.sleep(5) 
hideturtle()
# done()
# from turtle import *

# title('Jai Shree Ram')
# bgcolor('black')
# pensize(6)
# pencolor("orange")

# Ram_naam = ["जय श्री राम"] * 49

# angle = 360/49
# penup()
# sety(-1)

# # Increase drawing speed
# speed(0)

# for i in range(50):
#     left(angle)
#     forward(260)
#     write(Ram_naam[i], align="right", font=('Arial', 12, "bold"))
#     backward(260)

# penup()    
# goto(-40, -20)
# pendown()
# write("|| राम ||", font=("Arial", 60, "normal"), align="center")
# hideturtle()
# done()
