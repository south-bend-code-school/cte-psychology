$(document).ready(function(){
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
	$('.tooltipped').tooltip({delay: 50});
	var config = {
    apiKey: "AIzaSyBAImpIGb9JxO_FYM3jWj4lwNojBy0wCmc",
    authDomain: "cycology-bf692.firebaseapp.com",
    databaseURL: "https://cycology-bf692.firebaseio.com",
    storageBucket: "cycology-bf692.appspot.com",
    messagingSenderId: "406373055263"
  };
	firebase.initializeApp(config);
	
	$('submitbutton').click(writeData);
	function writeData() {
		console.log("in write data");
		
		var fname = $('#first_name').val();
		var lname = $('#last_name').val();
		var email = $('#e-mail').val();
		var projtitle = $('title_of_project').val();
		var description = $('descriptionmodal').val();
		var instructions = $('instructionsmodal').val();
	
		var project={
			first_name : fname,
			last_name : lname,
			e-mail : email,
			title : projtitle,
			description : description,
			instructions : instructions,
		};
	
	
		var newProjectKey = firebase.database().ref().child('Project').push().key;
		var updates = {};
		updates['/Project/' + newProjectKey] = project;
		firebase.storage().ref().child('images/projects/' + newProjectKey).put($('#photo')[0].files[0]).then(function(snapshot){return firebase.database().ref().update(updates).then(function(){
		window.location.replace('Community Projects.html');
	});
																
});
