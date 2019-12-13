$('#insertMessage').keyup(function(event){
    if(event.keyCode == 27){
        $(this).val('')
    }

    // var currentValue = $(this).val()
    // $('#some-heading').html(currentValue)
})

$('#insertMessage').keyup(function(e){
    var currentText = $(this).val()
    if (e.keyCode == 13) {
        var userNameValue = $('#userName').val()
        var userName = $('<strong><span></strong>')
        userName.html(userNameValue)
        $('#wrapper2').append(userName)
        var minutes = date.getMinutes();
        var hours = date.getHours();
        var day = date.getDay();
        var month = date.getMonth();
        var year = date.getFullYear();
        var currentTimeValue = ' ' + day +  '.' + month + '.' + year + ' ' + hours + ':' + minutes;
        $('#wrapper2').append(currentTimeValue);

        var newP = $('<p>')
        newP.html(currentText)
        $('#wrapper2').append(newP)
        $(this).val('')
    }

})

var date = new Date();

$('#send-btn').click(function(){
    var userNameValue = $('#userName').val()
    var userName = $('<strong><span></strong>')
    userName.html(userNameValue)
    $('#wrapper2').append(userName)
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var currentTime = ' ' + day +  '.' + month + '.' + year + ' ' + hours + ':' + minutes;
    $('#wrapper2').append(currentTime);
    

    var currentText = $('#insertMessage').val()
    var newP = $('<p>')
    newP.html(currentText)
    $('#wrapper2').append(newP)
    $('#insertMessage').val('')


})