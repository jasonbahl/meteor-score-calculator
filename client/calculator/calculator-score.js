Template.calculatorScore.helpers({
	score: function() {

		// Get the total
		$total = Session.get('total');

		// Get the missed
		$missed = Session.get('missed');

		// Calculate the new score
		$score = ($total-$missed);

		// Set the newScore session
		Session.set( 'score', $score );

		// Return the total minus the missed
		return $score;

	},
	total: function() {
		return Session.get('total');
	},
	percent: function() {

		// Return the newScore X 100
		return Session.get('score')/$total * 100;

	}
	});