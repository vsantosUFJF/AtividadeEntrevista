$(document).ready(function () {
    if (obj) {

        $('#formCadastro #Nome').val(obj.Nome);
        $('#formCadastro #CPF').val(obj.CPF);
        $('#formCadastro #CEP').val(obj.CEP);
        $('#formCadastro #Email').val(obj.Email);
        $('#formCadastro #Sobrenome').val(obj.Sobrenome);
        $('#formCadastro #Nacionalidade').val(obj.Nacionalidade);
        $('#formCadastro #Estado').val(obj.Estado);
        $('#formCadastro #Cidade').val(obj.Cidade);
        $('#formCadastro #Logradouro').val(obj.Logradouro);
        $('#formCadastro #Telefone').val(obj.Telefone);
        $('#formCadastro #NomeBene').val(obj2.Nome);
        $('#formCadastro #CPFBene').val(obj.CPF);

        var table;
        table += '<tr  id =' + obj2.Id + '><td> ' + obj2.CPF + '</td > ';
        table += '<td>' + obj2.Nome + '</td>';
        table += '<td>' + '<button /*onclick="window.location.href=\'' + urlAlteracaoBeneficiario + '/' + obj2.Id + '\'"*/ class="btn btn-primary btn-sm">Alterar</button>' + '</td>';
        table += '<td>' + '<button id = "btn-excluir" onclick="window.location.href=\'' + urlExclusao + '/' + obj.Id + '\'" class="btn btn-primary btn-sm">Excluir</button>' + '</td></tr>';
        $('#gridBeneficiarios tbody').append(table);
    }
    

    $('#formCadastro').submit(function (e) {
        e.preventDefault();
        console.log($(this).find("#CPF").val().replace(".", "").replace(".", "").replace("-", ""))
        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $(this).find("#Nome").val(),
                "CPF": $(this).find("#CPF").val().replace(".", "").replace(".", "").replace("-", ""),
                "CEP": $(this).find("#CEP").val(),
                "Email": $(this).find("#Email").val(),
                "Sobrenome": $(this).find("#Sobrenome").val(),
                "Nacionalidade": $(this).find("#Nacionalidade").val(),
                "Estado": $(this).find("#Estado").val(),
                "Cidade": $(this).find("#Cidade").val(),
                "Logradouro": $(this).find("#Logradouro").val(),
                "Telefone": $(this).find("#Telefone").val()
            },
            error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
            success:
            function (r) {
                ModalDialog("Sucesso!", r)
                $("#formCadastro")[0].reset();                                
                window.location.href = urlRetorno;
            }
        });

      
    })
    
})

$('#formCadastro').submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: urlPost1,
        method: "POST",
        data: {
            "NOME": $(this).find("#NomeBene").val(),
            "CPF": $(this).find("#CPFBene").val().replace(".", "").replace(".", "").replace("-", ""),
        },

        error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
        success:
            function (r) {
                $("#formCadastro")[0].reset();
                window.location.href = urlRetorno;
            }
    });
})

$('#btn-excluir').click(function (e) {
    ModalDialogExcluir("Sucesso!")
    $('#exampleModal').modal('hide');

})


function ModalDialogExcluir(titulo) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p> Beneficiário excluído com sucesso </p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}


function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}
