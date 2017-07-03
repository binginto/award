/*天彩研发中心员工数据*/

 var alldata = '';
 var workerdata = '';
 alldata = getdata();
 console.log(alldata);

 
 /*中奖名单*/
 var rewardData = '';
 var rewardTestData = '' ;


 var alldataarr = alldata.split(",");   
 console.log(alldataarr.length);
 var num = alldataarr.length-1;  
 var timer;  
 var deletedata ;
 var comnumber ;

 angular.module('wechatApp',['ngRoute'])
           .config(function($routeProvider){
                $routeProvider
                .when('/',{
                	controller:'shareController',
                	templateUrl:'view/treeView.html'
                })
                .when('/cash/first',{
				   controller: 'shareController',
					templateUrl: 'view/cash/first.html',
					
				})
				.when('/cash/second',{
				   controller: 'shareController',
					templateUrl: 'view/cash/second.html',
					
				})
				.when('/cash/third',{
				    controller: 'shareController',
					templateUrl: 'view/cash/third.html',
					
				})
				.when('/cash/four',{
				    controller: 'shareController',
					templateUrl: 'view/cash/four.html',
					
				})
			    .when('/good/best',{
				    controller: 'shareController',
					templateUrl: 'view/good/best.html',
					
				})
				 .when('/good/first',{
				   controller: 'shareController',
					templateUrl: 'view/good/first.html',
					
				})
				.when('/good/second',{
				   controller: 'shareController',
					templateUrl: 'view/good/second.html',
					
				})
				.when('/good/third',{
				    controller: 'shareController',
					templateUrl: 'view/good/third.html',
					
				})
				.when('/good/four',{
				    controller: 'shareController',
					templateUrl: 'view/good/four.html',
					
				})
				.when('/good/five',{
				    controller: 'shareController',
					templateUrl: 'view/good/five.html',
				})
				.when('/add/add',{
					controller: 'shareController',
					templateUrl:'view/add/add.html',
				})
				.otherwise({
					redirectTo: '/'
				});
			 
            })
               

          .controller('shareController',function($scope,$route,$rootScope,$location){
           
           /*CASH*/
           $scope.Start=function(innumber){
           	   comnumber = innumber ; 
           	   /*烟火*/
           	   document.body.style.backgroundColor="#272727";
			   fireworks().init();  
			  
           	   clearInterval(timer);     
			   timer = setInterval('change(comnumber)',5); //随机数据变换速度，越小变换的越快
			   console.log(innumber);

           }

			$scope.Ok=function(state){     
			    clearInterval(timer);  
			     /*烟火*/
			     fireworks().stop();
			     document.body.style.backgroundColor="#d0d0d0";
			    //以下代码表示获得奖的，不能再获奖了。  重置刷新页面即可。 
			    //以空格分割数据，清除"1、" 和换行符。
                deletedata = document.getElementById("oknum").innerText;
               
                var firstdel = deletedata.split(/\s+/);
                for(var i = 0 ; i < firstdel.length; i++)
                {
                	firstdel[i] = firstdel[i].replace(/[\r\n]/g,'');
                	firstdel[i] = firstdel[i].replace(/^[0-9]+、/,'');
                }
                
                /*rewardData显示格式*/
                rewardData += state ;
                rewardData += "\n" ;
                for(var i = 0; i < firstdel.length; i++)
                {
                	rewardData += firstdel[i] ;
                	rewardData += '\n' ;
                }
                rewardData += "\n" ;
                rewardTestData += (firstdel+",");
              //  console.log(rewardData);

                for(i=0; i<firstdel.length; i++)
                {
                	alldata = alldata.replace(firstdel[i],"").replace(",,",",");  
                }
			    // 去掉前置，最末尾的,  
			    if (alldata.substr(0,1)==",")  
			    {  
			      alldata = alldata.substr(1,alldata.length);  
			    }  
			    if (alldata.substr(alldata.length-1,1)==",")  
			    {  
			      alldata = alldata.substring(0,alldata.length-1);  
			    }  
			    alldataarr = alldata.split(",");    
			    num = alldataarr.length-1;   
			    console.log(num);

			}    



			$scope.save=function(){
               localStorage.setItem("rewardData", rewardData);
               document.getElementById("add_save").style.cssText = "visibility:hidden;" ; 
               console.log(rewardData);
             //  document.write(rewardTestData);
			}


			$scope.show=function(){
               document.getElementById("oknum").innerText = localStorage.getItem("rewardData");
               document.getElementById("title").innerText = "中奖名单";
               document.getElementById("oknum").setAttribute("class", "result_box  long");
              // console.log(rewardData);
			}




			$scope.inStart=function(){
              var term = verifyFormat();
              if(!term){
              	alert("输入格式不正确");
              }else{
              comnumber = term ;
               /*烟火*/
              document.body.style.backgroundColor="#272727";
			   fireworks().init();  
			   /*设置不可编辑*/
			   document.getElementById("setnum").disabled=true ;
           	   clearInterval(timer);     
			   timer = setInterval('change(comnumber)',5); //随机数据变换速度，越小变换的越快
			   }
			}


			$scope.inOk=function(state){     
			    clearInterval(timer);  
			     /*烟火*/
			     fireworks().stop();
			     document.body.style.backgroundColor="#d0d0d0";
			     /*设置可编辑*/
			     /*设置不可编辑*/
			    document.getElementById("setnum").disabled=false ;
			    //以下代码表示获得奖的，不能再获奖了。  重置刷新页面即可。 
			    //以空格分割数据，清除"1、" 和换行符。
                deletedata = document.getElementById("oknum").innerText;
               
                var firstdel = deletedata.split(/\s+/);
                for(var i = 0 ; i < firstdel.length; i++)
                {
                	firstdel[i] = firstdel[i].replace(/[\r\n]/g,'');
                	firstdel[i] = firstdel[i].replace(/^[0-9]+、/,'');
                }

                rewardData += state ;
                rewardData += "\n" ;
                for(var i = 0; i < firstdel.length; i++)
                {
                	rewardData += firstdel[i] ;
                	rewardData += '\n' ;
                }
                rewardData += "\n" ;
                rewardTestData += (firstdel +",");
               // console.log(rewardData);
                for(i=0; i<firstdel.length; i++)
                {
                	alldata = alldata.replace(firstdel[i],"").replace(",,",",");  
                }
			    // 去掉前置，最末尾的,  
			    if (alldata.substr(0,1)==",")  
			    {  
			      alldata = alldata.substr(1,alldata.length);  
			    }  
			    if (alldata.substr(alldata.length-1,1)==",")  
			    {  
			      alldata = alldata.substring(0,alldata.length-1);  
			    }  
			    alldataarr = alldata.split(",");    
			    num = alldataarr.length-1;   
			    console.log(num);
			}     

		});



             function change(innumber){
             	// document.getElementById("oknum").value = alldataarr[GetRnd(0,num)]; 
                // console.log(innumber);
             	 var term = GetRnd(0,num,innumber);
             	 var data = "";
             	 if(!(term instanceof Array)){
             	 	//console.log(term instanceof Array);
             	 	document.getElementById("oknum").innerText = "ERROR!" ;
             	 	document.getElementById("oknum").setAttribute("class", "result_box bigfont_ok");
             	 }
             	// console.log("binginto"+term);
             	else{
             	 for(i=0;i<term.length-1;i++)
             	 {
             	 	term[i]= parseInt(term[i]);
             	 	data += (i+1)+"、"+alldataarr[term[i]]+" "+"\n";
             	  
             	 }
             	 term[term.length-1] = parseInt(term[term.length-1]);
             	 data += (term.length)+"、"+alldataarr[term[term.length-1]]+" " ;

             	 if(term.length < 4 || term.length == 4)
             	 {
             	 	 document.getElementById("oknum").innerText = data ;
             	 	 document.getElementById("oknum").setAttribute("class", "result_box changestyle_ok1");


             	 	}else if(term.length < 8 && term.length > 4 ){
                     document.getElementById("oknum").innerText = data ;
                     document.getElementById("oknum").setAttribute("class", "result_box changestyle_ok2");

             	 	}else{
                    //console.log(data);
                    document.getElementById("oknum").innerText = data ;
                    document.getElementById("oknum").setAttribute("class", "result_box");
                   }
                }
             }

             function GetRnd(min,max,innumber){

             	if(num == innumber-1){
             		console.log(alldata);
             			if(alldata.length < 0 || alldata.length == 0){
		             	 //  console.log(num);
		             		alert("数据量少于要中奖人数，不能进行");
		             		clearInterval(timer);
		             		return false ;
             			}
             		}
             	if(num < (innumber-1) ){ 
             		
             		//console.log(num);
             		alert("数据量少于要中奖人数，不能进行");
             		clearInterval(timer);
             		return false ;
             	}
             	else{
                var arr = [];
				while(arr.length < innumber){
				    var bFlag = true;
				    var number = Math.floor(Math.random()*(max-min+1));
				    if(arr.length == 0){
				        arr.push(number);
				    }
				    for(var i=0;i<arr.length;i++){
				        if(number == arr[i]){
				            bFlag = false;
				        }
				    }
				    if(bFlag){
				       arr.push(number); 
				    }
				}
             	return arr; 
               }
             }


			    function verifyFormat(){
			    var  setnum = $('#setnum').val();
			    if(setnum == ""){
			      alert("输入不能为空");
			      return false;
			    } else if(!setnum.match(/^[0-9]+$/)){
			      alert("只能输入数字");
			      return false ;
			    } else if(!isNaN(setnum)){
                    var num = parseInt(setnum);
                    if(num > 0 && num < 100){
                    	return num ;
                    } else {
                    	alert("请输入0到100的数字");
                    	return false ;
                    }
			        
			    } else {
			    	return false;
			    }
			  }

	  function getdata(){
		    $.ajax({  
		        //请求方式为get  
		        type:"GET",  
		        //json文件位置  
		        url:"./data/worker.json",  
		        //返回数据格式为json  
		        dataType: "json",  
		        async: false ,
		        //请求成功完成后要执行的方法  
		        success: function(data){  
		            //使用$.each方法遍历返回的数据date,插入到id为#result中  
		        
		            for( var i = 0 ; i < data.workers.length-1;i++)
		            {
		                 workerdata += data.workers[i].id+data.workers[i].name+"," ;
		            } 
		            workerdata += data.workers[data.workers.length-1].id+data.workers[data.workers.length-1].name ; 
		        }  
		    })    
		     return workerdata ;
		}



