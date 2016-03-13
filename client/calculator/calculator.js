Template.calculator.helpers({
	total: function() {
		return Session.get('total');
	},
	missed: function() {
		return Session.get('missed');
	}

	});

	Template.calculator.events({
	'submit form#calculator': function ( e, tpl ) {

		// Prevent Default function
		e.preventDefault();

		// Set the session vars as the form values
		Session.set('total', $('form#calculator input[name="total"]').val() );
		Session.set('missed', $('form#calculator input[name="missed"]').val() );

		// Clear the "missed" value
		$('form#calculator input[name="missed"]').val("");

		// Set the cursor to the "missed" field for next entry
		$('form#calculator input[name="missed"]').focus();

	}
});