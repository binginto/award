var awardData = new Map();
var dataArr = [{
	name:"cash_1",
	award:"一等奖",
	describe: 'hehe',
	num:3,
	startNum:1,
	stopDes:'现金特等奖'
},{
	name:"cash_2",
	award:"二等奖",
	describe: 'hehe',
	num:3,
	startNum:1,
	stopDes:'现金特等奖'
},{
	name:"cash_3",
	award:"三等奖",
	describe: 'hehe',
	num:3,
	startNum:1,
	stopDes:'现金特等奖'
},{
	name:"good_1",
	award:"一等奖",
	describe: 'hehe',
	num:3,
	startNum:1,
	stopDes:'现金特等奖'
},{
	name:"good_2",
	award:"二等奖",
	describe: 'hehe',
	num:3,
	startNum:1,
	stopDes:'现金特等奖'
},{
	name:"good_3",
	award:"三等奖",
	describe: 'hehe',
	num:3,
	startNum:1,
	stopDes:'现金特等奖'
}];

for(var i = 0; i < dataArr.length;i++){
  awardData.set(dataArr[i].name,dataArr[i]);
}

function getAward(){
	return awardData ;
}
