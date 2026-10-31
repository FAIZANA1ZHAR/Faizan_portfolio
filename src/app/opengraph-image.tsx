import { ImageResponse } from 'next/og';
import { portfolioConfig } from '@/data/portfolioConfig';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Azure, AI & Power Platform Consultant';

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', background: '#07110F', color: '#F2F7F4', padding: '64px 72px', fontFamily: 'sans-serif' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 74, height: 74, border: '1px solid #25D0A7', borderRadius: 8, color: '#8AE8CB', fontSize: 30 }}>FA</div><div style={{ display: 'flex', color: '#8AE8CB', fontSize: 20 }}>AZURE / APPLIED AI / POWER PLATFORM</div></div><div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}><div style={{ display: 'flex', fontSize: 84, fontWeight: 700 }}>{portfolioConfig.fullName}</div><div style={{ display: 'flex', fontSize: 30, color: '#A8B8B1' }}>{portfolioConfig.role}</div></div><div style={{ display: 'flex', borderTop: '1px solid #28483B', paddingTop: 24, color: '#8AE8CB', fontSize: 20 }}>INFRASTRUCTURE. INTELLIGENCE. IMPACT.</div></div>, size);
}