let $skill = $('#text-box');

$('#add-skill')
	.click(function(e) {
		$(`<li class="added"><button class="remove">X</button>${$skill.val()}</li>`)
			.appendTo('ul');
		$('.remove')
			.click(function() {
				$(this)
					.closest('li')
					.fadeOut(1000, function() {
						$(this)
							.remove();
					});
			});
	});
