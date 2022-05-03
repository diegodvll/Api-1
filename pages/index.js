

async function CRUD(type){ 
    var res = [];
    switch(type) {
           case 'table':
            res = await fetch('http://127.0.0.1:3306/api/Fletes', {method: 'GET'});    
            const myJson = await res.json();
            /*let output = '<tr><th>id</th><th>name</th><th>country</th><th>number</th></tr>';
            myJson.forEach(row => {
                
            });*/
            table.innerHTML = output;
            break;
      }

}