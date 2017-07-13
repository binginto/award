var awardData = new Map();
var dataArr = [{
	name:"cash_1",
	award:"特等奖",
	describe: '(RMB1000元)',
	num:'(1人)',
	startNum:1,
	type:'cash'
},{
	name:"cash_2",
	award:"一等奖",
	describe: '(RMB800元)',
	num:'(3人)',
	startNum:3,
	type:'cash'
},{
	name:"cash_3",
	award:"二等奖",
	describe: '(RMB800元)',
	num:'(5人)',
	startNum:5,
	type:'cash'
},{
	name:"cash_4",
	award:"三等奖等奖",
	describe: '(RMB1800元)',
	num:'(25人)',
	startNum:25,
	type:'cash'
},{
	name:"cash_5",
	award:"大时代",
	describe: '(RMB1600元)',
	num:'(15人)',
	startNum:15,
	type:'cash'
},{
	name:"good_1",
	award:"一等奖",
	describe: '(iphone4s)',
	num:'(2人)',
	startNum:2,
	type:'good'
},{
	name:"good_2",
	award:"二等奖",
	describe: '(小米4s)',
	num:'(10人)',
	startNum:10,
	type:'good'
},{
	name:"good_3",
	award:"三等奖",
	describe: '(大米一袋)',
	num:'(30人)',
	startNum:30,
	type:'good'
},{
	name:"good_4",
	award:"三等奖1",
	describe: '(大1米一袋)',
	num:'(10人)',
	startNum:10,
	type:'good'
}];

for(var i = 0; i < dataArr.length;i++){
  awardData.set(dataArr[i].name,dataArr[i]);
}

function getAward(){
	return awardData ;
}

function getInit(){
	return dataArr;
}
