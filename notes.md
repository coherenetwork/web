* "Tell Us About You" > "We would love to get to know you better"
* Can ActiveCampaign allow us to override?

* Via jQuery - Add class="form-input w-input" to all
    <div class="_field-wrapper">
          <input type="text"
    and class="dropdown-list w-select" for all "select"

* _form-label class add form-label

* for checkbox
  label add w-form-label
  _checkbox-radio

* _submit -> button button-large w-button

w-checkbox-input - margin-left: 0px; margin-right: 10px

textarea -> form-input text-area-input w-input

<div class="_form_1"></div><script src="https://coherenetwork.activehosted.com/f/embed.php?id=1" type="text/javascript" charset="utf-8"></script>

<div id="ajaxContent"></div>
  <script>
  var Webflow = Webflow || [];
  Webflow.push(function() {
    $.get('https://cdn.jsdelivr.net/gh/coherenetwork/web@main/form-profile.html', function(data) {
      $('#ajaxContent').append(data);
    });
  });
  </script>

  <div class="_form_3"></div><script src="https://coherenetwork.activehosted.com/f/embed.php?id=3" type="text/javascript" charset="utf-8"></script>

<script src="https://cdn.jsdelivr.net/gh/coherenetwork/web@main/ac-form.js" type="text/javascript" charset="utf-8"></script>

<div class="_form_3"></div><script src="https://coherenetwork.activehosted.com/f/embed.php?id=3" type="text/javascript" charset="utf-8"></script>
<script src="https://cdn.jsdelivr.net/gh/coherenetwork/web@main/ac-form.js" type="text/javascript" charset="utf-8" defer="defer"></script>

$(document).ready(function() {
    $(document).on("click","button .delete-row",function(){
        // Do something when button is clicked
    });
});

$(document).ready(function() {

$('form').removeClass();
$("._field-wrapper input[type=text]").addClass('form-input w-input');
$("._field-wrapper textarea").addClass('form-input text-area-input w-input');
$("._field-wrapper select").addClass('dropdown-list w-select');
$("._form-content > ._form_element").addClass('form-group');
$("._form-label").addClass('form-label').removeClass('_form-label');
$("._checkbox-radio label").addClass('w-form-label');
$("._submit").addClass('button button-large w-button').removeClass('_submit');

});
