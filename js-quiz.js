  function verifica(){
	var do1=document.form.d1.value;
	var do2=document.form.d2.value;
	var do3=document.form.d3.value;
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
	var sbagliate=3-giuste;
	alert("Risposte corrette: "+giuste+"\n Risposte sbagliate: "+sbagliate);
	}