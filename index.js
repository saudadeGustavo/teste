// ================== HOVER ANIMATIONS ============================
$("#buttonWrap").hover(
  function(){
    $('#conhecaOsServicos').css('background-color', 'FFC926')
    $('#conhecaOsServicos').css('color', '#fff')
    $('#buttonWrap').css('border', 'solid 1px #FFC926')
    $('#buttonWrap').css('width', '55%')
    $('#buttonWrap').css('border-radius', '5px')
    $('#conhecaOsServicos').css('border-radius', '5px')
  },
  function(){
    $('#conhecaOsServicos').css('background-color','transparent')
    $('#conhecaOsServicos').css('color', 'FFC926')
    $('#buttonWrap').css('border', 'solid 1px transparent')
    $('#buttonWrap').css('width', '50%')
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
