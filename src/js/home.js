var rewardData = '';
var rewardTestData = '';
var timer
var deletedata;
var comnumber;

app.controller('shareController', function($scope, $route, $rootScope, $location) {
	var awardData = getAward();

	$scope.load = function() {
		var setData = getInit();
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

	$scope.changeView = function(path) {
		$location.path("/path")
	}


	$scope.Start = function(innumber) {
		comnumber = innumber;
		/*烟火*/
		document.body.style.backgroundColor = "#272727";
		fireworks().init();
		clearInterval(timer);
		$location.path("/show/action");
		timer = setInterval('change(comnumber)', 10);
	}

	$scope.Ok = function() {
		clearInterval(timer);
		/*烟火*/
		fireworks().stop();
		document.body.style.backgroundColor = "#d0d0d0";
		//删除已经获奖的员工
		globalDel.sort(sortNumber);
		for (var i = 0, j = 0; i < globalDel.length; i++, j++) {
			alldata.splice((globalDel[i] - j), 1);
		}
		//记录获奖的员工
		var obj = new Object();
		obj.award = $scope.award;
		obj.describe = $scope.describe;
		obj.data = globalDel;
		globalSave.push(obj);
		save();
	}

	$scope.show = function() {
		$location.path("/show/showData");
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
});