import Reveal from "./Reveal";
import { Service } from "@/data/services";
import { DoorIcon, PortIcon, ContainerYardIcon, PinIcon, PersonIcon, BulbIcon } from "./Icons";

const DEST_ICON = { Door: DoorIcon, Port: PortIcon, CY: ContainerYardIcon } as const;

const GROUPS = [
  { prefix: "Door", label: "Titik Awal: Lokasi Pelanggan (Door)", icon: PinIcon },
  { prefix: "CY", label: "Titik Awal: Container Yard (CY)", icon: ContainerYardIcon },
];

/** Plain chevron — used for the toggle button and between flow steps. */
const CHEVRON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export default function SchemeSection({ schemes }: { schemes: NonNullable<Service["schemes"]> }) {
  return (
    <section className="profile" style={{ paddingTop: 32 }}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Skema Layanan</span>
          <h2>Pilihan Skema Pengiriman</h2>
          <p>Pilih skema pengiriman sesuai titik awal barang untuk melihat detail alur dan dokumen yang diperlukan.</p>
        </Reveal>

        {GROUPS.map((group) => {
          const items = schemes.filter((s) => s.name.startsWith(group.prefix));
          return (
            <div key={group.label} className="scheme-group">
              <span className="scheme-group-label">
                <span className="scheme-group-icon">{group.icon}</span>
                {group.label}
              </span>
              <div className="scheme-grid stagger">
                {items.map((s) => (
                  <SchemeCard key={s.name} scheme={s} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SchemeCard({ scheme: s }: { scheme: NonNullable<Service["schemes"]>[number] }) {
  const dest = s.name.split(" → ")[1] as keyof typeof DEST_ICON;

  return (
    <Reveal className="scheme-cell">
      <details className="scheme-details">
        <summary>
          <span className="scheme-icon">{DEST_ICON[dest]}</span>
          <span className="scheme-summary-text">
            <span className="scheme-route-mini">
              <span className="scheme-node origin" />
              <span className="scheme-route-line" />
              <span className="scheme-node dest" />
            </span>
            <span className="scheme-title">{dest.toUpperCase()}</span>
            <span className="scheme-subtitle">{s.name}</span>
            <span className="scheme-blurb">{s.blurb}</span>
          </span>
          <span className="scheme-toggle">{CHEVRON}</span>
        </summary>

        <div className="scheme-body">
          <div className="scheme-flow">
            {s.flow.split(" → ").map((step, i, arr) => (
              <span className="scheme-flow-step" key={step}>
                <span>{step}</span>
                {i < arr.length - 1 && CHEVRON}
              </span>
            ))}
          </div>

          {(s.customerHandles || s.irjaHandles) && (
            <div className="scheme-actors">
              {s.customerHandles && <Actor label="Customer" text={s.customerHandles} />}
              {s.irjaHandles && <Actor label="IRJA" text={s.irjaHandles} />}
            </div>
          )}

          <div className="scheme-callout">
            <span className="scheme-callout-icon">{BulbIcon}</span>
            <p>
              <b>Cocok untuk:</b> {s.suitable}
            </p>
          </div>
        </div>
      </details>
    </Reveal>
  );
}

function Actor({ label, text }: { label: string; text: string }) {
  return (
    <div className="scheme-actor">
      <span className="scheme-actor-avatar">{PersonIcon}</span>
      <div>
        <span className="scheme-actor-tag">{label}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}