var upperDisplay = '';
var equals = false;
var comm = false;

$('.keypad').click(function() {
  var display = upperDisplay.split(/[\s]+/)[upperDisplay.split(/[\s]+/).length - 1].length;

  $('#result').css('font-size', display >= 7 ? 412 / (display + 1) + 'px' : '55px');

  if ($(this).hasClass('number')) {
    if ($('#result').html() === '0') {
      if (this.id !== 'zero') {
        $('#result').html($(this).text());
        upperDisplay += $(this).html();
        $('#upperDisplay').html(upperDisplay);
        comm = false;
      }
    } else {
      if (upperDisplay[upperDisplay.length - 1] === ' ' || upperDisplay === '') {
        $('#result').html('');
      }
      if (equals) {
        upperDisplay = '';
        $('#result').html('');
        equals = false;
      }
      $('#result').html($('#result').html() + $(this).text());
      upperDisplay += $(this).html();
      $('#upperDisplay').html(upperDisplay);
      comm = false;
    }
  } else {
    switch (this.id) {
      case 'clear':
        $('#result').html('0');
        $('#result').css('font-size', '55px');
        upperDisplay = '';
        $('#upperDisplay').html(upperDisplay);
        comm = false;
        break;

      case 'plus':
        $('#result').css('font-size', $('#result').html().length > 7 ? 412 / ($('#result').html().length) + 'px' : '55px');
        if (!upperDisplay) break;
        if (comm) upperDisplay = upperDisplay.substring(0, upperDisplay.length - 3);
        if (equals) upperDisplay = $('#result').html();
        upperDisplay += ' + ';
        $('#upperDisplay').html(upperDisplay);
        comm = true;
        equals = false;
        break;

      case 'minus':
        $('#result').css('font-size', $('#result').html().length > 7 ? 412 / ($('#result').html().length) + 'px' : '55px');
        if (!upperDisplay) break;
        if (comm) upperDisplay = upperDisplay.substring(0, upperDisplay.length - 3);
        if (equals) upperDisplay = $('#result').html();
        upperDisplay += ' - ';
        $('#upperDisplay').html(upperDisplay);
        comm = true;
        equals = false;
        break;

      case 'multiply':
        $('#result').css('font-size', $('#result').html().length > 7 ? 412 / ($('#result').html().length) + 'px' : '55px');
        if (!upperDisplay) break;
        if (comm) upperDisplay = upperDisplay.substring(0, upperDisplay.length - 3);
        if (equals) upperDisplay = $('#result').html();
        upperDisplay += ' * ';
        $('#upperDisplay').html(upperDisplay);
        comm = true;
        equals = false;
        break;

      case 'divide':
        $('#result').css('font-size', $('#result').html().length > 7 ? 412 / ($('#result').html().length) + 'px' : '55px');
        if (!upperDisplay) break;
        if (comm) upperDisplay = upperDisplay.substring(0, upperDisplay.length - 3);
        if (equals) upperDisplay = $('#result').html();
        upperDisplay += ' / ';
        $('#upperDisplay').html(upperDisplay);
        comm = true;
        equals = false;
        break;

      case 'percent':
        if (upperDisplay[upperDisplay.length - 1] !== ' ' && upperDisplay[upperDisplay.length - 1] !== '%') {
          upperDisplay += '%';
          $('#upperDisplay').html(upperDisplay);
          comm = false;
          equals = false;
        }
        break;
        
      case 'equals':
        if (upperDisplay[upperDisplay.length - 1] !== ' ') {
          upperDisplay += ' = ';
          $('#upperDisplay').html(upperDisplay);
          var answer = eval(upperDisplay.replace('=', '').split('%').join('*0.01'));
          if (answer.toString().length > 7) {

            $('#result').css('font-size', 412 / (answer.toString().length) + 'px');
            $('#result').html(answer);
          } else {
            $('#result').css('font-size', '55px');
            $('#result').html(answer);
          }
          upperDisplay = $('#result').html();
          equals = true;
        }
        break;
    }
  }
});
