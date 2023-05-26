// server communication using ajax

function servercommunication(){
    var email = document.getElementById('uname').value;
    var password = document.getElementById('password').value;
    var userdetail = {
        email:email,
        password:password
    } 

    console.log('userdetail',userdetail);

    var connect = new XMLHttpRequest();

    connect.onload = function(){
        console.log('this.responseText',JSON.parse(this.responseText));
        var userDATA = JSON.parse(this.responseText);
        bindUserDetails(userDATA.data)
    }
 
    connect.open('GET','https://reqres.in/api/users?page=2');
    connect.setRequestHeader('conttent-type','application/json');
    connect.setRequestHeader('Allow-Access-Origin','*');
    connect.send();

}

function bindUserDetails(data){
    debugger
    let rowTemp = [];
    for (var user = 0; user < data.length; user++){
        var td1 = document.createElement('td');
        td1.innerHTML= data[user].first_name+' '+data[user].first_name+' ';
        var td2 = document.createElement('td');
        td2.innerHTML= data[user].email;
        var td3 = document.createElement('td');
        var img = document.createElement('img');
        img.src = data[user].avatar;
        td3.appendChild(img);

        var newRow = document.createElement('tr');
        newRow.appendChild(td1);
        newRow.appendChild(td2);
        newRow.appendChild(td3);

        var tabledata = document.getElementById('userRow');
        tabledata += tabledata.appendChild(newRow);

    }
}

