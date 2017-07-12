var workerMsg;
var alldata = getdata();
var saveData = getdata();
console.log(alldata);
var depart = 'skylight';
var globalDel = new Array();
var globalSave = new Array();

function getdata() {
	$.ajax({
		type: "GET",
		url: "./data/worker.json",
		dataType: "json",
		async: false,
		//请求成功完成后要执行的方法  
		success: function(data) {
			workerMsg = data.workers;
		}
	});
	return workerMsg;
}

function change(innumber) {
	var num = alldata.length - 1;
	var workArr = getRan(0, num, innumber);
	globalDel = workArr;
	if (!(workArr instanceof Array)) {
		document.getElementById("oknum").innerText = "ERROR!";
		document.getElementById("oknum").setAttribute("class", "result_box bigfont_ok");
	} else {
		var item = '';
		for (i = 0; i < workArr.length; i++) {
			item += '<tr><td>' + (i + 1) + '</td><td>' + alldata[workArr[i]].id + '</td><td>' + alldata[workArr[i]].name + '</td></tr>';
		}
		$("#content").empty();
		$("#content").append(item);
	}
}

/**
 *createTextNode @description 改变Dom结构
 */
function changeDom() {
	var parent = document.getElementById("oknum");
	var child = document.getElementById("result");
	parent.removeChild(child);
}


/**
 * @description 随机产生中奖名单
 */
function getRan(min, max, innumber) {
	if (innumber == (max + 1)) {
		if (alldata.length < 0 || alldata.length == 0) {
			alert("数据量为负数，不能进行");
			clearInterval(timer);
			return false;
		}
	}
	if (innumber > (max + 1)) {
		alert("数据量少于要中奖人数，不能进行");
		clearInterval(timer);
		return false;
	} else {
		var arr = [];
		while (arr.length < innumber) {
			var bFlag = true;
			var number = Math.floor(Math.random() * (max - min + 1));
			if (arr.length == 0) {
				arr.push(number);
			}
			for (var i = 0; i < arr.length; i++) {
				if (number == arr[i]) {
					bFlag = false;
				}
			}
			if (bFlag) {
				arr.push(number);
			}
		}
		return arr;
	}
}


function verifyFormat() {
	var setnum = $('#setNum').val();
	var setaward = $('#setAward').val();
	var setdescribe = $('#setDescribe').val();
	if (setnum == "" || setaward == "" || setdescribe == "") {
		alert("输入不能为空");
		return false;
	} else if (!setnum.match(/^[0-9]+$/)) {
		alert("只能输入数字");
		return false;
	} else if (!isNaN(setnum)) {
		var num = parseInt(setnum);
		if (num > 0 && num < 100) {
			var obj = {
				"award": setaward,
				"describe": setdescribe,
				"num": setnum
			};
			return obj;
		} else {
			alert("请输入0到100的数字");
			return false;
		}

	} else {
		return false;
	}
}


function save() {
	var obj = JSON.stringify(globalSave);
	localStorage.globalSave = obj;
}

function sortNumber(a, b) {
	return a - b;
}


function showView() {
	var localSave = localStorage.globalSave;
	var useData = $.parseJSON(localSave);
	var item = '';
	for (var i = 0; i < useData.length; i++) {
		item += '<thead><tr><th>' + useData[i].award + useData[i].describe + '</th> </tr> </thead><tbody>';
		for (var j = 0; j < useData[i].data.length; j++) {
			var msg = useData[i].data[j];
			item += '<tr><td>' + saveData[msg].id + '</td><td>' + saveData[msg].name + '</td></tr>';
		}
		item+='</tbody>';
	}
	console.log(item);
	$("#summy").empty();
	$("#summy").append(item);
}