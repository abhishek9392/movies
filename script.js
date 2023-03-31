var xhr = new XMLHttpRequest();
xhr.open("GET", "https://imdb-api.com/en/API/Top250Movies/k_7wkd53z5");
xhr.send()
xhr.onload=function(){
    console.log(xhr.status)
    var result=JSON.parse(xhr.response)
    // console.log(result)
     for(i=0 ; i<10 ; i++){
      // create div for starting movies
        var box=document.createElement("div")
        box.className="box1 "
        box.style.height="400px"
        box.style.width="320px"
        box.style.display="inline-block"
        box.style.marginLeft="40px"
        box.style.marginTop="30px"
        document.getElementById("div3").append(box)
    // create img tag and append to div

        var imgg=document.createElement("img")
        
        imgg.src=result.items[i].image
        box.append(imgg)
        var name=result.items[i].title
        var para=document.createElement("p")
        para.innerHTML=name
        console.log(para)
        para.style.color="black"
        para.style.fontSize="20px"
        box.append(para)
    // add to main div
        document.getElementById("div3").append(box)
     }
    //  create a button 
      
     var button1=document.createElement("button")
     button1.innerText="search"
     document.getElementById("div2").append(button1)
     button1.style.borderRadius="100px"
     button1.style.color="black"
     button1.style.height="40px"
    //  button function to get movies

    button1.addEventListener("click",function(){
      
      // takes input value and store

        var input=input1.value
        var abhi=input.toLowerCase()
        div3.innerHTML=""

      // for iterate movies
        for( var i=0 ; i<result.items.length ; i++){
          var input2=result.items[i].title
          var x=input2.toLowerCase()
        //to check substring in a string
          var res=x.includes(abhi)
          // check that condition is true or not
          if(res==true){
            var boxx=document.createElement("div")
            boxx.className="box2"
            document.getElementById("div3").append(boxx)
            var pic=document.createElement("img")
            pic.src=result.items[i].image
            boxx.append(pic)
            var para2=document.createElement("p")
            para2.innerHTML=input2

            para2.style.color="black"
            para2.style.fontSize="20px"
            boxx.append(para2)

    
            
  
          
            console.log(input2)
  
          }
        }
      
      document.getElementById("input1").value=""


      })
      

     }
// function myFunction(x) { 
//   if(x.matches){

//   }
// }


//      var x=window.matchMedia("(max-width:414px)")
//      myFunction(x)
//      x.addEventListener(mfFunction)










