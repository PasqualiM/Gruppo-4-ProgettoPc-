  function verifica(){
	var do1=document.form.d1.value;
	var do2=document.form.d2.value;
	var do3=document.form.d3.value;
	var do4=document.form.d4.value;
	var do5=document.form.d5.value;
	var do6=document.form.d6.value;
	var giuste=0;
	if(do1==3){
		giuste++;
		}
	if(do2==1){
		giuste++;
		}
	if(do3==4){
		giuste++;
		}
	if(do4==2){
		giuste++;
	}
	if(do5==3){
		giuste++;
	}
	if(do6==3){
		giuste++;
	}
		
	var sbagliate=6-giuste;
	alert("Risposte corrette: "+giuste+"\n Risposte sbagliate: "+sbagliate);
	
	location.reload();
	}