var keys = new Array();
var values = new Array();

function getTree() {
	var treeData = [{
		 text: "cash",
		 href: "#node-v",
			nodes: [{
				text: "Child 1",
				href: "#node-v",
			}, {
				text: "Child 2",
			}, {
				text: "Child 3",
			}, {
				text: "Child 4",
			}, {
				text: "Child 5",
			}]
		}, {
			text: "good",
			nodes: [{
				text: "Child 1",
			}, {
				text: "Child 2",
			}, {
				text: "Child 3",
			}, {
				text: "Child 4",
			}, {
				text: "Child 5",
			}]
		},

	];


	return treeData;
}



$('#tree').treeview({
	 color: "#428bca",
     expandIcon: 'glyphicon glyphicon-chevron-right',
     nodeIcon: 'glyphicon glyphicon-bookmark',
     data: getTree()
	
});
$('#tree').on('nodeSelected', function(event, data) {
   console.log(this);
});