# Script de Apresentação — Phish·N·Chips · Challenge 3
> **Duração estimada:** 12–15 minutos  
> **Estrutura:** 15 slides — navegar com ← → ou as setas do deck  
> **Idioma:** ajustar no canto superior direito (PT/EN) antes de começar  

---

## Análise de coerência dos slides

### Repetições identificadas (a ter em conta durante a apresentação)

| Conteúdo | Onde aparece | Nota |
|---|---|---|
| Conceito das "duas paredes" | IntroStory (frame 5) + Hero (subtitle) + Scenario + Architecture | Narrativa cumulativa — cada menção acrescenta detalhe. OK. |
| Descrição do Dual Sentinel | Architecture (cartão módulo 1) + AnomalyDetection (card direito) | Architecture é resumo; AnomalyDetection é o detalhe técnico. Não repetir na mesma frase. |
| Stat "35.1% janelas eliminadas" | AnomalyDetection (prefilter stat) + Results (métricas Sentinel) | Mencionar só em AnomalyDetection; em Results falar do impacto global. |
| Limitação liveness detection | FaceRecognition (nota final) + Limitations (item 01) | Em FaceRecognition avisar brevemente; em Limitations desenvolver. |
| EER 0.00% FaceCNN | Results (tabela + métrica) | Só aparece uma vez — OK. |
| Conteúdo do Challenge 4 | Limitations (teaser) + Footer (implícito) | OK — fecha a narrativa. |

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

## Slide 03 — IntroStory (6 frames)
**[Narração cinematográfica — avançar clicando ou com →]**

> Ler cada frame em voz alta, com pausa.

**Frame 1:** "É de noite num campus universitário. Os servidores zumbem. As câmaras gravam."  
→ *Pausa. Deixar a imagem mental assentar.*

**Frame 2:** "Um e-mail chega. Parece legítimo. Não é."  
→ *Tom de alerta.*

**Frame 3:** "Um processo abre. Um log nasce. Entre milhões, ninguém repara."  
→ *Sublinhar a invisibilidade do ataque.*

**Frame 4:** "Lá fora, alguém aproxima-se da porta. Confia que será apenas mais uma cara."  
→ *Mudança de dimensão — do digital para o físico.*

**Frame 5:** "Duas paredes acordam. Uma lê os logs. A outra olha para a cara."  
→ *Este é o coração do nosso sistema.*

**Frame 6:** "Esta é a história delas."  
→ Clicar em **"Começar"** ou pressionar →.

---

## Slide 04 — Hero
**[Título principal]**

> **Dizer:**  
> "O Challenge 3 pede-nos para construir um sistema de vigilância cyber-física.  
> O título resume a jornada que fizemos: partimos dos modelos clássicos — Isolation Forest, GRU, CNNs — e chegámos a algo diferente: usar um LLM como juíz.  
> Dois módulos. Dois datasets. Um objectivo comum."

*Apontar para as métricas no rodapé:*  
> "Dois módulos, dois datasets — LMD-2023 e VGGFace2 — e uma equipa de cinco pessoas."

---

## Slide 05 — CinematicReveal
**[Avança automaticamente — ~22 segundos]**

> Deixar correr. Pode dizer suavemente:  
> "Antes de entrar nos detalhes, um segundo para ver o sistema por inteiro."

---

## Slide 06 — Scenario (Capítulo 01)
**[O ataque já não fica num só domínio]**

> **Dizer:**  
> "O cenário que motivou o trabalho é simples de descrever: um atacante moderno não para na camada digital.  
> Explora um endpoint Windows, move-se lateralmente pela rede — e depois pode manipular câmaras, controlos de acesso, robots.  
> Portanto a pergunta não é 'detetar malware' ou 'reconhecer um rosto'. A pergunta é: como vigiamos as duas dimensões ao mesmo tempo?"

*Apontar para os dois cartões:*  
> "A Parede Digital vigia os logs do sistema operativo.  
> A Parede Física vigia quem passa a porta.  
> Os dois módulos são independentes em runtime — mas perseguem a mesma ameaça."

---

## Slide 07 — Architecture (Capítulo 02)
**[Dois módulos, um objectivo comum]**

> **Dizer:**  
> "A arquitectura é directa. Dois pipelines paralelos, cada um avaliado em datasets públicos."

*Cartão esquerdo — LNIAGIA:*  
> "O Módulo 1 — que chamamos LNIAGIA — compara dois caminhos para detetar anomalias em logs Sysmon:  
> o pipeline clássico, com Isolation Forest e GRU autoencoder, contra o Dual Sentinel, onde dois LLMs comunicam em cadeia."

*Cartão direito — RNAAPIA:*  
> "O Módulo 2 — RNAAPIA — faz a mesma comparação no domínio facial:  
> classificação fechada com FaceCNN e ResNet-50, contra verificação aberta com embeddings ArcFace em tempo real."

---

## Slide 08 — Simulation
**[Demo ao vivo — 22 segundos de ataque]**

> **Dizer antes de iniciar:**  
> "Antes de entrar nos módulos individualmente, vamos ver os dois a trabalhar em conjunto. Isto é uma simulação de 22 segundos — um ataque completo, do e-mail malicioso até ao acesso físico negado."

*Clicar em Play. Comentar ao vivo:*

- **0–4s** → "O e-mail chega. O processo PowerShell spawna."  
- **4–8.5s** → "Movimento lateral. Os logs começam a aparecer. Eventos 3, 11, 7 — conexões suspeitas, DLLs injectadas."  
- **8.5–13.5s** → "O LNIAGIA classifica: anomalia confirmada. Técnicas ATT&CK identificadas."  
- **13.5–17s** → "Do outro lado, alguém aproxima-se da câmara."  
- **17–22s** → "ArcFace compara. Não é uma identidade autorizada. Acesso negado."

> "Dois sistemas independentes, coordenados pela narrativa do ataque."

---

## Slide 09 — AnomalyDetection (Capítulo 03)
**[A lacuna da interpretabilidade]**

> **Dizer:**  
> "O problema dos modelos clássicos não é o desempenho — é a explicação.  
> Um F1 de 0.99 é excelente. Mas quando o alerta dispara, o analista de segurança recebe um número. Não sabe porquê."

*Cartão esquerdo:*  
> "O Isolation Forest + GRU autoencoder usa estatísticas agregadas por janela. Rápido, sem necessidade de dados rotulados de ataque, mas completamente silencioso em contexto."

*Cartão direito — Dual Sentinel:*  
> "A nossa proposta é o Dual Sentinel. Dois modelos em cadeia:  
> o Phi-3 Mini faz triagem rápida e formula hipóteses.  
> O Llama 3.2 age como juíz — não aceita a hipótese sem evidência. Para cada técnica ATT&CK citada, exige que esteja nos logs."

*Diagrama de pipeline:*  
> "Este é o fluxo: logs crus entram, o pré-filtro determinístico elimina 35.1% das janelas imediatamente — sem inferência, sem custo computacional — e as restantes 924 janelas chegam ao Dual Sentinel."

*5 camadas anti-alucinação:*  
> "Aplicar LLMs a decisões críticas de segurança tem um risco óbvio: alucinação. Mitigámos isso com cinco mecanismos — desde prompts com proibições explícitas até um campo `unsupported_claims` onde o juíz regista o que não conseguiu corroborar."

---

## Slide 10 — FaceRecognition (Capítulo 04)
**[Quem é que passa a porta?]**

> **Dizer:**  
> "O Módulo 2 responde a uma pergunta física: esta pessoa está autorizada a entrar?  
> Comparámos duas abordagens."

*Cartão esquerdo — Closed-set:*  
> "A pipeline fechada treina um classificador softmax sobre identidades conhecidas. Excelente em conjuntos fixos, mas frágil quando aparece alguém desconhecido — o modelo sobrestima a confiança."

*Cartão direito — Open-set:*  
> "A pipeline aberta usa embeddings ArcFace pré-treinados. Enrollment a partir de um directório de fotos — sem retreino. Em inferência, cada frame é comparado contra os centróides das identidades autorizadas por similaridade cosseno. Threshold 0.75: abaixo disso, a porta não abre."

*Tabela de comparação:*  
> "A razão da escolha é clara: enrollment dinâmico, rejeição natural de desconhecidos, e funciona em CPU. Sem GPU, sem retreino, sem downtime."

*Nota de limitação:*  
> "Uma limitação honesta: a pipeline não distingue um rosto real de uma fotografia. Liveness detection fica no backlog — voltamos a isso nos Limites."

---

## Slide 11 — Results (Capítulo 05)
**[Os números que nos defendem]**

> **Dizer:**  
> "Os resultados. Começamos pelo reconhecimento facial."

*Grid de métricas:*  
> "O FaceCNN fine-tunado no nosso dataset organizacional — cinco identidades — atinge 100% em todas as métricas clássicas.  
> A diferença aparece no EER: Equal Error Rate de 0.00% para o FaceCNN, contra 10.46% para o ResNet-50 fine-tunado.  
> Em segurança, EER 0 significa que o threshold óptimo não deixa passar intrusos nem bloqueia pessoas autorizadas."

*Tabela:*  
> "Confirmado na tabela: ambos os modelos atingem 100% de accuracy no dataset, mas a biometria distingue-os. Escolhemos o FaceCNN para fine-tuning por esta razão."

*Métricas do Dual Sentinel:*  
> "Para o módulo de anomalias: 35.1% de janelas eliminadas pelo pré-filtro — 500 chamadas de inferência poupadas.  
> Os dois modelos correm inteiramente em local. Sem enviar logs para APIs externas, sem dados a sair do perímetro."

---

## Slide 12 — Limitations (Capítulo 06)
**[O que ainda não fizemos]**

> **Dizer:**  
> "Transparência é parte da engenharia de segurança. Aqui está o que não fizemos — e porque é relevante."

*4 itens:*  
> "1. Liveness detection — o sistema pode ser enganado por uma fotografia.  
> 2. Dataset pequeno — 76 imagens, 5 identidades, condições controladas.  
> 3. Sem fusão em runtime — os dois módulos são independentes. Correlacionar um alerta digital com um evento físico é ainda manual.  
> 4. Datasets públicos — LMD-2023 e VGGFace2 têm distribuições diferentes de dados reais em produção."

*Teaser Challenge 4:*  
> "O que vem a seguir endereça exactamente o ponto 3. O Challenge 4 junta Robótica e Sistemas Multiagente.  
> A ideia é ter robots como Cruzr, Unitree e cobots como nós monitorizados, com agentes especializados a correlacionar eventos digitais e físicos em tempo real. A fusão que falta."

---

## Slide 13 — Team (Equipa)
**[Quem construiu isto]**

> **Dizer:**  
> "A equipa Phish-N-Chips, do ISEP."

*Apresentar cada membro brevemente:*  
> "Arsénio — Dual Sentinel, arquitectura LLM-as-a-Judge.  
> César — pipeline clássico, logs Sysmon.  
> Gonçalo — Face Recognition closed-set.  
> Rui — Face Recognition open-set, ArcFace.  
> Rynalde — avaliação, mapeamento MITRE ATT&CK."

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
| Porque LLM-as-a-Judge e não fine-tuning? | Após slide 09 (AnomalyDetection) |
| Porque não GPU para o módulo facial? | Após slide 10 (FaceRecognition) |
| Comparação com soluções comerciais tipo Splunk/Darktrace? | Após slide 09 |
| Como correr o sistema em produção? | Após slide 12 (Limitations) |
| Dataset LMD-2023 — como foi gerado? | Após slide 09 |

---

*Script gerado para Challenge 3 · ISEP 2025/26 · Phish-N-Chips*
