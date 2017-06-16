// ================== HOVER ANIMATIONS ============================
$("#buttonWrap").hover(
  function(){
    $('#conhecaOsServicos').css('background-color', 'FFC926')
    $('#conhecaOsServicos').css('color', '#fff')
    $('#buttonWrap').css('border', 'solid 1px #FFC926')
    $('#buttonWrap').css('border-radius', '5px')
    $('#conhecaOsServicos').css('border-radius', '5px')
  },
  function(){
    $('#conhecaOsServicos').css('background-color','transparent')
    $('#conhecaOsServicos').css('color', 'FFC926')
    $('#buttonWrap').css('border', 'solid 1px transparent')
    $('#buttonWrap').css('border-radius', '0px')
    $('#conhecaOsServicos').css('border-radius', '0px')
  }
);

$('#buttonWrap2').hover(
  function() {
    $('#submit').css('background-color','transparent')
    $('#submit').css('color','#FFC926')
    $('#buttonWrap2').css('border','solid 1px #FFC926')
  },
  function() {
    $('#submit').css('background-color','#FFC926')
    $('#submit').css('color','#FFF')
    $('#buttonWrap2').css('border','solid 1px transparent')
  }
);

$('#btnShowForm').hover(
  function() {
    $('#btnShowForm').css('background-color','transparent')
    $('#btnShowForm').css('color','#FFC926')
  },
  function() {
    $('#btnShowForm').css('background-color','#FFC926')
    $('#btnShowForm').css('color','#FFF')
  }
);

$('#btnHideForm').hover(
  function() {
    $('#btnHideForm').css('background-color','transparent')
    $('#btnHideForm').css('color','#FFC926')
  },
  function() {
    $('#btnHideForm').css('background-color','#FFC926')
    $('#btnHideForm').css('color','#FFF')
  }
);



//=============== BUTTON ACTIONS ====================================
$('#btnHideForm').on('click', function(){
  $('#contact').css('top', '94%');
  $('#btnHideForm').css('display', 'none');
  $('#btnShowForm').css('display', 'block');
});

$('#btnShowForm').on('click', function(){
  $('#contact').css('top', '0%');
  $('#btnHideForm').css('display', 'block');
  $('#btnShowForm').css('display', 'none');
});

$('#cotacaoMobile').on('click', function(){
  $('#presentation').css('display', 'none');
  $('#contact').css('display', 'block');
});

// =============== CONTADOR DE CARACTERES ===========================
$(document).ready(function(){
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });
});
