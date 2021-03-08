// Responsible for the placeholder animation when input field is clicked
$('input').on('focusin', function() {
    $(this).parent().find('.submit-label').addClass('active');
});
   
$('input').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('.submit-label').removeClass('active');
    }
});

// Responsible for the language-options-button's dropdown menu showing up when clicked
$('#language-btn').on('focusin', function() {
    $(this).parent().find('.btn-dropdown').css('display', 'block');
});

$('#language-btn').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('.btn-dropdown').css('display', 'none');
    }
});

$('#language-btn-2').on('focusin', function() {
  $(this).parent().find('.btn-dropdown').css('display', 'block');
});

$('#language-btn-2').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('.btn-dropdown').css('display', 'none');
  }
});


var dropDownVisible = false;

// Display dropdown-text in the frequently asked questions section
function displayDropdown(id) {
  if(!dropDownVisible) {
    document.getElementById(id + "-dropdown-text").style.display = "block";
    $('#' + id).find('i').removeClass('fa-plus').addClass('fa-times');
    dropDownVisible = true;
  }
  else {
    document.getElementById(id + "-dropdown-text").style.display = "none";
    $('#' + id).find('i').removeClass('fa-times').addClass('fa-plus');
    dropDownVisible = false;
  }
}