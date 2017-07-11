/*天彩研发中心员工数据*/

var alldata = '';
alldata = getdata();
var num = alldata.length - 1 ;

/*中奖名单*/
var rewardData = '';
var rewardTestData = '';
var timer
var deletedata;
var comnumber;

app.controller('shareController', function($scope, $route, $rootScope, $location) {

	var awardData = getAward();

	$scope.load = function() {
		var setData = awardData.get('cash_1');
		$scope.award = setData.award;
		$scope.describe = setData.describe;
		$scope.num = setData.num;
		$scope.startNum = setData.startNum;
		$scope.stopDec = setData.stopDec;
	}

	$scope.sendData = function(id) {
		$location.path("/")
		if (awardData.has(id)) {
			var setData = awardData.get(id);
			$scope.award = setData.award;
			$scope.describe = setData.describe;
			$scope.num = setData.num;
			$scope.startNum = setData.startNum;
			$scope.stopDec = setData.stopDec;
		}
	}

	$scope.changeView = function (path) {
        $location.path("/path")
    }



	/*CASH*/
	$scope.Start = function(innumber) {
		comnumber = innumber;
		/*烟火*/
		document.body.style.backgroundColor = "#272727";
		fireworks().init();
		clearInterval(timer);
		$location.path("/show/action");
        timer = setInterval('change(comnumber)',10);
	}

	$scope.Ok = function() {
		clearInterval(timer);
		/*烟火*/
		fireworks().stop();
		document.body.style.backgroundColor = "#d0d0d0";
		//删除已经获奖的员工
		globalDel.sort(sortNumber);
        for(var i = 0 ,j=0; i < globalDel.length; i++,j++){
        	alldata.splice((globalDel[i]-j),1);	
        }
        //记录获奖的员工
        var obj = new Object();  
        obj.award = $scope.award;
        obj.describe = $scope.describe ;
        obj.data = globalDel ;
        globalSave.push(obj);
        save();
	}


	$scope.show = function() {
		$location.path("/show/awardTable");
		showView();

	}

	$scope.delete = function() {
		localStorage.clear();
	}



	$scope.addComfirm = function() {
		var term = verifyFormat();
		if (!term) {
			alert("输入格式不正确");
		} else {
			/*烟火*/
			var html = '<div class="bigfont" id="result">抽奖结果<span class="typeflag">(' + term.num + ')</span></div>';
			$('#oknum').html(html);
			$scope.award = term.award;
			$scope.describe = '(' + term.describe + ')';
			$scope.startNum = term.num;
			$scope.stopDes = term.award;

		}
	}


	$scope.inOk = function(state) {
		clearInterval(timer);
		/*烟火*/
		fireworks().stop();
		document.body.style.backgroundColor = "#d0d0d0";
		/*设置可编辑*/
		/*设置不可编辑*/
		document.getElementById("setnum").disabled = false;
		//以下代码表示获得奖的，不能再获奖了。  重置刷新页面即可。 
		//以空格分割数据，清除"1、" 和换行符。
		deletedata = document.getElementById("oknum").innerText;

		var firstdel = deletedata.split(/\s+/);
		for (var i = 0; i < firstdel.length; i++) {
			firstdel[i] = firstdel[i].replace(/[\r\n]/g, '');
			firstdel[i] = firstdel[i].replace(/^[0-9]+、/, '');
		}

		rewardData += state;
		rewardData += "\n";
		for (var i = 0; i < firstdel.length; i++) {
			rewardData += firstdel[i];
			rewardData += '\n';
		}
		rewardData += "\n";
		rewardTestData += (firstdel + ",");
		for (i = 0; i < firstdel.length; i++) {
			alldata = alldata.replace(firstdel[i], "").replace(",,", ",");
		}
		// 去掉前置，最末尾的,  
		if (alldata.substr(0, 1) == ",") {
			alldata = alldata.substr(1, alldata.length);
		}
		if (alldata.substr(alldata.length - 1, 1) == ",") {
			alldata = alldata.substring(0, alldata.length - 1);
		}
		alldataarr = alldata.split(",");
		num = alldataarr.length - 1;
		console.log(num);
	}
});


