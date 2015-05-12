$(document).ready(function(){
  // code in here!

  console.log("here's your data:", mockData);
  render(mockData);

// mockData.data[0].images.fixed_height.url
	function render(data){
	  var children = mockData.data;
	  children.forEach(function(item,i) {
	    var thumb = item.images.fixed_height.url;
	    $("#container").append("<div class='row'><img src='" + thumb + "'>"); // mind the single vs. double quotes!
	  });  
	}


})

function gifSearch() {
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
	xhr.done(function(data) { 
		console.log("success got data", data); 
	});	
}