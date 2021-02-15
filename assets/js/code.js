function init()
{
    var input=document.getElementById('input');
    var output=document.getElementById('output');

    input.value="<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<RelativeLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n    xmlns:tools=\"http://schemas.android.com/tools\"\n    android:layout_width=\"match_parent\"\n    android:layout_height=\"match_parent\">\n\n    <LinearLayout\n        android:id=\"@+id/linear_parent\"\n        android:layout_width=\"match_parent\"\n        android:layout_height=\"match_parent\"\n        android:orientation=\"vertical\">\n\n       <EditText\n                    android:id=\"@+id/edittext_userName\"\n                    android:layout_width=\"match_parent\"\n                    android:layout_height=\"wrap_content\"/>\n\n        <EditText\n                    android:id=\"@+id/edittext_password\"\n                    android:layout_width=\"match_parent\"\n                    android:layout_height=\"wrap_content\"/>\n\n        <Button\n                android:id=\"@+id/button_login\"\n                android:layout_width=\"match_parent\"\n                android:layout_height=\"wrap_content\"/>\n</RelativeLayout>\n";
    

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