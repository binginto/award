
app.directive('additionalTag', function() {
	return {
		restrict: 'ECAM',
		templateUrl: 'view/directive/additionalPanel.html',
		replace: true
	}
});

app.directive('listTag', function() {
	return {
		restrict: 'ECAM',
		templateUrl: 'view/directive/listPanel.html',
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