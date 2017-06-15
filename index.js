$("#buttonWrap").hover(
  function(){
    $('#conhecaOsServicos').css('background-color', 'FFC926')
    $('#conhecaOsServicos').css('color', '#fff')
    $('#buttonWrap').css('border', 'solid 1px #FFC926')
    $('#buttonWrap').css('width', '55%')
  },
  function(){
    $('#conhecaOsServicos').css('background-color','transparent')
    $('#conhecaOsServicos').css('color', 'FFC926')
    $('#buttonWrap').css('border', 'solid 1px transparent')
    $('#buttonWrap').css('width', '50%')
  }
);
