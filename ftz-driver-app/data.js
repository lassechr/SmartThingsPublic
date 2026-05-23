// FTZ Chaufførvejledning - Indholdsdata

const categories = [
  {
    id: 'loefteteknik',
    name: 'Løfteteknik',
    emoji: '💪',
    desc: 'Korrekt løfteteknik for at undgå rygskader og arbejdsskader.',
    articles: ['loeft-grundregler', 'loeft-over-25kg', 'teamloeft', 'loeft-bil']
  },
  {
    id: 'tunge-varer',
    name: 'Tunge varer',
    emoji: '📦',
    desc: 'Håndtering af tunge og ubekvemme reservedele og pakker.',
    articles: ['tromler', 'batterier', 'gearkasser', 'motorer', 'stoeddemper']
  },
  {
    id: 'farlige-stoffer',
    name: 'Farlige stoffer',
    emoji: '⚠️',
    desc: 'ADR-regler, kemikalier, motorolie, batterisyre og brandfarlige væsker.',
    articles: ['adr-regler', 'motorolie-spild', 'batterisyre', 'brandfarlige']
  },
  {
    id: 'koeregler',
    name: 'Køregler & Varevogn',
    emoji: '🚐',
    desc: 'Køretid, lastning, sikring af gods og trafiksikkerhed.',
    articles: ['koretid', 'lastning-sikring', 'fart-og-afstand', 'parkering']
  },
  {
    id: 'levering',
    name: 'Levering & Kunde',
    emoji: '🏪',
    desc: 'Procedure ved levering til autoværksted, kvitteringer og reklamationer.',
    articles: ['leveringsprocedure', 'kvittering', 'reklamation', 'kontaktpersoner']
  },
  {
    id: 'arbejdsmiljoe',
    name: 'Arbejdsmiljø',
    emoji: '🦺',
    desc: 'Personlige værnemidler, ergonomi, pauser og trivsel.',
    articles: ['vaernemidler', 'ergonomi', 'pauser', 'trivselsregler']
  },
  {
    id: 'noedsituationer',
    name: 'Nødsituationer',
    emoji: '🚨',
    desc: 'Trafikulykker, brand i varevogn, spild af farlige stoffer.',
    articles: ['trafikulykke', 'brand-varevogn', 'spild-noed', 'tyveri']
  },
  {
    id: 'vejr-vinter',
    name: 'Vejr & Vinter',
    emoji: '❄️',
    desc: 'Kørsel i sne, is og regn. Vinterdæk og snerydning.',
    articles: ['vinterkoesel', 'glat-foere', 'synlighed-vejr']
  },
  {
    id: 'dokumentation',
    name: 'Dokumentation',
    emoji: '📋',
    desc: 'Skadesrapporter, kørselslogbog, fragtbreve og CMR.',
    articles: ['skadesrapport', 'koerselslog', 'fragtbrev']
  },
  {
    id: 'hjælpemidler',
    name: 'Hjælpemidler',
    emoji: '🔧',
    desc: 'Brug af sækkevogn, rullebånd, kranvogn og glideplader.',
    articles: ['saekkevogn', 'rullebaand', 'glideplader']
  }
];

const articles = {

  // ===== LØFTETEKNIK =====
  'loeft-grundregler': {
    id: 'loeft-grundregler',
    title: 'Grundregler for korrekt løfteteknik',
    icon: '💪',
    category: 'loefteteknik',
    tags: ['Vigtigt', 'Daglig brug'],
    important: true,
    preview: 'Undgå rygskader med korrekt løfteteknik. Følg disse grundregler hver gang.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">💪</div>
        <h1>Grundregler for korrekt løfteteknik</h1>
        <div class="article-meta">
          <span class="meta-badge red">Vigtigt</span>
          <span class="meta-badge gray">Daglig brug</span>
        </div>
      </div>

      <div class="alert danger">
        <div class="alert-icon">⚠️</div>
        <div><strong>Vidste du det?</strong>
        Rygskader er den hyppigste årsag til sygefravær hos chauffører. Korrekt løfteteknik forebygger skader.</div>
      </div>

      <div class="article-section-title">📋 De 5 grundregler</div>
      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Placer dig tæt på varen</div>
            <div class="step-desc">Stå så tæt på varen som muligt. Jo længere væk, jo større belastning på ryggen.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Bøj i knæene – ikke i ryggen</div>
            <div class="step-desc">Squat ned med knæene bøjet og ret ryg. Hold aldrig ryggen bøjet fremad ved løft.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Hold varen tæt til kroppen</div>
            <div class="step-desc">Løft varen op tæt ind til kroppen. Undgå udstrakte arme ved løft.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Ret ryg under hele løftet</div>
            <div class="step-desc">Spænd maven, hold ryggen ret og brug benmusklerne til at rejse dig op.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">5</div>
          <div class="step-body">
            <div class="step-title">Undgå vrid i ryggen</div>
            <div class="step-desc">Vend kroppen samlet — drej med fødderne, ikke med overkroppen alene.</div>
          </div>
        </li>
      </ol>

      <div class="article-section-title">⚖️ Grænser for løft</div>
      <table class="weight-table">
        <thead><tr><th>Situation</th><th>Max. vægt anbefalet</th></tr></thead>
        <tbody>
          <tr><td>Enkeltperson – lavt løft (gulv til talje)</td><td>25 kg</td></tr>
          <tr><td>Enkeltperson – højt løft (over talje)</td><td>15 kg</td></tr>
          <tr><td>Teamløft (2 personer)</td><td>Op til 50 kg</td></tr>
          <tr><td>Kræver løftehjælpemiddel</td><td>Over 50 kg</td></tr>
        </tbody>
      </table>

      <div class="alert info">
        <div class="alert-icon">ℹ️</div>
        <div><strong>Husk:</strong> Brug altid sækkevogn, rullebånd eller glideplader til tunge varer frem for at løfte manuelt.</div>
      </div>
    `
  },

  'loeft-over-25kg': {
    id: 'loeft-over-25kg',
    title: 'Håndtering af varer over 25 kg',
    icon: '🏋️',
    category: 'loefteteknik',
    tags: ['Tunge løft'],
    preview: 'Procedure og krav når varer vejer mere end 25 kg.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🏋️</div>
        <h1>Håndtering af varer over 25 kg</h1>
        <div class="article-meta">
          <span class="meta-badge orange">Tunge løft</span>
        </div>
      </div>

      <div class="alert warning">
        <div class="alert-icon">⚠️</div>
        <div><strong>Regel:</strong> Varer over 25 kg må ikke løftes alene uden hjælpemiddel. Brug altid sækkevogn, rullebånd eller kollega.</div>
      </div>

      <div class="article-section-title">🔧 Hvad gør du?</div>
      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Vurder vægten</div>
            <div class="step-desc">Tjek pakkelabelen eller løft forsigtigt i en kant for at vurdere vægten. Er du i tvivl — brug hjælpemiddel.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Brug sækkevogn</div>
            <div class="step-desc">Skub sækkevognens fod ind under varen. Tip vognen tilbage og rul — løft ikke.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Tilkald hjælp ved tvivl</div>
            <div class="step-desc">Er varen ekstremt tung eller akavet? Ring til afdelingen eller bed en kollega om hjælp.</div>
          </div>
        </li>
      </ol>

      <div class="info-card">
        <h3>🚫 Det er ALDRIG svaghed at bede om hjælp</h3>
        <p>FTZ prioriterer din sikkerhed. Det er tilladt — og forventet — at du beder om assistance ved tunge varer.</p>
      </div>
    `
  },

  'teamloeft': {
    id: 'teamloeft',
    title: 'Teamløft – to mand om jobbet',
    icon: '👥',
    category: 'loefteteknik',
    tags: ['Samarbejde'],
    preview: 'Koordinering og teknik når I er to om et tungt løft.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">👥</div>
        <h1>Teamløft – to mand om jobbet</h1>
        <div class="article-meta"><span class="meta-badge gray">Samarbejde</span></div>
      </div>

      <div class="article-section-title">📋 Vigtige principper</div>
      <div class="info-card">
        <ul>
          <li><strong>Kommuniker tydeligt</strong> – aftal på forhånd: "Vi løfter på tre: 1, 2, 3 – løft!"</li>
          <li><strong>Ens højde</strong> – vær ca. samme højde, eller den korteste bestemmer tempoet</li>
          <li><strong>Synk løftet</strong> – begge løfter og sætter ned samtidigt</li>
          <li><strong>Kig fremad</strong> – aftal ruten inden I starter</li>
          <li><strong>Ingen pludselige bevægelser</strong> – advars kollega inden du skifter greb</li>
        </ul>
      </div>

      <div class="alert info">
        <div class="alert-icon">💡</div>
        <div>To mand kan håndtere op til 50 kg. Over 50 kg kræver løftehjælpemiddel – også ved teamløft.</div>
      </div>
    `
  },

  'loeft-bil': {
    id: 'loeft-bil',
    title: 'Løft ind/ud af varevogn',
    icon: '🚐',
    category: 'loefteteknik',
    tags: ['Daglig brug'],
    preview: 'Korrekt teknik ved læsning og aflæsning af varevognen.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🚐</div>
        <h1>Løft ind/ud af varevogn</h1>
        <div class="article-meta"><span class="meta-badge gray">Daglig brug</span></div>
      </div>

      <div class="alert warning">
        <div class="alert-icon">⚠️</div>
        <div>Løft ind/ud af varevogn er en af de mest skadesvoldende situationer. Bagkanten af varevognen er typisk ca. 60–80 cm fra jorden — undgå at strække dig over kanten.</div>
      </div>

      <div class="article-section-title">✅ Gode råd</div>
      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Skub varen frem til kanten</div>
            <div class="step-desc">Skub varen frem til bagkanten inden du løfter den af. Undgå at bøje dig ind i varevognen.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Stå tæt ved bagkanten</div>
            <div class="step-desc">Placer dig med stramt mod bagbumperen. Løft ned – ikke ud og ned.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Brug rutschebane/rullebånd</div>
            <div class="step-desc">Mange FTZ-biler er udstyret med rullebånd i bunden. Brug det aktivt.</div>
          </div>
        </li>
      </ol>
    `
  },

  // ===== TUNGE VARER =====
  'tromler': {
    id: 'tromler',
    title: 'Håndtering af tromler og dunke',
    icon: '🛢️',
    category: 'tunge-varer',
    tags: ['Tromler', 'Olie'],
    important: true,
    preview: 'Motorolietromler vejer op til 200 kg. Her er den korrekte procedure.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🛢️</div>
        <h1>Håndtering af tromler og dunke</h1>
        <div class="article-meta">
          <span class="meta-badge red">Vigtigt</span>
          <span class="meta-badge gray">Tromler</span>
        </div>
      </div>

      <div class="alert danger">
        <div class="alert-icon">🚨</div>
        <div><strong>Pas på!</strong> En fuld olietromle (200 L) vejer ca. 185 kg. Løft ALDRIG en fuld tromle manuelt. Brug altid tromlekærre.</div>
      </div>

      <div class="article-section-title">📦 Typiske tromler og vægter</div>
      <table class="weight-table">
        <thead><tr><th>Type</th><th>Indhold</th><th>Ca. vægt</th></tr></thead>
        <tbody>
          <tr><td>200 L stålspiand</td><td>Motorolie</td><td>~185 kg</td></tr>
          <tr><td>60 L plasttromle</td><td>Kølervæske</td><td>~60 kg</td></tr>
          <tr><td>25 L dunk</td><td>Bremsevæske / olie</td><td>~22 kg</td></tr>
          <tr><td>10 L dunk</td><td>Diverse væsker</td><td>~9 kg</td></tr>
        </tbody>
      </table>

      <div class="article-section-title">🔧 Procedure for tromler</div>
      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Brug tromlekærre eller palleløfter</div>
            <div class="step-desc">FTZ-biler er udstyret med tromlekærre. Stik kloen ind under tromlen og tip.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Rul — løft ikke</div>
            <div class="step-desc">Runde tromler kan rulles på kanten (på siden) på plant underlag over kortere distancer.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Kontroller for lækage</div>
            <div class="step-desc">Tjek for oliepletter eller fugtighed under tromlen inden levering. Meld fra ved lækage.</div>
          </div>
        </li>
      </ol>

      <div class="alert info">
        <div class="alert-icon">ℹ️</div>
        <div>Kan du ikke levere tromlen pga. adgangsforhold (trapper, smalt rum)? Ring til afdelingen. Kunden kan hente den, eller vi planlægger særlig levering.</div>
      </div>
    `
  },

  'batterier': {
    id: 'batterier',
    title: 'Håndtering af startbatterier',
    icon: '🔋',
    category: 'tunge-varer',
    tags: ['Batterier', 'Kemisk'],
    important: true,
    preview: 'Startbatterier indeholder svovlsyre. Håndtering kræver forsigtighed.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🔋</div>
        <h1>Håndtering af startbatterier</h1>
        <div class="article-meta">
          <span class="meta-badge red">Vigtigt</span>
          <span class="meta-badge gray">Kemisk</span>
        </div>
      </div>

      <div class="alert danger">
        <div class="alert-icon">☠️</div>
        <div><strong>Fare:</strong> Bilbatterier indeholder svovlsyre (H₂SO₄), som er stærkt ætsende. Bær altid handsker og undgå at vippe batteriet.</div>
      </div>

      <div class="article-section-title">⚖️ Vægter</div>
      <table class="weight-table">
        <thead><tr><th>Batteritype</th><th>Ca. vægt</th></tr></thead>
        <tbody>
          <tr><td>Standard personbil (60 Ah)</td><td>15–18 kg</td></tr>
          <tr><td>Stor personbil / SUV (100 Ah)</td><td>22–26 kg</td></tr>
          <tr><td>Lastbilbatteri (200+ Ah)</td><td>45–60 kg</td></tr>
          <tr><td>Truck-batteri</td><td>Over 60 kg</td></tr>
        </tbody>
      </table>

      <div class="article-section-title">🧤 Regler ved håndtering</div>
      <div class="info-card">
        <ul>
          <li>Bær <strong>nitrilhandsker</strong> – batterisyre ødelægger huden</li>
          <li>Hold batteriet <strong>lodret</strong> – aldrig hælde eller vippe</li>
          <li>Kontrollér for <strong>revner eller syrelækage</strong> inden du tager det</li>
          <li>Placer i <strong>batterikasse</strong> i varevognen – aldrig løst</li>
          <li>Batterier med lækage er <strong>ADR-gods</strong> – kontakt afdelingen</li>
        </ul>
      </div>

      <div class="alert warning">
        <div class="alert-icon">🔥</div>
        <div><strong>Brandfare:</strong> Batterier afgiver brintgas. Undgå gnister og åben ild nær batterier, særligt ved opladning.</div>
      </div>
    `
  },

  'gearkasser': {
    id: 'gearkasser',
    title: 'Gearkasser og kardan',
    icon: '⚙️',
    category: 'tunge-varer',
    tags: ['Tunge dele'],
    preview: 'Gearkasser og kardanaksler er tunge og akavet formede.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">⚙️</div>
        <h1>Gearkasser og kardan</h1>
        <div class="article-meta"><span class="meta-badge orange">Tunge dele</span></div>
      </div>

      <div class="info-card">
        <h3>Typiske vægter</h3>
        <ul>
          <li>Manuel gearkasse (personbil): 30–60 kg</li>
          <li>Automatgearkasse: 60–100 kg</li>
          <li>Lastvognsgearkasse: Over 100 kg</li>
          <li>Kardanaksel: 8–25 kg</li>
        </ul>
      </div>

      <div class="alert warning">
        <div class="alert-icon">⚠️</div>
        <div>Gearkasser kan have resterende gear-/transmissionsolie i sig. Sørg for at emballagen er tæt, og bær handsker.</div>
      </div>

      <div class="info-card">
        <h3>Håndtering</h3>
        <ul>
          <li>Brug <strong>sækkevogn</strong> – aldrig bær alene over 25 kg</li>
          <li>Kontrollér at emballage er hel og lukket</li>
          <li>Placer stabilt i varevognen med stopklodser</li>
          <li>Sikr med stropper – tunge dele kan bevæge sig under kørsel</li>
        </ul>
      </div>
    `
  },

  'motorer': {
    id: 'motorer',
    title: 'Udskiftningsmotorer',
    icon: '🔩',
    category: 'tunge-varer',
    tags: ['Ekstra tunge'],
    preview: 'Udskiftningsmotorer kan veje 150-300 kg. Kræver kranvogn.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🔩</div>
        <h1>Udskiftningsmotorer</h1>
        <div class="article-meta"><span class="meta-badge red">Ekstra tunge</span></div>
      </div>

      <div class="alert danger">
        <div class="alert-icon">🚨</div>
        <div><strong>OBS:</strong> Udskiftningsmotorer vejer typisk 150–350 kg. Disse leveres KUN med kranvogn eller efter særlig aftale med kunden.</div>
      </div>

      <div class="info-card">
        <h3>Procedure</h3>
        <ul>
          <li>Kontrollér inden afgang at leveringsadressen har plads til kranvogn</li>
          <li>Ring til kunden og bekræft leveringstidspunkt</li>
          <li>Kunden skal have en motorsav, motorstativ eller lignende til at modtage</li>
          <li>Du løfter IKKE alene – brug kranvogn</li>
          <li>Er der tvivl om adgangsforhold? Ring til afdelingen inden afgang</li>
        </ul>
      </div>
    `
  },

  'stoeddemper': {
    id: 'stoeddemper',
    title: 'Støddæmpere og fjeder',
    icon: '🌀',
    category: 'tunge-varer',
    tags: ['Daglig vare'],
    preview: 'Støddæmpere er lange og akavet at håndtere. Undgå skader.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🌀</div>
        <h1>Støddæmpere og fjedre</h1>
        <div class="article-meta"><span class="meta-badge gray">Daglig vare</span></div>
      </div>

      <div class="info-card">
        <h3>Praktiske råd</h3>
        <ul>
          <li>Støddæmpere er typisk 40–80 cm lange og vejer 3–12 kg – ikke tunge, men akavede</li>
          <li>Bær langs kroppen, ikke ud fra siden</li>
          <li>Fjedrene kan have skarpe kanter – brug arbejdshandsker</li>
          <li>Stablet sæt (med fjeder monteret) kan have spændingsenergi – håndtér forsigtigt</li>
          <li>Placer i varevognen så de ikke ruller rundt</li>
        </ul>
      </div>
    `
  },

  // ===== FARLIGE STOFFER =====
  'adr-regler': {
    id: 'adr-regler',
    title: 'ADR – Transport af farligt gods',
    icon: '🟠',
    category: 'farlige-stoffer',
    tags: ['ADR', 'Lovkrav'],
    important: true,
    preview: 'ADR-regler for chauffører der transporterer farlige stoffer.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🟠</div>
        <h1>ADR – Transport af farligt gods</h1>
        <div class="article-meta">
          <span class="meta-badge red">Vigtigt</span>
          <span class="meta-badge gray">Lovkrav</span>
        </div>
      </div>

      <div class="alert info">
        <div class="alert-icon">ℹ️</div>
        <div><strong>Hvad er ADR?</strong> ADR er de internationale regler for transport af farlige stoffer på vej. Som FTZ-chauffør kan du komme til at transportere ADR-gods i begrænset mængde.</div>
      </div>

      <div class="article-section-title">📦 Typiske ADR-varer hos FTZ</div>
      <table class="weight-table">
        <thead><tr><th>Vare</th><th>ADR-klasse</th></tr></thead>
        <tbody>
          <tr><td>Bilbatterier (brugte)</td><td>Klasse 8 – Ætsende</td></tr>
          <tr><td>Motorolie / hydraulikolie</td><td>Klasse 3 – Brandfarlig</td></tr>
          <tr><td>Bremsevæske</td><td>Klasse 3 – Brandfarlig</td></tr>
          <tr><td>Spraydåser (aerosoler)</td><td>Klasse 2 – Gasser</td></tr>
          <tr><td>Kølevæske (koncentrat)</td><td>Klasse 9 – Øvrige</td></tr>
        </tbody>
      </table>

      <div class="article-section-title">📋 Dine pligter</div>
      <div class="info-card">
        <ul>
          <li>Medbring <strong>transportdokument</strong> (fragtbrev) med stofnavn og UN-nr.</li>
          <li>ADR-gods skal <strong>mærkes</strong> korrekt med faresedler</li>
          <li>Hold ADR-gods <strong>adskilt</strong> fra øvrig last ved separation</li>
          <li>Medbragt <strong>brandslukkere</strong> (min. 2 kg ABC) – tjek ugentligt</li>
          <li>Ryg IKKE i eller ved varevognen med ADR-gods</li>
          <li>Parkér ikke i tæt bebyggelse ved stop over 30 min. med farligt gods</li>
        </ul>
      </div>

      <div class="alert warning">
        <div class="alert-icon">⚠️</div>
        <div>Er du i tvivl om noget er ADR-gods? Ring til afdelingen. Det er dit ansvar som fører.</div>
      </div>
    `
  },

  'motorolie-spild': {
    id: 'motorolie-spild',
    title: 'Spild af motorolie – hvad gør du?',
    icon: '🛢️',
    category: 'farlige-stoffer',
    tags: ['Spild', 'Procedure'],
    preview: 'Trin-for-trin ved spild af motorolie i varevogn eller på levering.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🛢️</div>
        <h1>Spild af motorolie</h1>
        <div class="article-meta"><span class="meta-badge orange">Spild</span></div>
      </div>

      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Stop og sikr</div>
            <div class="step-desc">Stop køretøjet sikkert. Tænd advarselsblink. Vurder omfanget af spildet.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Brug absorptionsmiddel</div>
            <div class="step-desc">I varevognen er der sandsynligvis absorbent/savsmuldssand. Hæld over spildet og lad det suge ind.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Saml og emballér</div>
            <div class="step-desc">Saml det brugte absorptionsmiddel i en plastpose. Dette er farligt affald – tag det med til afdelingen.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Ring til afdelingen</div>
            <div class="step-desc">Meld spildet til din leder. Større spild på offentlig vej skal meldes til politiet.</div>
          </div>
        </li>
      </ol>

      <div class="alert danger">
        <div class="alert-icon">🚨</div>
        <div><strong>Spild i kloak er ulovligt.</strong> Olieudslip i afløb kan medføre store bøder. Kontakt miljømyndighed (ring 112) ved spild i kloak.</div>
      </div>
    `
  },

  'batterisyre': {
    id: 'batterisyre',
    title: 'Batterisyre lækage',
    icon: '☠️',
    category: 'farlige-stoffer',
    tags: ['Kemisk', 'Fare'],
    important: true,
    preview: 'Batterisyre er stærkt ætsende. Akut handling ved lækage.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">☠️</div>
        <h1>Batterisyre lækage</h1>
        <div class="article-meta">
          <span class="meta-badge red">Akut fare</span>
        </div>
      </div>

      <div class="alert danger">
        <div class="alert-icon">🚨</div>
        <div><strong>Svovlsyre (H₂SO₄) er stærkt ætsende</strong> og kan forårsage alvorlige forbrændinger på hud og i øjne.</div>
      </div>

      <div class="article-section-title">🆘 Ved kontakt med hud/øjne</div>
      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Skyl straks med rigeligt vand</div>
            <div class="step-desc">Skyl det ramte område med rindende vand i mindst 15 minutter. Fjern eventuelt tøj der er ramt.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Ring 112 eller alarmcentralen</div>
            <div class="step-desc">Søg altid læge ved kontakt med batterisyre.</div>
          </div>
        </li>
      </ol>

      <div class="article-section-title">🛡️ Ved lækage fra batteri i varevogn</div>
      <div class="info-card">
        <ul>
          <li>Bær nitrilhandsker – aldrig bare hænder</li>
          <li>Placer batteriet i en spandpose/syrebakke</li>
          <li>Neutralisér spild med vand og natriumbikarbonat (bagepulver) hvis tilgængeligt</li>
          <li>Batteriet er nu ADR-gods – følg ADR-procedure</li>
          <li>Ring til afdelingen straks</li>
        </ul>
      </div>
    `
  },

  'brandfarlige': {
    id: 'brandfarlige',
    title: 'Brandfarlige væsker',
    icon: '🔥',
    category: 'farlige-stoffer',
    tags: ['Brandfare'],
    preview: 'Benzin, acetonsprit og bremsevæske er brandfarlige. Regler og forholdsregler.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🔥</div>
        <h1>Brandfarlige væsker</h1>
        <div class="article-meta"><span class="meta-badge red">Brandfare</span></div>
      </div>

      <div class="info-card">
        <h3>Typiske brandfarlige varer hos FTZ</h3>
        <ul>
          <li>Bremsevæske (DOT3, DOT4, DOT5.1)</li>
          <li>Karbonrenser / injektor-renser</li>
          <li>Starterspray</li>
          <li>Acetonholdige rengøringsmidler</li>
          <li>Sprinklervæske (isopropanol)</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Regler under transport</h3>
        <ul>
          <li>Ryg ALDRIG i varevognen</li>
          <li>Placer IKKE brandfarlige væsker ved varmekilder</li>
          <li>Hold emballagen tæt lukket</li>
          <li>Medbring brandslukker (kontrollér månedligt)</li>
          <li>Lad ikke motoren køre under aflæsning af store mængder</li>
        </ul>
      </div>
    `
  },

  // ===== KØREGLER =====
  'koretid': {
    id: 'koretid',
    title: 'Køretid og hvilebestemmelser',
    icon: '⏰',
    category: 'koeregler',
    tags: ['Lovkrav'],
    preview: 'Regler for arbejdstid, pauser og hvile for chauffører.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">⏰</div>
        <h1>Køretid og hvilebestemmelser</h1>
        <div class="article-meta"><span class="meta-badge gray">Lovkrav</span></div>
      </div>

      <div class="alert info">
        <div class="alert-icon">ℹ️</div>
        <div>Varebiler under 3,5 tons er <strong>ikke</strong> underlagt EU's chaufførhvileforordning (EF 561/2006), men er underlagt <strong>arbejdstidsloven</strong>.</div>
      </div>

      <table class="weight-table">
        <thead><tr><th>Regel</th><th>Grænse</th></tr></thead>
        <tbody>
          <tr><td>Max. arbejdstid pr. dag</td><td>13 timer (inkl. pause)</td></tr>
          <tr><td>Obligatorisk pause</td><td>30 min. efter 6 timers arbejde</td></tr>
          <tr><td>Min. hviletid pr. 24 timer</td><td>11 timer</td></tr>
          <tr><td>Max. arbejdstid pr. uge</td><td>48 timer (gns. over 4 mdr.)</td></tr>
        </tbody>
      </table>

      <div class="alert warning">
        <div class="alert-icon">⚠️</div>
        <div>Træthed er en alvorlig trafikrisiko. Er du træt — hold pause. Det er FTZ's politik at ingen kørsel er vigtigere end din og andres sikkerhed.</div>
      </div>
    `
  },

  'lastning-sikring': {
    id: 'lastning-sikring',
    title: 'Lastning og sikring af gods',
    icon: '📦',
    category: 'koeregler',
    tags: ['Sikkerhed', 'Lovkrav'],
    important: true,
    preview: 'Usikret gods er farligt og ulovligt. Regler og teknik for sikring.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">📦</div>
        <h1>Lastning og sikring af gods</h1>
        <div class="article-meta">
          <span class="meta-badge red">Vigtigt</span>
          <span class="meta-badge gray">Lovkrav</span>
        </div>
      </div>

      <div class="alert danger">
        <div class="alert-icon">🚨</div>
        <div><strong>Lovkrav:</strong> Gods skal sikres så det ikke forskyder sig ved nødbremse eller opbremsning. Usikret gods er en bødesag og kan koste liv.</div>
      </div>

      <div class="article-section-title">✅ Principper for sikring</div>
      <div class="info-card">
        <ul>
          <li><strong>Fyld hulrum</strong> – tomme rum lader gods glide. Brug plader, skum eller tasker.</li>
          <li><strong>Tunge ting bagest</strong> – tung last placeres ved kabinegitteret</li>
          <li><strong>Blokering</strong> – brug lastblokkere eller stopklodser ved hjul</li>
          <li><strong>Fastgøring</strong> – brug lastsurringer/remme til ekstra sikring</li>
          <li><strong>Ingen gods i kabinen</strong> – aldrig tunge genstande løst i passagerkabinen</li>
        </ul>
      </div>

      <div class="alert warning">
        <div class="alert-icon">⚠️</div>
        <div>En 10 kg pakke ved 50 km/t opbremse har en kraft svarende til 200 kg. Sikr ALTID din last.</div>
      </div>
    `
  },

  'fart-og-afstand': {
    id: 'fart-og-afstand',
    title: 'Hastighed og afstand',
    icon: '🚦',
    category: 'koeregler',
    tags: ['Sikkerhed'],
    preview: 'Hastighedsregler for varevogne og korrekt sikkerhedsafstand.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🚦</div>
        <h1>Hastighed og afstand</h1>
        <div class="article-meta"><span class="meta-badge gray">Sikkerhed</span></div>
      </div>

      <table class="weight-table">
        <thead><tr><th>Vejtype</th><th>Max. hastighed (varebil)</th></tr></thead>
        <tbody>
          <tr><td>By (tæt bebygget)</td><td>50 km/t</td></tr>
          <tr><td>Landevej</td><td>80 km/t</td></tr>
          <tr><td>Motorvej</td><td>110 km/t</td></tr>
          <tr><td>Motorvej med anhænger</td><td>70 km/t</td></tr>
        </tbody>
      </table>

      <div class="info-card">
        <h3>Sikkerhedsafstand</h3>
        <p>Tommelfingerregel: <strong>2 sekunder</strong> til forankørende. I regnvejr/sne: <strong>minimum 4 sekunder</strong>. Med fuld last: øg afstanden med 20-30%.</p>
      </div>
    `
  },

  'parkering': {
    id: 'parkering',
    title: 'Parkering ved levering',
    icon: '🅿️',
    category: 'koeregler',
    tags: ['Daglig brug'],
    preview: 'Lovlig og sikker parkering ved levering til autoværksteder.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🅿️</div>
        <h1>Parkering ved levering</h1>
        <div class="article-meta"><span class="meta-badge gray">Daglig brug</span></div>
      </div>

      <div class="info-card">
        <h3>Huskeliste</h3>
        <ul>
          <li>Tænd altid <strong>advarselsblink</strong> ved stop på vej eller fortov</li>
          <li>Sæt <strong>advarselstrekant</strong> op ved vejkanten (over 45 sekunder)</li>
          <li>Lås altid bilen – selv ved korte stop</li>
          <li>Tag nøglerne med og lad aldrig motoren køre uovervåget</li>
          <li>Parkér ALDRIG foran brandslukningsudstyr eller nødudgange</li>
          <li>Er der ingen legal parkeringsplads – ring til kunden og aftal hvor de kan modtage</li>
        </ul>
      </div>
    `
  },

  // ===== LEVERING =====
  'leveringsprocedure': {
    id: 'leveringsprocedure',
    title: 'Korrekt leveringsprocedure',
    icon: '✅',
    category: 'levering',
    tags: ['Daglig brug'],
    preview: 'Trin-for-trin guide til korrekt og professionel levering til autoværksted.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">✅</div>
        <h1>Korrekt leveringsprocedure</h1>
        <div class="article-meta"><span class="meta-badge gray">Daglig brug</span></div>
      </div>

      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Tjek ordren inden afgang</div>
            <div class="step-desc">Kontrollér at alle pakker er med og svarer til ordresedlen. Mangler noget? Ret det inden du kører.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Parkér sikkert</div>
            <div class="step-desc">Parkér så tæt på leveringsstedet som muligt. Advarselsblink på.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Meld dig til modtageren</div>
            <div class="step-desc">Gå ind og find den ansvarlige. Undgå at efterlade pakker uovervåget uden kvittering.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Aflever og få kvittering</div>
            <div class="step-desc">Lad kunden kontrollere ordren. Få underskrift på fragtbrev/håndholder. Scan kvittering.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">5</div>
          <div class="step-body">
            <div class="step-title">Returvarer og emballage</div>
            <div class="step-desc">Hent returvarer/kerner/tromler som aftalt. Læs returlisten grundigt.</div>
          </div>
        </li>
      </ol>
    `
  },

  'kvittering': {
    id: 'kvittering',
    title: 'Kvittering og dokumentation',
    icon: '📄',
    category: 'levering',
    tags: ['Dokumentation'],
    preview: 'Krav til kvittering og hvad du gør hvis kunden nægter at kvittere.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">📄</div>
        <h1>Kvittering og dokumentation</h1>
        <div class="article-meta"><span class="meta-badge gray">Dokumentation</span></div>
      </div>

      <div class="info-card">
        <h3>Krav til kvittering</h3>
        <ul>
          <li>Modtagerens <strong>navn og underskrift</strong></li>
          <li>Dato og klokkeslæt</li>
          <li>Ordrenummer</li>
          <li>Eventuelle bemærkninger (f.eks. "1 kolli mangler")</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Hvad gør du hvis kunden nægter at kvittere?</h3>
        <ul>
          <li>Notér kundens navn og tidspunkt</li>
          <li>Tag et foto af leveringsstedet og pakkerne</li>
          <li>Ring til afdelingen og meld situationen</li>
          <li>Efterlad IKKE varer uden kvittering uden aftale med afdelingen</li>
        </ul>
      </div>
    `
  },

  'reklamation': {
    id: 'reklamation',
    title: 'Reklamation fra kunden',
    icon: '🔄',
    category: 'levering',
    tags: ['Kunde'],
    preview: 'Hvad gør du når kunden reklamerer over en vare eller levering?',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🔄</div>
        <h1>Reklamation fra kunden</h1>
        <div class="article-meta"><span class="meta-badge gray">Kunde</span></div>
      </div>

      <div class="info-card">
        <h3>Huskereglen: Du løser det ikke – du registrerer det</h3>
        <p>Som chauffør er det IKKE din opgave at afgøre reklamationer. Din rolle er at notere og viderebringe informationen.</p>
      </div>

      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Lyt til kunden</div>
            <div class="step-desc">Lad kunden forklare problemet uden at afbryde. Vis forståelse og forbliv rolig.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Notér detaljer</div>
            <div class="step-desc">Skriv: varenummer, ordrenummer, skadebeskrivelse, kundens navn.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Tag billeder</div>
            <div class="step-desc">Fotografér den beskadigede vare og emballage.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Ring til afdelingen</div>
            <div class="step-desc">Giv kundeservice besked straks. De tager sig af det videre forløb.</div>
          </div>
        </li>
      </ol>
    `
  },

  'kontaktpersoner': {
    id: 'kontaktpersoner',
    title: 'Vigtige kontakter',
    icon: '📞',
    category: 'levering',
    tags: ['Kontakt'],
    preview: 'Hvem ringer du til hvornår? Oversigt over vigtige kontakter.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">📞</div>
        <h1>Vigtige kontakter</h1>
        <div class="article-meta"><span class="meta-badge gray">Kontakt</span></div>
      </div>

      <div class="hotline-card">
        <div class="label">Nødopkald</div>
        <div class="phone">112</div>
        <div class="name">Politi · Brand · Ambulance</div>
      </div>

      <div class="info-card">
        <h3>FTZ Kontakter</h3>
        <ul>
          <li><strong>Din afdeling:</strong> Se velkomstkortet i varevognen</li>
          <li><strong>FTZ Kundeservice:</strong> Ring til afdelingen</li>
          <li><strong>Skade på varevogn:</strong> Ring til logistikafdeling</li>
          <li><strong>Arbejdsulykke:</strong> Ring til leder straks</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Andre vigtige numre</h3>
        <ul>
          <li><strong>Giftlinjen:</strong> 82 12 12 12 (kemisk eksponering)</li>
          <li><strong>Falck Vejhjælp:</strong> Se forsikringskort i varevognen</li>
          <li><strong>Politi (ikke-nødsituation):</strong> 114</li>
        </ul>
      </div>
    `
  },

  // ===== ARBEJDSMILJØ =====
  'vaernemidler': {
    id: 'vaernemidler',
    title: 'Personlige værnemidler',
    icon: '🦺',
    category: 'arbejdsmiljoe',
    tags: ['Daglig brug'],
    preview: 'Hvilke værnemidler skal du bruge og hvornår?',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🦺</div>
        <h1>Personlige værnemidler (PPE)</h1>
        <div class="article-meta"><span class="meta-badge gray">Daglig brug</span></div>
      </div>

      <table class="weight-table">
        <thead><tr><th>Situation</th><th>Krævet PPE</th></tr></thead>
        <tbody>
          <tr><td>Alle leveringer</td><td>Sikkerhedssko (S3)</td></tr>
          <tr><td>Tunge løft</td><td>+ Rygtøjle/støttebælte</td></tr>
          <tr><td>Batterier / syreprodukter</td><td>+ Nitrilhandsker + beskyttelsesbriller</td></tr>
          <tr><td>Olie og kemikalier</td><td>+ Arbejdshandsker</td></tr>
          <tr><td>Arbejde på vejkanten</td><td>+ Refleksvest (EN ISO 20471)</td></tr>
          <tr><td>Støvende produkter</td><td>+ FFP2-støvmaske</td></tr>
        </tbody>
      </table>

      <div class="alert warning">
        <div class="alert-icon">⚠️</div>
        <div>Mangler du PPE? Spørg din leder. Det er FTZ's ansvar at stille korrekte värnemidler til rådighed.</div>
      </div>
    `
  },

  'ergonomi': {
    id: 'ergonomi',
    title: 'Ergonomi i arbejdsdagen',
    icon: '🧘',
    category: 'arbejdsmiljoe',
    tags: ['Sundhed'],
    preview: 'Tilpas sæde, spejle og position for at skåne kroppen.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🧘</div>
        <h1>Ergonomi i arbejdsdagen</h1>
        <div class="article-meta"><span class="meta-badge gray">Sundhed</span></div>
      </div>

      <div class="info-card">
        <h3>Sædet</h3>
        <ul>
          <li>Sæt sædet så du sidder med <strong>let bøjede knæ</strong> ved fuldt nedbremset pedal</li>
          <li>Lænd-støtten skal understøtte den <strong>naturlige krumning</strong> i lænden</li>
          <li>Armene let bøjede på rattet – ikke udstrakte</li>
          <li>Top af rattet på <strong>skulder-niveau</strong></li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Tip til lange ture</h3>
        <ul>
          <li>Skift position hvert 30–45 min.</li>
          <li>Brug pause til at strække benene</li>
          <li>Drik vand – dehydrering øger træthed og giver muskelspændinger</li>
          <li>Planlæg korte 5-minutters stræk ved levering</li>
        </ul>
      </div>
    `
  },

  'pauser': {
    id: 'pauser',
    title: 'Pauser og hvile',
    icon: '☕',
    category: 'arbejdsmiljoe',
    tags: ['Sundhed'],
    preview: 'Pauser er ikke spildt tid – de forebygger ulykker og skader.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">☕</div>
        <h1>Pauser og hvile</h1>
        <div class="article-meta"><span class="meta-badge gray">Sundhed</span></div>
      </div>

      <div class="alert success">
        <div class="alert-icon">✅</div>
        <div>Du har <strong>ret</strong> til pause. Tag den. En udhvilet chauffør er en sikker chauffør.</div>
      </div>

      <div class="info-card">
        <h3>Tegn på for stor træthed</h3>
        <ul>
          <li>Du blinker meget</li>
          <li>Du gapper gentagne gange</li>
          <li>Du har svært ved at holde banen</li>
          <li>Du kan ikke huske de sidste par kilometer</li>
        </ul>
        <p style="margin-top:10px;color:#CC0000;font-weight:700;">⚠️ Stop bilen et sikkert sted og kontakt afdelingen straks.</p>
      </div>
    `
  },

  'trivselsregler': {
    id: 'trivselsregler',
    title: 'Trivsels- og adfærdsregler',
    icon: '🤝',
    category: 'arbejdsmiljoe',
    tags: ['Kultur'],
    preview: 'FTZ's regler for god adfærd i trafik og over for kunder.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🤝</div>
        <h1>Trivsels- og adfærdsregler</h1>
        <div class="article-meta"><span class="meta-badge gray">Kultur</span></div>
      </div>

      <div class="info-card">
        <h3>Du repræsenterer FTZ</h3>
        <ul>
          <li>Vær <strong>høflig og professionel</strong> over for alle kunder</li>
          <li>FTZ-varevognen er dit ansigt udadtil – kør pænt og roligt</li>
          <li>Undgå råb, horn-misbrug og aggressive gester i trafikken</li>
          <li>Mobiltelefon i hånden under kørsel er forbudt ved lov</li>
          <li>Alkohol og euforiserende stoffer er absolut forbudt</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Oplevede du noget ubehageligt?</h3>
        <p>Chikane, trusler eller svære situationer med kunder – tal med din leder. Du skal ikke stå alene med det.</p>
      </div>
    `
  },

  // ===== NØDSITUATIONER =====
  'trafikulykke': {
    id: 'trafikulykke',
    title: 'Trafikulykke – hvad gør du?',
    icon: '🚑',
    category: 'noedsituationer',
    tags: ['Akut', 'Procedure'],
    important: true,
    preview: 'Trin-for-trin ved trafikulykke. Lær det udenad.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🚑</div>
        <h1>Trafikulykke – hvad gør du?</h1>
        <div class="article-meta">
          <span class="meta-badge red">Akut</span>
        </div>
      </div>

      <div class="alert danger">
        <div class="alert-icon">🚨</div>
        <div><strong>HUSK:</strong> S – I – K – K – E – R<br/>
        <strong>Stop · Inform · Kald hjælp · Kend din placering · Evakuer · Red</strong></div>
      </div>

      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Stop og sikr ulykkesstedet</div>
            <div class="step-desc">Stop bilen. Tænd advarselsblink. Sæt advarselstrekant ud (minimum 50 m bagved). Sluk motoren.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Ring 112</div>
            <div class="step-desc">Fortæl: Hvad skete der? Hvor mange tilskadekomne? Præcis adresse/GPS-koordinater.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Yd førstehjælp</div>
            <div class="step-desc">Flyt ikke tilskadekomne (risiko for rygsøjleskade) medmindre der er overhængende brandfare. Hold dem varme og rolige.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Notér oplysninger</div>
            <div class="step-desc">Tag billeder. Notér andre bilers nummerplader, vidners navne og kontaktinfo.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">5</div>
          <div class="step-body">
            <div class="step-title">Ring til FTZ afdelingen</div>
            <div class="step-desc">Underret din leder straks. Udfyld skaderapport inden du kører hjem.</div>
          </div>
        </li>
      </ol>

      <div class="alert warning">
        <div class="alert-icon">⚠️</div>
        <div>Forlad ALDRIG ulykkesstedet inden politiet ankommer (ved personskade).</div>
      </div>
    `
  },

  'brand-varevogn': {
    id: 'brand-varevogn',
    title: 'Brand i varevogn',
    icon: '🔥',
    category: 'noedsituationer',
    tags: ['Akut'],
    important: true,
    preview: 'Akut procedure ved brand eller røglugt fra varevognen.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🔥</div>
        <h1>Brand i varevogn</h1>
        <div class="article-meta"><span class="meta-badge red">Akut</span></div>
      </div>

      <div class="alert danger">
        <div class="alert-icon">🚨</div>
        <div><strong>Liv kommer FØR bil og gods.</strong> Din sikkerhed er altid vigtigst. Gå fra bilen – kæmp ikke mod ilden alene.</div>
      </div>

      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Stop straks og sluk motoren</div>
            <div class="step-desc">Træk over til højre og stop. Tag nøglen ud. Tænd advarselsblink.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Forlad bilen</div>
            <div class="step-desc">Gå væk fra bilen – minimum 50 meter. Tag ingen ejendele. Tag dine nøgler.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Ring 112</div>
            <div class="step-desc">Fortæl præcis placering. Oplys at bilen muligvis indeholder farlige stoffer (ADR-gods).</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Brug brandslukker KUN ved meget lille brand</div>
            <div class="step-desc">Er branden under motorhjelmen lille? Brug pulverslukker. Er branden stor – gå fra!</div>
          </div>
        </li>
      </ol>

      <div class="alert info">
        <div class="alert-icon">ℹ️</div>
        <div>Brandslukker sidder bag passagersædet. Kontrollér månedligt at den er fuldt opladt (grønt felt på manometer).</div>
      </div>
    `
  },

  'spild-noed': {
    id: 'spild-noed',
    title: 'Større spild på vej',
    icon: '🌊',
    category: 'noedsituationer',
    tags: ['Miljø', 'Akut'],
    preview: 'Hvad gør du ved større spild af olie eller kemikalier på offentlig vej.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🌊</div>
        <h1>Større spild på vej</h1>
        <div class="article-meta"><span class="meta-badge red">Akut</span></div>
      </div>

      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Stop og sikr stedet</div>
            <div class="step-desc">Advarselsblink. Advarselstrekant. Advars andre trafikanter.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Ring 112 ved fare for andre</div>
            <div class="step-desc">Brandfarlige stoffer eller risiko for trafikfarer – ring 112.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Brug absorptionsmiddel</div>
            <div class="step-desc">Tag absorptionsposen fra varevognen og dæk spildet. Spær for afdræn.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Ring til afdelingen</div>
            <div class="step-desc">Afdelingen koordinerer oprydning og anmeldelse til myndighederne.</div>
          </div>
        </li>
      </ol>

      <div class="alert danger">
        <div class="alert-icon">🚨</div>
        <div><strong>Spild i kloak eller vandløb</strong> skal anmeldes til miljømyndighed. Ring 112 og oplys det.</div>
      </div>
    `
  },

  'tyveri': {
    id: 'tyveri',
    title: 'Tyveri eller indbrud i varevogn',
    icon: '🔓',
    category: 'noedsituationer',
    tags: ['Sikkerhed'],
    preview: 'Hvad gør du hvis varevognen er blevet brudt op eller gods stjålet.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🔓</div>
        <h1>Tyveri eller indbrud</h1>
        <div class="article-meta"><span class="meta-badge gray">Sikkerhed</span></div>
      </div>

      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Rør ikke ved noget</div>
            <div class="step-desc">Undgå at forstyrre gerningsstedet. Politiet skal have mulighed for sporsikring.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Ring til politiet (114)</div>
            <div class="step-desc">Anmeld tyveriet. Få sagsnummer til forsikringen.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Ring til afdelingen</div>
            <div class="step-desc">Informér din leder straks. Hvad er stjålet? Hvilke ordrer er berørt?</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Udfyld skadesrapport</div>
            <div class="step-desc">Dokumentér alt med billeder og en detaljeret rapport.</div>
          </div>
        </li>
      </ol>

      <div class="info-card">
        <h3>Forebyggelse</h3>
        <ul>
          <li>Lås ALTID bilen – selv ved korte stop</li>
          <li>Lad aldrig synlige pakker ligge i kabinen</li>
          <li>Brug kabinegitteret – gods bag gitteret er sværere at stjæle</li>
          <li>Parkér i velbelyste, overvågede områder om natten</li>
        </ul>
      </div>
    `
  },

  // ===== VEJR =====
  'vinterkoesel': {
    id: 'vinterkoesel',
    title: 'Vinterkørsel',
    icon: '❄️',
    category: 'vejr-vinter',
    tags: ['Sæson', 'Sikkerhed'],
    preview: 'Forberedelse og kørselsteknik om vinteren med sne og frost.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">❄️</div>
        <h1>Vinterkørsel</h1>
        <div class="article-meta">
          <span class="meta-badge gray">Vinter</span>
          <span class="meta-badge gray">Sikkerhed</span>
        </div>
      </div>

      <div class="info-card">
        <h3>Forberedelse</h3>
        <ul>
          <li><strong>Vinterdæk:</strong> Monter fra november til april (påkrævet ved sneforhold)</li>
          <li><strong>Afis:</strong> Fri forrude, bagude og spejle inden afgang</li>
          <li><strong>Nødsæt:</strong> Skovl, is-skraber, advarselstrekant, uldtæppe i bilen</li>
          <li><strong>Batteri:</strong> Koldt vejr svækker startbatteriet – tjek ladeniveauet</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Kørselsteknik</h3>
        <ul>
          <li>Sæt hastigheden ned – den anbefalede afstand <strong>fordobles</strong></li>
          <li>Bremse blidt og tidligt – hård opbremsning giver slingring</li>
          <li>Kør i lavt gear ned ad bakke</li>
          <li>Undgå pludselige ratbevægelser</li>
          <li>Er vejen for glat – vent eller tag alternativ rute</li>
        </ul>
      </div>
    `
  },

  'glat-foere': {
    id: 'glat-foere',
    title: 'Glat føre og is',
    icon: '🧊',
    category: 'vejr-vinter',
    tags: ['Akut risiko'],
    preview: 'Hvad gør du når du kører ind i glat føre uden varsel.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🧊</div>
        <h1>Glat føre og is</h1>
        <div class="article-meta"><span class="meta-badge orange">Akut risiko</span></div>
      </div>

      <div class="alert warning">
        <div class="alert-icon">⚠️</div>
        <div><strong>Usynlig is</strong> ("black ice") opstår typisk ved 0–2 °C, særligt under broer, i skygge og tidlig morgen.</div>
      </div>

      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Slip gassen</div>
            <div class="step-desc">Slip speederen roligt. Bremse ikke hårdt – det forværrer situationen.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Styr roligt</div>
            <div class="step-desc">Hold rattet ret. Sving blødt og kontrolleret.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Reducer hastighed permanent</div>
            <div class="step-desc">Kør langsommere resten af turen. Meld glat vej til afdelingen og tjek vejinfo.</div>
          </div>
        </li>
      </ol>
    `
  },

  'synlighed-vejr': {
    id: 'synlighed-vejr',
    title: 'Dårlig sigt og kraftig regn',
    icon: '🌧️',
    category: 'vejr-vinter',
    tags: ['Sæson'],
    preview: 'Kørsel ved tåge, kraftig regn og dårlig sigt.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🌧️</div>
        <h1>Dårlig sigt og kraftig regn</h1>
        <div class="article-meta"><span class="meta-badge gray">Sæson</span></div>
      </div>

      <div class="info-card">
        <h3>Huskeliste</h3>
        <ul>
          <li>Tænd <strong>nærlys og tågelygter</strong> ved sigt under 100 m</li>
          <li>Sæt hastighed ned – aquaplaning sker fra 80 km/t på vådt underlag</li>
          <li>Øg sikkerhedsafstand til <strong>minimum 4 sekunder</strong></li>
          <li>Hold vinduerne fri for dug (brug aircondition / ventilation)</li>
          <li>Er sigten under 50 m – overvej at vente til vejret bedrer sig</li>
        </ul>
      </div>
    `
  },

  // ===== DOKUMENTATION =====
  'skadesrapport': {
    id: 'skadesrapport',
    title: 'Udfyld en skadesrapport',
    icon: '📝',
    category: 'dokumentation',
    tags: ['Procedure'],
    preview: 'Hvornår og hvordan udfyldes en skadesrapport?',
    content: `
      <div class="article-header">
        <div class="article-header-icon">📝</div>
        <h1>Skadesrapport</h1>
        <div class="article-meta"><span class="meta-badge gray">Procedure</span></div>
      </div>

      <div class="info-card">
        <h3>Hvornår udfyldes en skadesrapport?</h3>
        <ul>
          <li>Trafikulykke – uanset størrelse</li>
          <li>Skade på gods under transport</li>
          <li>Tyveri eller indbrud</li>
          <li>Spild af farlige stoffer</li>
          <li>Arbejdsulykke (personskade)</li>
          <li>Skade på kundes ejendom</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Rapporten skal indeholde</h3>
        <ul>
          <li>Dato, tidspunkt og præcis adresse</li>
          <li>Beskrivelse af hændelsen (hvad skete der?)</li>
          <li>Involverede parter (navne, nummerplader, kontaktinfo)</li>
          <li>Vidner og eventuelle politioplysninger</li>
          <li>Billeder (obligatorisk)</li>
          <li>Din underskrift</li>
        </ul>
      </div>

      <div class="alert info">
        <div class="alert-icon">ℹ️</div>
        <div>Rapporten afleveres til din leder <strong>inden du tager hjem</strong> den dag hændelsen skete.</div>
      </div>
    `
  },

  'koerselslog': {
    id: 'koerselslog',
    title: 'Kørselslogbog',
    icon: '📓',
    category: 'dokumentation',
    tags: ['Lovkrav'],
    preview: 'Krav til kørselslogbog for firmakørsel.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">📓</div>
        <h1>Kørselslogbog</h1>
        <div class="article-meta"><span class="meta-badge gray">Lovkrav</span></div>
      </div>

      <div class="info-card">
        <h3>Skal noteres ved hver tur</h3>
        <ul>
          <li>Dato</li>
          <li>Start km-stand og slut km-stand</li>
          <li>Start- og slutadresse</li>
          <li>Formål med kørsel (ordrenummer)</li>
          <li>Chaufførens navn</li>
        </ul>
      </div>

      <div class="alert info">
        <div class="alert-icon">ℹ️</div>
        <div>Manglende eller forkert logbog kan resultere i beskatning af fri bil. Udfyld logbogen <strong>samme dag</strong> – aldrig bagudrettet.</div>
      </div>
    `
  },

  'fragtbrev': {
    id: 'fragtbrev',
    title: 'Fragtbrev og CMR',
    icon: '📃',
    category: 'dokumentation',
    tags: ['Lovkrav'],
    preview: 'Hvad er et fragtbrev, og hvornår kræves CMR-dokument?',
    content: `
      <div class="article-header">
        <div class="article-header-icon">📃</div>
        <h1>Fragtbrev og CMR</h1>
        <div class="article-meta"><span class="meta-badge gray">Lovkrav</span></div>
      </div>

      <div class="info-card">
        <h3>Fragtbrev</h3>
        <p>Fragtbrevet er beviset for at du har afleveret godset. Sørg altid for at modtageren kvitterer.</p>
      </div>

      <div class="info-card">
        <h3>CMR-fragtbrev</h3>
        <p>CMR kræves ved grænseoverskridende transport af gods. FTZ bruger primært indenlandske ruter, men ved kørsel til Færøerne eller Sverige kræves CMR. Spørg afdelingen.</p>
      </div>
    `
  },

  // ===== HJÆLPEMIDLER =====
  'saekkevogn': {
    id: 'saekkevogn',
    title: 'Sækkevogn – korrekt brug',
    icon: '🛒',
    category: 'hjælpemidler',
    tags: ['Daglig brug'],
    preview: 'Sådan bruger du sækkevognen korrekt og sikkert.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🛒</div>
        <h1>Sækkevogn – korrekt brug</h1>
        <div class="article-meta"><span class="meta-badge gray">Daglig brug</span></div>
      </div>

      <ol class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Placer foden korrekt</div>
            <div class="step-desc">Skub sækkevognens fod helt ind under varen. Foden skal under varens tyngdepunkt.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Tip vognen tilbage</div>
            <div class="step-desc">Tip håndtaget mod dig med ret ryg. Brug din egen vægt – ikke din ryg.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Rul – hold varen støttet</div>
            <div class="step-desc">Rul på de to hjul. Hold hænderne på håndtaget. Kig i den retning du bevæger dig.</div>
          </div>
        </li>
        <li class="step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Kantsten og trin</div>
            <div class="step-desc">Op ad trin: vip vognen og hev op. Ned ad trin: kontrollér nedsænkningen – langsomt.</div>
          </div>
        </li>
      </ol>

      <div class="alert warning">
        <div class="alert-icon">⚠️</div>
        <div>Max last på standard sækkevogn: <strong>250 kg</strong>. Overskrid aldrig grænsen.</div>
      </div>
    `
  },

  'rullebaand': {
    id: 'rullebaand',
    title: 'Rullebånd i varevognen',
    icon: '➡️',
    category: 'hjælpemidler',
    tags: ['Daglig brug'],
    preview: 'Brug rullebåndet i bunden af varevognen korrekt for at spare ryggen.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">➡️</div>
        <h1>Rullebånd i varevognen</h1>
        <div class="article-meta"><span class="meta-badge gray">Daglig brug</span></div>
      </div>

      <div class="info-card">
        <h3>Formål</h3>
        <p>Rullebåndet i bunden af varevognen gør det muligt at skubbe pakker frem og tilbage uden at bøje sig dybt ind i bilen.</p>
      </div>

      <div class="info-card">
        <h3>Brug</h3>
        <ul>
          <li>Skub altid pakker frem langs rullebåndet frem for at løfte dem</li>
          <li>Hold rullebåndet rent og fri for affaldsemballage</li>
          <li>Tunge varer (over 15 kg): skub frem til bagkanten, løft derefter ned</li>
          <li>Kontrollér ugentligt at rullerne drejer frit</li>
        </ul>
      </div>
    `
  },

  'glideplader': {
    id: 'glideplader',
    title: 'Glideplader og transportmåtter',
    icon: '🎿',
    category: 'hjælpemidler',
    tags: ['Tunge varer'],
    preview: 'Brug glideplader til tunge varer på glatte eller ru underlag.',
    content: `
      <div class="article-header">
        <div class="article-header-icon">🎿</div>
        <h1>Glideplader og transportmåtter</h1>
        <div class="article-meta"><span class="meta-badge gray">Tunge varer</span></div>
      </div>

      <div class="info-card">
        <h3>Hvornår bruges glideplader?</h3>
        <ul>
          <li>Tunge varer (tromler, gearkasser, motorer) der skal trækkes over et underlag</li>
          <li>Flytning over tæpper eller ru gulve i værksteder</li>
          <li>Placering under sækkevognens hjul på blødt underlag</li>
        </ul>
      </div>

      <div class="info-card">
        <h3>Teknik</h3>
        <ul>
          <li>Løft varen let og placer plade under</li>
          <li>Skub – aldrig træk – med ret ryg</li>
          <li>Én plade foran og én bag – flyt fremste plade fremad løbende</li>
        </ul>
      </div>
    `
  }
};
