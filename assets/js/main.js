
    let canvas = document.querySelector("canvas");

    canvas.width = canvas.clientWidth;
    canvas.height =  canvas.clientHeight;;

    let context = canvas.getContext("2d");
    
    let road_image 	= new Image();
    road_image.src = "./assets/images/road.jpg";

    let car_image 	= new Image();
    car_image.src = "./assets/images/car.png";
       
    let road_offset = 0;
    let step = 5;
    let car_x = 200;
    let car_y = 150;
    
    document.body.addEventListener('keydown', function(e){
        if(e.code == "ArrowLeft")	{ car_x -= 4; 	};
        if(e.code == "ArrowRight")	{ car_x += 4;	};	
        if(e.code == "ArrowUp")		{ car_y -= 1; 	};	
        if(e.code == "ArrowDown")	{ car_y += 5;	};	
        if(e.code == "ControlLeft")	{ step = 10;	};		
        if(e.code == "Space")		{ step = 1; 	};
    });
    
    document.body.addEventListener('keyup', function(e){
        if(e.code == "ControlLeft")	{ step = 5; 	};
        if(e.code == "Space")		{ step = 5; 	};
    });


    function reRraw(){

        requestAnimationFrame(reRraw);
        
        context.drawImage(road_image, 0, 511 - road_offset, 1024, 400, 0, 0, 1024, 400);
        context.drawImage(car_image, car_x, car_y, 90, 140);
        
        road_offset = (road_offset > 511) ? 0 : road_offset + step;
    }
    
    requestAnimationFrame(reRraw);