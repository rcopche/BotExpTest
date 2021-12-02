module.exports = {
    pegarDataAtual(){
        var dataAtual = new Date();
        var dia = (dataAtual.getDate()<10 ? '0' : '') + dataAtual.getDate();
        var mes = ((dataAtual.getMonth() + 1)<10 ? '0' : '') + (dataAtual.getMonth() + 1);
        var ano = dataAtual.getFullYear();
        var hora = (dataAtual.getHours()<10 ? '0' : '') + dataAtual.getHours();
        var minuto = (dataAtual.getMinutes()<10 ? '0' : '') + dataAtual.getMinutes();
        var segundo = (dataAtual.getSeconds()<10 ? '0' : '') + dataAtual.getSeconds();
      
        var dataFormatada = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto + ":" + segundo;
        return dataFormatada;
    }
}
