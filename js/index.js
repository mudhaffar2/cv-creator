
$(function() {

  //////////// variables

  var educationList = $('#education');
  var experienceList = $('#experience');
  var skillsList = $('#skills');
  var languagesList = $('#languages');
  var hobbiesList = $('#hobbies');
  var contactsList = $('#contacts');
  var linksList = $('#links');
  var allObject = {};

  //////////// functions

  function deleteButton() {
    var btnDel = $('<button></button>').text('remove').addClass('btnDel btn btn-danger');
    btnDel.on('click', function() {
      $(this).parent().remove();
    });
    return btnDel;
  }

  function optionList(start, end) {
    var selectList = $('<select></select>').addClass('custom-select');
    for (var i=start; i<=end; i++) {
      var option = $('<option></option>').text(i).val(i);
      selectList.append(option);
    }
    return selectList;
  }

  function addEduExp(field) {
    var div = $('<div></div>');

    var fieldSign = (field==='education') ? 'degree:':'position:';
    var label1 = $('<label></label>').text(fieldSign);
    var input1 = $('<input>');
    div.append(label1);
    div.append(input1);

    var label2 = $('<label></label>').text('organization:');
    var input2 = $('<input>');
    div.append(label2);
    div.append(input2);

    var label3 = $('<label></label>').text('start:');
    var select3 = optionList(1950,2017);
    div.append(label3);
    div.append(select3);

    var label4 = $('<label></label>').text('end:');
    var select4 = optionList(1950,2017);
    div.append(label4);
    div.append(select4);

    div.append(deleteButton());

    return div;
  }

  function addSkill() {
    var div = $('<div></div>');

    var labelSkill = $('<label></label>').text('skill');
    var inputSkill = $('<input>');
    var labelYear = $('<label></label>').text('year');
    var inputYear = $('<input>');

    div.append(labelSkill);
    div.append(inputSkill);
    div.append(labelYear);
    div.append(inputYear);

    div.append(deleteButton());

    return div;
  }

  function addLanguage() {
    var div = $('<div></div>');

    var labelLanguage = $('<label></label>').text('language');
    var inputLanguage = $('<input>');
    var labelLevel = $('<label></label>').text('level');
    var selectLevel = optionList(1,10);

    div.append(labelLanguage);
    div.append(inputLanguage);
    div.append(labelLevel);
    div.append(selectLevel);

    div.append(deleteButton());

    return div;
  }

  function addHobby() {
    var div = $('<div></div>');

    var labelHobby = $('<label></label>').text('hobby');
    var inputHobby = $('<input>');

    div.append(labelHobby);
    div.append(inputHobby);

    div.append(deleteButton());

    return div;
  }

  function addContact() {
    var div = $('<div></div>');

    var labelStreet = $('<label></label>').text('str. name:');
    var inputStreet = $('<input>');

    div.append(labelStreet);
    div.append(inputStreet);

    var labelHouseNo = $('<label></label>').text('house no.:');
    var inputHouseNo = $('<input>');

    div.append(labelHouseNo);
    div.append(inputHouseNo);

    var labelZip = $('<label></label>').text('zip code:');
    var inputZip = $('<input>');

    div.append(labelZip);
    div.append(inputZip);

    var labelCity = $('<label></label>').text('city:');
    var inputCity = $('<input>');

    div.append(labelCity);
    div.append(inputCity);

    var labelCountry = $('<label></label>').text('country:');
    var inputCountry = $('<input>');

    div.append(labelCountry);
    div.append(inputCountry);

    div.append(deleteButton());

    return div;
  }

  function addLink() {
    var div = $('<div></div>');

    var divFacebook = $('<div></div>');

    var imgFacebook = $('<img>');
    var inputFacebookLink = $('<input>');

    divFacebook.append(imgFacebook);
    divFacebook.append(inputFacebookLink);

    var divTwitter = $('<div></div>');

    var imgTwitter = $('<img>');
    var inputTwitterLink = $('<input>');

    divTwitter.append(imgTwitter);
    divTwitter.append(inputTwitterLink);

    var divGit = $('<div></div>');

    var imgGit = $('<img>');
    var inputGitLink = $('<input>');

    divGit.append(imgGit);
    divGit.append(inputGitLink);

    var divStack = $('<div></div>');

    var imgStack = $('<img>');
    var inputStackLink = $('<input>');

    divStack.append(imgStack);
    divStack.append(inputStackLink);

    div.append(divFacebook);
    div.append(divTwitter);
    div.append(divGit);
    div.append(divStack);

    div.append(deleteButton());

    return div;
  }

  /////////////////  code

  $('.btnAdd').on('click', function() {
    switch ($(this).parent().attr('id')) {
      case 'education':
        educationList.append(addEduExp('education'));
        break;
      case 'experience':
        experienceList.append(addEduExp('experience'));
        break;
      case 'skills':
        skillsList.append(addSkill());
        break;
      case 'languages':
        languagesList.append(addLanguage());
        break;
      case 'hobbies':
        hobbiesList.append(addHobby());
        break;
      case 'contacts':
        contactsList.append(addContact());
        break;
      case 'links':
        linksList.append(addLink());
        break;
    }
  });

  $('#btnSave').on('click', function() {

  });

});
