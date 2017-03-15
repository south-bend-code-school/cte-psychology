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
</script>
});

