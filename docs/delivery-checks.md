# Delivery checks and project boundary

This repository contains an older Next.js/React website and reference-template assets. Preserve its source, media, history and lifecycle status.

The `delivery-checks` candidate runs locked `npm ci` followed by the existing `npm run build`, with telemetry disabled and no production/provider credentials. The Next build checks compilation and its configured validation. Require this context only after observing its first green hosted baseline. There is no existing behavioral test command; product changes need focused tests and outcome verification.

The current Vercel project named `barleybus-website` (`prj_lRiHwI0sz5Efz9FctYVC66zQNRW7`) serves `barleybus.com` from **`todd-11b/click-maker-hub`**, not this repository. Do not deploy, relink or promote this older Next source into that live target. A matching project name or historical successful Vercel status does not establish current source ownership.

This adoption adds source governance and bounded CI. It does not revive this older app, create hosting, alter customer flows or authorize a business redesign.

Follow [SOFTWARE_DELIVERY.md](../SOFTWARE_DELIVERY.md) and the adapted skill for proportional brainstorming, planning, independent final-diff review and authorized delivery.
