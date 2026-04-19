import Section from './Section'
import DualSentinelDiagram from './diagrams/DualSentinelDiagram'
import { useLanguage } from '../context/LanguageContext'

export default function AnomalyDetection() {
  const { t } = useLanguage()
  const mitigations = t('anomaly.mitigations')
  const prefilter = t('anomaly.prefilterStat')

  return (
    <Section
      id="anomaly"
      eyebrow={t('anomaly.eyebrow')}
      title={t('anomaly.title')}
      lead={t('anomaly.lead')}
    >
      {/* Comparação lado-a-lado: Clássico vs Dual Sentinel */}
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
        {/* Clássico */}
          <div className="forensic-card p-5 md:p-7 h-full flex flex-col">
          <span className="term-tag self-start mb-6 !border-paper-400/40 !text-paper-400">
            {t('anomaly.classicalTag')}
          </span>
          <h3 className="font-display font-light text-2xl md:text-3xl text-paper-100 mb-5 leading-tight">
            {t('anomaly.classicalTitle')}
          </h3>
          <p className="text-paper-300 leading-relaxed mb-8">{t('anomaly.classicalBody')}</p>

          <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-ink-600">
            <div>
              <div className="eyebrow-muted mb-3">+</div>
              <ul className="space-y-1.5">
                {t('anomaly.classicalPros').map((p, i) => (
                  <li key={i} className="text-paper-300 text-sm leading-snug">{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow-muted mb-3 !text-signal-red">−</div>
              <ul className="space-y-1.5">
                {t('anomaly.classicalCons').map((c, i) => (
                  <li key={i} className="text-paper-300 text-sm leading-snug">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Dual Sentinel — destaque phosphor */}
          <div className="forensic-card p-5 md:p-7 h-full flex flex-col border-phosphor/40 bg-phosphor/5">
          <div className="flex items-center justify-between mb-6">
            <span className="term-tag self-start">{t('anomaly.sentinelTag')}</span>
            <span className="w-2 h-2 bg-phosphor animate-pulse-dim rounded-full" />
          </div>
          <h3 className="font-display font-light text-2xl md:text-3xl text-phosphor-dark mb-5 leading-tight">
            {t('anomaly.sentinelTitle')}
          </h3>
          <p className="text-paper-300 leading-relaxed mb-8">{t('anomaly.sentinelBody')}</p>

          {/* Mini stat highlight */}
          <div className="mt-auto pt-6 border-t border-phosphor/30">
            <div className="flex items-baseline gap-4">
              <span className="font-display font-light text-5xl md:text-6xl text-phosphor-dark tabular-nums leading-none">
                {prefilter.value}
              </span>
              <span className="text-paper-300 text-sm leading-tight">{prefilter.label}</span>
            </div>
            <p className="mt-3 font-mono text-xs text-paper-400 leading-relaxed">
              {prefilter.detail}
            </p>
          </div>
        </div>
      </div>

      {/* Pipeline diagram — full width */}
      <div className="forensic-card p-5 md:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-4 h-px bg-phosphor" />
          <span className="eyebrow">{t('anomaly.sentinelPipelineCaption')}</span>
        </div>
        <DualSentinelDiagram />
      </div>

      {/* 5 camadas de mitigação de alucinação */}
      <div className="mb-6">
        <h3 className="font-display font-light text-3xl md:text-5xl text-paper-100 mb-4 leading-tight text-balance">
          {t('anomaly.mitigationTitle')}
        </h3>
        <p className="text-paper-300 text-lg max-w-3xl leading-relaxed mb-10">
          {t('anomaly.mitigationLead')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
        {mitigations.map((m) => (
          <div key={m.n} className="border border-ink-600 p-6 hover:border-phosphor/50 transition-colors group">
            <div className="font-display font-light text-4xl text-phosphor/60 tabular-nums mb-5 leading-none group-hover:text-phosphor transition-colors">
              {m.n}
            </div>
            <h4 className="font-sans font-medium text-paper-100 mb-3 leading-snug">{m.title}</h4>
            <p className="text-paper-400 text-sm leading-relaxed">{m.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
