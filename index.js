
 var data =[ 
	{
	"id": "0",
	"name": "Pet Wasowsky",
	"age": "19",
	"adress": "Ukraine, Khmelnitskiy, Instytutska, 11/4"
	},
	{
	"id": "1",
	"name": "Slavik Shagin",
	"age": "18",
	"adress": "Ukraine, Khmelnitskiy, Instytutska, 12/1"},
	{
	"id": "2",
	"name": "Evgeniy Preizner",
	"age": "21",
	"adress": "Ukraine, Khmelnitskiy, Instytutska, 11/3"
	},
	{
	"id": "3",
	"name": "Bohdan Savenko",
	"age": "20",
	"adress": "Ukraine, Khmelnitskiy, Instytutska, 27/7"
	}
	];
	
	var data = JSON.stringify(data);
	var data = JSON.parse(data);
	var data = JSON.stringify(data);
	var data = JSON.parse(data);
	document.write(' <table width="983" border="1" id = "header" class="display responsive nowrap"> <tbody> <tr> <th width="102"> <a href="#", onClick="sortById()">#</a> </th> <th width="297"> <a href="#", onClick="sortByName()">Name</a> </th> <th width="216"> <a href="#", onClick="sortByAge()">Age</a> </th> <th width="340"> <a href="#", onClick="sortByAdress()">Adress</a> </th> </tr> </tbody></table>');
	for (var i = 0;i<100;i++){
	 document.write('<table width="983" border="1" id = "mytable" class="display responsive nowrap"> <tbody> <tr> <td width="102">'+data[i].id +'</td>      <td width="297">'+data[i].name +'</td>      <td width="216">'+data[i].age +'</td>      <td width="340">'+data[i].adress +'</td>    </tr>   </tbody></table>	');
	}
	function sortById(){
		data.sort(function (a, b){
		if(a.id>b.id){
			return 1;
			}
		if (a.id<b.id){
			return -1;
			}
		return 0;
			
		});
		output(data);
	};

	function sortByName(){
		data.sort(function (a, b){
		if(a.name>b.name){
			return 1;
			}
		if (a.name<b.name){
			return -1;
			}
		return 0;
			
		});
		output(data);
	};

	function sortByAge(){
		data.sort(function (a, b){
		if(a.age>b.age){
			return 1;
			}
		if (a.age<b.age){
			return -1;
			}
		return 0;
			
		});
		output(data);
	};

	function sortByAdress(){
		data.sort(function (a, b){
		if(a.adress>b.adress){
			return 1;
			}
		if (a.adress<b.adress){
			return -1;
			}
		return 0;
			
		});
		output(data);
	};
	
	function output(data){
		 location.reload(false);
				document.write(' <table width="983" border="1" id = "header" class="display responsive nowrap"> <tbody> <tr> <th width="102"> <a href="#", onClick="sortById()">#</a> </th> <th width="297"> <a href="#", onClick="sortByName()">Name</a> </th> <th width="216"> <a href="#", onClick="sortByAge()">Age</a> </th> <th width="340"> <a href="#", onClick="sortByAdress()">Adress</a> </th> </tr> </tbody></table>');
	for (var j = 0;j<100;j++){
	 document.write('<table width="983" border="1" id = "mytable" class="display responsive nowrap"> <tbody> <tr> <td width="102">'+data[j].id +'</td>      <td width="297">'+data[j].name +'</td>      <td width="216">'+data[j].age +'</td>      <td width="340">'+data[j].adress +'</td>    </tr>   </tbody></table>	');
	}
};