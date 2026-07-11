const svgData = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg)}`;

export const portrait = (accent: string, top: string, hair: string) =>
  svgData(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 440">
      <rect width="360" height="440" fill="${accent}"/>
      <circle cx="180" cy="130" r="70" fill="#f0ba8f"/>
      <path d="M104 143c5-74 48-102 90-96 48 7 76 44 68 112-33-16-69-22-158-16z" fill="${hair}"/>
      <path d="M76 420c13-108 57-167 104-167s91 59 104 167H76z" fill="${top}"/>
      <path d="M118 319c31 30 94 30 125 0" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity=".7"/>
    </svg>
  `);

export const equipmentImage = (kind: 'bike' | 'tread' | 'row' | 'dumbbell' | 'mat') => {
  const art = {
    bike: '<circle cx="94" cy="146" r="39" fill="none" stroke="#0f1720" stroke-width="14"/><circle cx="230" cy="146" r="39" fill="none" stroke="#0f1720" stroke-width="14"/><path d="M94 146h62l34-62h-58l24 62 43-42" fill="none" stroke="#0f1720" stroke-width="14" stroke-linejoin="round" stroke-linecap="round"/><path d="M190 84h36" stroke="#e6533f" stroke-width="13" stroke-linecap="round"/>',
    tread: '<path d="M57 161h194c22 0 35 18 26 34H84c-26 0-43-11-47-26 4-5 10-8 20-8z" fill="#0f1720"/><path d="M229 158l-22-83h35l22 83" fill="none" stroke="#0f1720" stroke-width="15" stroke-linecap="round"/><rect x="192" y="48" width="70" height="42" rx="8" fill="#e6533f"/>',
    row: '<path d="M55 176h210" stroke="#0f1720" stroke-width="18" stroke-linecap="round"/><path d="M86 145h88l32 31" fill="none" stroke="#0f1720" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><circle cx="86" cy="176" r="22" fill="#e6533f"/><circle cx="244" cy="176" r="22" fill="#55b7a6"/>',
    dumbbell: '<path d="M72 122h176" stroke="#0f1720" stroke-width="24" stroke-linecap="round"/><rect x="40" y="87" width="45" height="92" rx="8" fill="#e6533f"/><rect x="235" y="87" width="45" height="92" rx="8" fill="#55b7a6"/><rect x="92" y="100" width="34" height="64" rx="8" fill="#0f1720"/><rect x="194" y="100" width="34" height="64" rx="8" fill="#0f1720"/>',
    mat: '<path d="M64 92h156c35 0 57 21 57 50s-22 50-57 50H64c22-26 22-74 0-100z" fill="#55b7a6"/><path d="M64 92c24 0 43 22 43 50s-19 50-43 50-43-22-43-50 19-50 43-50z" fill="#0f1720"/><path d="M147 122h70M147 160h70" stroke="#fff" stroke-width="10" stroke-linecap="round"/>',
  };

  return svgData(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240">
      <rect width="320" height="240" rx="24" fill="#f2f5ee"/>
      <path d="M0 211c65-27 120-32 184-12 49 16 89 12 136-9v50H0z" fill="#dce9de"/>
      ${art[kind]}
    </svg>
  `);
};

export const transformationImage = (stage: 'before' | 'after') =>
  svgData(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 620">
      <rect width="520" height="620" fill="${stage === 'before' ? '#f5efe0' : '#e5f4ec'}"/>
      <rect x="50" y="70" width="420" height="460" rx="8" fill="#ffffff" opacity=".58"/>
      <circle cx="260" cy="175" r="57" fill="#ce8f69"/>
      <path d="${stage === 'before' ? 'M177 302c15-64 50-94 83-94s68 30 83 94l25 137H152z' : 'M187 304c12-63 43-96 73-96s61 33 73 96l18 136H169z'}" fill="${stage === 'before' ? '#51606f' : '#e6533f'}"/>
      <path d="${stage === 'before' ? 'M155 316c-32 46-39 92-23 139M365 316c32 46 39 92 23 139' : 'M178 312c-40 34-58 77-54 130M342 312c40 34 58 77 54 130'}" fill="none" stroke="#ce8f69" stroke-width="30" stroke-linecap="round"/>
      <path d="${stage === 'before' ? 'M220 439l-18 107M300 439l18 107' : 'M231 438l-32 108M289 438l32 108'}" fill="none" stroke="#ce8f69" stroke-width="32" stroke-linecap="round"/>
      <path d="M197 164c12-62 119-66 130 0-28-25-76-30-130 0z" fill="#241b18"/>
      <text x="260" y="585" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="800" fill="#0f1720">${stage === 'before' ? 'BEFORE' : 'AFTER'}</text>
    </svg>
  `);
