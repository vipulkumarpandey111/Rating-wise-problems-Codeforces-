function report(){
    var input=document.getElementById("handle").value;
    console.log(input);
    async function pk()
    {
        var api="https://codeforces.com/api/user.status?handle="+input+"&from=1";
        var data=await fetch(api);
        var value =await data.json();
        //console.log(value);
        showData(value);
    } 
pk();      
}
report();
function showData(value)
{
    document.getElementById('tbody').innerHTML="";
    if(value.status=="OK")
    {
        var links={};
        var arr1={800:[],900:[],1000:[],1100:[],1200:[],1300:[],1400:[],1500:[],1600:[],1700:[],1800:[],1900:[],2000:[],2100:[],2200:[],2300:[],2400:[],2500:[],2600:[],2700:[],2800:[],2900:[],3000:[],3100:[],3200:[],3300:[],3400:[],3500:[],3600:[]}
        for(var i=0;i<value.result.length;i++){
        if(value.result[i].verdict=="OK"&&value.result[i].problem.rating>=800&&value.result[i].problem.rating<=3600){
            arr1[value.result[i].problem.rating].push(value.result[i].problem.name);
            var str="https://codeforces.com/problemset/problem/"+value.result[i].problem.contestId+"/"+value.result[i].problem.index;
            links[value.result[i].problem.name]=str;
        }
    }
    // console.log(arr1);
    console.log(links);
    for(var i=800;i<=3600;i=i+100)
    {
        arr1[i] =[...new Set(arr1[i])];
    }
    // console.log(arr1);
    var tbody=document.getElementById('tbody');
    for(var i=800;i<=3600;i=i+100)
    {
        if(arr1[i]!=0)
        {
            var tr="<tr>";
            tr+="<th>"+i+"</th></tr>";
            tbody.innerHTML += tr;
           for(var j=0;j<arr1[i].length;j++)
           {
            
             var tr="<tr>";
             tr+="<td><a href='+links[i][j]+'>"+arr1[i][j]+"</a></td></tr>";
             tbody.innerHTML += tr;  
        }
    }
    }
    }
    else
    alert (value.comment);

   
    
}

