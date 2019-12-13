$('#submit').click(function() {
    if($('#inputPassword4').val().length < 8) {
        alert('Minimum length = 8');
    } else {
        $('form').submit();
    }
    var password = $('#inputPassword4').val();
    var password2 = $('$retypePassword').val();
    if (password === password2) {
        $('form').submit();
    } else {
        alert('Passwords do not match')
    }
})