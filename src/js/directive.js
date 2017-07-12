
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
		templateUrl: 'view/directive/addTag.html',
		replace: true
	}
});


app.directive('btnTags', function() {
	return {
		restrict: 'ECAM',
		templateUrl: 'view/directive/btnTag.html',
		replace: true
	}
});

app.directive('footerTag', function() {
	return {
		restrict: 'ECAM',
		templateUrl: 'view/directive/footTag.html',
		replace: true
	}
});