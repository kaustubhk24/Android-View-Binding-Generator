
function init()
{
    var input=document.getElementById('input');
    var output=document.getElementById('output');

    input.value="<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RelativeLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\">\n\n    <LinearLayout\n        android:id=\"@+id/linear_parent\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"match_parent\"\n        android:orientation=\"vertical\">\n\n       <EditText\n                    android:id=\"@+id/edittext_userName\"\n                    android:layout_width=\"match_parent\"\n                    android:layout_height=\"wrap_content\"/>\n\n        <EditText\n                    android:id=\"@+id/edittext_password\"\n                    android:layout_width=\"match_parent\"\n                    android:layout_height=\"wrap_content\"/>\n\n        <Button\n                android:id=\"@+id/button_login\"\n                android:layout_width=\"match_parent\"\n                android:layout_height=\"wrap_content\"/>\n</RelativeLayout>\n";
    update();
 
}

function update()
{
    console.clear();
    
    var arr=[];
    var output_text="\n/* Android Views Declarations */\n\n";
    returnLayoutAndName(input.value,arr);
    for(var i=0;i<arr.length;i++)
    {
        if(!arr[i].includes("undefined"))
        {
            //output_text=output_text+arr[i].replace(/[\n\r]/g, '')+"\n";

           output_text=output_text+return_output1(arr[i].replace(/[\n\r]/g, ''),output_text);
           
        }
    }
    output_text=output_text+" \n/* Declaration Ends Here */"
    
    output_text=output_text+"\n\n /* Paste below Function in your file. & call  bindViews() function when activity created */ \n\n\nprivate void bindViews()\n{\n";


    for(var j=0;j<arr.length;j++)
    {
        if(!arr[j].includes("undefined"))
        {
            //output_text=output_text+arr[i].replace(/[\n\r]/g, '')+"\n";

           output_text=output_text+return_output2(arr[j].replace(/[\n\r]/g, ''),output_text);
           
        }
    }





output_text=output_text+"\n}"

    output.value=output_text;
    console.log(output_text);
}

function return_output1(str,output_text)
{
    raw=str.split(":");
    return raw[0]+" "+raw[1]+";\n";

  

}

function return_output2(str,output_text)
{
    raw=str.split(":");
    return "    "+raw[1]+" = findViewById(R.id."+raw[1]+");\n";

}
function GetIdIfHasId( str)
{
    if(checkIfHasId(str))
    {
        return str.split('android:id=\"@+id/').pop().split('\"')[0];
        
    }
}

function getLayoutName(str)
{
    let spaceIndex = str.indexOf(' ');
     return spaceIndex === -1 ? str : str.substr(0, spaceIndex);

}

function checkIfHasId(str)
{
    if(str.includes('android:id=\"@+id/'))
    {
        return true;
    }
    else
    {return false;}
}


function showHide()
{
    var prefixCheckBox=document.getElementById('prefixCheck');
    var prefixVal=document.getElementById('prefix');
    if(prefixCheckBox.checked==true)
    {
        prefixVal.style.display="block";
    }
    else
    {
        prefixVal.style.display="none";
        prefixVal.value="";

    }

}

function returnLayoutAndName(s,arr)
{
    s = input.value;
    var res = s.split('<');
    for (var r in res)
    {

      
     if(!getLayoutName(res[r]).includes('?') || !res[r].includes('xmlns') || !getLayoutName(res[r]).includes("/") )
     {  
        // for(var i=0;i<res.length;i++)
        // {
          
             arr.push(getLayoutName(res[r])+":"+GetIdIfHasId(res[r]));
        //     // console.log(getLayoutName(res[r]));
        //     // console.log(GetIdIfHasId(res[r]));
        // }  
       
     }
  
     
    }
    return res;

}


function CopyCode() {
    /* Get the text field */
    var copyText = document.getElementById("output");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied!");
  }