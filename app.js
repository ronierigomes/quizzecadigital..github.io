(() => {
  "use strict";

  const LETTERS = ["A", "B", "C"];

  const state = {
    currentIndex: 0,
    hits: 0,
    misses: 0,
    history: [], // { questionId, isCorrect, chosenText, correctText }
    currentOptions: []
  };

  // Referências de DOM
  const screens = {
    start: document.getElementById("screen-start"),
    question: document.getElementById("screen-question"),
    answer: document.getElementById("screen-answer"),
    result: document.getElementById("screen-result")
  };

  const els = {
    startEmblem: document.getElementById("start-emblem"),
    startIllustration: document.getElementById("start-illustration"),
    startLogos: document.getElementById("start-logos"),
    btnStart: document.getElementById("btn-start"),

    questionCounter: document.getElementById("question-counter"),
    liveHits: document.getElementById("live-hits"),
    liveMisses: document.getElementById("live-misses"),
    progressDots: document.getElementById("progress-dots"),
    questionEmblem: document.getElementById("question-emblem"),
    questionIllustration: document.getElementById("question-illustration"),
    questionText: document.getElementById("question-text"),
    optionsList: document.getElementById("options-list"),

    answerCounter: document.getElementById("answer-counter"),
    answerLiveHits: document.getElementById("answer-live-hits"),
    answerLiveMisses: document.getElementById("answer-live-misses"),
    answerProgressDots: document.getElementById("answer-progress-dots"),
    answerHeaderArt: document.getElementById("answer-header-art"),
    feedbackBanner: document.getElementById("feedback-banner"),
    quickAnswerBody: document.getElementById("quick-answer-body"),
    legalBox: document.getElementById("legal-box"),
    answerLogos: document.getElementById("answer-logos"),
    btnNext: document.getElementById("btn-next"),
    btnNextLabel: document.getElementById("btn-next-label"),

    resultEmblem: document.getElementById("result-emblem"),
    resultHeadline: document.getElementById("result-heading"),
    resultSummary: document.getElementById("result-summary"),
    finalHits: document.getElementById("final-hits"),
    finalMisses: document.getElementById("final-misses"),
    resultDots: document.getElementById("result-dots"),
    resultLogos: document.getElementById("result-logos"),
    reviewList: document.getElementById("review-list"),

    btnShareNative: document.getElementById("btn-share-native"),
    btnShareWhatsapp: document.getElementById("btn-share-whatsapp"),
    btnShareX: document.getElementById("btn-share-x"),
    btnShareCopy: document.getElementById("btn-share-copy"),
    btnShareImage: document.getElementById("btn-share-image"),
    btnRestart: document.getElementById("btn-restart"),

    toast: document.getElementById("toast"),
    canvas: document.getElementById("share-canvas")
  };

  let toastTimer = null;

  // ==================== UTILITÁRIOS ====================
  function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      els.toast.classList.remove("visible");
    }, 2600);
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, node]) => {
      node.classList.toggle("active", key === name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function buildAnswerHeaderSvg(style) {
    if (style === "fourStars") {
      return `
        <svg viewBox="0 0 260 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#251C4D" stroke-width="1.8" stroke-linejoin="round" fill="none">
            <path d="M36 8 L41 26 L58 21 L44 33 L52 52 L36 40 L20 52 L28 33 L14 21 L31 26 Z"/>
            <path d="M98 8 L103 26 L120 21 L106 33 L114 52 L98 40 L82 52 L90 33 L76 21 L93 26 Z"/>
            <path d="M162 8 L167 26 L184 21 L170 33 L178 52 L162 40 L146 52 L154 33 L140 21 L157 26 Z"/>
            <path d="M224 8 L229 26 L246 21 L232 33 L240 52 L224 40 L208 52 L216 33 L202 21 L219 26 Z"/>
          </g>
        </svg>
      `;
    }

    if (style === "sunMinimal") {
      return `
        <svg viewBox="0 0 260 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M76 0 A54 46 0 0 0 184 0 Z" fill="#F68DA7" stroke="#251C4D" stroke-width="2.2"/>
          <path d="M58 34 L62 42 L70 46 L62 50 L58 58 L54 50 L46 46 L54 42 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.8" stroke-linejoin="round"/>
          <path d="M202 34 L206 42 L214 46 L206 50 L202 58 L198 50 L190 46 L198 42 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.8" stroke-linejoin="round"/>
        </svg>
      `;
    }

    if (style === "clean") {
      return `
        <svg viewBox="0 0 260 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M92 0 A38 26 0 0 0 168 0 Z" fill="#F68DA7" stroke="#251C4D" stroke-width="2"/>
          <path d="M56 12 L59 18 L65 21 L59 24 L56 30 L53 24 L47 21 L53 18 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.6"/>
          <path d="M204 12 L207 18 L213 21 L207 24 L204 30 L201 24 L195 21 L201 18 Z" fill="#FAF054" stroke="#251C4D" stroke-width="1.6"/>
        </svg>
      `;
    }

    // Padrão "sun": meio-sol coral com raios tracejados e 6 estrelinhas amarelas (p. 2, 4, 16, 20)
    return `
      <svg viewBox="0 0 260 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M76 0 A54 44 0 0 0 184 0 Z" fill="#F68DA7" stroke="#251C4D" stroke-width="2.2"/>
        <!-- Raios centrais -->
        <g stroke="#251C4D" stroke-width="2" stroke-linecap="round">
          <line x1="130" y1="52" x2="130" y2="88"/>
          <line x1="106" y1="62" x2="96" y2="88" stroke-dasharray="14 8"/>
          <line x1="154" y1="62" x2="164" y2="88" stroke-dasharray="14 8"/>
        </g>
        <!-- 3 estrelas esquerda -->
        <g fill="#FAF054" stroke="#251C4D" stroke-width="1.6" stroke-linejoin="round">
          <path d="M58 40 L61 46 L67 49 L61 52 L58 58 L55 52 L49 49 L55 46 Z"/>
          <path d="M58 60 L61 66 L67 69 L61 72 L58 78 L55 72 L49 69 L55 66 Z"/>
          <path d="M58 79 L61 85 L67 88 L61 91 L58 95 L55 91 L49 88 L55 85 Z"/>
          <!-- 3 estrelas direita -->
          <path d="M202 40 L205 46 L211 49 L205 52 L202 58 L199 52 L193 49 L199 46 Z"/>
          <path d="M202 60 L205 66 L211 69 L205 72 L202 78 L199 72 L193 69 L199 66 Z"/>
          <path d="M202 79 L205 85 L211 88 L205 91 L202 95 L199 91 L193 88 L199 85 Z"/>
        </g>
      </svg>
    `;
  }

  function renderProgressDots(container, activeIdx, markCurrentAsAnswered) {
    container.innerHTML = "";
    QUIZ_DATA.forEach((_, idx) => {
      const dot = document.createElement("span");
      dot.className = "progress-dot";
      const record = state.history[idx];
      if (record) {
        dot.classList.add(record.isCorrect ? "hit" : "miss");
      } else if (idx === activeIdx && !markCurrentAsAnswered) {
        dot.classList.add("current");
      }
      container.appendChild(dot);
    });
  }

  function updateScoreDisplays() {
    els.liveHits.textContent = `✓ ${state.hits}`;
    els.liveMisses.textContent = `✕ ${state.misses}`;
    els.answerLiveHits.textContent = `✓ ${state.hits}`;
    els.answerLiveMisses.textContent = `✕ ${state.misses}`;
  }

  // ==================== FLUXO DO QUIZ ====================
  function initStaticArt() {
    els.startEmblem.innerHTML = TAROT_SVGS.archEmblem;
    els.startIllustration.innerHTML = TAROT_SVGS.botanicals;
    els.startLogos.innerHTML = TAROT_SVGS.footerLogos;

    els.questionEmblem.innerHTML = TAROT_SVGS.archEmblem;
    els.answerLogos.innerHTML = TAROT_SVGS.footerLogos;

    els.resultEmblem.innerHTML = TAROT_SVGS.archEmblem;
    els.resultLogos.innerHTML = TAROT_SVGS.footerLogos;
  }

  function startQuiz() {
    state.currentIndex = 0;
    state.hits = 0;
    state.misses = 0;
    state.history = [];
    renderQuestion();
    showScreen("question");
  }

  function renderQuestion() {
    const item = QUIZ_DATA[state.currentIndex];
    const num = state.currentIndex + 1;
    const total = QUIZ_DATA.length;

    els.questionCounter.textContent = `Pergunta ${num} de ${total}`;
    els.progressDots.setAttribute("aria-valuenow", String(num));
    updateScoreDisplays();
    renderProgressDots(els.progressDots, state.currentIndex, false);

    els.questionIllustration.innerHTML = TAROT_SVGS[item.illustration] || TAROT_SVGS.botanicals;
    els.questionText.textContent = item.question;

    // Embaralha as 3 opções baseadas no PDF
    state.currentOptions = shuffle(item.options);
    els.optionsList.innerHTML = "";

    state.currentOptions.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.innerHTML = `
        <span class="option-letter">${LETTERS[idx]}</span>
        <span class="option-text"></span>
      `;
      btn.querySelector(".option-text").textContent = opt.text;
      btn.addEventListener("click", () => handleAnswer(opt));
      els.optionsList.appendChild(btn);
    });
  }

  function handleAnswer(selectedOption) {
    const item = QUIZ_DATA[state.currentIndex];
    const correctOption = item.options.find((o) => o.correct);
    const isCorrect = Boolean(selectedOption.correct);

    if (isCorrect) {
      state.hits += 1;
    } else {
      state.misses += 1;
    }

    state.history.push({
      questionId: item.id,
      question: item.question,
      isCorrect,
      chosenText: selectedOption.text,
      correctText: correctOption.text,
      quickAnswer: item.quickAnswer
    });

    renderAnswerCard(item, isCorrect, correctOption.text);
    showScreen("answer");
  }

  function renderAnswerCard(item, isCorrect, correctText) {
    const num = state.currentIndex + 1;
    const total = QUIZ_DATA.length;

    els.answerCounter.textContent = `Resposta ${num} de ${total}`;
    updateScoreDisplays();
    renderProgressDots(els.answerProgressDots, state.currentIndex, true);

    els.answerHeaderArt.innerHTML = buildAnswerHeaderSvg(item.answerHeaderStyle);

    // Banner de acerto/erro
    els.feedbackBanner.className = `feedback-banner ${isCorrect ? "is-hit" : "is-miss"}`;
    if (isCorrect) {
      els.feedbackBanner.innerHTML = `
        <span class="feedback-title">✓ Você acertou!</span>
        <span class="feedback-sub">Veja abaixo a resposta completa e os artigos do ECA Digital.</span>
      `;
    } else {
      els.feedbackBanner.innerHTML = `
        <span class="feedback-title">✕ Não foi dessa vez</span>
        <span class="feedback-sub"><strong>Resposta correta:</strong> <span id="correct-option-echo"></span></span>
      `;
      els.feedbackBanner.querySelector("#correct-option-echo").textContent = correctText;
    }

    // Resposta rápida (texto fiel do PDF)
    els.quickAnswerBody.innerHTML = "";
    item.quickAnswer.forEach((paragraph, idx) => {
      const p = document.createElement("p");
      if (paragraph.startsWith("• ")) {
        p.className = "bullet-line";
        p.textContent = paragraph.slice(2);
      } else if (idx === 0) {
        const strong = document.createElement("strong");
        strong.textContent = "Resposta rápida: ";
        p.appendChild(strong);
        p.appendChild(document.createTextNode(paragraph));
      } else {
        p.textContent = paragraph;
      }
      els.quickAnswerBody.appendChild(p);
    });

    // Artigos e notas legais (texto fiel do PDF)
    els.legalBox.innerHTML = "";
    item.legalNotes.forEach((note) => {
      const p = document.createElement("p");
      p.textContent = note;
      els.legalBox.appendChild(p);
    });

    // Texto do botão de avançar
    if (num < total) {
      els.btnNextLabel.textContent = "Próxima pergunta";
    } else {
      els.btnNextLabel.textContent = "Ver meu resultado";
    }
  }

  function handleNext() {
    if (state.currentIndex + 1 < QUIZ_DATA.length) {
      state.currentIndex += 1;
      renderQuestion();
      showScreen("question");
    } else {
      renderResult();
      showScreen("result");
    }
  }

  function renderResult() {
    const total = QUIZ_DATA.length;
    els.finalHits.textContent = String(state.hits);
    els.finalMisses.textContent = String(state.misses);

    if (state.hits === total) {
      els.resultHeadline.textContent = "Você gabaritou o Quiz ECA Digital!";
      els.resultSummary.textContent = `Você acertou todas as ${total} perguntas e não errou nenhuma. Compartilhe seu resultado e ajude mais pessoas a conhecerem o ECA Digital.`;
    } else if (state.hits >= 7) {
      els.resultHeadline.textContent = "Mandou muito bem!";
      els.resultSummary.textContent = `Você acertou ${state.hits} de ${total} perguntas e errou ${state.misses}. Que tal compartilhar seu resultado nas redes?`;
    } else if (state.hits >= 4) {
      els.resultHeadline.textContent = "Bom começo!";
      els.resultSummary.textContent = `Você acertou ${state.hits} de ${total} perguntas e errou ${state.misses}. Você pode rever todas as respostas abaixo ou tentar de novo.`;
    } else {
      els.resultHeadline.textContent = "Valeu por participar!";
      els.resultSummary.textContent = `Você acertou ${state.hits} de ${total} perguntas e errou ${state.misses}. Releia as respostas do ECA Digital abaixo e jogue novamente quando quiser.`;
    }

    // Bolinhas de 1 a 10
    els.resultDots.innerHTML = "";
    state.history.forEach((entry, idx) => {
      const dot = document.createElement("span");
      dot.className = `result-dot ${entry.isCorrect ? "hit" : "miss"}`;
      dot.textContent = String(idx + 1);
      dot.title = `Pergunta ${idx + 1}: ${entry.isCorrect ? "Acerto" : "Erro"}`;
      els.resultDots.appendChild(dot);
    });

    // Lista de revisão
    els.reviewList.innerHTML = "";
    state.history.forEach((entry, idx) => {
      const card = document.createElement("div");
      card.className = "review-item";
      card.innerHTML = `
        <div class="review-item-head">
          <span class="review-q"></span>
          <span class="review-badge ${entry.isCorrect ? "hit" : "miss"}">${entry.isCorrect ? "Acerto" : "Erro"}</span>
        </div>
        <p class="review-answer"></p>
      `;
      card.querySelector(".review-q").textContent = `${idx + 1}. ${entry.question}`;
      card.querySelector(".review-answer").textContent = entry.quickAnswer[0];
      els.reviewList.appendChild(card);
    });
  }

  // ==================== COMPARTILHAMENTO NAS REDES ====================
  function getShareText() {
    const total = QUIZ_DATA.length;
    const hitWord = state.hits === 1 ? "acerto" : "acertos";
    const missWord = state.misses === 1 ? "erro" : "erros";
    const urlPart = window.location.protocol.startsWith("http") ? `\nFaça o quiz também: ${window.location.href}` : "";
    return `Fiz o Quiz ECA Digital (O que muda pra você?) e fiz ${state.hits} ${hitWord} e ${state.misses} ${missWord} de ${total} perguntas!${urlPart}`;
  }

  async function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }

  // Gera imagem 1080x1920 estilo carta de tarô do PDF para Stories/Status/Redes
  function generateResultCanvas() {
    const canvas = els.canvas;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    // Fundo rosa
    ctx.fillStyle = "#F7C2D9";
    ctx.fillRect(0, 0, W, H);

    // Detalhes geométricos laterais (coral e amarelo)
    ctx.fillStyle = "#F68DA7";
    ctx.strokeStyle = "#251C4D";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, 340);
    ctx.lineTo(120, 460);
    ctx.lineTo(120, 1340);
    ctx.lineTo(0, 1460);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(W, 340);
    ctx.lineTo(W - 120, 460);
    ctx.lineTo(W - 120, 1340);
    ctx.lineTo(W, 1460);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Carta central
    const cx = 74;
    const cy = 92;
    const cw = W - 148;
    const ch = H - 184;
    const splitY = 1140;

    // Topo creme
    ctx.fillStyle = "#FDFAD2";
    roundRect(ctx, cx, cy, cw, ch, 36);
    ctx.fill();

    // Base roxa
    ctx.save();
    roundRect(ctx, cx, cy, cw, ch, 36);
    ctx.clip();
    ctx.fillStyle = "#5B4490";
    ctx.fillRect(cx, splitY, cw, cy + ch - splitY);
    ctx.restore();

    // Linha divisória e borda da carta
    ctx.strokeStyle = "#251C4D";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(cx, splitY);
    ctx.lineTo(cx + cw, splitY);
    ctx.stroke();

    roundRect(ctx, cx, cy, cw, ch, 36);
    ctx.stroke();

    // Estrelas decorativas
    drawStar4(ctx, 190, 260, 48, "#FAF054");
    drawStar4(ctx, 880, 320, 38, "#FAF054");
    drawStar4(ctx, 840, 430, 22, "#FAF054");
    drawStar4(ctx, 210, 820, 28, "#FAF054");

    // Arco estilizado no topo
    ctx.strokeStyle = "#5B4490";
    ctx.lineWidth = 6;
    roundRect(ctx, W / 2 - 90, 165, 180, 230, 90);
    ctx.stroke();
    ctx.lineWidth = 4;
    roundRect(ctx, W / 2 - 76, 179, 152, 202, 76);
    ctx.stroke();
    // Celular simplificado no arco
    ctx.save();
    ctx.translate(W / 2, 275);
    ctx.rotate(0.1);
    ctx.fillStyle = "#FDFAD2";
    ctx.strokeStyle = "#5B4490";
    ctx.lineWidth = 5;
    roundRect(ctx, -32, -56, 64, 112, 12);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Logo QUIZ ECA DIGITAL
    ctx.textAlign = "center";
    ctx.fillStyle = "#5B4490";
    ctx.font = 'bold 88px "Alfa Slab One", Georgia, serif';
    ctx.fillText("QUIZ ECA", W / 2, 520);
    ctx.fillText("DIGITAL", W / 2, 612);

    ctx.fillStyle = "#251C4D";
    ctx.font = 'bold 44px "Lora", Georgia, serif';
    ctx.fillText("O que muda pra você?", W / 2, 684);

    // Caixas de Acertos e Erros
    const boxW = 340;
    const boxH = 250;
    const boxY = 790;
    const gap = 46;
    const leftX = W / 2 - boxW - gap / 2;
    const rightX = W / 2 + gap / 2;

    // Caixa Acertos
    ctx.fillStyle = "#E7F7D4";
    ctx.strokeStyle = "#251C4D";
    ctx.lineWidth = 6;
    roundRect(ctx, leftX, boxY, boxW, boxH, 28);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#225415";
    ctx.font = 'bold 124px "Alfa Slab One", Georgia, serif';
    ctx.fillText(String(state.hits), leftX + boxW / 2, boxY + 148);
    ctx.font = '800 34px "Plus Jakarta Sans", sans-serif';
    ctx.fillText("ACERTOS", leftX + boxW / 2, boxY + 210);

    // Caixa Erros
    ctx.fillStyle = "#FFE1E8";
    roundRect(ctx, rightX, boxY, boxW, boxH, 28);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#7D1731";
    ctx.font = 'bold 124px "Alfa Slab One", Georgia, serif';
    ctx.fillText(String(state.misses), rightX + boxW / 2, boxY + 148);
    ctx.font = '800 34px "Plus Jakarta Sans", sans-serif';
    ctx.fillText("ERROS", rightX + boxW / 2, boxY + 210);

    // Texto na parte roxa
    ctx.fillStyle = "#FAF054";
    ctx.font = '800 44px "Plus Jakarta Sans", sans-serif';
    ctx.fillText("MEU RESULTADO", W / 2, 1265);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = '700 54px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`${state.hits} DE ${QUIZ_DATA.length} PERGUNTAS`, W / 2, 1355);

    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.font = '500 36px "Plus Jakarta Sans", sans-serif';
    ctx.fillText("Você sabe o que muda nas redes", W / 2, 1465);
    ctx.fillText("e jogos com o ECA Digital?", W / 2, 1518);

    // Rodapé OBECA / Intervozes
    ctx.fillStyle = "rgba(255,255,255,0.82)";
    ctx.font = '700 34px "Plus Jakarta Sans", sans-serif';
    ctx.fillText("OBECA • Observatório do ECA Digital   |   intervozes", W / 2, 1735);

    return canvas;
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  function drawStar4(ctx, x, y, r, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = "#251C4D";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x, y - r);
    ctx.lineTo(x + r * 0.28, y - r * 0.28);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x + r * 0.28, y + r * 0.28);
    ctx.lineTo(x, y + r);
    ctx.lineTo(x - r * 0.28, y + r * 0.28);
    ctx.lineTo(x - r, y);
    ctx.lineTo(x - r * 0.28, y - r * 0.28);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  async function handleNativeShare() {
    const text = getShareText();

    // Tenta compartilhar com imagem + texto em navegadores móveis modernos
    if (navigator.share) {
      try {
        const canvas = generateResultCanvas();
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
        if (blob && navigator.canShare) {
          const file = new File([blob], "meu-resultado-quiz-eca-digital.png", { type: "image/png" });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: "Quiz ECA Digital",
              text,
              files: [file]
            });
            return;
          }
        }
        await navigator.share({
          title: "Quiz ECA Digital",
          text
        });
        return;
      } catch (err) {
        if (err && err.name === "AbortError") return;
      }
    }

    // Fallback desktop: copia o texto
    try {
      await copyTextToClipboard(text);
      showToast("Resultado copiado! Cole nas suas redes sociais.");
    } catch {
      showToast("Use os botões abaixo para compartilhar!");
    }
  }

  function handleWhatsappShare() {
    const text = encodeURIComponent(getShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank", "noopener,noreferrer");
  }

  function handleXShare() {
    const text = encodeURIComponent(getShareText());
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank", "noopener,noreferrer");
  }

  async function handleCopyShare() {
    try {
      await copyTextToClipboard(getShareText());
      showToast("Texto do resultado copiado!");
    } catch {
      showToast("Não foi possível copiar automaticamente.");
    }
  }

  function handleDownloadCard() {
    const canvas = generateResultCanvas();
    const link = document.createElement("a");
    link.download = `quiz-eca-digital-${state.hits}-acertos.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("Card do resultado baixado!");
  }

  // ==================== EVENTOS ====================
  els.btnStart.addEventListener("click", startQuiz);
  els.btnNext.addEventListener("click", handleNext);
  els.btnRestart.addEventListener("click", startQuiz);

  els.btnShareNative.addEventListener("click", handleNativeShare);
  els.btnShareWhatsapp.addEventListener("click", handleWhatsappShare);
  els.btnShareX.addEventListener("click", handleXShare);
  els.btnShareCopy.addEventListener("click", handleCopyShare);
  els.btnShareImage.addEventListener("click", handleDownloadCard);

  initStaticArt();
})();
