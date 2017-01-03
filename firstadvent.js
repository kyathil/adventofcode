var input = ['L4', 'L3', 'R1', 'L4', 'R2', 'R2', 'L1', 'L2', 'R1', 'R1', 'L3', 'R5', 'L2', 'R5', 'L4', 'L3', 'R2', 'R2', 'L5',
 'L1', 'R4', 'L1', 'R3', 'L3', 'R5', 'R2', 'L5', 'R2', 'R1', 'R1', 'L5', 'R1', 'L3', 'L2', 'L5', 'R4', 'R4', 'L2', 'L1', 'L1',
  'R1', 'R1', 'L185', 'R4', 'L1', 'L1', 'R5', 'R1', 'L1', 'L3', 'L2', 'L1', 'R2', 'R2', 'R2', 'L1', 'L1', 'R4', 'R5', 'R53',
   'L1', 'R1', 'R78', 'R3', 'R4', 'L1', 'R5', 'L1', 'L4', 'R3', 'R3', 'L3', 'L3', 'R191', 'R4', 'R1', 'L4', 'L1', 'R3', 'L1',
    'L2', 'R3', 'R2', 'R4', 'R5', 'R5', 'L3', 'L5', 'R2', 'R3', 'L1', 'L1', 'L3', 'R1', 'R4', 'R1', 'R3', 'R4', 'R4', 'R4',
     'R5', 'R2', 'L5', 'R1', 'R2', 'R5', 'L3', 'L4', 'R1', 'L5', 'R1', 'L4', 'L3', 'R5', 'R5', 'L3', 'L4', 'L4', 'R2', 'R2',
      'L5', 'R3', 'R1', 'R2', 'R5', 'L5', 'L3', 'R4', 'L5', 'R5', 'L3', 'R1', 'L1', 'R4', 'R4', 'L3', 'R2', 'R5', 'R1', 'R2', 'L1', 'R4', 'R1', 'L3', 'L3',
       'L5', 'R2', 'R5', 'L1', 'L4', 'R3', 'R3', 'L3', 'R2', 'L5', 'R1', 'R3', 'L3', 'R2', 'L1', 'R4', 'R3', 'L4', 'R5', 'L2', 'L2', 'R5', 'R1', 'R2', 'L4', 'L4', 'L5', 'R3', 'L4'];
var test = ['R8', 'R4', 'R4', 'R8'];
var pos = new Array();

var north = true;
var east = false;
var south = false;
var west = false;
var blocks = 0;
var i;
var curPos = [0,0];

function hasElement(e, list){
  var i, j, current;
  for(i = 0; i < list.length; ++i){
    if(e.length === list[i].length){
      current = list[i];
      for(j = 0; j < e.length && e[j] === current[j]; ++j);
      if(j === e.length)
        return true;
    }
  }
  return false;
}


for(i=0; i < test.length; i++){
	var dir = test[i];
	var steps = Number(dir.substring(1));
	var x = curPos[0];
	var y = curPos[1];

	if(dir[0] == 'L'){
		
		if(north){
			west = true;
			north = false;
			var n = 0;

			while(n<=steps){
				curPos=[x,y-n];
				if(hasElement(curPos, pos)){
					console.log("Current position is: " + curPos);
					console.log("Which is " + blocks + " away from HQ");
					return;
				}
				blocks--;
				pos.push(curPos);
				n++;
			}
			pos.pop();

		}else if(east){
			north = true;
			east = false;
			var n = 0;

			while(n<=steps){
				curPos=[x+n,y];
				if(hasElement(curPos, pos)){
					console.log("Current position is: " + curPos);
					console.log("Which is " + blocks + " away from HQ");
					return;
				}
				blocks++;
				pos.push(curPos);
				n++;
			}
			pos.pop();

		}else if(west){
			south = true;
			west = false;
			var n = 0;

			while(n<=steps){
				curPos=[x-n,y];
				if(hasElement(curPos, pos)){
					console.log("Current position is: " + curPos);
					console.log("Which is " + blocks + " away from HQ");
					return;
				}
				pos.push(curPos);
				blocks--;
				n++;
			}
			pos.pop();

		}else{
			east = true;
			south = false;
			var n = 0;

			while(n<=steps){
				curPos=[x, y+n];
				if(hasElement(curPos, pos)){
					console.log("Current position is: " + curPos);
					console.log("Which is " + blocks + " away from HQ");
					return;
				}
				blocks++;
				pos.push(curPos);
				n++;
			}
			pos.pop();

		}

	}

	if(dir[0] == 'R'){

		if(north){
			east = true;
			north = false;
			var n = 0;

			while(n<=steps){
				curPos=[x, y+n];
				if(hasElement(curPos, pos)){
					console.log("Current position is: " + curPos);
					console.log("Which is " + blocks + " away from HQ");
					return;
				}
				pos.push(curPos);
				blocks++;
				n++;
			}
			pos.pop();


		}else if(east){
			south = true;
			east = false;
			var n = 0;

			while(n<=steps){
				curPos=[x-n,y];
				if(hasElement(curPos, pos)){
					console.log("Current position is: " + curPos);
					console.log("Which is " + blocks + " away from HQ");
					return;
				}
				blocks--;
				pos.push(curPos);
				n++;
			}
			pos.pop();

		}else if(west){
			north = true;
			west = false;
			var n = 0;
			while(n<=steps){
				curPos=[x+n,y];
				if(hasElement(curPos, pos)){
					console.log("Current position is: " + curPos);
					console.log("Which is " + blocks + " away from HQ");
					return;
				}
				pos.push(curPos);
				blocks++;
				n++;
			}
			pos.pop();

		}else{
			west = true;
			south = false;
			var n = 0;

			while(n<=steps){
				curPos=[x, y-n];
				if(hasElement(curPos, pos)){
					console.log("Current position is: " + curPos);
					console.log("Which is " + blocks + " away from HQ");
					return;
				}
				pos.push(curPos);
				blocks--;
				n++;
			}
			pos.pop();

		}

	}
}

console.log("Current Position: "+curPos);
console.log("Number of blocks is: " + Math.abs(blocks));