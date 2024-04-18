/* Cancel order if get 2 same address order with in 1 minutes

add_action('woocommerce_before_checkout_process', 'cancel_order_same_billing_address');
function cancel_order_same_billing_address() {
    $posted_data = $_POST['post_data'];
    parse_str($posted_data, $posted_array);

    $billing_address = array(
        'first_name' => $posted_array['billing_first_name'],
        'last_name'  => $posted_array['billing_last_name'],
        'company'    => $posted_array['billing_company'],
        'address_1'  => $posted_array['billing_address_1'],
        'address_2'  => $posted_array['billing_address_2'],
        'city'       => $posted_array['billing_city'],
        'state'      => $posted_array['billing_state'],
        'postcode'   => $posted_array['billing_postcode'],
        'country'    => $posted_array['billing_country'],
        'email'      => $posted_array['billing_email'],
        'phone'      => $posted_array['billing_phone'],
    );

    // Get all orders with similar billing address details placed within the last 2 minutes
    $duplicate_orders = wc_get_orders(array(
        'status'           => array('pending', 'processing', 'on-hold', 'wc-primary-order'), 
        'billing_address'  => $billing_address,
        'date_created'     => '>' . (time() - 60), 
        'orderby'          => 'date',
        'order'            => 'DESC', 
    ));

    // If there are two or more duplicate orders, cancel the first one (earliest)
    if (count($duplicate_orders) >= 1) {        
        $first_duplicate_order = reset($duplicate_orders);        
        $first_duplicate_order->update_status('cancelled');
    }
}
*/

