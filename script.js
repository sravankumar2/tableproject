
$(document).ready(function(){
  console.log("Dom ready") 
 var tableBody=$("tbody")

function createRows(response){
    var tRow=$("<tr>")
    tRow.addClass("data-row");
    tableBody.append(tRow);
    tRow.click(function(){
      $(".data-row").removeClass("active");
      tRow.addClass("active")
      $("#info-content").css({"display":"block"})
      var parent=document.getElementById("info-content")
      var childs=parent.childNodes;      
      childs[1].innerHTML="<b>User selected:</b>"+(firstName+" "+lastName);     
      var textArea=$("textarea")      
      textArea.text(response.description);
      let{city,state,streetAddress,zip}=response.address;
      childs[5].innerHTML="<b>Address:</b>"+streetAddress
      childs[7].innerHTML="<b>City:</b>"+city;
      childs[9].innerHTML="<b>State:</b>"+state;
      childs[11].innerHTML="<b>Zip:</b>"+zip;
    }) 
    
   let{id,firstName,lastName,email,phone} = response;   
  
      var td1=document.createElement("td")
      td1.className="column1";
      td1.innerText=id;
      tRow.append(td1)
      var td2=document.createElement("td")
      td2.className="column2";
      td2.innerText=firstName;
      tRow.append(td2)
      var td3=document.createElement("td")
      td3.className="column3";
      td3.innerText=lastName;
      tRow.append(td3)
      var td4=document.createElement("td")
      td4.className="column4";
      td4.innerText=email;
      tRow.append(td4)
      var td5=document.createElement("td")
      td5.className="column5";
      td5.innerText=phone;
      tRow.append(td5) 
      
      
      
  }
  var input=document.getElementById("search-box");
  input.addEventListener("keyup",function(){
    inputvalue=input.value.toLowerCase();
  var tablevalue=document.getElementsByTagName("tbody");
  var tr=document.getElementsByTagName("tr")
  for(var i=0;i<tr.length;i++){
    var td=tr[i].getElementsByTagName("td")[1];
    if(td){
      
      var textvalue=td.textContent;
      
      textvalue.toLowerCase().indexOf(inputvalue)
      if(textvalue.toLowerCase().indexOf(inputvalue) > -1){
        tr[i].style.display=""
       
        if(input.value!=""){        
        td.style.color="yellow";
        }
      }
      else{
        tr[i].style.display="none";
      }
    }

  }
  
})


  $.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',function(response){
     var data=response;
     console.log(data);
     for(var i=0;i<data.length;i++){
     createRows(data[i])
     }
    
    
   })
  
});