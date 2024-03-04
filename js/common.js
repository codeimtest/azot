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
	$('.application_filter div').removeClass('active');
	$(this).addClass('active');
});
$('.choice_button').click(function() {
	$('.choice_button').removeClass('active');
	$(this).addClass('active');
	var choice_value = $(this).find('input').val();
	$('input[name="company_type"]').val(choice_value);
});

$('.application_filter > div').click(function(){
	$('.application_filter > div').removeClass('active');
	$(this).addClass('active');
	var docsItem = $(this).data('docs-item');
	var docsTab = $('.documents_widget');
	var appItem = $(this).data('table-item');
	var appTab = $('.application_widget_item table > tr');

	docsTab.hide();
	docsTab.filter('[data-docs="' + docsItem + '"]').fadeIn(100); 
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
$('.verification_steps > div').click(function(){
	$('.verification_steps > div').removeClass('active');
	$(this).addClass('active');
	var step = $(this).data('step');
	var stepField = $('fieldset');

	stepField.each(function() {
			var fieldStep = $(this).data('field');
			if (fieldStep === step) {
					$(this).fadeIn(100);
			} else {
					$(this).hide();
			}
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
$('.send').click(function(e) {
	$('.for-contact').addClass('active')
	e.preventDefault();
});
$('.to-application').click(function(e) {
	$('.for-profile').addClass('active')
	e.preventDefault();
});
$('.to-application-send').click(function(e) {
	$('.popup').removeClass('active')
	$('.for-application').addClass('active')
	e.preventDefault();
});
$('.docs_link').click(function(e){
	$('.for-docs').addClass('active')
	e.preventDefault();
})

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


//other form items

	$('.minus').click(function() {
			var input = $(this).siblings('input[type="number"]');
			var value = parseInt(input.val(), 10);
			var min = parseInt(input.attr('min'), 10);
			var step = parseInt(input.attr('step'), 10);
			if (value > min) {
					input.val(value - step);
			}
	});

	$('.plus').click(function() {
			var input = $(this).siblings('input[type="number"]');
			var value = parseInt(input.val(), 10);
			var max = parseInt(input.attr('max'), 10);
			var step = parseInt(input.attr('step'), 10);
			if (value + step <= max) {
					input.val(value + step);
			}
	});

	$('input[type="number"]').on('input', function() {
			var input = $(this);
			var value = parseInt(input.val(), 10);
			var max = parseInt(input.attr('max'), 10);
			if (value > max) {
					input.val(max);
			}
	});

$('.js-select-single').select2({
	minimumResultsForSearch: -1,
});
