var mainSection = document.getElementById("main");
var contactsSections = document.getElementById("contacts-info");
var sidebar = document.getElementById("side");
var header = document.getElementById("header");

mainSection.addEventListener("click", handleHelpClick);

function handleHelpClick(event) {
  var target = event.target;
  while (target != mainSection) {
    if (target.tagName == "LI") {
      mainSection
        .querySelectorAll("main > section")
        .forEach(section => (section.hidden = true));
      var helpDescriptionSection = document.createElement("section");
      helpDescriptionSection.id = "description";
      helpDescriptionSection.innerHTML = helpDescriptionsMapping[target.id];
      mainSection.insertBefore(
        helpDescriptionSection,
        mainSection.firstElementChild
      );
      return;
    }
    target = target.parentNode;
  }
}

sidebar
  .querySelectorAll("li")
  .forEach(button => button.addEventListener("click", handleNavClick));
header
  .querySelectorAll("li")
  .forEach(button => button.addEventListener("click", handleNavClick));

function handleNavClick(e) {
  var helpDescr = document.getElementById("description");
  if (helpDescr) mainSection.removeChild(helpDescr);
  mainSection
    .querySelectorAll("main > section")
    .forEach(section => (section.hidden = false));
  switch (e.target.id) {
    case "nav-main":
      window.scrollTo(0, 0);
      break;
    case "top-main":
      window.scrollTo(0, 0);
      break;
    case "nav-help-kind":
      mainSection.scrollIntoView();
      break;
    case "nav-contacts-info":
      contactsSections.scrollIntoView();
      break;
    case "nav-blog":
      window.open("https://www.lawkrok.by");
      break;
    case "top-blog":
      window.open("https://www.lawkrok.by");
      break;
    case "nav-self" || "top-self":
      break;
  }
}

var helpDescriptionsMapping = {
  debt: `
<h1>
  Взыскание дебиторской задолженности и штрафных санкций. Исполнительное
  производство
</h1>
<img src="static/1-1.jpg" />
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ipsum
  id velit congue tempor in eu tellus. Nullam sollicitudin purus vitae
  ex dignissim, finibus egestas tortor eleifend. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit. Curabitur ut ullamcorper massa. In
  fringilla aliquam elementum. Nulla facilisi. Interdum et malesuada
  fames ac ante ipsum primis in faucibus. Suspendisse aliquam lorem ac
  elit tincidunt eleifend. Aenean posuere felis lobortis, porttitor odio
  vel, commodo tellus. Suspendisse potenti. Etiam fringilla augue
  malesuada cursus consequat. Mauris iaculis lorem non purus blandit, id
  scelerisque nulla maximus. Quisque quis bibendum magna. Mauris
  interdum ullamcorper condimentum. Pellentesque in odio ac leo eleifend
  dignissim id nec sem. Nam sit amet massa quis nisl dictum dictum
</p>
<p>
  Proin pellentesque ac quam non elementum. Sed eget ullamcorper tortor.
  Mauris rhoncus sagittis neque et eleifend. Etiam eget eleifend quam.
  Maecenas metus justo, imperdiet a vehicula in, auctor in ante. In hac
  habitasse platea dictumst. Pellentesque libero ligula, varius vitae
  dui in, tempor rhoncus quam. Aliquam in turpis eros.
</p>
<p>
  Mauris pharetra eleifend leo, vitae vestibulum neque posuere eu. Proin
  facilisis ante odio, in pharetra sapien volutpat ut. Nunc tincidunt
  quis nunc gravida elementum. Phasellus tristique leo eu lobortis
  faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
  in mi risus. Duis est lorem, malesuada sed molestie eu, fermentum non
  arcu. Vestibulum fermentum, metus vitae cursus cursus, felis mi tempus
  diam, nec fringilla sapien magna vel massa. Aenean elementum ex enim,
  non fermentum tellus sagittis at.
</p>`
};
