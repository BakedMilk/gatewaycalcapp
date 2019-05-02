const picker = datepicker('#datepicker', {
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  }
})


function getGatewaySerialNumber () {
    var bodyVersionId = $('.bodyVersionId').val();
    var displayFrameId = '0' + parseInt("00101", 2);
    var manufacturerId = $('.manufacturerId').val();
    var serialNumber = $('.serialNumber').val(); 
    var colorId = $('.colorId').val();;
    var manufacturingDate = ($('#datepicker').val().split('.').join("").substring(2) 
                            + 
                            $('#datepicker').val().split('.').join("").substring(2).substring(0, 2))
                            .substring(4).toString(16);

        for (var i = 1; i < serialNumber; i++) {
           var gatewayId =  bodyVersionId.toString(10) + "." + displayFrameId.toString(10) + "." + manufacturerId + colorId + "." + parseInt(manufacturingDate, 10).toString(16) + 0 + i++;
            $('.results').html(gatewayId);
            return console.log(gatewayId); 
        }



    
};


