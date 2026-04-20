// Traduções PT-PT (pré-Acordo Ortográfico 2016) / EN
// Conteúdo baseado no artigo "From Classical Models to LLM-as-a-Judge:
// Anomaly Detection and Face Recognition for Cyber-Physical Security"

export const translations = {
  pt: {
    nav: {
      scenario: 'Cenário',
      architecture: 'Arquitectura',
      anomaly: 'Anomalias',
      face: 'Reconhecimento',
      results: 'Resultados',
      team: 'Equipa',
      references: 'Referências',
    },

    hero: {
      eyebrow: 'Challenge 3 · ISEP · RNAAPIA + LNIAGIA',
      title: 'Controlo de acesso.\nDeteção de ameaças.\nAtribuição MITRE.',
      subtitle:
        'Um sistema end-to-end que autentica quem entra, deteta comportamento anómalo em logs Windows, e mapeia ameaças a técnicas ATT&CK com racionalidade auditável.',
      scroll: 'percorrer',
      cta: 'Ver cenário',
    },

    scenario: {
      eyebrow: 'Capítulo 01 · Cenário',
      title: 'Um analista SOC\nchega ao trabalho.',
      lead:
        'Antes de abrir o dashboard de ameaças, o sistema precisa de saber quem ele é. Não uma password — uma password pode ser roubada. O rosto dele.',
      bridgeLabel: 'O problema real',
      bridge:
        'Sistemas baseados em regras só detetam o que já foi descrito. Face a movimentos laterais subtis ou ataques de dia zero, falham — ou geram alertas sem contexto.',
      walls: [
        {
          tag: 'Pilar 01 — Quem és tu?',
          title: 'Reconhecimento facial',
          body: 'InsightFace (ArcFace) compara cada frame da câmara com os embeddings das pessoas registadas. Threshold 0.70 cosine similarity. Acesso concedido ou negado em tempo real.',
        },
        {
          tag: 'Pilar 02 — Algo está errado?',
          title: 'Deteção de anomalias',
          body: 'Dois pipelines paralelos sobre os mesmos logs Sysmon: cyber-anomaly-detection (TransformerAE + Single-event AE + RAG/Qwen 32B) e DualSentinel (Heuristic Scorer + SLM Phi-3 → LLM Judge Llama 3.2). Maximalismo vs auditabilidade.',
        },
        {
          tag: 'Pilar 03 — O que é?',
          title: 'Atribuição ATT&CK',
          body: 'Knowledge Base partilhada com 3.463 entradas MITRE/OTRF/Sigma (ChromaDB + BM25). Consumida por dois caminhos: RAG híbrido + Qwen 2.5 32B (cyber-anomaly-detection) e SLM Phi-3 Medium → LLM Judge Llama 3.2 (DualSentinel). 100% local via Ollama.',
        },
      ],
      note:
        'Os três pilares funcionam em sequência: autenticação facial desbloqueia o SOC dashboard, onde chains suspeitas são analisadas e mapeadas para técnicas MITRE com racionalidade auditável.',
    },

    architecture: {
      eyebrow: 'Capítulo 02 · Arquitectura',
      title: 'Três pilares,\num sistema coeso.',
      lead:
        'Autenticação facial desbloqueia o SOC dashboard. Sobre os logs Sysmon corremos dois pipelines independentes — um maximalista (TransformerAE + RAG/Qwen 32B), outro auditável (Heuristic Scorer + Phi-3 → Llama 3.2). Mesmo input, filosofias opostas.',
      module1: {
        number: '01',
        tag: 'RNAAPIA',
        title: 'Reconhecimento facial',
        desc:
          'InsightFace buffalo_sc (ArcFace + RetinaFace) extrai embeddings de alta dimensão. Comparação por similaridade cosseno contra centróides L2-normalizados das 5 identidades registadas. Threshold 0.70.',
        stack: ['InsightFace', 'ArcFace', 'RetinaFace', 'ONNX Runtime', 'OpenCV', 'FaceNet'],
      },
      module2: {
        number: '02',
        tag: 'LNIAGIA · Anomalias',
        title: 'Dois pipelines paralelos',
        desc:
          'cyber-anomaly-detection: TransformerAE (45 eventos, Word2Vec 352-dim, NAS+HPO Optuna) + Single-event AE + RAG híbrido com Qwen 2.5 32B. DualSentinel: Heuristic Scorer auditável (regras ATT&CK + smart features + KB Chroma+BM25 RRF) → SLM Phi-3 Medium → LLM Judge Llama 3.2.',
        stack: ['TransformerAE', 'Single-event AE', 'Qwen 2.5 32B', 'Heuristic Scorer', 'Phi-3 Medium', 'Llama 3.2'],
      },
      module3: {
        number: '03',
        tag: 'LNIAGIA · ATT&CK',
        title: 'Knowledge Base partilhada',
        desc:
          'Base de conhecimento com 3.463 entradas MITRE/OTRF/Splunk/SigmaRules indexada em ChromaDB + BM25 (RRF). Partilhada pelos dois pipelines: cyber-anomaly-detection consome-a via RAG híbrido + Qwen 2.5 32B; DualSentinel via SLM Phi-3 Medium → LLM Judge Llama 3.2. 100% local via Ollama.',
        stack: ['ChromaDB', 'BM25', 'Qwen 2.5 32B', 'Phi-3 Medium', 'Llama 3.2', 'Ollama', 'MITRE STIX'],
      },
    },

    anomaly: {
      eyebrow: 'Capítulo 03 · Deteção de anomalias',
      title: 'Mesma análise Sysmon,\nduas abordagens.',
      lead:
        'Construímos dois pipelines independentes sobre os mesmos logs Windows Sysmon — um maximalista, outro auditável. Cada um responde à pergunta "isto é uma ameaça?" de forma diferente, e ambos foram avaliados nos mesmos datasets.',

      compareTitle: 'Quando escolher cada abordagem',
      compareSubtitle: 'Mesmo input, filosofias opostas: aprendizagem profunda + LLM grande versus heurísticas auditáveis + LLMs pequenos.',
      compareHeaders: ['Critério', 'cyber-anomaly-detection', 'DualSentinel'],
      compareRows: [
        ['Deteção', 'TransformerAE + Single-event AE (não supervisionado)', 'Heuristic Scorer (regras ATT&CK + smart features + baseline + KB hybrid)'],
        ['Atribuição', 'RAG híbrido + Qwen 2.5 32B', 'SLM Phi-3 Medium → LLM Judge Llama 3.2'],
        ['Auditabilidade', 'Score por evento, embeddings opacos', 'Cada termo do score é inspecionável'],
        ['Hardware', 'GPU recomendada (LLM 32B)', 'Corre confortavelmente em CPU / GPU pequena'],
        ['Métrica de referência', 'AP 0.956 (LMD-2023) · 0.949 (Splunk) · 0.8141(ORTF)', 'F1 calibrado por threshold sweep no LMD-2023'],
      ],

      // Abordagem A — cyber-anomaly-detection
      approachATag: 'Abordagem A · cyber-anomaly-detection',
      approachATitle: 'Aprender o benigno em 2.3M eventos.',
      approachALead:
        'Pipeline maximalista de duas camadas com atribuição RAG + LLM grande. 10 notebooks de investigação documentam a evolução desde EDA, baseline (IsolationForest, KMeans, OCSVM), CASH com Optuna, até aos autoencoders como solução óptima.',

      classicalTag: 'Camada 01 — Sequências',
      classicalTitle: 'Sequence TransformerAE',
      classicalBody:
        'Janelas de 45 eventos consecutivos convertidos em embeddings Word2Vec 352-dim. Transformer Autoencoder (NAS+HPO via Optuna: hidden=256, latent=128, 2 layers, 8 heads) aprende a reconstruir comportamento benigno.',
      classicalPros: ['Treinado 100% não supervisionado em 2.3M eventos benignos', 'AP = 0.814 em OTRF Atomic Red Team', 'AP = 0.836 em Splunk Attack Range'],
      classicalCons: ['Requer calibração do threshold por dataset', 'Janela de 45 eventos pode perder eventos isolados'],

      sentinelTag: 'Camada 02 — Eventos',
      sentinelTitle: 'Single-Event Autoencoder',
      sentinelBody:
        'Dentro de cada chain sinalizada, cada evento individual é pontuado por um Autoencoder de 4 camadas [353→231→176→162→8] com activação ELU. Identifica os eventos exactos mais anómalos — fornecendo ao analista uma vista cirúrgica da ameaça.',

      mitigationTitle: 'Camada 03 — Atribuição ATT&CK (RAG + Qwen 2.5 32B)',
      mitigationLead:
        'Detetar que algo é anómalo não chega. O RAG híbrido recupera contexto de 3.463 entradas MITRE/OTRF/SigmaRules e envia ao Qwen 2.5 32B com um prompt chain-of-thought estruturado.',
      mitigations: [
        {
          n: '01',
          title: 'Observar eventos',
          body: 'O LLM analisa os eventos da chain sinalizada e os scores individuais do Single-event AE.',
        },
        {
          n: '02',
          title: 'Recuperar contexto',
          body: 'Dense search (all-mpnet-base-v2 via ChromaDB) + BM25 sparse search sobre 3.463 entradas.',
        },
        {
          n: '03',
          title: 'Fazer match com ATT&CK',
          body: 'Chain-of-thought estruturado: 1. observar 2. match com técnica 3. produzir JSON.',
        },
        {
          n: '04',
          title: 'Produzir veredicto',
          body: 'JSON com ID da técnica, confiança e explicação. RAG recall: 60% em OTRF Atomic Red Team.',
        },
        {
          n: '05',
          title: 'Privacidade by design',
          body: 'Qwen 2.5 32B corre localmente via Ollama. Logs de sistema são dados sensíveis — nunca saem da máquina.',
        },
      ],

      prefilterStat: {
        label: 'AUC cross-dataset (LMD → OTRF → Splunk)',
        value: '~0.990',
        detail: 'Generalização genuina: treinado em LMD-2023, avaliado em OTRF Atomic Red Team e Splunk Attack Range sem re-treino.',
      },

      // Abordagem B — DualSentinel
      approachBTag: 'Abordagem B · DualSentinel',
      approachBTitle: 'Auditável por design.',
      approachBLead:
        'Pipeline alternativo onde cada decisão é inspecionável. A arquitectura clássica IsolationForest + GRU foi substituída por um Heuristic Scorer transparente: testes empíricos no LMD-2023 e Splunk Attack Data mostraram que os modelos opacos não traziam ganho mensurável e impediam o LLM Judge de auditar a evidência.',
      approachBPipelineCaption: 'Pipeline DualSentinel — Heuristic Scorer → SLM Analyst → LLM Judge.',
      approachBHighlights: [
        {
          title: 'Heuristic Scorer transparente',
          body: 'Regras ATT&CK confirmadas, 7 smart-feature flags, desvio à baseline self-supervised, hits da KB hybrid (Chroma + BM25 com RRF). Cada termo do score é inspecionável.',
        },
        {
          title: 'SLM → LLM como chain-of-thought',
          body: 'Phi-3 Medium produz uma hipótese rápida; Llama 3.2 valida-a ou refuta-a com referências explícitas aos eventos. O judge tem uma âncora — não parte de uma folha em branco.',
        },
        {
          title: 'Defesa académica em 4 notebooks',
          body: 'defesa_lmd_full_report (17 secções), threshold_calibration (sweep F1/Youden/FPR), kb_ablation (on/off da KB hybrid) e eda. Tudo reproduzível.',
        },
      ],
    },

    face: {
      eyebrow: 'Capítulo 04 · Reconhecimento facial',
      title: 'Quem é que passa a porta?',
      lead:
        'A camada física da segurança — verificar se quem está diante da câmara pertence ao conjunto autorizado. Duas abordagens comparadas, uma escolha final.',

      closedTag: 'Abordagem fechada (closed-set)',
      closedTitle: 'Classificação softmax sobre identidades conhecidas',
      closedBody:
        'Pipeline progressivo de cinco fases: treino supervisionado base, regularização e expansão de dataset, optimização de hiperparâmetros com Optuna, busca de arquitectura, e transfer learning final para o dataset organizacional (5 identidades).',

      openTag: 'Abordagem aberta (open-set)',
      openTitle: 'Verificação por similaridade cosseno',
      openBody:
        'InsightFace buffalo_sc servido via ONNXRuntime em CPU. Enrollment por directório: embeddings extraídos de cada imagem e flip horizontal, centróide L2-normalizado por identidade. Em inferência, cada frame da webcam é comparado contra todos os centróides. Threshold ≥ 0.70 → acesso concedido.',

      comparisonTitle: 'Por que é que escolhemos a pipeline aberta?',
      comparisonRows: [
        { k: 'Enrollment dinâmico', closed: 'Exige retreino', open: 'Apenas adicionar fotos', winner: 'open' },
        { k: 'Rejeição de desconhecidos', closed: 'Sobrestima confiança', open: 'Natural via threshold', winner: 'open' },
        { k: 'Hardware', closed: 'GPU para treino', open: 'CPU-only em inferência', winner: 'open' },
        { k: 'Desempenho discriminativo', closed: 'Forte em conjunto fixo', open: 'Dependente de embedding pré-treinado', winner: 'closed' },
      ],

      limitationTitle: 'Limitação conhecida',
      limitationBody:
        'O sistema actual não incorpora detecção de vivacidade (liveness detection) nem anti-spoofing. É vulnerável a ataques de apresentação com fotografias ou vídeo. Discutido em detalhe na secção de limitações.',

      demoCaption: 'Demo — reconhecimento em tempo real',
      demoPlaceholder: 'Espaço reservado para o vídeo de demonstração de computer vision.',
      demoHint: 'Substituir o ficheiro em /public/demos/face-recognition.mp4',
    },

    results: {
      eyebrow: 'Capítulo 05 · Resultados',
      title: 'Os números que\nnos defendem.',
      lead: 'Duas abordagens, mesma pergunta: é ameaça? Em baixo, métricas-chave da Abordagem A (cyber-anomaly-detection) sobre os datasets avaliados. A Abordagem B (DualSentinel) traz auditabilidade em vez de pontuação agregada — ver capítulo de deteção de anomalias.',

      faceTitle: 'Reconhecimento facial — fine-tuning organizacional',
      faceSubtitle: 'Ambos os modelos atingem classificação perfeita; a diferença aparece na avaliação biométrica (EER). InsightFace corre em CPU, threshold 0.70.',

      metrics: [
        { label: 'Abord. A · TransformerAE · AP em OTRF Atomic', value: '0.814', unit: '', kind: 'accuracy' },
        { label: 'Abord. A · TransformerAE · AP em Splunk Range', value: '0.836', unit: '', kind: 'accuracy' },
        { label: 'Abord. A · Single-event AE · AP cross-dataset', value: '0.92', unit: '', kind: 'biometric' },
        { label: 'Abord. A · RAG ATT&CK · Recall em OTRF', value: '60', unit: '%', kind: 'config' },
      ],

      tableClosedCaption: 'Tabela A — Classificação closed-set (5 identidades, dataset organizacional)',
      tableClosedNote: 'Resultados em conjunto de teste controlado com augmentation ~20x. Tarefa: "deste rosto, qual das 5 identidades?"',
      tableClosed: {
        headers: ['Modelo', 'Acc.', 'F1 Macro', 'Precision', 'Recall', 'AUC OvR'],
        rows: [
          ['FaceCNN (fine-tuned)', '100.00%', '100.00%', '100.00%', '100.00%', '100.00%'],
          ['ResNet-50 (fine-tuned)', '100.00%', '100.00%', '100.00%', '100.00%', '100.00%'],
        ],
      },

      tableOpenCaption: 'Tabela B — Verificação biométrica open-set (simulação de centróides)',
      tableOpenNote: 'Tarefa diferente: "este embedding pertence a uma identidade registada?" EER mede a taxa em que falsos aceites = falsas rejeições.',
      tableOpen: {
        headers: ['Modelo / Pipeline', 'EER', 'Threshold', 'Nota'],
        rows: [
          ['FaceCNN (embeddings)', '0.00%', 'calibrado', 'Distribuições bem separadas'],
          ['ResNet-50 (embeddings)', '10.46%', 'calibrado', 'Menor separabilidade inter-classe'],
          ['InsightFace ArcFace ★', '—', '0.70 cosine', 'Sistema final — generaliza a desconhecidos'],
        ],
      },

      sentinelTitle: 'Pipeline partilhado — números globais',
      sentinelMetrics: [
        { label: 'Eventos Sysmon benignos para treino (Abord. A)', value: '2.3', unit: 'Million' },
        { label: 'Entradas na KB MITRE/OTRF/SigmaRules (partilhada)', value: '3463', unit: '' },
        { label: 'T-codes com ground truth', value: '230', unit: 'técnicas' },
        { label: 'LLMs a correr localmente', value: '100%', unit: 'local' },
      ],
    },

    limitations: {
      eyebrow: 'Capítulo 06 · Limitações e Futuro',
      title: 'O que ainda\nnão fizemos.',
      lead:
        'Transparência é parte da engenharia de segurança. Aqui estão as fronteiras do que construímos — e o gancho para o Challenge 4.',
      items: [
        {
          title: 'Ausência de liveness detection',
          body: 'A pipeline aberta não distingue um rosto real de uma fotografia ou vídeo exibido à câmara.',
        },
        {
          title: 'Dataset organizacional pequeno',
          body: 'Cinco identidades e ~76 imagens originais com augmentation ~20x. Resultados em condições controladas.',
        },
        {
          title: 'RAG recall de 60%',
          body: 'A atribuição ATT&CK via RAG + Qwen 2.5 32B atinge 60% de recall em OTRF. 40% das técnicas continuam por identificar.',
        },
        {
          title: 'Sem fusão em runtime',
          body: 'Reconhecimento facial e deteção de anomalias são independentes. Correlação entre evento digital e acesso físico é manual.',
        },
      ],
      teaserTitle: 'O que vem a seguir · Challenge 4',
      teaserBody:
        'O próximo desafio junta Robótica/IoT e Sistemas Multiagente. Planeamos integrar os três pilares num ecossistema com robots (Cruzr, Booster, Unitree, cobot) como nós monitorizados, e agentes especializados a correlacionar eventos digitais e físicos em tempo real.',
    },

    team: {
      eyebrow: 'Equipa · Phish-N-Chips',
      title: 'Quem construiu isto.',
      affiliation: 'School of Engineering of the Polytechnic Institute of Porto (ISEP/IPP)',
    },

    references: {
      eyebrow: 'Referências',
      title: 'Onde fomos beber.',
      lead:
        'Uma pequena selecção das referências que sustentam o trabalho. Lista completa no artigo.',
      categories: {
        classical: 'Classical ML & Logs',
        llm: 'LLMs & Judge Framework',
        vision: 'Face Recognition',
      },
    },

    footer: {
      project: 'Challenge 3 · ISEP 2025/26',
      disciplines: 'RNAAPIA · LNIAGIA',
      repo: 'Repositório',
      report: 'Artigo completo',
      built: 'Construído com React, Vite e Tailwind',
    },

    ui: {
      language: 'Idioma',
      langShort: 'PT',
      altLangShort: 'EN',
    },
  },

  // ─────────────────────────────────────────────────────────────────

  en: {
    nav: {
      scenario: 'Scenario',
      architecture: 'Architecture',
      anomaly: 'Anomalies',
      face: 'Face',
      results: 'Results',
      team: 'Team',
      references: 'References',
    },

    hero: {
      eyebrow: 'Challenge 3 · ISEP · RNAAPIA + LNIAGIA',
      title: 'Access control.\nThreat detection.\nMITRE attribution.',
      subtitle:
        'An end-to-end system that authenticates who enters, detects anomalous behaviour in Windows logs, and maps threats to ATT&CK techniques with auditable rationale.',
      scroll: 'scroll',
      cta: 'See the scenario',
    },

    scenario: {
      eyebrow: 'Chapter 01 · Scenario',
      title: 'A SOC analyst\narrives to work.',
      lead:
        'Before opening the threat dashboard, the system needs to know who they are. Not a password — a password can be stolen. Their face.',
      bridgeLabel: 'The real problem',
      bridge:
        'Rule-based systems only detect what has already been described. Against subtle lateral movement or zero-day attacks, they fail — or fire alerts without context.',
      walls: [
        {
          tag: 'Pillar 01 — Who are you?',
          title: 'Face recognition',
          body: 'InsightFace (ArcFace) compares each camera frame against enrolled identity embeddings. Threshold 0.70 cosine similarity. Access granted or denied in real time.',
        },
        {
          tag: 'Pillar 02 — Is something wrong?',
          title: 'Anomaly detection',
          body: 'Two parallel pipelines over the same Sysmon logs: cyber-anomaly-detection (TransformerAE + Single-event AE + RAG/Qwen 32B) and DualSentinel (Heuristic Scorer + SLM Phi-3 → LLM Judge Llama 3.2). Maximalism vs auditability.',
        },
        {
          tag: 'Pillar 03 — What is it?',
          title: 'ATT&CK Attribution',
          body: 'Shared Knowledge Base with 3,463 MITRE/OTRF/Sigma entries (ChromaDB + BM25). Consumed by two paths: hybrid RAG + Qwen 2.5 32B (cyber-anomaly-detection) and SLM Phi-3 Medium → LLM Judge Llama 3.2 (DualSentinel). 100% local via Ollama.',
        },
      ],
      note:
        'The three pillars work in sequence: facial authentication unlocks the SOC dashboard, where suspicious chains are analysed and mapped to MITRE techniques with auditable rationale.',
    },

    architecture: {
      eyebrow: 'Chapter 02 · Architecture',
      title: 'Three pillars,\none cohesive system.',
      lead:
        'Face authentication unlocks the SOC dashboard. Over the Sysmon logs we run two independent pipelines — one maximalist (TransformerAE + RAG/Qwen 32B), one auditable (Heuristic Scorer + Phi-3 → Llama 3.2). Same input, opposite philosophies.',
      module1: {
        number: '01',
        tag: 'RNAAPIA',
        title: 'Face recognition',
        desc:
          'InsightFace buffalo_sc (ArcFace + RetinaFace) extracts high-dimensional embeddings. Cosine similarity comparison against L2-normalized centroids of 5 enrolled identities. Threshold 0.70.',
        stack: ['InsightFace', 'ArcFace', 'RetinaFace', 'ONNX Runtime', 'OpenCV', 'FaceNet'],
      },
      module2: {
        number: '02',
        tag: 'LNIAGIA · Anomalies',
        title: 'Two parallel pipelines',
        desc:
          'cyber-anomaly-detection: TransformerAE (45 events, Word2Vec 352-dim, NAS+HPO Optuna) + Single-event AE + hybrid RAG with Qwen 2.5 32B. DualSentinel: auditable Heuristic Scorer (ATT&CK rules + smart features + Chroma+BM25 RRF KB) → SLM Phi-3 Medium → LLM Judge Llama 3.2.',
        stack: ['TransformerAE', 'Single-event AE', 'Qwen 2.5 32B', 'Heuristic Scorer', 'Phi-3 Medium', 'Llama 3.2'],
      },
      module3: {
        number: '03',
        tag: 'LNIAGIA · ATT&CK',
        title: 'Shared Knowledge Base',
        desc:
          'Knowledge base with 3,463 MITRE/OTRF/Splunk/Sigma entries indexed in ChromaDB + BM25 (RRF). Shared across both pipelines: cyber-anomaly-detection consumes it via hybrid RAG + Qwen 2.5 32B; DualSentinel via SLM Phi-3 Medium → LLM Judge Llama 3.2. 100% local via Ollama.',
        stack: ['ChromaDB', 'BM25', 'Qwen 2.5 32B', 'Phi-3 Medium', 'Llama 3.2', 'Ollama', 'MITRE STIX'],
      },
    },

    anomaly: {
      eyebrow: 'Chapter 03 · Anomaly detection',
      title: 'Same Sysmon analysis,\ntwo approaches.',
      lead:
        'We built two independent pipelines over the same Windows Sysmon logs — one maximalist, one auditable. Each one answers "is this a threat?" differently, and both were evaluated on the same datasets.',

      compareTitle: 'When to pick each approach',
      compareSubtitle: 'Same input, opposite philosophies: deep learning + large LLM versus auditable heuristics + small LLMs.',
      compareHeaders: ['Criterion', 'cyber-anomaly-detection', 'DualSentinel'],
      compareRows: [
        ['Detection', 'TransformerAE + Single-event AE (unsupervised)', 'Heuristic Scorer (ATT&CK rules + smart features + baseline + KB hybrid)'],
        ['Attribution', 'Hybrid RAG + Qwen 2.5 32B', 'SLM Phi-3 Medium → LLM Judge Llama 3.2'],
        ['Auditability', 'Per-event score, opaque embeddings', 'Every term of the score is inspectable'],
        ['Hardware', 'GPU recommended (32B LLM)', 'Comfortably runs on CPU / small GPU'],
        ['Reference metric', 'AP 0.836 (Splunk) · AUC 0.992', 'F1 calibrated via threshold sweep on LMD-2023'],
      ],

      // Approach A — cyber-anomaly-detection
      approachATag: 'Approach A · cyber-anomaly-detection',
      approachATitle: 'Learning the benign in 2.3M events.',
      approachALead:
        'Maximalist two-layer pipeline with RAG + large-LLM attribution. 10 research notebooks document the journey from EDA, baselines (IsolationForest, KMeans, OCSVM), CASH with Optuna, all the way to autoencoders as the optimal solution.',

      classicalTag: 'Layer 01 — Sequences',
      classicalTitle: 'Sequence TransformerAE',
      classicalBody:
        'Windows of 45 consecutive events converted to Word2Vec 352-dim embeddings. Transformer Autoencoder (NAS+HPO via Optuna: hidden=256, latent=128, 2 layers, 8 heads) learns to reconstruct benign behaviour. Reconstruction error > 0.627528 flags the chain as suspicious.',
      classicalPros: ['Trained 100% unsupervised on 2.3M benign events', 'AP = 0.814 on OTRF Atomic Red Team', 'AP = 0.836 on Splunk Attack Range'],
      classicalCons: ['Requires per-dataset threshold calibration', '45-event window may miss isolated events', 'Transformer computational cost'],

      sentinelTag: 'Layer 02 — Events',
      sentinelTitle: 'Single-Event Autoencoder',
      sentinelBody:
        'Within each flagged chain, each individual event is scored by a 4-layer Autoencoder [353→231→176→162→8] with ELU activation. Identifies the exact most anomalous events — giving the analyst a surgical view of the threat.',

      mitigationTitle: 'Layer 03 — ATT&CK Attribution (RAG + Qwen 2.5 32B)',
      mitigationLead:
        'Detecting that something is anomalous is not enough. The hybrid RAG retrieves context from 3,463 MITRE/OTRF/Sigma entries and sends it to Qwen 2.5 32B with a structured chain-of-thought prompt.',
      mitigations: [
        {
          n: '01',
          title: 'Observe events',
          body: 'The LLM analyses the events from the flagged chain and individual Single-event AE scores.',
        },
        {
          n: '02',
          title: 'Retrieve context',
          body: 'Dense search (all-mpnet-base-v2 via ChromaDB) + BM25 sparse search over 3,463 entries.',
        },
        {
          n: '03',
          title: 'Match with ATT&CK',
          body: 'Structured chain-of-thought: 1. observe 2. match with technique 3. produce JSON.',
        },
        {
          n: '04',
          title: 'Produce verdict',
          body: 'JSON with technique ID, confidence and explanation. RAG recall: 60% on OTRF Atomic Red Team.',
        },
        {
          n: '05',
          title: 'Privacy by design',
          body: 'Qwen 2.5 32B runs locally via Ollama. System logs are sensitive data — they never leave the machine.',
        },
      ],

      prefilterStat: {
        label: 'AUC cross-dataset (LMD → OTRF → Splunk)',
        value: '0.992',
        detail: 'Genuine generalisation: trained on LMD-2023, evaluated on OTRF Atomic Red Team and Splunk Attack Range without retraining.',
      },

      // Approach B — DualSentinel
      approachBTag: 'Approach B · DualSentinel',
      approachBTitle: 'Auditable by design.',
      approachBLead:
        'Alternative pipeline where every decision is inspectable. The classical IsolationForest + GRU architecture was replaced by a transparent Heuristic Scorer: empirical tests on LMD-2023 and Splunk Attack Data showed that opaque models brought no measurable gain and prevented the LLM Judge from auditing the evidence.',
      approachBPipelineCaption: 'DualSentinel pipeline — Heuristic Scorer → SLM Analyst → LLM Judge.',
      approachBHighlights: [
        {
          title: 'Transparent Heuristic Scorer',
          body: 'Confirmed ATT&CK rules, 7 smart-feature flags, deviation from a self-supervised baseline, hits from the hybrid KB (Chroma + BM25 with RRF). Every term of the score is inspectable.',
        },
        {
          title: 'SLM → LLM as chain-of-thought',
          body: 'Phi-3 Medium produces a fast hypothesis; Llama 3.2 validates or refutes it with explicit references to events. The judge has an anchor — it does not start from a blank page.',
        },
        {
          title: 'Academic defence in 4 notebooks',
          body: 'defesa_lmd_full_report (17 sections), threshold_calibration (F1/Youden/FPR sweep), kb_ablation (on/off of the hybrid KB) and eda. Fully reproducible.',
        },
      ],
    },

    face: {
      eyebrow: 'Chapter 04 · Face recognition',
      title: 'Who gets past the door?',
      lead:
        'The physical layer — checking whether the person in front of the camera belongs to the authorized set. Two approaches compared, one final choice.',

      closedTag: 'Closed-set approach',
      closedTitle: 'Softmax classification over known identities',
      closedBody:
        'A five-stage progressive pipeline: baseline supervised training, regularization and dataset expansion, hyperparameter optimization with Optuna, architecture search, and final transfer learning to the organizational dataset (5 identities).',

      openTag: 'Open-set approach',
      openTitle: 'Cosine similarity verification',
      openBody:
        'InsightFace buffalo_sc served via ONNXRuntime on CPU. Directory-based enrollment: embeddings extracted from each image and its horizontal flip, one L2-normalized centroid per identity. At inference, each webcam frame is compared against all centroids. Threshold ≥ 0.70 → access granted.',

      comparisonTitle: 'Why did we pick the open-set pipeline?',
      comparisonRows: [
        { k: 'Dynamic enrollment', closed: 'Requires retraining', open: 'Just add photos', winner: 'open' },
        { k: 'Unknown rejection', closed: 'Overconfident', open: 'Natural via threshold', winner: 'open' },
        { k: 'Hardware', closed: 'GPU needed for training', open: 'CPU-only at inference', winner: 'open' },
        { k: 'Discriminative performance', closed: 'Strong on fixed set', open: 'Depends on pretrained embedding', winner: 'closed' },
      ],

      limitationTitle: 'Known limitation',
      limitationBody:
        'The current system does not incorporate liveness detection or anti-spoofing. It is vulnerable to presentation attacks with photos or video. Discussed in detail in the limitations section.',

      demoCaption: 'Demo — real-time recognition',
      demoPlaceholder: 'Placeholder for the computer vision demo video.',
      demoHint: 'Replace the file at /public/demos/face-recognition.mp4',
    },

    results: {
      eyebrow: 'Chapter 05 · Results',
      title: 'The numbers\nthat defend us.',
      lead: 'Two approaches, same question: is this a threat? Below, key metrics for Approach A (cyber-anomaly-detection) over the evaluated datasets. Approach B (DualSentinel) trades aggregate scoring for auditability — see the anomaly detection chapter.',

      faceTitle: 'Face recognition — organisational fine-tuning',
      faceSubtitle: 'Both models reach perfect classification; the gap shows up in biometric evaluation (EER). InsightFace runs on CPU, threshold 0.70.',

      metrics: [
        { label: 'Appr. A · TransformerAE · AP on OTRF Atomic', value: '0.814', unit: '', kind: 'accuracy' },
        { label: 'Appr. A · TransformerAE · AP on Splunk Range', value: '0.836', unit: '', kind: 'accuracy' },
        { label: 'Appr. A · Single-event AE · AUC cross-dataset', value: '0.992', unit: '', kind: 'biometric' },
        { label: 'Appr. A · RAG ATT&CK · Recall on OTRF', value: '60', unit: '%', kind: 'config' },
      ],

      tableClosedCaption: 'Table A — Closed-set classification (5 identities, organisational dataset)',
      tableClosedNote: 'Results on a controlled test split with ~20x augmentation. Task: "given this face, which of the 5 identities?"',
      tableClosed: {
        headers: ['Model', 'Acc.', 'F1 Macro', 'Precision', 'Recall', 'AUC OvR'],
        rows: [
          ['FaceCNN (fine-tuned)', '100.00%', '100.00%', '100.00%', '100.00%', '100.00%'],
          ['ResNet-50 (fine-tuned)', '100.00%', '100.00%', '100.00%', '100.00%', '100.00%'],
        ],
      },

      tableOpenCaption: 'Table B — Open-set biometric verification (centroid simulation)',
      tableOpenNote: 'Different task: "does this embedding belong to any enrolled identity?" EER is the rate at which false accepts = false rejects.',
      tableOpen: {
        headers: ['Model / Pipeline', 'EER', 'Threshold', 'Note'],
        rows: [
          ['FaceCNN (embeddings)', '0.00%', 'calibrated', 'Well-separated score distributions'],
          ['ResNet-50 (embeddings)', '10.46%', 'calibrated', 'Lower inter-class separability'],
          ['InsightFace ArcFace ★', '—', '0.70 cosine', 'Final system — generalises to unknowns'],
        ],
      },

      sentinelTitle: 'Shared pipeline — global numbers',
      sentinelMetrics: [
        { label: 'Benign Sysmon events for training (Appr. A)', value: '2.3M', unit: '' },
        { label: 'MITRE/OTRF/Sigma KB entries (shared)', value: '3,463', unit: '' },
        { label: 'T-codes with ground truth', value: '230', unit: 'techniques' },
        { label: 'LLMs running locally', value: '100%', unit: 'local' },
      ],
    },

    limitations: {
      eyebrow: 'Chapter 06 · Limitations & Future',
      title: 'What we haven’t done yet.',
      lead:
        'Transparency is part of the security engineering. Here are the borders of what we built — and the hook for Challenge 4.',
      items: [
        {
          title: 'No liveness detection',
          body: 'The open-set pipeline does not distinguish a real face from a photo or video presented to the camera.',
        },
        {
          title: 'Small organisational dataset',
          body: 'Five identities and ~76 original images with ~20x augmentation. Results obtained under controlled conditions.',
        },
        {
          title: 'RAG recall of 60%',
          body: 'ATT&CK attribution via RAG + Qwen 2.5 32B reaches 60% recall on OTRF. 40% of techniques remain unidentified.',
        },
        {
          title: 'No runtime fusion',
          body: 'Face recognition and anomaly detection are independent. Correlating a digital alert with a physical access event is manual.',
        },
      ],
      teaserTitle: 'What comes next · Challenge 4',
      teaserBody:
        'The next challenge folds in Robotics/IoT and Multi-Agent Systems. We plan to integrate all three pillars into an ecosystem with robots (Cruzr, Booster, Unitree, cobot) as monitored nodes, and specialised agents correlating digital and physical events in real time.',
    },

    team: {
      eyebrow: 'Team · Phish-N-Chips',
      title: 'Who built this.',
      affiliation: 'School of Engineering of the Polytechnic Institute of Porto (ISEP/IPP)',
    },

    references: {
      eyebrow: 'References',
      title: 'Where we drank from.',
      lead:
        'A small selection of the references that ground this work. Full list in the paper.',
      categories: {
        classical: 'Classical ML & Logs',
        llm: 'LLMs & Judge Framework',
        vision: 'Face Recognition',
      },
    },

    footer: {
      project: 'Challenge 3 · ISEP 2025/26',
      disciplines: 'RNAAPIA · LNIAGIA',
      repo: 'Repository',
      report: 'Full paper',
      built: 'Built with React, Vite and Tailwind',
    },

    ui: {
      language: 'Language',
      langShort: 'EN',
      altLangShort: 'PT',
    },
  },
}
