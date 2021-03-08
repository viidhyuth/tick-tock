
//part1 started
function setup(){
  createCanvas(400,400)
 
  angleMode(DEGREES)
  
 
 
}

function draw(){
  background("purple")
  translate(200,200)
  
  hr = hour();
  mn=minute();
  sc=second();
  d=day();
  m=month();
  y=year();
  
  textSize(10)
  
  rotate(-90)
  
  
  fill("pink");
  strokeWeight(40)
  stroke("black")
  ellipse(0,0,300,300)
  
  textSize(44)
  strokeWeight(8)
  
  
  strokeWeight(4)
  stroke("yellow")
  noFill()
  
  let end1 = map(sc,0,60,0,360)
  arc(0,0,300,300,0,end1)
  push();
  rotate(end1)
  line(0,0,100,0)
  pop();
  
  
  strokeWeight(4)
  stroke("orange")
  noFill()
  
  let end2 = map(mn,0,60,0,360)
  arc(0,0,280,280,0,end2)
  push();
  rotate(end2)
  line(0,0,90,0)
  pop();
  
  
  strokeWeight(4)
  stroke(150,255,255)
  noFill()
  
  let end3 = map(hr,0,12,0,360)
  arc(0,0,260,260,0,end3)
  push();
  rotate(end3)
  line(0,0,50,0)
  pop();
  stroke("green")
  fill("red")
  ellipse(0,0,20,20)
  //part1 completed
  //part2 start
  rotate(90);
  textSize(25)
  strokeWeight(8)
  stroke("red")
  fill("black")
  text(hr+':'+mn+':'+sc,-50,60)
  strokeWeight(8)
  stroke("green")
  fill("black")
  text(m+':'+d+':'+y,-60,190)
  drawSprites();
  strokeWeight(18)
  
  
  stroke("black")
  fill("blue")
  text("0",10,-12)
   text("0",-20,-12)
  
  //part4
  strokeWeight(3)
  stroke("white")
  
  text("12",-15,-106)
  text("6",-11,125)
  text("7",-70,110)
  text("8",-112,70)
  text("9",-125,5)
  text("10",-112,-50)
  text("11",-70,-95)
  text("3",112,5)
  text("2",95,-50)
  text("5",50,110)
  text("4",95,70)
 text("1",50,-96) 
}