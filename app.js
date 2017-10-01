var request = require ('request');
 


function call(data){
	console.log("started");
	var time = new Date().getTime() + data.time;
	data.timestamp = time;
	var options = {
	    url: 'http://localhost:8080/transactions',
	    method: 'POST',
	    body: data,
	    json:true
	};

	request(options, function (err, res, body) {
	  if (err) {
	    console.error('error posting json: ', err)
	    throw err
	  }
	  var headers = res.headers
	  var statusCode = res.statusCode
	  console.log('headers: ', headers)
	  console.log('statusCode: ', statusCode)
	  console.log('body: ', body)
	});		
}

function caller(){
	var datas = [

		      {amount:20, time: -10000},
		      {amount:10, time: -20000},
		      {amount:30, time: -30000},
		      {amount:50, time: -40000},
		      {amount:70, time: -50000},
		      {amount:80, time: -55000}
	];

	for(data of datas){
		call(data);
	}		      
}

caller();