import { agentMessages, recoverySignals } from '../data';
import { joinHtml } from './html';

export const renderRecoveryAgentSection = () => `
  <section class="section recovery-agent-section" id="recovery-agent" aria-labelledby="recovery-agent-title">
    <div class="section-heading">
      <p class="eyebrow">Digital twin and agents</p>
      <h2 id="recovery-agent-title">Predict readiness, then let agents handle the tiny decisions.</h2>
    </div>
    <div class="recovery-agent-layout">
      <div class="digital-twin-card" aria-label="Digital recovery twin preview">
        <div class="twin-orbit" aria-hidden="true"><span></span><i></i></div>
        <div class="recovery-signal-grid">
          ${joinHtml(
            recoverySignals,
            (signal) => `
              <span>
                <b>${signal.value}</b>
                ${signal.label}
              </span>
            `,
          )}
        </div>
      </div>
      <div class="agent-chat" aria-label="AI accountability messages">
        ${joinHtml(
          agentMessages,
          (message) => `
            <article>
              <span>${message.from}</span>
              <p>${message.copy}</p>
            </article>
          `,
        )}
      </div>
    </div>
  </section>
`;
