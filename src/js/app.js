var mainSection = document.getElementById("main");
var contactsSections = document.getElementById("contacts-info");
var sidebar = document.getElementById("side");
var header = document.getElementById("header");
var mediation = document.getElementById("mediation-help");
var burger = document.getElementById("burger");
var juridicalHelp = document.getElementById("juridical-help");

mainSection.addEventListener("click", handleHelpClick);

function handleHelpClick(event) {
  var target = event.target;
  while (target != mainSection) {
    if (target.tagName == "LI" && target.id) {
      insertHelpDescriptionSection(target.id);
      return;
    }
    target = target.parentNode;
  }
}

function insertHelpDescriptionSection(id) {
  mainSection
    .querySelectorAll("main > section")
    .forEach(section => section.classList.add("hidden"));
  var helpDescriptionSection = document.createElement("section");
  helpDescriptionSection.id = "description";
  helpDescriptionSection.innerHTML = helpDescriptionsMapping[id];
  mainSection.insertBefore(
    helpDescriptionSection,
    mainSection.firstElementChild
  );
  window.scrollTo(0, 0);
}

sidebar
  .querySelectorAll("li")
  .forEach(button => button.addEventListener("click", handleNavClick));
header
  .querySelectorAll("li")
  .forEach(button => button.addEventListener("click", handleNavClick));

document
  .querySelectorAll(".logo")
  .forEach(logo => logo.addEventListener("click", handleNavClick));

function handleNavClick(e) {
  var helpDescr = document.getElementById("description");
  if (helpDescr) mainSection.removeChild(helpDescr);
  mainSection
    .querySelectorAll("main > section")
    .forEach(section => section.classList.remove("hidden"));
  burger.checked = false;
  switch (e.target.id) {
    case "nav-main":
      window.scrollTo(0, 0);
      break;
    case "nav-help-kind":
      juridicalHelp.scrollIntoView();
      break;
    case "nav-contacts-info":
      contactsSections.scrollIntoView();
      break;
    case "nav-mediation":
      mediation.scrollIntoView();
      break;
    case "nav-self":
      insertHelpDescriptionSection("self");
      break;
    case "top-main":
      window.scrollTo(0, 0);
      break;
    case "top-help-kind":
      window.scroll({ top: juridicalHelp.offsetTop - 48 });
      break;
    case "top-contacts-info":
      window.scroll({ top: contactsSections.offsetTop - 48 });
      break;
    case "top-mediation":
      window.scroll({ top: mediation.offsetTop - 48 });
      break;
    case "top-self":
      insertHelpDescriptionSection("self");
      break;
    default:
      window.scrollTo(0, 0);
  }
}

var helpDescriptionsMapping = {
  debt: `
    <h1>
      ВЗЫСКАНИЕ ДЕБИТОРСКОЙ ЗАДОЛЖЕННОСТИ, ПРИЧИНЁННЫХ УБЫТКОВ И ШТРАФНЫХ САНКЦИЙ
    </h1>
    <img src="static/3-2.jpg">
    <p>
      Своевременное принятие мер по взысканию дебиторской задолженности является
      залогом успешной и прибыльной работы вашего бизнеса.
    </p>
    <p>
      Адвокат Белова Ксения Сергеевна осуществляет комплексную работу по
      взысканию имеющейся задолженности, причинённых убытков и штрафных санкций
      и принимает исчерпывающие меры по взысканию долга. Чтобы найти оптимальный
      выход из сложившейся ситуации с учётом интересов сторон, адвокатом
      проводится тщательная досудебная работа по взысканию задолженности.
    </p>
    <p>
      В случае уклонения должника от возврата имеющегося долга и отсутствия у
      него желания идти на компромисс в досудебном или исполнительном
      производстве, адвокат принимает необходимые меры по привлечению должника к
      установленной законом ответственности.
    </p>
    <h5>РАБОТА ПО ВЗЫСКАНИЮ ЗАДОЛЖЕННОСТИ ВКЛЮЧАЕТ В СЕБЯ:</h5>
    <ol>
      <li>Анализ и правовую экспертизу представленных документов;</li>
      <li>Консультацию клиента по вопросам взыскания долга;</li>
      <li>
        Согласование с клиентом наиболее приемлемого способа взыскания
        задолженности (например, направление претензии, взыскание долга путём
        совершения исполнительной надписи нотариуса, подготовка документов для
        взыскания долга в судебном порядке, заключение медиативного соглашения и
        другое);
      </li>
      <li>
        Досудебное урегулирование спора, которое предполагает участие в
        переговорах между сторонами, составление и направление претензии,
        принятие мер по заключению мирового соглашения;
      </li>
      <li>
        Подготовку заявления о совершении исполнительной надписи, заявления о
        возбуждении приказного производства, составление искового заявления с
        произведением необходимого расчёта задолженности и штрафных санкций;
      </li>
      <li>
        Представление интересов клиента в суде по вопросам взыскания долга;
      </li>
      <li>
        Подготовку документов для принудительного исполнения решения суда;
      </li>
      <li>
        Контроль исполнения судебного решения, включая работу по представлению
        интересов и оказанию правовой помощи в рамках исполнительного
        производства;
      </li>
      <li>
        Принятие иных законных мер по взысканию возникшей задолженности.
      </li>
    </ol>
    <p>
      Исходя из ситуации вам будет предложен оптимальный способ взыскания
      причитающейся задолженности, а своевременное получение исполнительного
      документа повысит ваши шансы на погашение имеющегося долга. Кроме того,
      понесённые расходы по оплате юридической помощи адвоката для взыскания
      задолженности могут быть возложены на должника.
    </p>`,
  expert: `
    <h1>РАЗРАБОТКА И ЮРИДИЧЕСКАЯ ЭКСПЕРТИЗА ДОКУМЕНТОВ, ДОГОВОРНАЯ РАБОТА</h1>
    <img src="static/2-2.jpg">
    <p>
      Грамотно составленные документы служат гарантией безопасности совершаемых
      сделок и хозяйственной деятельности организации. Чтобы устранить
      противоречия, внести ясность по спорному вопросу и обеспечить защиту от
      претензий со стороны контролирующих органов, вы можете воспользоваться
      правовой помощью адвоката для составления и проверки своей документации.
    </p>
    <h5>РАЗРАБОТКА И ЮРИДИЧЕСКАЯ ЭКСПЕРТИЗА ДОКУМЕНТОВ ВКЛЮЧАЕТ В СЕБЯ:</h5>
    <ol>
      <li>
        Консультацию клиента по вопросам заключения договоров и соглашений в
        сфере хозяйственной деятельности, составления заявлений, жалоб,
        ходатайств, контрактов и других документов;
      </li>
      <li>
        Разработку договоров аренды, поставки, купли-продажи, подряда, оказания
        услуг, а также иных видов договоров, соглашений и контрактов;
      </li>
      <li>
        Составление претензий, исков, заявлений, жалоб, ходатайств и других
        юридических документов;
      </li>
      <li>
        Разработку локальных нормативных правовых актов, необходимых в процессе
        вашей предпринимательской деятельности (коллективных договоров,
        соглашений, правил внутреннего трудового распорядка и других);
      </li>
      <li>
        Разработку корпоративных документов организации (уставов, протоколов,
        решений, положений, соглашений и иных документов);
      </li>
      <li>
        Урегулирование разногласий, возникающих в процессе договорных отношений,
        в том числе представление интересов клиента при обсуждении условий
        заключения договора;
      </li>
      <li>
        Проверку имеющихся документов на соответствие нормам действующего
        законодательства;
      </li>
      <li>
        Иные вопросы, связанные с разработкой и юридической экспертизой
        документов.
      </li>
    </ol>
    <p>
      Комплекс оказываемой юридической помощи позволит вам оперативно получить
      все необходимые документы для осуществления предпринимательской
      деятельности, свести к минимуму риски по сделкам и уберечь вас от убытков
      и других неблагоприятных последствий.
    </p>
    <p>
      Воспользовавшись помощью адвоката по разработке и юридической экспертизе
      документов вы обеспечите надлежащую правовую защиту своих интересов,
      получите ответы на интересующие вас вопросы и будете уверены в законности
      осуществляемой вами деятельности.
    </p>`,
  help: `
    <h1>
      ПРЕДСТАВЛЕНИЕ ИНТЕРЕСОВ КЛИЕНТА В СУДАХ, ГОСУДАРСТВЕННЫХ ОРГАНАХ И ИНЫХ
      ОРГАНИЗАЦИЯХ
    </h1>
    <img src="static/5-2.jpg">
    <p>
      Участие адвоката в судебном процессе является важным условием разрешения
      имеющегося спора, ведь отсутствие профессионального представителя может
      привести к неблагоприятным последствиям для вашего бизнеса. Кроме того,
      возможность представления адвокатом ваших интересов в судах и иных
      организациях позволит вам в наибольшей мере защитить свои права и законные
      интересы, а также сэкономит ваше время.
    </p>
    <p>
      Адвокат Белова Ксения Сергеевна оказывает юридическую помощь как на этапе
      досудебного урегулирования спора, так и на всех этапах судебного
      разбирательства.
    </p>
    <h5>
      ПОРЯДОК ПРЕДСТАВЛЕНИЯ ПРАВ И ЗАКОННЫХ ИНТЕРЕСОВ В СУДЕБНОМ ЗАСЕДАНИИ:
    </h5>
    <ol>
      <li>
        Консультация по возникшему вопросу, анализ сложившейся ситуации;
      </li>
      <li>
        Оценка возможных перспектив досудебного или судебного решения спора,
        выработка позиции по делу и согласование её с клиентом;
      </li>
      <li>
        Представление ваших интересов на стадии досудебного урегулирования
        спора;
      </li>
      <li>
        Составление и подача заявлений, исков, жалоб, отзывов, ходатайств в
        судебные инстанции;
      </li>
      <li>
        Ведение вашего дела в суде;
      </li>
      <li>
        Обжалование судебных решений, противоречащих вашим интересам, в
        вышестоящих инстанциях.
      </li>
    </ol>
    <p>
      В случае признания ваших требований обоснованными, понесённые расходы на
      оплату труда адвоката подлежат взысканию с виновной стороны.
    </p>
    <p>
      Помимо участия в судебных заседаниях адвокат может представлять ваши
      интересы в различных государственных органах и иных организациях,
      например:
    </p>
    <ul>
      <li>агентство по государственной регистрации и земельному кадастру;</li>
      <li>
        администрация района;
      </li>
      <li>
        исполнительный комитет;
      </li>
      <li>
        органы принудительного исполнения;
      </li>
      <li>
        органы внутренних дел;
      </li>
      <li>
        налоговые органы;
      </li>
      <li>
        таможенные органы;
      </li>
      <li>
        иные организации и органы государственной власти и управления.
      </li>
    </ul>
    <p>
      Также адвокатом осуществляется представление интересов клиента перед
      третьими лицами в процессе переговоров, проведении собраний, заседаний и
      иных встреч, возникающих в ходе предпринимательской деятельности.
    </p>`,
  service: `
    <h1>
      КОМПЛЕКСНОЕ ЮРИДИЧЕСКОЕ ОБСЛУЖИВАНИЕ ЮРИДИЧЕСКИХ ЛИЦ И ИНДИВИДУАЛЬНЫХ
      ПРЕДПРИНИМАТЕЛЕЙ
    </h1>
    <img src="static/4-1.jpg">
    <p>
      Заключение договора на абонентское обслуживание позволит вам получать
      юридическую помощь для оперативного решения вопросов, возникающих в ходе
      вашей предпринимательской деятельности.
    </p>
    <p>
      Вы сами можете выбрать вид необходимой юридической поддержки и
      продолжительность оказания помощи. Также по согласованию с клиентом
      выбирается наиболее удобная для вас форма сотрудничества (например,
      организация удалённой работы или необходимость присутствия в офисе
      организации).
    </p>
    <p>
      Комплексное юридическое обслуживание вашего бизнеса адвокатом позволит
      оперативно решать возникающие правовые вопросы без привлечения штатного
      юриста. Практика показывает, что для малых и средних предприятий подобная
      форма работы является более выгодной и удобной, поскольку сотрудничество с
      адвокатом не требует оформления трудового договора, уплаты налогов и
      взносов, а также гарантирует полную конфиденциальность и высокий
      профессионализм. Крупные предприятия могут прибегнуть к правовой помощи
      адвоката для решения отдельного правового вопроса, не отвлекая юриста
      предприятия от текущей работы
    </p>
    <h5>
      АБОНЕНТСКОЕ ОБСЛУЖИВАНИЕ ВКЛЮЧАЕТ В СЕБЯ:
    </h5>
    <ol>
      <li>
        Консультирование клиента по правовым вопросам, возникающим в процессе
        хозяйственной и иной деятельности юридического лица, индивидуального
        предпринимателя;
      </li>
      <li>
        Представление интересов клиента перед третьими лицами, в том числе во
        взаимоотношениях с государственными органами и другими организациями;
      </li>
      <li>
        Юридическое сопровождение заключения сделок и участие в переговорах;
      </li>
      <li>
        Разработка и юридическая экспертиза документов, обеспечение договорной
        работы организации;
      </li>
      <li>
        Ведение кадровой работы, в том числе разработка трудовых договоров,
        положений и других внутренних документов организации, подготовка
        правовых заключений по вопросам трудового права;
      </li>
      <li>
        Взыскание дебиторской задолженности, причинённых убытков и штрафных
        санкций;
      </li>
      <li>
        Ведение деловой переписки с партнёрами, контрагентами, государственными
        органами и другими организациями;
      </li>
      <li>Юридическое сопровождение бизнеса по иным правовым вопросам.</li>
    </ol>
    <p>
      Комплекс оказываемой адвокатом юридической помощи позволит вам оперативно
      решать возникающие вопросы, свести к минимуму риски по сделкам и уберечь
      вас от убытков и других неблагоприятных последствий.
    </p>`,
  agency: `
    <h1>
    РЕГИСТРАЦИЯ И РЕОРГАНИЗАЦИЯ СУБЪЕКТОВ ХОЗЯЙСТВОВАНИЯ
  </h1>
  <img src="static/4-2.jpg">
  <p>
    Выбор наиболее оптимальной формы ведения бизнеса играет важную роль при
    формировании стратегии развития организации и её дальнейшей деятельности.
    Ошибки в подобных вопросах могут повлечь за собой такие неблагоприятные
    последствия, как отказ в регистрации фирмы или невозможность осуществлять
    выбранный вид деятельности.
  </p>
  <p>
    Адвокат Белова Ксения Сергеевна поможет вам в подготовке правовых
    документов (уставов, решений, протоколов, учредительных документов и
    других), проконсультирует по вопросам и порядку проведения регистрации и
    реорганизации организации, совершения сделок по купле-продаже бизнеса.
  </p>
  <h5>
    ЮРИДИЧЕСКАЯ ПОМОЩЬ ПО ВОПРОСАМ РЕГИСТРАЦИИ И РЕОРГАНИЗАЦИИ ВКЛЮЧАЕТ В
    СЕБЯ:
  </h5>
  <ol>
    <li>
      Консультирование клиента по вопросам, возникающим в процессе регистрации
      и реорганизации (выбор оптимальной формы ведения бизнеса, формирование
      уставного фонда и другие);
    </li>
    <li>
      Оказание помощи в согласовании наименования юридического лица;
    </li>
    <li>
      Подготовка пакета документов, необходимого для осуществления регистрации
      юридического лица или индивидуального предпринимателя;
    </li>
    <li>
      Представление интересов клиента в регистрирующих органах;
    </li>
    <li>
      Сопровождение процедуры регистрации юридических лиц и индивидуальных
      предпринимателей, представительств и филиалов (подготовка документов,
      согласование наименования, подача документов в регистрирующий орган,
      постановка на учет в государственных органах и организациях);
    </li>
    <li>
      Сопровождение процедуры реорганизации (присоединения, выделения,
      слияния, разделения, преобразования) юридических лиц;
    </li>
    <li>
      Подготовка новых редакций, изменений и дополнений в учредительные
      документы, возникающих в связи с изменением законодательства, состава
      учредителей, размера уставного фонда;
    </li>
    <li>
      Оказание правовой помощи по иным вопросам, возникающих в ходе
      регистрации и реорганизации.
    </li>
  </ol>
  <p>
    Также адвокатом осуществляются консультации и рекомендации о правилах и
    порядке совершения сделок по купли-продаже бизнеса и долей в уставном
    фонде, продаже предприятия как имущественного комплекса.
  </p>`,
  registration: `
  <h1>
      ЮРИДИЧЕСКАЯ ПОМОЩЬ В ПРОЦЕДУРАХ ЛИКВИДАЦИИ И БАНКРОТСТВА
    </h1>
    <img src="static/6-1.jpg">
    <p>
      Прохождение процедур ликвидации и банкротства зачастую невозможно без
      квалифицированной правовой помощи адвоката. Несвоевременное обращение за
      юридической помощью или ошибочно выбранный подход к вопросу прекращения
      деятельности организации с большой долей вероятности могут привести к
      неблагоприятным последствиям.
    </p>
    <p>
      Юридическая помощь на стадиях ликвидации и банкротства оказывается как
      должнику, так и кредитору. При представлении интересов кредитора адвокат
      осуществляет взаимодействие с антикризисным управляющим или ликвидатором,
      оказывает квалифицированную помощь в подготовке требований и включении их
      в соответствующий реестр, способствует привлечению к субсидиарной
      ответственности должностных лиц.
    </p>
    <p>
      Выступая на стороне должника, адвокат может представлять его интересы в
      суде и на собраниях кредиторов, содействовать работе ликвидатора или
      антикризисного управляющего, оказать помощь по осуществлению расчётов
      задолженности в целях минимизации правовых и финансовых рисков.
    </p>
    <h5>
      ЮРИДИЧЕСКАЯ ПОМОЩЬ ПО ВОПРОСАМ ЛИКВИДАЦИИ И БАНКРОТСТВА ВКЛЮЧАЕТ В СЕБЯ:
    </h5>
    <ol>
      <li>
        Консультирование клиента по вопросам ликвидации юридического лица,
        прекращения деятельности представительств иностранных организаций,
        банкротства субъектов хозяйствования (разъяснение порядка проведения
        соответствующих процедур, рассмотрение требований кредиторов,
        привлечение к субсидиарной ответственности должностных лиц и другие
        вопросы);
      </li>
      <li>
        Подготовка документов, необходимых для осуществления процедуры
        ликвидации (решений о ликвидации, заявлений, уведомлений и других
        документов);
      </li>
      <li>
        Обжалование актов проверяющих органов и действий должностных лиц,
        оспаривание требований кредиторов;
      </li>
      <li>
        Представление интересов клиента на собраниях кредиторов, в судах и иных
        государственных органах по вопросам ликвидации и банкротства;
      </li>
      <li>
        Подготовка заявлений о банкротстве должника, требований кредитора, жалоб
        на действия управляющего и других документов в процедуре банкротства;
      </li>
      <li>
        Оказание правовой помощи по иным вопросам, возникающим в ходе ликвидации
        и банкротства.
      </li>
    </ol>
    <p>
      Также адвокатом осуществляются консультации и рекомендации о правилах и
      порядке совершения сделок по купли-продаже бизнеса и долей в уставном
      фонде, продаже предприятия как имущественного комплекса.
    </p>`,
  participation: `
    <h1>
    СОСТАВЛЕНИЕ ПРЕТЕНЗИЙ, ИСКОВЫХ ЗАЯВЛЕНИЙ, ЖАЛОБ, ХОДАТАЙСТВ И ИНЫХ
    ДОКУМЕНТОВ
  </h1>
  <img src="static/fmf-5800-1.jpg">
  <p>
    Если вы столкнулись с необходимостью подготовить исковое заявление,
    получили повестку из суда или у вас возникли вопросы о том, как вести себя
    в судебном заседании, вы можете воспользоваться юридической помощью
    адвоката для защиты своих прав и законных интересов.
  </p>
  <p>
    Адвокат Белова Ксения Сергеевна не только оперативно предоставит вам
    юридическую консультацию и подготовит необходимые документы, но и может
    представлять ваши интересы в судах и иных органах.
  </p>
  <p>
    Грамотно составленные документы служат гарантией принятия их
    судом к рассмотрению, а также влияют на результат разрешения спора. Чтобы
    укрепить свою правовую позицию и быть уверенным в законности своих
    требований, большинство людей прибегает к помощи профессионального
    адвоката.
  </p>
  <h5>
    СОСТАВЛЕНИЕ ДОКУМЕНТОВ ВКЛЮЧАЕТ В СЕБЯ:
  </h5>
  <ol>
    <li>Ознакомление с материалами дела, анализ имеющихся документов;</li>
    <li>
      Консультирование клиента по сути спора, согласование с ним правовой
      позиции по делу;
    </li>
    <li>
      Сбор документов и доказательств, необходимых для защиты ваших законных
      интересов;
    </li>
    <li>
      Составление претензий, исков, заявлений, жалоб, ходатайств, возражений и
      отзывов на исковые заявления и других юридических документов;
    </li>
    <li>
      Осуществление расчёта цены иска, в том числе неустойки, пени и штрафных
      санкций;
    </li>
    <li>
      Определение размера государственной пошлины и разъяснение порядка её
      уплаты. Принятие мер по снижению подлежащей уплате государственной
      пошлины;
    </li>
    <li>Иные вопросы, связанные с подготовкой документов.</li>
  </ol>
  <p>
    Обратите внимание, что при составлении юридических документов необходимо не
    только сформулировать суть имеющейся проблемы, но и определить состав
    участников по делу, обосновать свою правовую позицию со ссылками на нормы
    законодательства и представить достаточные и достоверные доказательства в
    подтверждение своих требований. Несоблюдение этих условий может стать
    основанием для того, что суд не примет ваше заявление или возвратит его
    вам для устранения недостатков.
  </p>
  <p>
    Воспользовавшись помощью адвоката по составлению документов вы обеспечите
    надлежащую правовую защиту своих интересов, получите ответы на
    интересующие вас вопросы и будете уверены в выбранной вами правовой
    позиции.
  </p>`,
  consultation: `
  <h1>
      КОНСУЛЬТАЦИИ ПО ВОПРОСАМ ГРАЖДАНСКОГО, ТРУДОВОГО, ХОЗЯЙСТВЕННОГО И ИНЫХ
      ОТРАСЛЕЙ ПРАВА
    </h1>
    <img src="static/7-1.jpg">
    <p>
      Получение юридической консультации является наиболее распространённым
      видом правовой помощи, который практически не требует временных и денежных
      затрат для защиты своих прав и интересов.
    </p>
    <p>
      Обращение за консультацией адвоката эффективно не только при наличии
      юридической проблемы, но и для ее предупреждения в будущем, а также для
      принятия верного решения в неоднозначной ситуации.
    </p>
    <h5>
      СФЕРЫ, В КОТОРЫХ ОСУЩЕСТВЛЯЕТСЯ КОНСУЛЬТИРОВАНИЕ ПО ПРАВОВЫМ ВОПРОСАМ:
    </h5>
    <ul>
      <li>авторское право;</li>
      <li>административное право;</li>
      <li>брачно-семейное право;</li>
      <li>гражданское право;</li>
      <li>защита прав потребителей;</li>
      <li>корпоративное право;</li>
      <li>трудовое право;</li>
      <li>хозяйственное право;</li>
      <li>иные отрасли права.</li>
    </ul>
    <p>
      Юридические консультации предоставляются адвокатом как в устной, так и в
      письменной форме по желанию клиента.
    </p>
    <p>
      Консультирование производится на возмездной основе в ходе личного приёма.
      Также возможно оказание юридических консультаций по телефону, посредством
      электронной почты, в мессенджерах и социальных сетях.
    </p>
    <h5>
      ПОРЯДОК ОКАЗАНИЯ ЮРИДИЧЕСКОЙ КОНСУЛЬТАЦИИ:
    </h5>
    <ol>
      <li>
        Приём гражданина для установления возникших вопросов и изучения
        имеющихся документов по делу;
      </li>
      <li>
        Детальная подготовка консультации по интересующему вопросу с
        предоставлением ссылок и выдержек из нормативных правовых актов,
        разработкой алгоритма дальнейших действий, письменных пояснений;
      </li>
      <li>Подробная консультация по интересующему вас вопросу.</li>
    </ol>
    <p>
      Обращаю ваше внимание на то, что чем подробнее вы изложите сложившуюся
      ситуацию, тем более полная консультация будет оказана адвокатом.
      Рекомендую вам предварительно подготовиться к консультации, чётко
      сформулировав для себя вопросы, на которые вы хотите получить ответ, а
      также собрать необходимые документы, которые понадобятся адвокату для
      изучения вашего вопроса.
    </p>`,
  lawsuit: `
    <h1>
      УЧАСТИЕ В СУДЕБНЫХ ЗАСЕДАНИЯХ, ПРЕДСТАВЛЕНИЕ ИНТЕРЕСОВ В ГОСУДАРСТВЕННЫХ
      ОРГАНАХ И ИНЫХ ОРГАНИЗАЦИЯХ
    </h1>
    <img src="static/8-1.jpg">
    <p>
      Участие адвоката в судебном процессе является важным условием разрешения
      имеющегося спора, поскольку отсутствие профессионального представителя
      может привести к неблагоприятным последствиям вплоть до отказа в
      удовлетворении заявленных вами требований. В свою очередь, представление
      ваших интересов адвокатом в судах и иных организациях позволит вам в
      наибольшей мере защитить свои права и законные интересы, а также сэкономит
      ваше время.
    </p>
    <p>
      Адвокат Белова Ксения Сергеевна оказывает юридическую помощь как на этапе
      досудебного урегулирования спора, так и на всех этапах судебного
      разбирательства по административным, гражданским, семейным, трудовым и
      экономическим делам.
    </p>
    <h5>
      ПОРЯДОК ПРЕДСТАВЛЕНИЯ ПРАВ И ЗАКОННЫХ ИНТЕРЕСОВ В СУДЕБНОМ ЗАСЕДАНИИ:
    </h5>
    <ol>
      <li>Ознакомление с материалами дела, анализ имеющихся документов;</li>
      <li>Консультирование клиента по возникающим у него правовым вопросам;</li>
      <li>
        Оценка возможных перспектив досудебного или судебного решения спора,
        выработка позиции по делу и согласование её с клиентом;
      </li>
      <li>
        Сбор документов и доказательств, необходимых для защиты ваших законных
        интересов;
      </li>
      <li>
        Представление ваших интересов на стадии досудебного урегулирования
        спора;
      </li>
      <li>
        Составление и подача заявлений, исков, жалоб, отзывов, ходатайств в
        судебные инстанции;
      </li>
      <li>Ведение вашего дела в суде;</li>
      <li>
        Обжалование судебных решений, противоречащих вашим интересам, в
        вышестоящих инстанциях.
      </li>
    </ol>
    <p>
      Помимо участия в судебных заседаниях адвокат может представлять ваши
      интересы в различных государственных органах и иных организациях,
      например:
    </p>
    <ul>
      <li>агентство по государственной регистрации и земельному кадастру;</li>
      <li>
        администрация района;
      </li>
      <li>
        исполнительный комитет;
      </li>
      <li>
        органы принудительного исполнения;
      </li>
      <li>
        органы внутренних дел;
      </li>
      <li>налоговые органы;</li>
      <li>таможенные органы;</li>
      <li>иные организации и органы государственной власти и управления.</li>
    </ul>
    <p>
      Представление интересов клиента в судах и иных государственных органах
      производится на возмездной основе с обязательным заключением договора на
      оказание юридической помощи. В случае признания ваших требований
      обоснованными, понесённые расходы на оплату труда адвоката подлежат
      взысканию с виновной стороны.
    </p>`,
  negotiation: `
    <h1>
      ИНФОРМАЦИОННАЯ ВСТРЕЧА МЕДИАТОРА СО СТОРОНАМИ
    </h1>
    <img src="static/10-1.jpg">
    <p>
      Медиация с каждым годом становится всё более популярной в Беларуси для
      разрешения как гражданских, так и экономических споров. Зачастую клиенты
      желают воспользоваться медиацией и заключить медиативное соглашение по
      имеющемуся спорному вопросу, но не знают, как происходит данная процедура,
      и не могут избавиться от сомнений о необходимости её применения.
    </p>
    <p>
      Для того, чтобы понять, можно ли урегулировать ваш вопрос в ходе медиации,
      пригласить вторую сторону к участию в процедуре, а также получить
      исчерпывающую информацию по возникшим вопросам о медиации, вы можете
      воспользоваться предварительной встречей с медиатором.
    </p>
    <p>
      Обращаю ваше внимание, что данная процедура не является обязательной, но в
      большинстве случаев проведение подобной информационной встречи значительно
      облегчает достижение эффективного результата переговоров и позволяет
      получить исчерпывающие ответы на вопросы о медиации.
    </p>
    <h5>
      ИНФОРМАЦИОННАЯ ВСТРЕЧА МЕДИАТОРА СО СТОРОНАМИ ВКЛЮЧАЕТ В СЕБЯ:
    </h5>
    <ol>
      <li>
        Консультацию стороны по вопросам проведения процедуры медиации,
        последствиях заключения медиативного соглашения, преимуществах и
        недостатках медиации в сложившейся ситуации;
      </li>
      <li>
        Изучение предмета спора и оценку возможности применения процедуры
        медиации в сложившейся ситуации;
      </li>
      <li>Приглашение второй стороны к участию в процедуре медиации;</li>
      <li>
        Выбор удобного времени, места проведения медиации, определение круга
        участников;
      </li>
      <li>
        Заключение соглашения о применении процедуры медиации, разрешение
        вопросов о размере вознаграждения за услуги медиатора и сроках его уплаты.
      </li>
    </ol>
    <p>
      Информационная встреча может происходить как с обеими сторонами вместе,
      так и с каждой стороной в отдельности. Решение о том, в каком составе и в
      какой форме будет проходить такая встреча, как правило, решают стороны.
    </p>
    <p>
      Поскольку в процедуре медиации главенствующую роль занимает оказываемое
      сторонами медиатору доверие и его профессионализм в помощи по
      урегулированию споров, в ходе предварительной встречи с медиатором вы
      также сможете убедиться в профессиональных навыках медиатора и определить
      свой психологический комфорт от общения с ним.
    </p>`,
  mediation: `
    <h1>
      ПРОВЕДЕНИЕ ПРОЦЕДУРЫ МЕДИАЦИИ
    </h1>
    <img src="static/11-1.jpg">
    <p>
      Наряду с правом каждого обратиться за юридической помощью к адвокату для
      защиты своих интересов суде, граждане и субъекты хозяйствования могут
      воспользоваться процедурой медиации для разрешения возникшей спорной
      ситуации.
    </p>
    <p>
      Медиация – переговоры сторон с участием профессионального медиатора, в
      ходе которых вырабатывается взаимовыгодное соглашение по возникшему спору.
    </p>
    <p>
      Судебное разрешение спора предполагает значительные временные и денежные
      затраты, требует уплаты высоких ставок государственной пошлины и иных
      судебных издержек, зачастую оказывается эмоционально изматывающим для
      сторон. Кроме того, в ходе судебного процесса вы не можете быть уверены в
      окончательном результате по делу и гарантировать добросовестное исполнение
      своих обязательств проигравшей стороной.
    </p>
    <p>
      Адвокатом и медиатором Беловой Ксенией Сергеевной оказывается полный
      комплекс услуг в сфере медиации, в том числе юридические и
      конфликтологические консультации, проведение переговоров и медиативных
      сессий со сторонами, подготовка необходимых документов.
    </p>
    <h5>
      ПРОЦЕДУРА МЕДИАЦИИ ВКЛЮЧАЕТ В СЕБЯ:
    </h5>
    <ol>
      <li>
        Информационную встречу со сторонами, в ходе которой осуществляются
        консультации по вопросам проведения процедуры медиации, последствиях
        заключения медиативного соглашения, преимуществах и недостатках медиации
        в сложившейся ситуации;
      </li>
      <li>
        Изучение предмета спора и оценку возможности применения процедуры
        медиации в сложившейся ситуации;
      </li>
      <li>Приглашение второй стороны к участию в процедуре медиации;</li>
      <li>
        Подготовку дела к процедуре медиации (проведение переговоров со
        сторонами, заключение соглашения о применении и проведении медиации,
        решение организационных вопросов);
      </li>
      <li>
        Проведение медиативных сессий, в ходе которых сторонами принимается
        взаимовыгодное соглашение по возникшему спору;
      </li>
      <li>
        Подготовку медиативного соглашения и иных документов, необходимых для
        юридического оформления достигнутых договорённостей;
      </li>
      <li>
        Последующее взаимодействие со сторонами, которое предусматривает
        поддержку сторон при исполнении достигнутых ими договорённостей, а также
        возобновление медиации (в случае, если стороны решили приостановить её).
      </li>
    </ol>
    <p>
      Медиация как альтернативный способ урегулирования споров обеспечивает
      совершенствование партнерских деловых отношений, способствует достижению
      примирения участников спора и максимально соответствует интересам каждой
      из сторон.
    </p>`,
  agreement: `
    <h1>
      ПОДГОТОВКА МЕДИАТИВНОГО СОГЛАШЕНИЯ И ИНЫХ ДОКУМЕНТОВ
    </h1>
    <img src="static/rawpixel-1317616-unsplash.jpg">
    <p>
      Для оформления и фиксации достигнутых в ходе переговоров договорённостей
      стороны могут воспользоваться помощью медиатора по подготовке медиативного
      соглашения и других необходимых документов.
    </p>
    <p>
      Медиативное соглашение &mdash; это соглашение сторон о прекращении спора на
      основе взаимных уступок, которое в максимальной соответствует интересам
      каждой из сторон. Оно заключается в письменной форме и подписывается
      обеими сторонами (их представителями) и медиатором.
    </p>
    <p>
      Медиативное соглашение может быть заключено как до обращения в суд по
      спорному вопросу, так и на любой стадии судебного разбирательства: при
      рассмотрении дела судом первой инстанции, в апелляционной, кассационной,
      надзорной инстанциях, а также на стадии исполнения судебного решения.
    </p>
    <p>
      Суть такого соглашения состоит в достижении согласия об условиях
      разрешения спора и необходимость в дальнейшем судебном разбирательстве
      отпадает. Правовые последствия заключения медиативного соглашения состоят
      в том, что повторное рассмотрение спора между теми же сторонами, о том же
      предмете и по тем же основаниям в суде становится невозможным.
    </p>
    <h5>
      ПОДГОТОВКА МЕДИАТИВНОГО СОГЛАШЕНИЯ И ИНЫХ ДОКУМЕНТОВ ВКЛЮЧАЕТ В СЕБЯ:
    </h5>
    <ol>
      <li>
        Консультирование сторон по вопросам проведения процедуры медиации, её
        преимуществах и недостатках, последствиях заключения медиативного
        соглашения, порядке исполнения медиативного соглашения;
      </li>
      <li>
        Подготовку медиативного соглашения и иных документов, необходимых для
        юридического оформления достигнутых договорённостей;
      </li>
      <li>
        Проверка разработанных сторонами документов на соответствие требованиям
        действующего законодательства;
      </li>
      <li>
        Последующее взаимодействие со сторонами, которое предусматривает
        поддержку сторон при исполнении достигнутых ими договорённостей.
      </li>
    </ol>
    <p>
      Исходя из практики медиативные соглашения охотно и добровольно исполняются
      в установленные сроки, поскольку процедура медиации позволяет найти
      сторонам взаимовыгодное решение. Однако в случае его неисполнения в
      добровольном порядке существует механизм принудительного исполнения
      достигнутого соглашения без необходимости повторного рассмотрения судом
      данного спора.
    </p>`,
  self: `
    <h1>
      Обо мне
    </h1>
    <img src="static/pexels-photo 44435443.jpg">
    <p>
      Я, Белова Ксения Сергеевна, являюсь лицензированным адвокатом и медиатором
      по гражданским и экономическим делам. Свою деятельность я осуществляю на
      основе ключевых принципов работы адвоката: порядочности,
      конфиденциальности, доверительности и профессионализма в строгом
      соответствии с требованиями законодательства.
    </p>
    <p>
      Обратиться ко мне за оказанием юридической помощи могут не только
      граждане, индивидуальные предприниматели, организации и предприятия,
      являющиеся резидентами Республики Беларусь, но и иностранные граждане и
      зарубежные субъекты хозяйствования.
    </p>
    <p>
      Профессиональная юридическая помощь по вопросам административного,
      брачно-семейного, гражданского, корпоративного, трудового, хозяйственного
      и иных отраслей права оказывается мной как в городе Могилёве, так и на
      территории всей Республики Беларусь.
    </p>
    <p>
      Моя репутация и доверие, оказываемое клиентами, очень важны для меня,
      поэтому я:
    </p>
    <ol>
      <li>работаю на результат;</li>
      <li>обеспечиваю полную конфиденциальность полученной информации;</li>
      <li>поддерживаю честные и открытые отношения с клиентами;</li>
      <li>
        предоставляю всю необходимую информацию для принятия решения по спорному
        вопросу;
      </li>
      <li>стараюсь обеспечить индивидуальный подход к каждому клиенту;</li>
      <li>комплексно подхожу к решению поставленной задачи;</li>
      <li>
        постоянно повышаю свой профессионализм и совершенствую имеющиеся знания
        и навыки.
      </li>
    </ol>
    <h5>
      💼 Информация об аттестате, лицензии:
    </h5>
    <ul>
      <li>
        Лицензия на право осуществления адвокатской деятельности от 24 июня 2016
        года № 02240/2796, выдана Министерством юстиции Республики Беларусь;
      </li>
      <li>
        Свидетельство медиатора от 26 января 2018 года № 507, выдано
        Министерством юстиции Республики Беларусь.
      </li>
    </ul>
    <h5>🎓 Образование:</h5>
    <ul>
      <li>
        Могилёвский государственный университет имени А.А. Кулешова. Факультет
        экономики и права, специальность «Правоведение»;
      </li>
      <li>
        Академия управления при Президенте Республики Беларусь. Факультет
        управления, специальность «Государственное управление и экономика»;
      </li>
      <li>
        Институт переподготовки и повышения квалификации судей, работников
        прокуратуры, судов и учреждений юстиции БГУ. Повышение квалификации по
        образовательной программе «Адвокатская деятельность»;
      </li>
      <li>
        Учебно-практическое учреждение «Центр «Медиация и право». Обучение по
        образовательной программе «Медиация».
      </li>
    </ul>
    <p>
      Обратите внимание, что конституционная гарантия на защиту прав и законных
      интересов зачастую может быть реализована только при условии получения
      квалифицированной юридической помощи специалиста. Помощь адвоката
      позволяет знать и понимать свои права, использовать все предусмотренные
      законом средства правовой защиты и обеспечивает возможность компетентно
      отстаивать свои интересы в ходе возникшего правового спора. Своевременное
      обращение к адвокату за юридической консультацией позволит положительно
      разрешить сложившуюся ситуацию, будет способствовать реализации
      принадлежащих вам прав и восстановлению справедливости.
    </p>`
};
