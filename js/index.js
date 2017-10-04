
//////////// variables

var educationList = document.getElementById('education');
var experienceList = document.getElementById('experience');
var skillsList = document.getElementById('skills');
var languagesList = document.getElementById('languages');
var hobbiesList = document.getElementById('hobbies');
var contactsList = document.getElementById('contacts');
var linksList = document.getElementById('links');
var btnAddEducation = document.getElementById('btnAddEducation');
var btnAddExperience = document.getElementById('btnAddExperience');
var btnAddSkill = document.getElementById('btnAddSkill');
var btnAddLanguage = document.getElementById('btnAddLanguage');
var btnAddHobby = document.getElementById('btnAddHobby');
var btnAddContact = document.getElementById('btnAddContact');
var btnAddLink = document.getElementById('btnAddLink');

//////////// functions

function addEduExp(field) {
  var div = document.createElement('div');

  var label1 = document.createElement('label');
  var fieldSign = (field==='education') ? 'degree':'position';
  label1.textContent = fieldSign + ':';
  var input1 = document.createElement('input');
  div.appendChild(label1);
  div.appendChild(input1);

  var label2 = document.createElement('label');
  label2.textContent = 'organization:';
  var input2 = document.createElement('input');
  div.appendChild(label2);
  div.appendChild(input2);

  var label3 = document.createElement('label');
  label3.textContent = 'start:';
  var select3 = optionList(1950,2017);
  div.appendChild(label3);
  div.appendChild(select3);

  var label4 = document.createElement('label');
  label4.textContent = 'end:';
  var select4 = optionList(1950,2017);
  div.appendChild(label4);
  div.appendChild(select4);

  var btnDel = document.createElement('button');
  btnDel.textContent = 'x';
  btnDel.classList.add('btnDel');
  btnDel.addEventListener('click', function() {
    var targetDiv = this.parentNode;
    targetDiv.parentNode.removeChild(targetDiv);
  });
  div.appendChild(btnDel);

  return div;
}

function optionList(start, end) {
  var selectList = document.createElement('select');
  for (var i=start; i<=end; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    option.value = i;
    selectList.appendChild(option);
  }
  return selectList;
}

function addSkill() {
  var div = document.createElement('div');

  var labelSkill = document.createElement('label');
  labelSkill.textContent = 'skill';
  var inputSkill = document.createElement('input');
  var labelYear = document.createElement('label');
  labelYear.textContent = 'year';
  var inputYear = document.createElement('input');

  div.appendChild(labelSkill);
  div.appendChild(inputSkill);
  div.appendChild(labelYear);
  div.appendChild(inputYear);

  var btnDel = document.createElement('button');
  btnDel.textContent = 'x';
  btnDel.classList.add('btnDel');
  btnDel.addEventListener('click', function() {
    var targetDiv = this.parentNode;
    targetDiv.parentNode.removeChild(targetDiv);
  });
  div.appendChild(btnDel);

  return div;
}

function addLanguage() {
  var div = document.createElement('div');

  var labelLanguage = document.createElement('label');
  labelLanguage.textContent = 'language';
  var inputLanguage = document.createElement('input');
  var labelLevel = document.createElement('label');
  labelLevel.textContent = 'level';
  var selectLevel = optionList(1,10);

  div.appendChild(labelLanguage);
  div.appendChild(inputLanguage);
  div.appendChild(labelLevel);
  div.appendChild(selectLevel);

  var btnDel = document.createElement('button');
  btnDel.textContent = 'x';
  btnDel.classList.add('btnDel');
  btnDel.addEventListener('click', function() {
    var targetDiv = this.parentNode;
    targetDiv.parentNode.removeChild(targetDiv);
  });
  div.appendChild(btnDel);

  return div;
}

function addHobby() {
  var div = document.createElement('div');

  var labelHobby = document.createElement('label');
  labelHobby.textContent = 'hobby';
  var inputHobby = document.createElement('input');

  div.appendChild(labelHobby);
  div.appendChild(inputHobby);

  var btnDel = document.createElement('button');
  btnDel.textContent = 'x';
  btnDel.classList.add('btnDel');
  btnDel.addEventListener('click', function() {
    var targetDiv = this.parentNode;
    targetDiv.parentNode.removeChild(targetDiv);
  });
  div.appendChild(btnDel);

  return div;
}

function addContact() {
  var div = document.createElement('div');

  var labelStreet = document.createElement('label');
  labelStreet.textContent = 'str. name:';
  var inputStreet = document.createElement('input');

  div.appendChild(labelStreet);
  div.appendChild(inputStreet);

  var labelHouseNo = document.createElement('label');
  labelHouseNo.textContent = 'house no.:';
  var inputHouseNo = document.createElement('input');

  div.appendChild(labelHouseNo);
  div.appendChild(inputHouseNo);

  var labelZip = document.createElement('label');
  labelZip.textContent = 'zip code:';
  var inputZip = document.createElement('input');

  div.appendChild(labelZip);
  div.appendChild(inputZip);

  var labelCity = document.createElement('label');
  labelCity.textContent = 'city:';
  var inputCity = document.createElement('input');

  div.appendChild(labelCity);
  div.appendChild(inputCity);

  var labelCountry = document.createElement('label');
  labelCountry.textContent = 'country:';
  var inputCountry = document.createElement('input');

  div.appendChild(labelCountry);
  div.appendChild(inputCountry);

  var btnDel = document.createElement('button');
  btnDel.textContent = 'x';
  btnDel.classList.add('btnDel');
  btnDel.addEventListener('click', function() {
    var targetDiv = this.parentNode;
    targetDiv.parentNode.removeChild(targetDiv);
  });
  div.appendChild(btnDel);

  return div;
}

function addLink() {
  var div = document.createElement('div');

  var divFacebook = document.createElement('div');

  var imgFacebook = document.createElement('img');
  var inputFacebookLink = document.createElement('input');

  divFacebook.appendChild(imgFacebook);
  divFacebook.appendChild(inputFacebookLink);

  var divTwitter = document.createElement('div');

  var imgTwitter = document.createElement('img');
  var inputTwitterLink = document.createElement('input');

  divTwitter.appendChild(imgTwitter);
  divTwitter.appendChild(inputTwitterLink);

  var divGit = document.createElement('div');

  var imgGit = document.createElement('img');
  var inputGitLink = document.createElement('input');

  divGit.appendChild(imgGit);
  divGit.appendChild(inputGitLink);

  var divStack = document.createElement('div');

  var imgStack = document.createElement('img');
  var inputStackLink = document.createElement('input');

  divStack.appendChild(imgStack);
  divStack.appendChild(inputStackLink);

  div.appendChild(divFacebook);
  div.appendChild(divTwitter);
  div.appendChild(divGit);
  div.appendChild(divStack);

  var btnDel = document.createElement('button');
  btnDel.textContent = 'x';
  btnDel.classList.add('btnDel');
  btnDel.addEventListener('click', function() {
    var targetDiv = this.parentNode;
    targetDiv.parentNode.removeChild(targetDiv);
  });
  div.appendChild(btnDel);

  return div;
}

/////////////////  code

var addBtns = document.querySelectorAll('.btnAdd');
addBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    //console.log(this);
    switch (this.parentNode.id) {
      case 'education':
        educationList.appendChild(addEduExp('education'));
        break;
      case 'experience':
        experienceList.appendChild(addEduExp('experience'));
        break;
      case 'skills':
        skillsList.appendChild(addSkill());
        break;
      case 'languages':
        languagesList.appendChild(addLanguage());
        break;
      case 'hobbies':
        hobbiesList.appendChild(addHobby());
        break;
      case 'contacts':
        contactsList.appendChild(addContact());
        break;
      case 'links':
        linksList.appendChild(addLink());
        break;
    }
  });
});
