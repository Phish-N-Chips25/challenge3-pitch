# Script de Apresentação — Phish·N·Chips · Challenge 3
> **Duração estimada:** 12–15 minutos  
> **Estrutura:** 15 slides — navegar com ← → ou as setas do deck  
> **Idioma:** ajustar no canto superior direito (PT/EN) antes de começar  

---

## Análise de coerência dos slides

### Repetições identificadas (a ter em conta durante a apresentação)

| Conteúdo | Onde aparece | Nota |
|---|---|---|
| Autenticação facial com ArcFace 0.70 | IntroStory (frame 3) + Scenario (Pilar 01) + FaceRecognition + Results | Narrativa cumulativa — cada menção acrescenta detalhe. OK. |
| TransformerAE + Single-event AE | IntroStory (frames 4–5) + AnomalyDetection (Abordagem A) + Simulation + Results | Em IntroStory só números-chave; detalhe técnico fica em AnomalyDetection. |
| RAG + Qwen 2.5 32B | IntroStory (frame 6) + AnomalyDetection (Abordagem A) + Architecture (Módulo 03) + Results | Architecture é resumo; AnomalyDetection é o detalhe. Não repetir em detalhe. |
| DualSentinel (Phi-3 → Llama 3.2) | Architecture (Módulo 02) + AnomalyDetection (Abordagem B) | Architecture = resumo; AnomalyDetection = detalhe. OK. |
| Limitação liveness detection | FaceRecognition (nota final) + Limitations (item 01) | Em FaceRecognition avisar brevemente; em Limitations desenvolver. |
| EER 0.00% FaceCNN | Results (Tabela B) | Só aparece uma vez — OK. |
| 3.463 entradas na KB | Architecture (Módulo 03) + AnomalyDetection (Abordagem A) + Results | OK — número ancora a escala do sistema. |
| Challenge 4 / robots | Limitations (teaser) | OK — fecha a narrativa. |

---

## Slide 01 — PreShow
**[Sala ainda a encher. Música a tocar.]**

> Não é necessário falar. Deixar a música criar ambiente.  
> Quando toda a gente estiver sentada, avançar para o slide seguinte com →.

---

## Slide 02 — Countdown (5…1)
**[Contagem regressiva automática]**

> Silêncio intencional. O countdown cria antecipação.  
> Avança automaticamente para o slide seguinte.

---

## Slide 03 — IntroStory (7 frames)
**[Narração cinematográfica — avançar clicando ou com →]**

> Ler cada frame em voz alta, com pausa. A história segue a perspectiva do analista SOC.

**Frame 1:** "08:30 da manhã. O analista chega ao trabalho."  
*sub:* "Antes do dashboard, antes dos alertas — o sistema precisa de saber quem ele é."  
→ *Pausa. Deixar a imagem mental assentar.*

**Frame 2:** "Não é uma password."  
*sub:* "Passwords podem ser roubadas. O que não pode ser roubado é o rosto dele."  
→ *Tom de confiança.*

**Frame 3:** "Autenticado."  
*sub:* "InsightFace confirma: similaridade cosseno 0.83. Acima do threshold 0.70. A porta abre."  
→ *Mudança de tom — sistema funcionou.*

**Frame 4:** "O dashboard carrega."  
*sub:* "45 eventos Sysmon em janela. O TransformerAE reconstruiu o comportamento normal. Desvio detectado."  
→ *Alerta discreto — algo está errado.*

**Frame 5:** "Não é ruído."  
*sub:* "AUC 0.991. O autoencoder por evento confirma: três eventos são cirurgicamente anómalos."  
→ *Certeza crescente.*

**Frame 6:** "T1059. Execution."  
*sub:* "O RAG consultou 3.463 técnicas. O Qwen 2.5 fundamentou o veredicto em evidências reais."  
→ *O sistema nomeou a ameaça.*

**Frame 7:** "Isto é o Challenge 3."  
→ Clicar em **"Começar"** ou pressionar →.

---

## Slide 04 — Hero
**[Título principal]**

> **Dizer:**  
> "O Challenge 3 pede-nos para construir um sistema de vigilância cyber-física.  
> O título resume os três pilares: controlo de acesso físico por reconhecimento facial, deteção de anomalias em logs Windows, e atribuição automática de técnicas MITRE ATT&CK.  
> Três pilares. Um sistema coeso. Uma equipa de cinco pessoas."

*Apontar para o subtítulo:*  
> "Um sistema end-to-end que autentica quem entra, deteta comportamento anómalo em logs Windows, e mapeia ameaças a técnicas ATT&CK com racionalidade auditável."

---

## Slide 05 — CinematicReveal
**[Avança automaticamente — ~22 segundos]**

> Deixar correr. Pode dizer suavemente:  
> "Antes de entrar nos detalhes, um segundo para ver o sistema por inteiro."

---

## Slide 06 — Scenario (Capítulo 01)
**[Um analista SOC chega ao trabalho]**

> **Dizer:**  
> "O cenário de partida é concreto: um analista SOC começa o turno.  
> Antes de qualquer coisa, o sistema precisa de verificar a identidade. Não uma password — o rosto.  
> Depois de autenticado, o dashboard de ameaças abre. E sobre milhões de logs Sysmon Windows, dois pipelines vigiam em paralelo."

*Apontar para os três pilares:*  
> "Pilar 1 — InsightFace com ArcFace compara o frame da câmara contra os embeddings das cinco identidades registadas. Threshold 0.70 de similaridade cosseno.  
> Pilar 2 — Deteção de anomalias: dois pipelines independentes sobre os mesmos logs Sysmon, um maximalista e outro auditável.  
> Pilar 3 — Atribuição ATT&CK: uma Knowledge Base de 3.463 entradas MITRE partilhada pelos dois pipelines. O sistema não só deteta — nomeia."

*Nota de integração:*  
> "Os três pilares funcionam em sequência: autenticação facial desbloqueia o SOC dashboard, onde chains suspeitas são analisadas e mapeadas para técnicas MITRE com racionalidade auditável."

---

## Slide 07 — Architecture (Capítulo 02)
**[Três pilares, um sistema coeso]**

> **Dizer:**  
> "A arquitectura espelha os três pilares. Três módulos que partilham os mesmos dados de entrada — a câmara e os logs — mas com responsabilidades distintas."

*Módulo 01 — RNAAPIA:*  
> "O Módulo 1 é o RNAAPIA — reconhecimento facial. InsightFace buffalo_sc com ArcFace e RetinaFace. Embeddings de alta dimensão, comparação por similaridade cosseno contra os centróides L2-normalizados das 5 identidades. Threshold 0.70. Corre em CPU com ONNX Runtime."

*Módulo 02 — LNIAGIA Anomalias:*  
> "O Módulo 2 é o LNIAGIA, secção de anomalias. Dois pipelines paralelos sobre os mesmos logs Sysmon:  
> A — cyber-anomaly-detection: TransformerAE em janelas de 45 eventos, Single-event AE por evento individual, RAG híbrido com Qwen 2.5 32B para atribuição.  
> B — DualSentinel: Heuristic Scorer auditável com regras ATT&CK e smart features, depois SLM Phi-3 Medium formula hipótese, Llama 3.2 valida como juíz."

*Módulo 03 — LNIAGIA ATT&CK:*  
> "O Módulo 3 é a Knowledge Base partilhada: 3.463 entradas MITRE/OTRF/SigmaRules indexadas em ChromaDB e BM25 com fusão por RRF. Consumida pelos dois pipelines. Todos os LLMs correm via Ollama — dados sensíveis nunca saem da máquina."

---

## Slide 08 — Simulation
**[Demo ao vivo — 22 segundos]**

> **Dizer antes de iniciar:**  
> "Antes de entrar nos módulos individualmente, vamos ver o sistema completo em acção. 22 segundos, cinco actos."

*Clicar em Play. Comentar ao vivo:*

- **0–4s** → "O analista autentica o rosto. InsightFace: similaridade cosseno acima de 0.70. Acesso concedido. Dashboard abre."  
- **4–8.5s** → "Os logs Sysmon começam a chegar. EID:1 PowerShell, EID:3 conexão de rede, EID:7 DLL carregada no lsass. Comportamento anómalo a emergir."  
- **8.5–13.5s** → "O TransformerAE assinala a chain. AP 0.814. 45 eventos consecutivos com reconstrução acima do threshold."  
- **13.5–17s** → "O Single-event AE isola os três eventos mais anómalos. Vista cirúrgica para o analista."  
- **17–22s** → "RAG híbrido consulta as 3.463 técnicas. Qwen 2.5 produz veredicto: T1059 — Execution. Com evidências dos logs."

> "Três pilares, um fluxo contínuo."

---

## Slide 09 — AnomalyDetection (Capítulo 03)
**[Mesma análise Sysmon, duas abordagens]**

> **Dizer:**  
> "Para a deteção de anomalias construímos dois pipelines independentes sobre os mesmos logs Sysmon. Mesma pergunta: 'isto é uma ameaça?' — duas filosofias opostas."

### Abordagem A — cyber-anomaly-detection

*Camada 1 — TransformerAE:*  
> "A Abordagem A começa com o TransformerAE. Janelas de 45 eventos consecutivos, convertidas em embeddings Word2Vec de 352 dimensões. A arquitectura — hidden 256, latent 128, 2 layers, 8 heads — foi descoberta por NAS+HPO com Optuna sobre 2.3 milhões de eventos benignos do LMD-2023. Treinado 100% de forma não supervisionada."

*Camada 2 — Single-event AE:*  
> "Dentro de cada chain sinalizada, um segundo autoencoder de 4 camadas pontua cada evento individualmente. Isto dá ao analista uma vista cirúrgica — não 'esta janela é suspeita', mas 'estes três eventos específicos são anómalos'. AUC 0.991 em avaliação cross-dataset."

*Camada 3 — RAG + Qwen 2.5 32B:*  
> "Detetar não chega. O RAG híbrido recupera contexto de 3.463 entradas MITRE e envia ao Qwen 2.5 32B com um prompt chain-of-thought. O resultado é um JSON com ID da técnica, confiança e explicação. Recall de 60% em OTRF Atomic Red Team. Tudo local via Ollama."

### Abordagem B — DualSentinel

*Heuristic Scorer:*  
> "A Abordagem B substitui os modelos opacos por um Heuristic Scorer totalmente inspeccionável: regras ATT&CK confirmadas, 7 smart-feature flags, desvio à baseline self-supervised, e hits da KB híbrida Chroma+BM25 com RRF. Testes empíricos no LMD-2023 mostraram que os modelos opacos não traziam ganho mensurável."

*SLM → LLM Judge:*  
> "O score heurístico alimenta o Phi-3 Medium, que formula uma hipótese rápida. O Llama 3.2 actua como juíz — não aceita a hipótese sem evidência. O padrão SLM→LLM é uma forma de chain-of-thought guiado: o judge tem uma âncora, não parte de uma folha em branco. Quatro notebooks documentam a defesa académica de cada decisão de design."

*Tabela comparativa:*  
> "A tabela resume quando escolher cada abordagem: A para máxima cobertura com GPU disponível; B para auditabilidade e CPU. Mesmo input, filosofias opostas."

---

## Slide 10 — FaceRecognition (Capítulo 04)
**[Quem é que passa a porta?]**

> **Dizer:**  
> "O Módulo RNAAPIA responde a uma pergunta física: esta pessoa está autorizada a entrar?  
> Comparámos duas abordagens e documentámos a escolha."

*Cartão esquerdo — Closed-set:*  
> "A pipeline fechada treina um classificador softmax sobre identidades conhecidas. Pipeline de cinco fases — treino base, regularização, Optuna, NAS, transfer learning. Excelente em conjuntos fixos, mas frágil quando aparece alguém desconhecido: o modelo sobrestima a confiança."

*Cartão direito — Open-set:*  
> "A pipeline aberta usa InsightFace buffalo_sc servido via ONNXRuntime em CPU. Enrollment por directório: embeddings extraídos de cada imagem e flip horizontal, centróide L2-normalizado por identidade. Em inferência, cada frame é comparado contra todos os centróides por similaridade cosseno. Threshold 0.70: abaixo disso, a porta não abre."

*Tabela de comparação:*  
> "A razão da escolha é clara: enrollment dinâmico sem retreino, rejeição natural de desconhecidos via threshold, e funciona em CPU. A única vantagem do closed-set é o desempenho discriminativo em conjuntos fixos — mas em segurança precisamos de rejeitar o desconhecido."

*Nota de limitação:*  
> "Uma limitação honesta: a pipeline não distingue um rosto real de uma fotografia ou vídeo. Liveness detection fica no backlog — voltamos a isso nos Limites."

---

## Slide 11 — Results (Capítulo 05)
**[Os números que nos defendem]**

> **Dizer:**  
> "Os resultados. Começamos pelas métricas da Abordagem A — o pipeline maximalista."

*Grid de 4 métricas:*  
> "TransformerAE: AP de 0.814 no OTRF Atomic Red Team e 0.836 no Splunk Attack Range — avaliação cross-dataset, sem re-treino.  
> Single-event AE: AP cross-dataset de 0.92 — generalização genuína.  
> RAG ATT&CK: recall de 60% em OTRF. 60% das técnicas nomeadas com evidências reais."

*Tabela A — Classificação closed-set:*  
> "Ambos os modelos — FaceCNN e ResNet-50 — atingem 100% em accuracy, F1, precision e recall no dataset organizacional. A classificação é perfeita porque o conjunto é fixo e controlado."

*Tabela B — Verificação biométrica open-set:*  
> "A diferença aparece no EER: Equal Error Rate de 0.00% para o FaceCNN — o threshold óptimo não deixa passar intrusos nem bloqueia pessoas autorizadas. ResNet-50 fica em 10.46%.  
> O sistema final — marcado com ★ — é o InsightFace ArcFace com threshold 0.70, porque generaliza a desconhecidos: tarefa diferente da classificação."

*Números globais do pipeline:*  
> "2.3 milhões de eventos Sysmon para treino. 3.463 entradas na KB. 230 T-codes com ground truth. 100% dos LLMs a correr em local — dados sensíveis nunca saem do perímetro."

---

## Slide 12 — Limitations (Capítulo 06)
**[O que ainda não fizemos]**

> **Dizer:**  
> "Transparência é parte da engenharia de segurança. Aqui estão as quatro fronteiras do que construímos."

*4 itens:*  
> "1. Liveness detection — o sistema pode ser enganado por uma fotografia ou vídeo exibido à câmara.  
> 2. Dataset organizacional pequeno — cinco identidades, ~76 imagens originais com augmentation ~20x. Resultados em condições controladas.  
> 3. RAG recall de 60% — 40% das técnicas ATT&CK continuam por identificar pela Abordagem A.  
> 4. Sem fusão em runtime — reconhecimento facial e deteção de anomalias são independentes. Correlacionar um evento digital com um acesso físico é ainda manual."

*Teaser Challenge 4:*  
> "O que vem a seguir endereça exactamente o ponto 4. O Challenge 4 junta Robótica e Sistemas Multiagente.  
> A ideia é ter robots como Cruzr, Booster, Unitree e cobots como nós monitorizados, com agentes especializados a correlacionar eventos digitais e físicos em tempo real. A fusão que falta."

---

## Slide 13 — Team (Equipa)
**[Quem construiu isto]**

> **Dizer:**  
> "A equipa Phish-N-Chips, do ISEP."

*Apresentar cada membro brevemente:*  
> "Arsénio — Dual Sentinel, arquitectura LLM-as-a-Judge, logs Sysmon, apresentação e front-end agregador.  
> César — pipeline clássico, logs Sysmon, construção da KB, front-end agregador, revisão do artigo.  
> Gonçalo — Face Recognition closed-set, front-end agregador, revisão do artigo.  
> Rui — Face Recognition open-set, ArcFace, front-end agregador.  
> Rynalde — avaliação, mapeamento MITRE ATT&CK, artigo científico."

---

## Slide 14 — References
**[Onde fomos beber]**

> **Dizer:**  
> "Uma selecção das referências que sustentam o trabalho. A lista completa está no artigo.  
> Três colunas: ML clássico e logs, LLMs e o framework de juíz, e visão computacional para reconhecimento facial."

> *Não é necessário ler as referências — estão aqui para quem queira consultar.*

---

## Slide 15 — Footer (Obrigado)
**[Fim da apresentação]**

> **Dizer:**  
> "O repositório está disponível em phish-n-chips25.github.io.  
> Obrigado pela atenção. Estamos disponíveis para perguntas."

---

## Notas gerais

| Tema | Posição recomendada |
|---|---|
| Porque dois pipelines e não um? | Após slide 09 (AnomalyDetection) |
| Porque LLM-as-a-Judge e não fine-tuning? | Após slide 09 (AnomalyDetection) |
| Porque não GPU para o módulo facial? | Após slide 10 (FaceRecognition) |
| Comparação com soluções comerciais tipo Splunk/Darktrace? | Após slide 09 |
| Como correr o sistema em produção? | Após slide 12 (Limitations) |
| Dataset LMD-2023 — como foi gerado? | Após slide 09 |
| Porque 60% de recall no RAG e não mais? | Após slide 11 (Results) |

---

*Script actualizado para Challenge 3 · ISEP 2025/26 · Phish-N-Chips*
