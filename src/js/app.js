var mainSection = document.getElementById("main");
var helpSection = document.getElementById("help");
var sidebar = document.getElementById("side");

// helpSection.addEventListener("click", handleHelpClick);
// function handleHelpClick(event) {
//   var target = event.target;
//   while (target != helpSection) {
//     if (target.tagName == "LI") {
//       mainSection.querySelectorAll("section").forEach(section => {
//         if (
//           section.classList.contains("help") ||
//           section.classList.contains("about")
//         ) {
//           section.style.display = "none";
//         }
//       });
//       var helpDescriptionSection = document.createElement("section");
//       helpDescriptionSection.id = "help-description";
//       helpDescriptionSection.innerHTML = helpDescriptionsMapping[target.id];
//       mainSection.insertBefore(
//         helpDescriptionSection,
//         mainSection.firstElementChild
//       );
//       return;
//     }
//     target = target.parentNode;
//   }
// }

// sidebar.querySelector("li").addEventListener("click", handleSideClick);
// function handleSideClick(e) {
//   mainSection.querySelectorAll("section").forEach(section => {
//     section.style.display = "";
//   });
//   var helpDescr = document.getElementById("help-description");
//   if (helpDescr) {
//     helpDescr.parentNode.removeChild(helpDescr);
//   }
// }

var helpDescriptionsMapping = {
  debt: `
<h1>
  Взыскание дебиторской задолженности и штрафных санкций. Исполнительное
  производство
</h1>
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
