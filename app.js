function getGatewaySerialNumber () {
    var bodyVersionId = $('.bodyVersionId').val();
    var displayFrameId = '0' + parseInt("00101", 2);
    var manufacturerId = $('.manufacturerId').val();
    var serialNumber = 1; 
    var colorId = $('.colorId').val();;
    var manufacturingDate = $('.year').val() + $('.month').val();
    console.log();
    console.log(manufacturingDate.toString(16));

    var gatewayId =  bodyVersionId.toString(10) + "." + displayFrameId.toString(10) + "." + manufacturerId + colorId + "." + parseInt(manufacturingDate, 10).toString(16) + serialNumber;
    $('.results').html(gatewayId);
    return console.log(gatewayId);
};

$( function() {
    $( "#datepicker" ).datepicker();
  } );

