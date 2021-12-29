/* For all the ActiveCampaign forms
Should come at the end of the Body to execute once the form is loaded, which is loaded through their JS function  */
$(document).ready(function() {


$("._field-wrapper input[type=text]").addClass('form-input w-input');
$("._field-wrapper textarea").addClass('form-input text-area-input w-input');
$("._field-wrapper select").addClass('dropdown-list w-select');
$("._form-content > ._form_element").addClass('form-group');
$("._form-label").addClass('form-label');
$("._checkbox-radio label").addClass('w-form-label');
$("._submit").addClass('button button-large w-button');

});
