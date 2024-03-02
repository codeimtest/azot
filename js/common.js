$('.form_toggle_widget div').click(function() {
	// Сначала мы удаляем класс active у всех div внутри form_toggle_widget
	$('.form_toggle_widget div').removeClass('active');
	
	// Затем мы добавляем класс active к текущему div
	$(this).addClass('active');
	
	// Мы скрываем все формы внутри form_toggle_items
	$('.form_toggle_items form').hide();
	
	// Находим соответствующую форму внутри form_toggle_items и показываем ее
	var index = $(this).index();
	$('.form_toggle_items form').eq(index).show();
});

$('.application_filter div').click(function() {
	$('.application_filter div').removeClass('active')
	$(this).addClass('active')
});
$('.choice_button').click(function() {
	$('.choice_button').removeClass('active');
	$(this).addClass('active');
	var choice_value = $(this).find('input').val()
	$('input[name="company_type"]').val(choice_value)
});

// Fieldset hide\show
$('.next_form').click(function() {
	var currentFieldset = $(this).closest('fieldset');
	var nextFieldset = currentFieldset.next('fieldset');
  var $allDivs = $('.verification_steps_item');
    var $currentDiv = $('.verification_steps_item.active');
    var $nextDiv = $currentDiv.next('div');

    // Удаляем класс active у всех div внутри form_toggle_widget
    $allDivs.removeClass('active');
		// Если следующий div существует, добавляем класс active к нему
    if ($nextDiv.length) {
			$nextDiv.addClass('active');
	} else {
			// Если следующий div не существует, добавляем класс active к первому div
			$allDivs.first().addClass('active');
	}
	// Скрываем текущий fieldset плавно
	currentFieldset.fadeOut('100', function() {
    nextFieldset.fadeIn('100');
});
});

// File widget

	$('.input_file_widget input[type="file"]').change(function() {
			var filename = $(this).val().split('\\').pop();
			$(this).closest('.input_file_widget').addClass('active');
			$(this).siblings('.input_file_widget_item').find('label').text(filename);
			$(this).siblings('.input_file_widget_item').find('label').append('<div class="remove_file"><img src="images/icons/remove.svg"></div>');
			$(this).prop('disabled', true);
			$(this).parent().addClass('active')
	});
	$(document).on('click', '.remove_file', function() {
			var $inputFileWidget = $(this).closest('.input_file_widget');
			$inputFileWidget.find('input[type="file"]').val('');
			$inputFileWidget.removeClass('active');
			$inputFileWidget.find('.input_file_widget_item label').text('Загрузить');
			setTimeout(function() {
				$inputFileWidget.find('input[type="file"]').prop('disabled', false);
		}, 1000);
			$(this).remove();
	});

$('.input_file_widget:last').addClass('last')

//mask
$(".phone").mask("+7(999) 999-9999");

$('.close').click(function() {
	$('.popup').removeClass('active')
});
$('.send').click(function() {
	$('.popup').addClass('active')
});

// Menu


$(document).mouseup(function (e) {
var container = $(".menu_toggle_dropdown");
var toggle = $('.menu_toggle.active');

// Если цель клика не является контейнером и не является дочерним элементом контейнера
if (!container.is(e.target) && container.has(e.target).length === 0) {
 			container.removeClass('active');
 			toggle.removeClass('active');
 	} else { 
 			container.toggleClass('active');
 			toggle.toggleClass('active');
 	}
 });
$('.toggle_button_widget').click(function() {
	var container = $(this).children().next();
	var toggle = $(this);
	
	container.toggleClass('active');
	toggle.toggleClass('active');
	
});