var canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
background_image="tracks.jpg";

//car1 width and all//
car1width=100;
car1height=100;
car1x=270;
car1y=500
car1_image="car1.jpg";

//car2 width and all//
car2width=100;
car2height=100;
car2x=200;
car2y=500;
car2_image="car2.jpg";

function add(){
    background_of= new Image();
    background_of.onload= uploadbackground;
    background_of.src=  background_image;

    ca= new Image();
    ca.onload= uploadcar1;
    ca.src= car1_image;

    ca2= new Image();
    ca2.onload= uploadcar2;
    ca2.src= car2_image;
}

function uploadbackground(){
    ctx.drawImage(background_of,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(ca,car1x,car1y,car1width,car1height);
}

function uploadcar2(){
    ctx.drawImage(ca2,car2x,car2y,car2width,car2height);
}
 
window.addEventListener("keydown",mykeydown);

function mykeydown(e){
     keypress= e.keyCode;
     console.log(keypress);

      // car1 controls //

     if (keypress== "69") {
          //e//
          car1_up();
          console.log("up");
     }

     if (keypress== "83") {
         //s//
         car1_down();
         console.log("down");
     }

     if (keypress== "65") {
         //a//
         car1_left();
         console.log("left");
     }

     if (keypress== "68") {
         //d//
         car1_right();
         console.log("right");
     }

      // car2 controls //

      if (keypress== "79") {
         //o//
        car2_up();
        console.log("up");
     }

     if (keypress== "75") {
         //k//
       car2_down();
       console.log("down");
     }

     if (keypress== "74") {
         //j//
       car2_left();
       console.log("left");
      }

      if (keypress== "76") {
          //l//
       car2_right();
       console.log("right");
     }

     // who won//

     if(car1y<10){
        document.getElementById("result").innerHTML="Car 1 has won (grey car)"
    }
    else if (car2y<10){
       document.getElementById("result").innerHTML="Car 2 has won (yellow car)"
    }
    
}


//car1 functions for up, down, left and right//

function car1_up(){
    if (car1y>=0) {
        car1y=car1y-10;
         uploadbackground();
         uploadcar1();
         uploadcar2();
    }
}

function car1_down(){
   if (car1y<=600) {
        car1y=car1y+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
   }
}

function car1_left(){
   if (car1x>=0) {
    car1x=car1x-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
   }
}

function car1_right(){
   if (car1x<=800) {
    car1x=car1x+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
   }
}


//car2 functions for up, down, left and right//

function car2_up(){
    if (car2y>=0) {
        car2y=car2y-10;
         uploadbackground();
         uploadcar1();
         uploadcar2();
    }
}

function car2_down(){
   if (car2y<=600) {
    car2y=car2y+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
   }
}

function car2_left(){
   if (car2x>=0) {
    car2x=car2x-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
   }
}

function car2_right(){
   if (car2x<=800) {
    car2x=car2x+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
   }
}