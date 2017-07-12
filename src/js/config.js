var awardData = new Map();
var dataArr = [{
	name:"cash_1",
	award:"特等奖",
	describe: '(RMB1000元)',
	num:'(1人)',
	startNum:1,
	stopDes:'现金特等奖'
},{
	name:"cash_2",
	award:"一等奖",
	describe: '(RMB800元)',
	num:'(3人)',
	startNum:3,
	stopDes:'现金一等奖'
},{
	name:"cash_3",
	award:"二等奖",
	describe: '(RMB800元)',
	num:'(5人)',
	startNum:5,
	stopDes:'现金二等奖'
},{
	name:"good_1",
	award:"一等奖",
	describe: '(iphone4s)',
	num:'(2人)',
	startNum:2,
	stopDes:'物品特等奖'
},{
	name:"good_2",
	award:"二等奖",
	describe: '(小米4s)',
	num:'(10人)',
	startNum:10,
	stopDes:'现金特等奖'
},{
	name:"good_3",
	award:"三等奖",
	describe: '(大米一袋)',
	num:'(30人)',
	startNum:30,
	stopDes:'现金特等奖'
}];

for(var i = 0; i < dataArr.length;i++){
  awardData.set(dataArr[i].name,dataArr[i]);
}

function getAward(){
	return awardData ;
}

function getInit(){
	return dataArr[0];
}
