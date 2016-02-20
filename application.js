var myFirebaseApp = "motivateher";

// debugger


var url = new Firebase("https://" + myFirebaseApp + ".firebaseio.com/");
var goals = url.child("goals");
var categories = url.child("goals/categories");

var submitGoal = function(){
	var title = $("#goalTitle").val();
	var link = $("#goalLink").val();
	var frequency = $("#goalFrequency").val();
	var total = $("#goalTotal").val();

	goals.push({
		"title": title,
		"link":link,
		"category": "health",
		"progress": {
			"frequency": frequency,
			"total": total
		}
		
	});

};

goals.set({
	"info": {
		"title" : "",
		"link": ""
	},
	"progress:": {
		"frequency": "",
		"total": ""
	}
});

categories.set({
	"health": {"subcategories": ["exercise", "food", "habits"]},
	"education": {"subcategories": ["humanities", "technology", "science"]},
	"skills": {"subcategories": ["crafts", "culinary", "music"]}
}
// , function (error) {
// 	debugger
// }
);