


$(document).ready(function() {

		function changeICaddy() {
				$('#projectTitle').text('iCaddy');
				$('#projectContent').text('An application born out of my love for the game of golf. iCaddy is a free platform that provides recreational golfers with a score tracking platform that automatically runs analytics on their performances, providing a base from which to improve their game.');				
				$('#techStack').text('Tech Stack: JavaScript, HTML5, CSS3, Node.js, Express, Query, PostgreSQL, BootStrap, Chart.js');	
		}

		function changeEncore() {
				$('#projectTitle').text('Encore');
				$('#projectContent').text('Encore was created with 4 friends, with the purpose of making hosting an event easier, by providing a single destination from which to browse all the musical and artistic performers available for hire in their local area.');				
				$('#techStack').text('Tech Stack: Ruby on Rails, HTML5, CSS3, JQuery, PostgreSQL, BootStrap');	
		}

		function changeQuora() {
				$('#projectTitle').text('Quora For Dummies');
				$('#projectContent').text('Initially inspired by the hit Q&A platform, Quora, Quora For Dummies was created in order to provide a platform for questions that only require a more simplistic answer. Through providing respondents with a finite number of options on which they can vote, Quora For Dummies provides a great pulse check on whatever is on your mind!');			
				$('#techStack').text('Tech Stack: Ruby on Rails, HTML5, CSS3, PostgreSQL, BootStrap, Chartkick.js');
		}

		function changeRentalFind() {
				$('#projectTitle').text('Rental Find');
				$('#projectContent').text('Rental Find was developed as part of a 4 person team, over a 36 hour period, during a hackathon hosted by The Zillow Group; which granted access to their New Listing and Public Records API. Rental Find was created in order to help streamline the process of finding investment properties, helping to tune out the noise during the search process, and help individuals find cashflow positive properties.');
				$('#techStack').text('Tech Stack: Ruby on Rails, JavaScript, HTML5, CSS3, JQuery, BootStrap, Zillow API, Retsly API');		
		}

		function changeWeShallGift() {
				$('#projectTitle').text('We Shall Gift');
				$('#projectContent').text('An app that takes the hassle out of arranging group gifts, from idea generation, handling payments, to gift voting and group message boards.');
				$('#techStack').text('Tech Stack: Ruby on Rails, Devise, Stripe Connect, Amazon Product Advertising API, Twilio & SendGrid');		
		}

		function changeElection2016() {
				$('#projectTitle').text('#Election2016');
				$('#projectContent').text('The platform allows users to browse what the USA is tweeting about in the run up to the 2016 election, through filtering election related tweets via geographical origin, and displaying them grouped by major city.');
				$('#techStack').text('Tech Stack: Developed using JavaScript, Node.js, with data obtained from the Twitter Search API');		
		}


		// project 1 - iCaddy //						
		$('#portfolio1').hover(changeICaddy);

		// project 2 - ENCORE //
		$('#portfolio2').hover(changeEncore);

		// project 3 - Quora for Dummies //
		$('#portfolio3').hover(changeQuora);	

		// project 4 - Rental Find //
		$('#portfolio4').hover(changeRentalFind);

		// project 5 - weatherApp //
		$('#portfolio5').hover(changeWeShallGift);

		// project 6 - #Election2016 //
		$('#portfolio6').hover(changeElection2016);

});
