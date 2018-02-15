'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	var url = "/project/" + idNumber;
	$.get(url, addProject);
	console.log("User clicked on project " + idNumber);
}

function addProject(result){
	console.log(result);
	var id = "#project"+result.id +" .details";
	console.log(id);
	var htmlString = '<div class="thumbnail" >' + '<img src="' + result['image'] 
	+ '" class="detailsImage">' +"<h4>" + result['title'] + "</h4>" +"<h5>" + result['date'] + "</h5>" +"<p>" + result['summary'] + "</p>" +"</div>";
	$(id).html(htmlString);
}