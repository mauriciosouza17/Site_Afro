$(document).ready(function () {
  $('#memoriaCarousel').carousel({ interval: 5000, pause: 'hover' });

  $('#contatoForm').on('submit', function (evento) {
    evento.preventDefault();
    var nome = $('#nome').val().trim();
    var email = $('#email').val().trim();
    var mensagem = $('#mensagem').val().trim();

    if (!nome || !email || !mensagem) {
      $('#retorno').removeClass('alert-success').addClass('alert-danger').text('Preencha os campos obrigatórios.').show();
      return;
    }
    $('#retorno').removeClass('alert-danger').addClass('alert-success').text('Mensagem registrada para demonstração. Este formulário não envia dados pela internet.').show();
    this.reset();
  });
});
