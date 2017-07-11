
app.directive('customTags', function() {
	return {
		restrict: 'ECAM',
		templateUrl: 'view/directive/leftPanel.html',
		replace: true
	}
});


app.directive('addTags', function() {
	return {
		restrict: 'ECAM',
		templateUrl: 'view/directive/add.html',
		replace: true
	}
});

app.directive('awardTags', function() {
	return {
		restrict: 'ECAM',
		templateUrl: 'view/directive/dataTable.html',
		replace: true
	}
});