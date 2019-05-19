



var length = 1 , li_id=1, hr_name=1,tri=0, kl1=0,kl2=0;
var mes = ["HeroService: fetched heroes", "HeroService: fetched hero id=", "HeroService: updated hero id=", "HeroService: added hero w/ id=", "HeroService: deleted hero id="];

   


       
function add_input() {
  
 var p = document.getElementById("inputi") ;
 var new_li = document.createElement("li") ;
 var new_a = document.createElement("a") ;
 var new_span = document.createElement("span") ;
 var new_span2 = document.createElement("span") ;
 var new_button = document.createElement("button") ;
 

       

  new_li.setAttribute('id', 'li'+li_id);
  new_span.setAttribute('class', 'badge');
  new_span.innerHTML =  li_id;
  new_span2.setAttribute('id', 'hrname'+li_id);
  new_span2.innerHTML = document.getElementById('hero').value;
  new_button.setAttribute('class', 'delete');
  new_button.setAttribute('onclick', 'del('+ li_id +')');
  new_button.setAttribute('id', 'button'+li_id);
  new_a.setAttribute('onclick', 'detail('+ li_id +')');
  new_a.setAttribute('id', 'a'+li_id);
  //new_a.setAttribute('href', 'hero2.html');
  

  new_button.innerHTML = "X";

  new_a.appendChild(new_span) ;
  new_a.appendChild(new_span2) ;
 
 new_li.appendChild(new_a) ;
 new_li.appendChild(new_button) ;
 p.appendChild(new_li) ;




   localStorage.setItem('li'+li_id, new_span2.innerHTML); 
   localStorage.setItem('elementNumber', li_id); 
   localStorage.setItem("mes", JSON.stringify(mes)); 

length++;
li_id++;
hr_name++;


} 

window.onload = function() {
var messubmit = document.getElementById("addsubmit");
    messubmit.addEventListener('click', foomessubmit, true);
      function foomessubmit() { 
arr = localStorage.getItem("mes") ? JSON.parse(localStorage.getItem("mes")) : [];
         var new_mes = document.getElementById("mesdiv") ;
         var new_div_mes = document.createElement("div") ;
         new_div_mes.setAttribute('id', 'div_mes');
         new_div_mes.innerHTML =  arr[3]+(li_id-1);
         new_mes.appendChild(new_div_mes) ;
         kl1++;
        //alert('Hi8888!'); 
      }

  

  
  n = localStorage.getItem('elementNumber');
  for (i=1;i<=n;i++)
  {
    if (localStorage.getItem('li'+i)!=null)
{
    var p = document.getElementById("inputi") ;
 var new_li = document.createElement("li") ;
 var new_a = document.createElement("a") ;
 var new_span = document.createElement("span") ;
 var new_span2 = document.createElement("span") ;
 var new_button = document.createElement("button") ;



    

  new_li.setAttribute('id', 'li'+i);
  new_span.setAttribute('class', 'badge');
  new_span.innerHTML =  i;
  new_span2.setAttribute('id', 'hrname'+i);
  new_span2.innerHTML = localStorage.getItem('li'+i);
  new_button.setAttribute('class', 'delete');
  new_button.setAttribute('onclick', 'del('+ i +')');
  new_button.setAttribute('id', 'button'+i);
  new_a.setAttribute('onclick', 'detail('+ i +')');
  new_a.setAttribute('id', 'a'+i);
  //new_a.setAttribute('href', 'hero2.html');
  

  new_button.innerHTML = "X";
   
  
 
  new_a.appendChild(new_span) ;
  new_a.appendChild(new_span2) ;
 
 new_li.appendChild(new_a) ;
 new_li.appendChild(new_button) ;
 p.appendChild(new_li) ;


     

length++;

hr_name++;

  }


 

}



      
  
  //n = localStorage.getItem('elementNumber');
  /*for (i=1;i<=n;i++)
 {
  if (localStorage.getItem('li'+i)!=null)
  {
    tri++;
    if (tri <= 4)
    {
  var div_dash = document.getElementById("dash") ;
 var new_a_dash = document.createElement("a") ;
 var new_div_dash = document.createElement("div") ;
 var new_h4 = document.createElement("h4") ;
    


  new_a_dash.setAttribute('class', 'col-1-4');
  new_a.setAttribute('onclick', 'detaildash('+ i +')');
  new_div_dash.setAttribute('class', 'module hero');
  new_h4.setAttribute('id', 'dashb'+i);
  new_h4.innerHTML =  localStorage.getItem('li'+i);


 
 new_div_dash.appendChild(new_h4) ;
 new_a_dash.appendChild(new_div_dash) ;
 div_dash.appendChild(new_a_dash) ;
}
else break;
}
 }*/



 li_id = n == null?1:parseInt(n)+1;
 console.log(li_id);
 
 


 var sve = document.location.href.split ('?');

  document.getElementById("hrname"+sve[2]).innerHTML=sve[1];
  //document.getElementById("dashb"+sve[2]).innerHTML=sve[1];

if (sve[3] == '0')
{
          var new_mes = document.getElementById("mesdiv") ;
          var new_div_mes = document.createElement("div") ;
          new_div_mes.setAttribute('id', 'div_mes');
          new_div_mes.innerHTML =  mes[2]+sve[2];                                                                                                          
          new_mes.appendChild(new_div_mes) ;

          var new_mes = document.getElementById("mesdiv") ;
          var new_div_mes = document.createElement("div") ;
          new_div_mes.setAttribute('id', 'div_mes');
          new_div_mes.innerHTML =  mes[0];                                                                                                            
          new_mes.appendChild(new_div_mes) ;
          kl1+=2;
}
else
{
          var new_mes = document.getElementById("mesdiv") ;
          var new_div_mes = document.createElement("div") ;
          new_div_mes.setAttribute('id', 'div_mes');   
          new_div_mes.innerHTML =  mes[1]+sve[2];                                                                                                                        
          new_mes.appendChild(new_div_mes) ;
          
          var new_mes = document.getElementById("mesdiv") ;
          var new_div_mes = document.createElement("div") ;
          new_div_mes.setAttribute('id', 'div_mes');
          new_div_mes.innerHTML =  mes[0];                                                                                                            
          new_mes.appendChild(new_div_mes) ;
          kl2+=2;
}

var  mesbutton = document.getElementById("button"+li_id);
     mesbutton.addEventListener('click', del, true);

      
var mesa = document.getElementById("a"+li_id);
     mesa.addEventListener('click', detail, true);


};

 function del(li_id) {




localStorage.removeItem("li"+li_id);
    var elem = document.getElementById("li"+li_id);
elem.parentNode.removeChild(elem);


arr = localStorage.getItem("mes") ? JSON.parse(localStorage.getItem("mes")) : [];
   /* var  mesbutton = document.getElementById("button"+li_id);
     mesbutton.addEventListener('click', foomesbutton, true);*/
       
//function foomesbutton() { 

         var new_mes = document.getElementById("mesdiv") ;
         var new_div_mes = document.createElement("div") ;
          new_div_mes.setAttribute('id', 'div_mes');
          new_div_mes.innerHTML =  arr[4]+li_id;
          new_mes.appendChild(new_div_mes) ;
          kl2++;
        //alert('Hi8888!'); 
     // }


  }






 function detail(hr_name) {
   var rh=document.getElementById("hrname"+hr_name).innerHTML;
   document.location.href = 'hero2.html?'+rh+'?'+hr_name+'?1';

   arr = localStorage.getItem("mes") ? JSON.parse(localStorage.getItem("mes")) : [];
         var new_mes = document.getElementById("mesdiv") ;
         var new_div_mes = document.createElement("div") ;
         new_div_mes.setAttribute('id', 'div_mes');
         new_div_mes.innerHTML =  arr[0];
         new_mes.appendChild(new_div_mes) ;
  }
function check() {
  var pole1 = document.getElementById('hero');
     
  document.getElementById('addsubmit').disabled = pole1.value ? false : "disabled";}

function rem() {
  //console.log(kl1+kl2);
  for (i=0;i<kl1+kl2;i++)
  {
    document.getElementById('div_mes').remove(i);
  }
  kl1=0;
  kl2=0;
  }