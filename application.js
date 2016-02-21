var myFirebaseApp = "motivateher";

var url = new Firebase("https://" + myFirebaseApp + ".firebaseio.com/");
var goals = url.child("goals");
var categories = url.child("categories");

var submitGoal = function (event){
	debugger

	var title = $("#goalTitle").val();
	var category = $("#goalCategory").val();
	var link = $("#goalLink").val();
	var frequency = parseInt($("#goalFrequency").val());
	var total = 0;


	goals.push({
		"info": {
			"title": title,
			"link": link
		},
		"category": category,
		"progress": {
			"frequency": frequency,
			"total": total
		}
		
	}, function (error){
		debugger
	});

	event.preventDefault();
	return false;

};

goals.on('child_added', function(childSnapshot){

	goal = childSnapshot.val();
	// Build the HTML string that represents this new row and the data it shows
    var html = "<tr>\
      <td>" + goal.info.title + "</td>\
      <td>" + goal.category + "</td>\
      <td><a id='link' target='_blank' href='" + goal.info.link + "'>" + goal.info.link + "</a></td>\
      <td>" + goal.progress.total + "</td>\
    </tr>";

    // Add the new HTML to the end of the table body
    $("#goals").append(html);

});

// categories.set({
// 	"health": {"subcategories": ["exercise", "food", "habits"]},
// 	"education": {"subcategories": ["humanities", "technology", "science"]},
// 	"skills": {"subcategories": ["crafts", "culinary", "music"]}
// });


$(window).load(function () {
	$("#goalForm").submit(submitGoal);
});