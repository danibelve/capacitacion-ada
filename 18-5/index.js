var palabra=["N","A","R","A","N","J","A"];
var control=[ ];
var j=0;
var p=0;
	for(i=0;i<=palabra.length-1;i++){
		for (j=0; j<=control.length-1;j++){
			if(control[j]==palabra[i]){
				igual= true;
			}
			if(igual==false){
				control[p]=palabra[i];
			}
		}
	}	
		
