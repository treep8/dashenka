 var i=0;
 let numb=prompt('Введите число');
 let plusone=prompt('Введите это число +1');
 if(plusone==+numb+1)
 while (i<3){
 {let max=10; let min=-10;
  let x=Math.floor(Math.random()*(max-min+1)-max);
  let y=Math.floor(Math.random()*(max-min+1)-max);
  let deistvie=Math.floor(Math.random()*4);
   if(deistvie==1){let deistvie1=prompt(`${x}`+'+'+`${y}`+'= ?');
     if(deistvie1==x+y){alert('Ещё по одной! '+`${x}`+'+'+`${y}`+'='+`${x+y}`)}
     else{alert('Пора заканчивать, братан')}}
   if(deistvie==2){let deistvie2=prompt(`${x}`+'-'+`${y}`+'= ?');
     if(deistvie2==x-y){alert('Наливай ещё одну '+`${x}`+'-'+`${y}`+'='+`${x-y}`)}
     else{alert('Всё хуево, мой дорогой')}}
   if(deistvie==3){let deistvie3=prompt(`${x}`+'*'+`${y}`+'= ?');
     if (deistvie3==x*y){alert('Ебошим дальше! '+`${x}`+'*'+`${y}`+'='+`${x*y}`)}
     else{alert('Пизда рулю')}} 
   if(deistvie=4){if(y!=0){let deistvie4=prompt(`${x}`+'/'`${y}`+'= ?');
   	if (deistvie4==x/y){alert('Наливай ещё  '+`${x}`+'/'+`${y}`+'='+`${x/y}`)}
      else{alert('Хватит бухать')}}}      	
      	else{alert('На ноль делить нельзя')}} i++;}
for (i=0;i<3;i++){docycle();}








     	/*
   else {if (y!=0){let deistvie4=prompt(`${x}`+'/'`${y}`+'= ?');
      if (choice4==x/y){alert('Наливай ещё  '+`x/y=${x/y}`)}
      else{alert('Хватит бухать')}}
     else{alert('На ноль делить нельзя')}}}
     	else{alert('Хватит бухать')}*/