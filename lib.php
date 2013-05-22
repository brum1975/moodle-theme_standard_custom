<?php
/** Search and replace _standard_custom with your own theme name!**/

function default_initialise_colourswitcher(moodle_page $page) {
    user_preference_allow_ajax_update('theme_standard_custom_chosen_colour', PARAM_ALPHA);
	user_preference_allow_ajax_update('theme_standard_custom_chosen_font', PARAM_ALPHA);
	user_preference_allow_ajax_update('theme_standard_custom_chosen_back', PARAM_ALPHA);
	user_preference_allow_ajax_update('theme_standard_custom_chosen_width', PARAM_ALPHA);
    user_preference_allow_ajax_update('theme_standard_custom_chosen_nav', PARAM_ALPHA);
    $page->requires->yui_module('moodle-theme_standard_custom-colourswitcher', 'M.theme_standard_custom.initColourSwitcher', array(array('div'=>'#colourswitcher')));
}

function default_get_colour($default='default') {
    return get_user_preferences('theme_standard_custom_chosen_colour', $default);
}
function default_get_back($default='default') {
    return get_user_preferences('theme_standard_custom_chosen_back', $default);
}
function default_get_font($default='default') {
    return get_user_preferences('theme_standard_custom_chosen_font', $default);
}
function default_get_width($default='fixed') {
    return get_user_preferences('theme_standard_custom_chosen_width', $default);
}
?>