setTimeout(function(){
	$('label[for="radio_choice_00"]').hide();
   var text_val = $(".form-row .totals").text();   
   if(text_val == "Brezplačno!") {
    $('label[for="radio_choice_0"]').show();
	
	 $('label[for="radio_choice_00"]').hide();
   }
   else{
   $('label[for="radio_choice_00"]').show();	  $('label[for="radio_choice_0"]').hide();
   }
},100);



$(".product_qty ").click(function(){

var text_val = $(".price .woocommerce-Price-amount bdi").text();
  alert(text_val);
});

//////////

$('label[for="radio_choice_00"]').click(function(){

var text_val = $('label[for="radio_choice_00"]') .text() ;
$(".text-small.dost").text(text_val);
  alert(text_val);
 
});

///////////


$( document ).ready(function()

$(document).ready(function(){
	var text_val = $('label[for="radio_choice_00"]') .text() ;
	var text_vall = $('label[for="radio_choice_0"]') .text() ;
if (text_val == "Klasična dostava (3-6 delovnih dni)"){
$(".text-small.dost").text(text_val);
  alert(text_val);
}

else if (text_vall == "Brezplačna dostava (3-6 delovnih dni)"){
	
$(".text-small.dost").text(text_vall);
  alert(text_vall);
}

});


$(document).ready(function(){
	var text_val = $('label[for="radio_choice_00"]') .text() ;
	var text_vall = $('label[for="radio_choice_0"]') .text() ;
if (text_val == "Klasična dostava (3-6 delovnih dni)"){
$(".text-small.dost").text(text_val);
  //alert(text_val);
}

 if (text_vall == "Brezplačna dostava (3-6 delovnih dni)"){
	
$(".text-small.dost").text(text_vall);
  //alert(text_vall);
}

});

fffffffffffffffffffff
$(document).ready(function(){
	var text_val = $('label[for="radio_choice_00"]').text();
	var text_vall = $('label[for="radio_choice_0"]').text();
if (text_val == "Klasična (3-6 delovnih dni)"){
$(".text-small.dost").text(text_val);
  alert(text_val);
}

 if (text_vall == "Brezplačna (3-6 delovnih dni)"){
	
$(".text-small.dost").text(text_vall);
  alert(text_vall);
}

});




$(document).ready(function(){
	var text_vall = $('label[for="radio_choice_0"]').text();
   if (text_vall == "Brezplačna dostava (3-6 delovnih dni)"){
   $(".text-small.dost").replaceWith("Brezplačna (3-6 delovnih dni)");
}
});





--------------------------

 $(document).ready(function()=>{
            $("#select2-billing_state-container").val('AL');
        }); 


 $(document).ready(function(){
            $("#select2-billing_state-container").val('AL');
        }); 

 $(document).ready(()=>{
            $("#select option[value=3]").attr('selected', 'selected');
        }); 




$(document).ready(function(){
            ('#select2-billing_state-container option[value="AL"]').attr('selected', 'selected');
        }); 
====================
jQuery(document).ready(function(){
         var test =   jQuery('select#billing_state option[value="AL"]').text();
		 //alert(test);
		 jQuery('#select2-billing_state-container').text(test);
		 jQuery('#select2-billing_state-container').attr('title', test);
        }); 
==============

<script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
    </script>
<script>
jQuery(document).ready(function(){
         var state =   jQuery('select#billing_state option[value="AL"]').text();
		 alert(state);
		 jQuery('#select2-billing_state-container').text(state);
		 jQuery('#select2-billing_state-container').attr('title', state);
        }); 
</script>



setTimeout(function() {
  $('#product_qty').click(function(){
    var text = $(this).text();
    alert(text);
  });   
},100);

$(".product_qty ").click(function(){

var text_val = $(".price .woocommerce-Price-amount bdi").text();
  alert(text_val);
});







jQuery(document).ready(function($) {
  // Replace "billing_address_1" with the actual ID or name of the billing address 1 field
  var billing_address_1 = $('#billing_address_1');
  var billing_houseno =$('#billing_houseno');

  // Change the placeholder text
  billing_address_1.attr('placeholder', 'Název ulice');
  billing_houseno.attr('placeholder','Číslo popisné/orientační')
});
















$(document).ready(function(){
	var text_vall = $('label[for="radio_choice_0"]').text();	
if (text_vall == "Brezplačna dostava (3-6 delovnih dni)"){
$(".text-small.dost").text(text_vall);
  alert(text_vall);
}
});



$(document).ready(function(){
	var text_val = $('label[for="radio_choice_00"]').text();	
if (text_val == "Klasična dostava (3-6 delovnih dni)"){
$(".text-small.dost").text(text_val);
  alert(text_val);
}
});






jQuery(document).ready(function () {

/*For on clic 123x sticky add to cart price change*/
//regular price
setTimeout(function(){
$(".product_qty ").click(function(){

var text_val = $(".mprice .woocommerce-Price-amount bdi") .text() ;
$(".storefront-sticky-add-to-cart__content-price .woocommerce-Price-amount").text(text_val);
  //alert(text_val);
var text_val1 = $(".mprice del span.woocommerce-Price-amount").text();
$(".storefront-sticky-add-to-cart__content-product-info span.storefront-sticky-add-to-cart__content-price del").text(text_val1);
//alert(text_val1);  
});

},100);




$(document).ready(function(){
    // Get value on button click and show alert
    $(".product_qty").click(function(){
        var txt = $(".mprice del span.woocommerce-Price-amount").text();
        alert(txt);
    });
});


jQuery(document).ready(function(){
         var state =   jQuery('select#bulk-action-selector-top option[value="mark_processing"]').text();
		 alert(state);
		 //jQuery('#select2-billing_state-container').text(state);
		 //jQuery('#select2-billing_state-container').attr('title', state);
        }); 
		
		jQuery(document).ready(function(){
         var state =   jQuery('select.alignleft  option[value="mark_processing"]').text();
		 alert(state);
		 jQuery('#bulk-action-selector-top').text(state);
		 //jQuery('#select2-billing_state-container').attr('title', state);
        }); 
		
		
		
		
		<script>

 setTimeout(function(){
         var state =   jQuery('select#billing_state option[value="AL"]').text();
		 //alert(state);
		 jQuery('#select2-billing_state-container').text(state);
		 jQuery('#select2-billing_state-container').attr('title', state);		 
        }, 1500); 

 setTimeout(function(){
	jQuery("span.selection").click(function(){
	//alert("hiii");
	 jQuery("ul#select2-billing_state-results li:nth-child(1)").attr('data-selected', false);
     jQuery("ul#select2-billing_state-results li:nth-child(2)").attr('data-selected', true);
	 });
}, 2000);
</script>


setTimeout(function(){

jQuery("#ship-to-different-address-checkbox").prop('checked', false);
},2000);



setTimeout(function(){
	$('label[for="radio_choice_00"]').hide();
   var text_val = $(".form-row .totals").text();   
   if(text_val == "Brezplačno!") {
    $('label[for="radio_choice_0"]').show();
	
	 $('label[for="radio_choice_00"]').hide();
   }
   else{
   $('label[for="radio_choice_00"]').show();	  $('label[for="radio_choice_0"]').hide();
   }
},100);




$(document).ready(function() {
  // Select the desired radio buttons
  //$('input[name="radio_choice"][value="0"]').prop('checked', true);
  var text_val = $(".form-row .totals").text();   
  if(text_val == "Ingyenes!"){
	$('input[name="radio_choice"][value="0"]').prop('checked', true);  
  }else {
	  $('input[name="radio_choice"][value="00"]').prop('checked', true);
  }
 
});




setTimeout(function() {
  $('#toggleCheckbox').change(function() {
    if ($(this).is(':checked')) {
      $('.woocommerce-billing-fields__field-wrapper').show();
    } else {
      $('.woocommerce-billing-fields__field-wrapper').hide();
    }
  });
},100);





$(document).ready(function(){
$(".product_qty ").click(function(){

var text_val = $(".mprice .woocommerce-Price-amount bdi") .text() ;
$(".storefront-sticky-add-to-cart__content-price .woocommerce-Price-amount").text(text_val);
  alert(text_val);
var text_val1 = $(".mprice del span.woocommerce-Price-amount").text();
$(".storefront-sticky-add-to-cart__content-product-info span.storefront-sticky-add-to-cart__content-price del").text(text_val1);
alert(text_val1);  
});

});






$(document).ready(function() {
  $('#billing_phone').on('input', function() {
    var phoneNumber = $(this).val();

    if (this.validity.valid) {
      // Field is valid
      $(this).css('color', 'black'); // Change color to black or any other desired color
    } else {
      // Field is invalid
      $(this).css('color', 'red'); // Change color to red or any other desired color
    }
  });
});



run
jQuery(document).ready(function($) {
  $('#billing_phone').on('input', function() {
    var phoneNumber = $(this).val();
    var phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength >= 10 && phoneNumberLength <= 12) {
      $(this).css('color', 'green'); // Change color to green or any other desired color
    } else {
      $(this).css('color', 'red'); // Change color to red or any other desired color
    }
  });
});







jQuery(document).ready(function($) {
  $('form.checkout').on('checkout_error', function() {
    var invalidFields = $(this).find('.woocommerce-invalid-required-field, .woocommerce-invalid-phone');

    invalidFields.css('color', 'red'); // Change color to red or any other desired color
  });
});



jQuery(document).ready(function($) {
  $('#billing_phone').on('input', function() {
    var phoneNumber = $(this).val();
    var phoneNumberLength = phoneNumber.length;
   alert (phoneNumberLength);
    if (phoneNumberLength == 9 ) {
      $(this).css('color', 'green'); // Change color to green or any other desired color
    } else {
      $(this).css('color', 'red'); // Change color to red or any other desired color
    }
  });
});





=========21

jQuery(document).ready(function($) {
  $('#billing_phone').on('input', function() {
    var phoneNumber = $(this).val();
    var phoneNumberLength = phoneNumber.length;
   alert (phoneNumberLength);
    if (phoneNumberLength == 9 ) {
      $(this).css('box-shadow', 'green'); // Change color to green or any other desired color
    } else {
      $(this).css('box-shadow', 'red'); // Change color to red or any other desired color
    }
  });
});





jQuery(document).ready(function($) {
  
  $('form.checkout').on('checkout_place_or// Get the phone number field value
    var phoneNumber = $('input#billing_phone');

    
    if (phoneNumber.val() === '') {
     
      phoneNumber.addClass('invalid-phone');
      return false; 
    } else if (!/^\+?[0-9]+$/.test(phoneNumber.val())) {
      
      phoneNumber.addClass('invalid-phone');
      return false; 
    } else {
      
      phoneNumber.removeClass('invalid-phone');
    }
  });
});






jQuery(document).ready(function($) {
  var postcodeField = $('input#postcode');

  
  postcodeField.on('input', function() {
  
    var postcode = $(this).val();

  
    var isValidPostcode = validatePostcode(postcode);

  
    if (isValidPostcode) {
     
      $(this).removeClass('invalid-postcode');
      $(this).addClass('valid-postcode');
    } else {
     
      $(this).removeClass('valid-postcode');
      $(this).addClass('invalid-postcode');
    }
  });
  
  
  
  
  
  add_filter('woocommerce_available_payment_gateways', 'default_selected_payment_method');

function default_selected_payment_method($gateways) {
    // Change 'cod' to the ID of your Cash on Delivery payment method
    $default_payment_method = 'cod';

    if (isset($gateways[$default_payment_method])) {
        $gateways[$default_payment_method]->set_current();
    }

    return $gateways;
}



<script>
var lastPageUrl = document.referrer;

// Output the last page URL to the console
console.log("Last Page URL: " + lastPageUrl); 


window.location.reload();
</script>



<script>
// Check if the checkout page has been reloaded
var hasReloaded = sessionStorage.getItem('hasReloaded');

if (!hasReloaded) {
  // Get the last page URL
  var lastPageUrl = document.referrer;

  // Output the last page URL to the console
  console.log("Last Page URL: " + lastPageUrl);

  // Set the flag to indicate that the checkout page has been reloaded
  sessionStorage.setItem('hasReloaded', true);

  // Reload the checkout page
  location.reload();
}
</script>


<script>
	jQuery(document).ready(function($) {
  // Set "Cash on Delivery" as the default selected payment method
  $('input[name="payment_method"]').filter('[value="cod"]').prop('checked', true);
});
</script>




for  unchecked
<script>
	setTimeout(function($) {
	jQuery(document).ready(function($) { 
  var noPaymentOption = $('ul.wc_payment_methods.payment_methods.methods input[type="radio"]');  
  noPaymentOption.prop('checked', false);
	});
	},2000);
</script>


old provina cod snippet 


 add_filter( 'default_checkout_billing_state', 'change_default_checkout_state' );
function change_default_checkout_state() {
  return 'AL'; // state code
}  


,'AG'


add_filter( 'woocommerce_available_payment_gateways', 'payment_gateway_disable_country' );
function payment_gateway_disable_country( $available_gateways ) {
    if ( is_admin() ) {
        return $available_gateways;
    }
    if ( ! isset( $available_gateways['cod'] ) ) {
        return $available_gateways;
    }
    global $woocommerce;
    $targeted_countries =  array('CT','CS','KR','CZ','TP','SR','NA','PA','RC','AG','RG','SA','ME','MS','TA');
    
	if(WC()->customer) {
		if ( isset( $available_gateways['cod'] ) && in_array(WC()->customer->get_billing_state(), $targeted_countries) ) {
        	unset( $available_gateways['cod'] );
    	}
	}
  
    return $available_gateways;
}
add_action('wp_footer', 'billing_country_update_checkout', 50);
function billing_country_update_checkout() {
    if ( !is_checkout() ) return;
    ?>
    <script type="text/javascript">
       setTimeout(function(){
          jQuery('select#billing_state').change(function() {
                   
                    console.log('Event: Page is reloaded');
                    
                    jQuery('body').trigger('update_checkout');
            });
	   },1500);
    </script>
    <?php
}




reload window script 

<script>
		jQuery(document).ready(function(){
			$("td.product-remove").click(function(){
				 setTimeout(function(){  location.reload(); }, 2000);
				    
			});
		});
function deletesproduct() {
  window.location.replace('http://test.3vendo.si/cart/?remove_item=<?php echo $removekey;  ?>&_wpnonce=<?php echo $wpononce;  ?>');
}
</script>
		
		
======================	Add or remove class	
		
	<script>
setInterval(function(){
var getclass = $("#kid").attr("class");
 if (getclass == 'kid')
 {
 $(".woocommerce-cart").removeClass("upsellnewclass");
 }
 else
 {
 $(".woocommerce-cart").addClass("upsellnewclass");
 }
},2000);
</script>	
==============================



$(document).ready(function(){
        //length in characters
    var maxLength = 5;
    var ellipsestext = "...";
    var moretext = "Read Less";
    var lesstext = "Read More";
    $(".secondupsaledescription").each(function(){
        //get the text of paragraph or div
        var myStr = $(this).text();
        
       // check if it exceeds the maxLength limit
        if($.trim(myStr).length > maxLength){
            //get only limited string firts to show text on page load
            var newStr = myStr.substring(0, maxLength);

            //get remaining string         
 var removedStr = myStr.substr(maxLength, $.trim(myStr).length - maxLength);
            // now append the newStr + "..."+ hidden remaining string
            var Newhtml = newStr + '<span class="moreellipses">' + ellipsestext+ '</span><span class="morecontent"><span>' + removedStr + '</span>&nbsp;&nbsp;<a href="javascript:void(0)" class="ReadMore">' + moretext + '</a></span>';
 
            $(this).html(Newhtml);
            
        }
    });
    
    //function to show/hide remaining text on ReadMore button click
    $(".ReadMore").click(function(){
       
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        }
         else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});



final
*************************

<script>
setTimeout(function(){
	
	$('morecontent .ReadMore').addClass('less')
        //length in characters
    var maxLength = 31;
    //var ellipsestext = "...";
	var lesstext = "Read Less";
    var moretext = "Read More";

    $(".opisupsica").each(function(){
        //get the text of paragraph or div
        var myStr = $(this).text();
       // check if it exceeds the maxLength limit
        if($.trim(myStr).length > maxLength){
            //get only limited string firts to show text on page load
            var newStr = myStr.substring(0, maxLength);
            //get remaining string
 var removedStr = myStr.substr(maxLength, $.trim(myStr).length - maxLength);
            // now append the newStr + "..."+ hidden remaining string
            var Newhtml = newStr + '<span class="moreellipses">' + '</span><span class="morecontent"><span style="display:none;">' + removedStr + '</span>&nbsp;&nbsp;<a href="javascript:void(0)" class="ReadMore">' + moretext + '</a></span>';
            $(this).html(Newhtml);
        }
    });
    //function to show/hide remaining text on ReadMore button click
    $(".ReadMore").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        }
         else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
},1000);
</script>




<script>
	setTimeout(function(){
	jQuery(document).ready(function($) { 
        $('#payment_method_cod').trigger('click');
    });
},2000);
</script>



jQuery(document).ready(function($) { 
        $('#payment_method_cod').trigger('click');
    
	
	if(#billing_postcode = ''){
		$('#payment_method_cod').trigger('click');
	}
	else{
		$('#payment_method_cod').trigger('click');
	}
	
	
	});
	
	
	
	

	
	
	
	
	
	 $(document).ready(function() {
      // Get the text value of the div with id "myDiv"
      var textValue = $('#myDiv').text();
      console.log(textValue);
    });
	
	
	
	$(document).ready(function() {
		var ashok =$('.woocommerce-product-details__short-description').text();
		console.log(ashok);
		
	});
	
	
	
	$(document).ready(function() {
    $('#custom_checkbox_billing').click(function() {
        if ($(this).is(':checked')) {
            $('.woocommerce-billing-fields__field-wrapper').fadeIn();
        } else {
            $('.woocommerce-billing-fields__field-wrapper').fadeOut();
        }
    });
});




$(document).ready(function() {
    $('#custom_checkbox_billing').change(function() {
        if ($(this).is(':checked')) {
            $('.woocommerce-billing-fields__field-wrapper').show();
        } else {
            $('.woocommerce-billing-fields__field-wrapper').hide();
        }
    });
});

////////////////////////////////////

add_filter('default_checkout_billing_state', 'change_default_checkout_state');
function change_default_checkout_state()
{	
	return 'AL'; // state code
}

add_filter('woocommerce_available_payment_gateways', 'payment_gateway_disable_country');
function payment_gateway_disable_country($available_gateways)
{
    global $woocommerce;

    if (is_admin()) {
        return $available_gateways;
    }
    if (!isset($available_gateways['cod'])) {
        return $available_gateways;
    }

    $not_allowed_states = ['AG', 'CT', 'CS', 'KR', 'CZ', 'TP', 'SR', 'NA', 'PA', 'RC', 'RG', 'SA', 'ME', 'MS', 'TA'];

    $selected_state_code = 'AL';
	
    if (!empty(WC()->customer)) {
        $selected_state_code = WC()->customer->get_billing_state();
    }

    if (in_array($selected_state_code, $not_allowed_states)) {
        WC()->session->set('chosen_payment_method', 'payment_method_mollie_wc_gateway_creditcard');
        ?>
        <script type="text/javascript">
            jQuery('li.wc_payment_method.payment_method_cod').css('display', 'none');
        </script>
        <?php

    }

    return $available_gateways;
}

add_action('wp_footer', 'billing_country_update_checkout', 50);
function billing_country_update_checkout()
{
    if (!is_checkout()) {
        return;
    }
    ?>
    <script type="text/javascript">
        setTimeout(function () {
            jQuery('select#billing_state').change(function () {
                let billing_state = jQuery(this).val();

                console.log(billing_state);
                if (jQuery.inArray(billing_state, ['AG', 'CT', 'CS', 'KR', 'CZ', 'TP', 'SR', 'NA', 'PA', 'RC', 'RG', 'SA', 'ME', 'MS', 'TA'])) {
                    jQuery('input#payment_method_mollie_wc_gateway_creditcard').trigger('click');
                } else {
                    jQuery('li.payment_method_cod.payment_method_cod').css('display', 'block');
                    jQuery('input#payment_method_cod').trigger('click');
					
                }
                jQuery('body').trigger('update_checkout');
            });
        }, 1500);
    </script>
    <?php
}
///////////////////////////////////////////////

function aagusfrabaddafajiprodicilisafkskk() {
	 var produtid = $("#aid").val();
	 var pid = $.trim(produtid);
	 var produtprice = $("#aprice").val();
	 var pprice = $.trim(produtprice);

   window.location.replace('/cart/?add-to-cart='+pid+'&agcs='+pprice+'&type=cart upsell');
 }



 /////////////////////////////////////////// final
 
$(document).ready(function($) {
	$('.checkout_btn').on('click', function() {
	
		var ashok = $('#billing_postcode').val();
		console.log(ashok);
		if (ashok === '123'){
			alert('Value is 123');
		}
		else{
			alert('Value is not 123');
		}
		});
	});
	
/////////////////////////////////////////////////	
	
 
$(document).ready(function($) {
	$('.checkout_btn').on('click', function() {
	
		var ashok = $('#billing_postcode').val();
		console.log(ashok);
		if (ashok.length==4){
			alert('Value is 4');
		}
		else{
			alert('Value is not 4');
		}
		});
	});	
	
	
	
	
	
	jQuery(document).ready(function($) {
    $('#checkButton').on('click', function() {
        var inputValue = $('#myInput').val();
        
        if (inputValue === '123') {
            // If the input value is '123', perform this action
            alert('Value is 123');
        } else {
            // If the input value is not '123', perform a different action
            alert('Value is not 123');
        }
    });
});

//////////////for scroll display none class

jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop()>250)
     {
        jQuery('.fourohfour-columns-2').hide(1000);
     }
    else
     {
     jQuery('.fourohfour-columns-2').show(1000);
     }
 });
 
 
 
 $(document).ready(function () {
    
    $(".image-item").click(function () {
      
        $("html, body").animate({
            scrollTop: $("#hubspot-form").offset().top
        }, 1000);
    });
});


///go to section on click 
 $(document).ready(function () {
    
    $(".image-item[var_name="3 Year Contract"]").click(function () {
      
        $("html, body").animate({
            scrollTop: $("#hubspot-form").offset().top
        }, 1000);
    });
});





$(document).ready(function() {
      // Calculate page load time
      var loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;

      // Convert milliseconds to seconds
      var loadTimeInSeconds = loadTime / 1000;

      console.log('Page load time: ' + loadTimeInSeconds + ' seconds');

      // Send data to WordPress backend using AJAX
      $.ajax({
        type: 'POST',
        url: "http://test.3vendo.si/", // WordPress AJAX endpoint
        data: {
          action: 'save_load_time',
          load_time: loadTimeInSeconds
        },
        success: function(response) {
          console.log('Load time saved successfully');
        }
      });
    });

------------------------------------------------------------------------------key up for input field value 

$(document).ready(function() { 
	var text_val = $("#billing_postcode").val();   
	if(text_val == "20222"){
	 $('#payment_method_paypal').trigger('click');
	}
	else {
	  $('#payment_method_cod').trigger('click');
	}  
});

$("#billing_postcode").keyup(function(){
 var text_val = $(this).val();
 if(text_val == "20222"){
	$('#payment_method_paypal').trigger('click');
  } else {
	$('#payment_method_cod').trigger('click');
  }
});

------------------------------------------------------------------------------------------------



$(document).ready(function($) {
	$('.checkout_btn').on('click', function() {
	
		var ashok = $('#billing_postcode').val();
		//console.log(ashok);
		if (ashok.length == 5){
			//alert('Value is 5');
			//$('.woocommerce-error').append("<li>Appended item</li>");
			var newParagraph = $("<p>This is a new paragraph added using jQuery.</p>");
        
        // Append the new paragraph to the "myDiv" element
        $(".woocommerce-error").append(newParagraph);
		}
		else{
			alert('Please enter valid zip code');
		}
		});
	});	
	
=================================================	
	
	$(document).ready(function($) {
	$('.checkout_btn').on('click', function() {	
		var ashok = $('#billing_postcode').val();
		
		//console.log(ashok);
		if (ashok.length == 5  )
		{			 
			$("p.valid").hide();
		}
		else
		{
			var newParagraph = $("<p class='valid'>Please enter valid postcode</p>");
			$(".woocommerce-info").after(newParagraph);
		}
		});
	});	
	
	
	
	$('#billing_postcode').keyup(function() {	
		var ashok = $(this).val();
		
		//console.log(ashok);
		if (ashok.length == 5  )
		{			 
			$("p.valid").hide();
		}
		else
		{
			var newParagraph = $("<p class='valid'>Please enter valid postcode</p>");
			$(".woocommerce-info").after(newParagraph);
		}
		});
===========================================	
	
	$(document).ready(function($) {
	$('#billing_postcode').keyup(function() {	
		var ashok = $(this).val();
		
		//console.log(ashok);
		if (ashok.length == 5  )
		{			 
			$("p.valid").hide();			
		}
		else
		{
			var newParagraph = $("<p class='valid'>Please enter valid postcode</p>");
			$(".woocommerce-info").after(newParagraph);
		}
		});
	});	
	
	==============css add
		$(document).ready(function($) {
	$('#billing_postcode').keyup(function() {	
		var ashok = $(this).val();
		
		//console.log(ashok);
		if (ashok.length == 5  )
		{			 
			$("p.valid").hide();
            			
		}
		else
		{
			var newParagraph = $("<p class='valid'>Please enter valid postcode</p>");
			$(".woocommerce-info").after(newParagraph);
            $("input#billing_postcode").css({"color": "red !important"});
		}
		});
	});	
	
	
	
	
	.form-row.woocommerce-invalid input.input-text {
    box-shadow: inset 2px 0 0 #e2401c;
}

input#billing_postcode {
    box-shadow: inset 2px 0 0 #0ab0ff;
}

=========================================

on hover go to top 



// script.js
$(document).ready(function() {
  var $scrollToTopButton = $('.button-links');

  // Show/hide the button based on scroll position
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $scrollToTopButton.fadeIn();
    } else {
      $scrollToTopButton.fadeOut();
    }
  });

  // Scroll to top smoothly on button hover
  $scrollToTopButton.hover(function() {
    $('html, body').stop().animate({
      scrollTop: 0
    }, 500); // Adjust the animation duration as needed
  });
});

========================reload window
jQuery(document).ready(function(){
			$("td.product-remove").click(function(){
				 setTimeout(function(){  location.reload(); }, 2000);
				    
			});
		});
		
		
		function deletesproduct() {
  window.location.replace('https://allshop.si/cart/?remove_item=<?php echo $removekey;  ?>&_wpnonce=<?php echo $wpononce;  ?>');
}



----------------------------------
	jQuery(document).ready(function($){
var text1 = $('.Heading').val();
console.log(text1);

});


====================================for img zoom on hover 


img.aaupslika:hover {
    transform: scale(1.1);
}

===================================

jQuery(document).ready(function($){
var scroller = new SmoothScroll({
  target: document.querySelector(".page__wrapper"),
  scrollEase: 0.05,
});
});


jQuery(document).ready(function($){
const body = document.body,
      jsScroll = document.getElementsByClassName('js-scroll')[0],
      height = jsScroll.getBoundingClientRect().height - 1,
      speed = 0.05

var offset = 0

body.style.height = Math.floor(height) + "px"

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed
    
    var scroll = "translateY(-" + offset + "px) translateZ(0)"
    jsScroll.style.transform = scroll
    
    raf = requestAnimationFrame(smoothScroll)
}
smoothScroll()

});

================================================================= for spped cdn j query 
---lazy load cdn j query----
<script src="//cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" async=""></script>
Add "lazyload" class in img tag 








-----------------------------------------------

 jQuery(document).ready(function($) {    
    $('.product-block-variant-picker').on('click', function() {      
      var checkboxValue = $(this).val();      
      console.log(checkboxValue);	  
    });   
    $('input[name="Section-template--21810316116281__main-options[Flavor]"]').on('click', function() {     
      var radioValue = $('input[name="Section-template--21810316116281__main-options[Flavor]"]:checked').val();     
      console.log(radioValue);
    });
  });
  
  =---==---===---
  
  
  jQuery(document).ready(function($) { 
   $('input[name="Section-template--21810316116281__main-options[Flavor]"]').on('click', function() {     
      var radioValue = $('input[name="Section-template--21810316116281__main-options[Flavor]"]:checked').val();     
      console.log(radioValue);
    });
  });
  
  -=-=-=-=-=-=-=-=-=-=-
  
   
   
jQuery(document).ready(function($) { 
	$('input[name="Section-template--21810316116281__main-options[Flavor]"]').on('click', function() {     
		var radioValue = $('input[name="Section-template--21810316116281__main-options[Flavor]"]:checked').val();
		$('li.product-thumbnail-list-item img').each(function(){
			var all_alt = $(this).attr('alt');
			alert(all_alt);
		});
	});
});
	 
	

jQuery(document).ready(function($) { 
	$('input[name="Section-template--21810316116281__main-options[Flavor]"]').on('click', function() {     
		var radioValue = $('input[name="Section-template--21810316116281__main-options[Flavor]"]:checked').val();
		$('li.product-thumbnail-list-item img').each(function(){
			var all_alt = $(this).attr('alt');             		
			if(all_alt == radioValue){
				$('.product-thumbnail-list-item').not('[alt="'+radioValue+'"]').hide();
               $('.product-thumbnail-list-item[alt="'+radioValue+'"]').show();			
			}          		
		});
	});
});




jQuery(document).ready(function($) { 
	$('input[name="Section-template--21810316116281__main-options[Flavor]"]').on('click', function() {     
		var radioValue = $('input[name="Section-template--21810316116281__main-options[Flavor]"]:checked').val();
		$('li.product-thumbnail-list-item img').each(function(){
			var all_alt = $(this).attr('alt');
			alert(all_alt);
			
			
			
		});
	});
});

$('.Product-img-section').not('.' + imgalt).hide();
$('.' + imgalt + '.Product-img-section').show();
	
	
 
 
 ==============================alt tag base image show  hydragent
 jQuery(document).ready(function($) { 
 	var radioValue = $('input[name="Section-template--21810316116281__main-options[Flavor]"]:checked').val();
		$('li.product-thumbnail-list-item img').each(function(){
			var all_alt = $(this).attr('alt');             		
			if(all_alt == radioValue){
				$('.product-thumbnail-list-item').not('[alt="'+radioValue+'"]').hide();
               $('.product-thumbnail-list-item[alt="'+radioValue+'"]').show();			
			}          		
		});
	$('input[name="Section-template--21810316116281__main-options[Flavor]"]').on('click', function() {     
		var radioValue = $('input[name="Section-template--21810316116281__main-options[Flavor]"]:checked').val();
		$('li.product-thumbnail-list-item img').each(function(){
			var all_alt = $(this).attr('alt');             		
			if(all_alt == radioValue){
				$('.product-thumbnail-list-item').not('[alt="'+radioValue+'"]').hide();
               $('.product-thumbnail-list-item[alt="'+radioValue+'"]').show();			
			}          		
		});
	});
});



----------------------------------------------

 <script>
           setInterval(function(){ 
             $("span#cart-icon-bubble, add-to-cart.button.button--small.button--cta").click(function(){
             setTimeout(function(){
            var test = $("cart-recommendations.cart-recommendations cart-recommendations.cart-recommendations ul.mini-cart__navigation.test1.nav-cart").text().length; 
             //alert (test);
               if(test == 0){
                $("cart-recommendations.cart-recommendations.custom-recomnmend").css({'display': 'none !important', 'opacity': 0 });
              } else {
                 $("cart-recommendations.cart-recommendations.custom-recomnmend").css({'display': 'block !important', 'opacity': 1 });              
              }
             }, 2000);
             });
           }, 2000); 
          </script>
		  
		  
		  
		  
buy button script -----


<script>

     const intt=setInterval(function () {
    var price_addtocart = $('.rc-widget .rc-template__radio .rc-radio--active .rc-radio__label .rc-radio__price').html();
    var price_addtocart_onetime = $("#rc-radio2").closest('label').find('.rc-radio__label').text();

        
    console.log(price_addtocart);

var selectedValue = $('.radio-button [name="properties[Nights]"]:checked').val(); 
    var splitValues = selectedValue.split('pack'); 
	//var rcradio = $('.rc-radio__price').text();
	//var split80 = rcradio.split('$')	 
//var result = (splitValues[0] * split80[1]).toFixed(2);
      
var price = "{{ product.price }}";
var pp = (price/100).toFixed(2);
var savings = ((price * 0.20)/100).toFixed(2);
var final = pp - savings;
var total = parseFloat(splitValues[0]*final).toFixed(2);
var regular = parseFloat(pp * splitValues[0]).toFixed(2);
        
  var amountadnd = price_addtocart_onetime.match(/\$([\d,]+(\.\d{1,2})?)/)[1];  
        console.log('this is total'+total);
        $("span.rc-radio__price").text(" $"+total);
        var amountadd = regular;  
    $('#price_add').empty();
    $('.per_night').empty();

    if (price_addtocart == undefined) {
        $('#price_add').append('<span>' + amountadd + '</span>');
        var checkedValue = parseFloat($('input[name="properties[Nights]"]:checked').val());        
        $('.per_night').append('<p>Per Night Price: ' + (checkedValue / amountadd).toFixed(2) + '</p>');
    } else {
        $('#price_add').append('<span class="cart_t we" style="text-decoration:line-through">' + amountadd + '</span>', '<span class="cart_pur">$' + total + '</span>');
    
        var checkedValue = parseFloat($('input[name="properties[Nights]"]:checked').val());
        var inputString = price_addtocart.replace('$', '');
        var result = parseFloat(inputString);
       // console.log('wewew'+result);
      var originalValue = "{{ product.price }}";
        originalValue=(originalValue/100).toFixed(2);
        console.log('asasasa'+originalValue);
          var percentage = 20;
          var resulta = (percentage / 100) * originalValue;
      
          // Subtract 100 from the result
          var finalResult = 100 - resulta ;
      
          // Display the final result
          console.log(finalResult);
        
        var formattedResult = (finalResult / checkedValue).toFixed(2);
        
        $('.per_night').append('<p>Price: $' + formattedResult + "/per night" + '</p>');
      //  console.log('here this code'+formattedResult);
       // clearInterval(intt);
    }
}, 2000);

        setTimeout(function(){
              $("#rc-radio1").closest('label').find('.rc-radio__label').append('<p class="cancel"><span class="Cancel_text">Cancel anytime and Free Shipping</span></p>');
        },3000);
 </script>		  
 
 
 ---------------------------
 
 $(window).scroll(function() {
    var originalButton = $('#original-add-to-cart-button');
    var stickyButton = $('#sticky-add-to-cart-button');
    if ($(window).scrollTop() > originalButton.offset().top) {
        stickyButton.show();
    } else {
        stickyButton.hide();
    }
});





----------------final working 

  <script>

     const intt=setInterval(function () {
    var price_addtocart = $('.rc-widget .rc-template__radio .rc-radio--active .rc-radio__label .rc-radio__price').html();
    var price_addtocart_onetime = $("#rc-radio2").closest('label').find('.rc-radio__label').text();

        
    console.log(price_addtocart);

var selectedValue = $('.radio-button [name="properties[Nights]"]:checked').val(); 
    var splitValues = selectedValue.split('pack');      
    var price = "{{ product.price }}";
    var pp = (price/100).toFixed(2);
    var savings = ((price * 0.20)/100).toFixed(2);
    var final = pp - savings;
    var total = parseFloat(splitValues[0]*final).toFixed(2);
    var regular = parseFloat(pp * splitValues[0]).toFixed(2);
        
  var amountadnd = price_addtocart_onetime.match(/\$([\d,]+(\.\d{1,2})?)/)[1];  
        console.log('this is total'+total);
        $("span.rc-radio__price").text(" $"+total);
        var amountadd = regular;  
    $('#price_add').empty();
    $('.per_night').empty();
$('div#sticky-atc form button #price_add').empty();
        $('div#sticky-atc form button span').remove();
    if (price_addtocart == undefined) {
        var originalValue = "{{ product.price }}";
        originalValue=(originalValue/100).toFixed(2);
        
         var checkedValue = parseFloat($('input[name="properties[Nights]"]:checked').val());
          var ss=originalValue/(checkedValue*30); 
        $('#price_add').append('<span>' + amountadd + '</span>');
         $('div#sticky-atc form button').append('<span>' + amountadd + '</span>');
        var checkedValue = parseFloat($('input[name="properties[Nights]"]:checked').val());        
        $('.per_night').append('<p>Per Night Price: ' + ss.toFixed(2) + '</p>');
    } else {
        $('#price_add').append('<span class="cart_t we" style="text-decoration:line-through">' + amountadd + '</span>', '<span class="cart_pur">$' + total + '</span>');
    $('div#sticky-atc form button').append('<span class="cart_t we" style="text-decoration:line-through">' + amountadd + '</span>', '<span class="cart_pur">$' + total + '</span>');
        var checkedValue = parseFloat($('input[name="properties[Nights]"]:checked').val());
        var inputString = price_addtocart.replace('$', '');
        var result = parseFloat(inputString);
       // console.log('wewew'+result);
      var originalValue = "{{ product.price }}";
        originalValue=(originalValue/100).toFixed(2);
        console.log('asasasa'+originalValue);
          var percentage = 20;
          var resulta = (percentage / 100) * originalValue;
      
          // Subtract 100 from the result
          var finalResult = 100 - resulta ;
      
          // Display the final result
          //console.log(finalResult);

 
        
        var formattedResult = (finalResult / checkedValue).toFixed(2);
        
        $('.per_night').append('<p>Price: $' + formattedResult + "/per night" + '</p>');
      //  console.log('here this code'+formattedResult);
       // clearInterval(intt);
    }
}, 2000);

        setTimeout(function(){
              $("#rc-radio1").closest('label').find('.rc-radio__label').append('<p class="cancel"><span class="Cancel_text">Cancel anytime and Free Shipping</span></p>');
        },3000);
 </script>
 
 
 ===================================
 $(".radio-button label").click(function(){
  var inputId = $(this).attr('for');
  var checkedVal = $('#'+inputId).val();
    var value=checkedVal.replace("pack",'');
   var trimmed = $.trim(value);
    $('#quantity').val(trimmed);
});
 
 



============================== clone create 
 $(document).ready(function() {
   
     
        $("span.reviews_rating_title").clone().appendTo(".price-item");
     
   
});

================================================

$(document).ready(function() {
var clonetitle = $("h2.single_product__title.mt-3.mb-0.h4:first").clone()
var new3 = clonetitle;	
$("p.single_product__short_desc.pr--block").append(new3);	
});



var text1 = $('product-info').find('span.areviews_title_rating_average:first').text();
var new1 = text1;
var text2 = $('.top_areviews_rating_counter:first').text();
var new2 = text2;
var clonetitle = $("h2.single_product__title.mt-3.mb-0.h4:first").clone()
var new3 = clonetitle;
 $('.cusreview').append( clonetitle + new1 + new2  );




==============================get image and append 

jQuery(document).ready(function() {    
     var imgElement = $('<img>', {
            src: 'https://7a5a2f-2.myshopify.com/cdn/shop/files/stars.png?v=1704350286',            
        });        
        $('.cusreview').append(imgElement);  
});

=============================================get stars in loop 


 $(document).ready(function(){
        var numberOfStars = 2;

        for (var i = 0; i < 5; i++) {
             var starsSpan = $('<span>', {
                class: 'reviews_rating_title:first',
                style: 'display: inline-block;'
            });

            for (var j = 0; j < numberOfStars; j++) {
                var star = $('<i>', {
                    class: 'fas fa-star',
                    style: 'color:#f3c621',
                    'aria-hidden': 'true'
                });
                starsSpan.append(star);
            }

            $('span.price-item.price-item--sale.price-item--last').append(starsSpan);
        }
    });
	
	============================================
	
	 <script>
      setInterval(function(){
        var url = window.location.href;
        if(url.indexOf("filter") > -1){
          $(".filter-description").hide();
        } else {
          $(".filter-description").show();
        }
      }, 2000);
    </script>
	
	
	
	
	
	<script>
  setInterval(function(){    
    var url = window.location.href;   
    var parts = url.split('/');   
    var collectionsIndex = parts.indexOf("collections");    
    var afterCollections = parts.slice(collectionsIndex + 2);   
    var afterCollectionsString = afterCollections.join('/');  
    if (afterCollectionsString !== "") {
        $(".filter-description").hide();
    } else {
        $(".filter-description").show();
    }
}, 2000);
</script>

-=================--------------=================================================

jQuery(document).ready(function($) {
    setInterval(function() {
    var miniCartCount = parseInt($('.cart-contents .count').text());
    if (miniCartCount === 0) {		
        $('.cart-contents').removeAttr('href').css('cursor', 'default');
    }
	}, 1000);
});





jQuery(document).ready(function($) {
	var minicartitemcount = parseInt($('.cart-contents .count').text());
	console.log('here this code ='+ minicartitemcount);
	if (minicartitemcount === 0){
		$('.cart-contents').removeAttr('href').css('cursor', 'default');
	}
});

===========================================

jQuery(".accordion-thumb").click(function(){
  alert("The paragraph was clicked.");
var value = $('.accordion-thumb').val();
console.log(value);
});



setTimeout(function(){
$(".product_qty ").click(function(){

var text_val = $(".mprice .woocommerce-Price-amount bdi") .text() ;
$(".storefront-sticky-add-to-cart__content-price .woocommerce-Price-amount").text(text_val);
  //alert(text_val);
var text_val1 = $(".mprice del span.woocommerce-Price-amount").text();
$(".storefront-sticky-add-to-cart__content-product-info span.storefront-sticky-add-to-cart__content-price del").text(text_val1);
//alert(text_val1);  
});

},100);



change text with click 

jQuery(".product__quantityDiscount .qd").click(function() {
    var sale_price = jQuery("div#product_total_price span.akcijska").text();
	jQuery(".storefront-sticky-add-to-cart__content span.storefront-sticky-add-to-cart__content-price ins").text(sale_price);
	
	var regu_price = jQuery("div#product_total_price span.rednacena").text();
	jQuery(".storefront-sticky-add-to-cart__content span.storefront-sticky-add-to-cart__content-price del span.woocommerce-Price-amount.amount").text(regu_price);
   
});


========================================
 jQuery('#custom-message').keyup(function() {
    var dInput = this.value;
    $(".ashok").text(dInput); 
    //console.log(dInput);
});






  jQuery('#custom-message').keyup(function() {
    
	var dInput = this.value;
    $(".ashok").text(dInput); 
    console.log(dInput);
});
==========================================

let fetchData = async (rand)=>
    {
        let res = await fetch("https://type.fit/api/quotes");
        let result = await res.json();
        console.log(`Quote of the day : ${result[rand].text}
        Author name : ${result[rand].author}`);
    }
setInterval(()=>{
    const rand = Math.floor(Math.random() * 6) + 1
fetchData(rand)
},1500)
======================================= fetch  api data with j query 


let fetchData = async (rand)=>
    {
        let res = await fetch("https://api.quotable.io/quotes");
        let result = await res.json();
        console.log(result.results[16].tags[0]);
    }
fetchData();


---------------------------------------------------------
$('.single_add_to_cart_button').hover(function() {
        alert('Hovering over the image!');
    });
	========================================
	
	setInterval(()=>
    {
      var d = new Date(); // for now
var hr= d.getHours(); // => 9
var min = d.getMinutes(); // =>  30
var sec = d.getSeconds(); 
console.log(`${hr}:${min}:${sec}`)  
    },1000)
	
	====================================================
	pop/shift get first word and last word 
	
var a = jQuery(".upsell-label") .text();
var b = a.split(" ").pop();
console.log(b);


============================================================= hang the system loop run infinite .
var a = 1;
do {
    console.log('test');
}
    while (a < 10);
	
===================================================================
function myFunction(value) {
  txt += value + "<br>"; 
}
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
console.log(numbers);
===========================================================split
var a = jQuery('.product_title').text();
console.log(a);
var c = a.split(" ", 3);
console.log(c);

=======
setInterval(function(){
  $("input").change(function(){
    alert("The text has been changed.");
  });
},1000);
======================================================checkbox chek or unchecked

$(document).ready(function(){   
  toggleCheckoutButton();
    function toggleCheckoutButton() {
        if ($('#ecomme').is(':checked')) {
            $('#checkout').removeClass('disabled').prop('disabled', false);
        } else {
            $('#checkout').addClass('disabled').prop('disabled', true);
        }
    }
    $('#ecomme').change(function(){
        toggleCheckoutButton();
    });
});

=======================================================================

$("#ecomme").change(function(){
if( $('#ecomme').is(':checked') ){
    $(".button").attr("disabled", false);
}
else{
    $(".button").attr("disabled", true);
} });

====================================

<script type="text/javascript">
  jQuery("#ekstraekstra").insertAfter("#billing_email");
  </script>
  
==========================================================

jQuery(document).ready(function(){
jQuery(".product__quantityDiscount ").click(function(){

var text_val = jQuery(".vrednostpopusi") .text() ;
jQuery(".pridddsa2").text(text_val);
  alert(text_val);
 
});

});

========================================

jQuery(document).ready(function($) {
    $('.sub_menu_allow > a').append('<span class="submenu-arrow" >&#11166;</span>').find('.submenu-arrow').hide();

    $('.sub_menu_allow').hover(
        function() {
            $(this).find('.submenu-arrow').show();
        },
        function() {
            $(this).find('.submenu-arrow').hide();
        }
    );
});


=======================================================append image and toggle on this image 

jQuery(document).ready(function(JQuery) {
    // Append image after <a> tag inside .sub_menu_allow
    JQuery('#menu-item-17293').prepend('<span class="submenu-arrow-image"><img src="https://coolmango.si/wp-content/themes/storefront_child/images/down-arrow.svg" class="submenu-image" /></span>');
});
setTimeout(function(){
    jQuery(".submenu-arrow-image").click(function(){
    jQuery("#menu-item-17293 .sub-menu").toggle()
})},1000)

==============================================================change image on toggle 
jQuery(document).ready(function($) {
    var upArrowUrl = "https://coolmango.si/wp-content/themes/storefront_child/images/down-arrow.svg";
    var downArrowUrl = "https://coolmango.si/wp-content/themes/storefront_child/images/arrowright.svg";
	
    $('#menu-item-17293').prepend('<span class="submenu-arrow-image"><img src="' + downArrowUrl + '" class="submenu-image" /></span>');
    $("#menu-item-17293 .sub-menu").hide();

    $(".submenu-arrow-image").click(function() {
        $("#menu-item-17293 .sub-menu").toggle();

        // Get the image element
        var $arrowImg = $(this).find("img.submenu-image");

        // Change arrow image based on submenu visibility
        if ($("#menu-item-17293 .sub-menu").is(":visible")) {
            $arrowImg.attr("src", upArrowUrl); // Change image to up arrow
        } else {
            $arrowImg.attr("src", downArrowUrl); // Change image to down arrow
        }
    });
});


=========================================================================scroll up-down
jQuery(document).ready(function() {
    var lastScrollTop = 0;
    jQuery(window).scroll(function(event) {
      var st = jQuery(this).scrollTop();
      if (st > lastScrollTop) {
        // Downscroll code
        console.log('downscroll')
      } else {
        // Upscroll code
        console.log('upscroll')
      }
      lastScrollTop = st;
    });
  });
 --------------------------------------------------------------get current date with j query
 var currentDate = new Date();

var currentDayOfMonth = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1; 
var currentYear = currentDate.getFullYear();

var dateString = currentDayOfMonth + "-" + currentMonth + "-" + currentYear;
console.log(dateString); 
=====================================================================================
function updatedate(){
    var currentDate = new Date();
    
    var hr = currentDate.getHours();
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();
    
  var date = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Adding 1 to match the usual month format
  var year = currentDate.getFullYear();
if (hr>12){
    hr = hr-12;
}
  console.log("Time:", hr+ ":" +min+ ":" +sec )  
  console.log("Date:", date);
  console.log("Month:", month);
  console.log("Year:", year); 
    
}

updatedate();

//setInterval(updatedate,1000);
=================================================================================
function updatedate(){
    var currentDate = new Date();
    
    var hr = currentDate.getHours();
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();
    
  var date = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Adding 1 to match the usual month format
  var year = currentDate.getFullYear();
if (hr>12){
    hr = hr-12;
}
if (sec < 10) {
    sec = "0"+sec;
}
    if (min < 10) {
    min = "0"+min;
}
     if (hr < 10) {
    hr = "0"+hr;
}
    
    
      var datestring = "Time: " +hr+ ":" +min+ ":" +sec+ "    Date: " +date+"-"+month+"-"+year;

  
    append(datestring);
}

//function 
//    append(datestring){
 //   jQuery("h1.product_title.entry-title").append(datestring);
//}
function append(datestring) {
    jQuery("h1.product_title.entry-title").html(datestring);
}

updatedate();

setInterval(updatedate,1000);

=========================================================================================
function updatedate(){
    var currentDate = new Date();
    
    var hr = currentDate.getHours();
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();
    
  var date = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Adding 1 to match the usual month format
  var year = currentDate.getFullYear();
if (hr>12){
    hr = hr-12;
}
if (sec < 10) {
    sec = "0"+sec;
}
    if (min < 10) {
    min = "0"+min;
}
     if (hr < 10) {
    hr = "0"+hr;
}
if (hr == 0) {
        hr = 12; // For 12 AM
    }
    if (date < 10) {
    date = "0"+date;
}  
  if (month < 10) {
    month = "0"+month;
}
     var ampm = (currentDate.getHours() < 12) ? "AM" : "PM";
      var datestring = "Time: " +hr+ ":" +min+ ":" +sec+ " " + ampm + "   Date: " +date+"-"+month+"-"+year;

  
    append(datestring);
}


function append(datestring) {
    jQuery("h1.product_title.entry-title").html(datestring);
}

updatedate();

setInterval(updatedate,1000);

============================================================================== click hide and show 
jQuery(document).ready(function(){
jQuery(".pridddsa2").click(function(){
    if (jQuery(".product_title").is(":hidden")){
        jQuery(".product_title").show();
    } else {
        jQuery(".product_title").hide();
    }
});
    
});

========================================================================= hover add remove class 
jQuery(".cusnewbtn").hover(
  function () {
   jQuery(this).addClass("result_hover");
  },
  function () {
    jQuery(this).removeClass("result_hover");
  }
);
