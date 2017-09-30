$(document).ready(function() {
        $("#salaryrange").change(function(){
            $("#salaryrangeVal").val(this.value+"000")
        })

        $('input[name=travel]').change(function(){
            var value = $( 'input[name=travel]:checked' ).val();
            alert(value);
            });

        // process the form
        $('form').submit(function(event) {
    
            // get the form data
            // there are many ways to get this data using jQuery (you can use the class or id also)
            var formData = {
                'cardname'          : $('select[name=cardName]').val(),
                'cardtype'          : $('select[name=cardType]').val(),
                'cashback'          : $('input[name=cashback]:checked').val(),
                'balancetransfer'   : $('input[name=balancetransfer]:checked').val(),
                'easypayment'       : $('input[name=easypp]:checked').val(),
                'foreignerAllowed'  : $('input[name=foreignerAllowed]:checked').val(),
                'petrol'            : $('input[name=petrol]:checked').val(),
                'travel'            : $('input[name=travel]:checked').val(),
                'annualfee'         : $('input[name=annualfee]:checked').val(),
                'salaryrange'       : $('input[name=salaryrangeVal]').val()
            
            };
    
            // process the form
            $.ajax({
                type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url         : 'http://localhost:3000/cards/', // the url where we want to POST
                data        : formData, // our data object
                dataType    : 'json', // what type of data do we expect back from the server
                            encode          : true
            })
                // using the done promise callback
                .done(function(data) {
    
                    // log data to the console so we can see
                    console.log(data); 
    
                    // here we will handle errors and validation messages
                });
    
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
        });
    
    });