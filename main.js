const joke = async() => {

  const response = await fetch("https://official-joke-api.appspot.com/random_joke")
  console.log(response);
  if(response.status==200){
    displayData = await response.json()
    console.log(displayData);
    

  }else{
    alert("Something went wrong")
  }
  

  
}