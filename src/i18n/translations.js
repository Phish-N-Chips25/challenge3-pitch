// Traduções PT-PT (pré-Acordo Ortográfico 2016) / EN
// Conteúdo baseado no artigo "From Classical Models to LLM-as-a-Judge:
// Anomaly Detection and Face Recognition for Cyber-Physical Security"

export const translations = {
  pt: {
    nav: {
      scenario: 'Cenário',
      architecture: 'Arquitectura',
      anomaly: 'Módulo 1',
      face: 'Módulo 2',
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
          body: 'TransformerAE aprende comportamento benigno em 2.3M eventos Sysmon. Single-event AE pontua cada evento individualmente. Juntos, identificam chains suspeitas com precisão cirúrgica.',
        },
        {
          tag: 'Pilar 03 — O que é?',
          title: 'Atribuição ATT&CK',
          body: 'RAG híbrido (ChromaDB + BM25) sobre 3.463 entradas MITRE. Qwen 2.5 32B via Ollama produz chain-of-thought com ID da técnica, confiança e evidências. 100% local.',
        },
      ],
      note:
        'Os três pilares funcionam em sequência: autenticação facial desbloqueia o SOC dashboard, onde chains suspeitas são analisadas e mapeadas para técnicas MITRE com racionalidade auditável.',
    },

    architecture: {
      eyebrow: 'Capítulo 02 · Arquitectura',
      title: 'Três pilares,\num sistema coeso.',
      lead:
        'Autenticação facial desbloqueia o SOC dashboard. A deteção de anomalias opera em duas camadas sobre logs Sysmon. A atribuição RAG+LLM diz ao analista exactamente o quê e porquê.',
      module1: {
        number: '01',
        tag: 'RNAAPIA',
        title: 'Reconhecimento facial',
        desc:
          'InsightFace buffalo_sc (ArcFace + RetinaFace) extrai embeddings de alta dimensão. Comparação por similaridade cosseno contra centroidés L2-normalizados das 5 identidades registadas. Threshold 0.70.',
        stack: ['InsightFace', 'ArcFace', 'RetinaFace', 'ONNX Runtime', 'OpenCV', 'FaceNet'],
      },
      module2: {
        number: '02',
        tag: 'LNIAGIA · Anomalias',
        title: 'Deteção em duas camadas',
        desc:
          'Sequence TransformerAE (janelas de 45 eventos, Word2Vec 352-dim, NAS+HPO via Optuna). Single-event AE pontua cada evento individualmente para vista cirúrgica da ameaça.',
        stack: ['PyTorch', 'TransformerAE', 'Word2Vec', 'Optuna', 'LMD-2023', 'OTRF'],
      },
      module3: {
        number: '03',
        tag: 'LNIAGIA · ATT&CK',
        title: 'Atribuição RAG + LLM',
        desc:
          'Base de conhecimento com 3.463 entradas MITRE/OTRF/Splunk/Sigma. RAG híbrido (ChromaDB + BM25). Qwen 2.5 32B chain-of-thought estruturado. 100% local via Ollama.',
        stack: ['ChromaDB', 'BM25', 'Qwen 2.5 32B', 'Ollama', 'MITRE STIX', 'Sigma'],
      },
    },

    anomaly: {
      eyebrow: 'Capítulo 03 · Deteção de anomalias',
      title: 'Detetar o desconhecido\nem 2.3M eventos.',
      lead:
        'Sistemas baseados em regras só veem o que já foi descrito. O nosso TransformerAE aprendeu comportamento benigno de forma não supervisionada — tudo o resto é ameaça.',

      classicalTag: 'Camada 01 — Sequências',
      classicalTitle: 'Sequence TransformerAE',
      classicalBody:
        'Janelas de 45 eventos consecutivos convertidos em embeddings Word2Vec 352-dim. Transformer Autoencoder (NAS+HPO via Optuna: hidden=256, latent=128, 2 layers, 8 heads) aprende a reconstruir comportamento benigno. Erro de reconstrução > 0.627528 sinaliza a chain como suspeita.',
      classicalPros: ['Treinado 100% não supervisionado em 2.3M eventos benignos', 'AP = 0.814 em OTRF Atomic Red Team', 'AP = 0.836 em Splunk Attack Range'],
      classicalCons: ['Requer calibração do threshold por dataset', 'Janela de 45 eventos pode perder eventos isolados', 'Custo computacional do Transformer'],

      sentinelTag: 'Camada 02 — Eventos',
      sentinelTitle: 'Single-Event Autoencoder',
      sentinelBody:
        'Dentro de cada chain sinalizada, cada evento individual é pontuado por um Autoencoder de 4 camadas [353→231→176→162→8] com activação ELU. Identifica os eventos exactos mais anómalos — fornecendo ao analista uma vista cirúrgica da ameaça.',
      sentinelPipelineCaption: 'Pipeline de deteção — logs crus a eventos sinalizados.',

      mitigationTitle: 'Camada 03 — Atribuição ATT&CK',
      mitigationLead:
        'Detetar que algo é anómalo não chega. O RAG híbrido recupera contexto de 3.463 entradas MITRE/OTRF/Sigma e envia ao Qwen 2.5 32B com um prompt chain-of-thought estruturado.',
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
        value: '0.992',
        detail: 'Generalização genuina: treinado em LMD-2023, avaliado em OTRF Atomic Red Team e Splunk Attack Range sem re-treino.',
      },
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
      lead: 'Métricas-chave sobre os datasets avaliados. 10 notebooks de investigação. Quatro datasets. Uma solução.',

      faceTitle: 'Reconhecimento facial — fine-tuning organizacional',
      faceSubtitle: 'Ambos os modelos atingem classificação perfeita; a diferença aparece na avaliação biométrica (EER). InsightFace corre em CPU, threshold 0.70.',

      metrics: [
        { label: 'TransformerAE · AP em OTRF Atomic', value: '0.814', unit: '', kind: 'accuracy' },
        { label: 'TransformerAE · AP em Splunk Range', value: '0.836', unit: '', kind: 'accuracy' },
        { label: 'Single-event AE · AUC cross-dataset', value: '0.992', unit: '', kind: 'biometric' },
        { label: 'RAG ATT&CK · Recall em OTRF', value: '60', unit: '%', kind: 'config' },
      ],

      tableClosedCaption: 'Tabela A — Classificação closed-set (5 identidades, dataset organizacional)',
      tableClosedNote: 'Resultados em conjunto de teste controlado com augmentation ~20×. Tarefa: "deste rosto, qual das 5 identidades?"',
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

      sentinelTitle: 'Pipeline de deteção — números globais',
      sentinelMetrics: [
        { label: 'Eventos Sysmon benignos para treino', value: '2.3M', unit: '' },
        { label: 'Entradas na KB MITRE/OTRF/Sigma', value: '3.463', unit: '' },
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
      anomaly: 'Module 1',
      face: 'Module 2',
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
          body: 'TransformerAE learns benign behaviour from 2.3M Sysmon events. Single-event AE scores each event individually. Together they pinpoint suspicious chains with surgical precision.',
        },
        {
          tag: 'Pillar 03 — What is it?',
          title: 'ATT&CK Attribution',
          body: 'Hybrid RAG (ChromaDB + BM25) over 3,463 MITRE entries. Qwen 2.5 32B via Ollama produces structured chain-of-thought with technique ID, confidence and evidence. 100% local.',
        },
      ],
      note:
        'The three pillars work in sequence: facial authentication unlocks the SOC dashboard, where suspicious chains are analysed and mapped to MITRE techniques with auditable rationale.',
    },

    architecture: {
      eyebrow: 'Chapter 02 · Architecture',
      title: 'Three pillars,\none cohesive system.',
      lead:
        'Face authentication unlocks the SOC dashboard. Anomaly detection operates in two layers over Sysmon logs. RAG+LLM attribution tells the analyst exactly what and why.',
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
        title: 'Two-layer detection',
        desc:
          'Sequence TransformerAE (windows of 45 events, Word2Vec 352-dim, NAS+HPO via Optuna). Single-event AE scores each event individually for a surgical view of the threat.',
        stack: ['PyTorch', 'TransformerAE', 'Word2Vec', 'Optuna', 'LMD-2023', 'OTRF'],
      },
      module3: {
        number: '03',
        tag: 'LNIAGIA · ATT&CK',
        title: 'RAG + LLM attribution',
        desc:
          'Knowledge base with 3,463 MITRE/OTRF/Splunk/Sigma entries. Hybrid RAG (ChromaDB + BM25). Qwen 2.5 32B structured chain-of-thought. 100% local via Ollama.',
        stack: ['ChromaDB', 'BM25', 'Qwen 2.5 32B', 'Ollama', 'MITRE STIX', 'Sigma'],
      },
    },

    anomaly: {
      eyebrow: 'Chapter 03 · Anomaly detection',
      title: 'Detecting the unknown\nin 2.3M events.',
      lead:
        'Rule-based systems only see what has already been described. Our TransformerAE learned benign behaviour in an unsupervised fashion — everything else is a threat.',

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
      sentinelPipelineCaption: 'Detection pipeline — raw logs to flagged events.',

      mitigationTitle: 'Layer 03 — ATT&CK Attribution',
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
        'InsightFace buffalo_sc served via ONNXRuntime on CPU. Directory-based enrollment: embeddings extracted from each image and its horizontal flip, one L2-normalized centroid per identity. At inference, each webcam frame is compared against all centroids. Threshold ≥ 0.75 → access granted.',

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
      lead: 'Key metrics across the evaluated datasets. 10 research notebooks. Four datasets. One solution.',

      faceTitle: 'Face recognition — organisational fine-tuning',
      faceSubtitle: 'Both models reach perfect classification; the gap shows up in biometric evaluation (EER). InsightFace runs on CPU, threshold 0.70.',

      metrics: [
        { label: 'TransformerAE · AP on OTRF Atomic', value: '0.814', unit: '', kind: 'accuracy' },
        { label: 'TransformerAE · AP on Splunk Range', value: '0.836', unit: '', kind: 'accuracy' },
        { label: 'Single-event AE · AUC cross-dataset', value: '0.992', unit: '', kind: 'biometric' },
        { label: 'RAG ATT&CK · Recall on OTRF', value: '60', unit: '%', kind: 'config' },
      ],

      tableClosedCaption: 'Table A — Closed-set classification (5 identities, organisational dataset)',
      tableClosedNote: 'Results on a controlled test split with ~20× augmentation. Task: "given this face, which of the 5 identities?"',
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

      sentinelTitle: 'Detection pipeline — global numbers',
      sentinelMetrics: [
        { label: 'Benign Sysmon events for training', value: '2.3M', unit: '' },
        { label: 'MITRE/OTRF/Sigma KB entries', value: '3,463', unit: '' },
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
