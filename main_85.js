Push()  
menuListArray = [ "Marguerita",
"Pizza de calabresa" ]                 

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menuListArray.length; i++)
    {
        htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    
    document.getElementById("DisplayMenu").innerHTML = htmldata;
}

function add_suggestion(){
    
	var item = document.getElementById("   addItem      ").value;
        menuListArray.item; 
}



