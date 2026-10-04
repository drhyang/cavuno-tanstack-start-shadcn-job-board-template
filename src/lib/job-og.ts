/** Pure job share-card composition, shared with the Unicode render smoke check. */
import {
  ogTextWidthUnits,
  ogTextDirection,
  ogStyleValue,
  ogText,
  ogUrlAttr,
} from './og-text';
import { ogThemeTokens } from './og-theme';

export interface JobOgCard {
  title: string;
  company: string;
  initials: string;
  salary: string;
  location: string;
  hostname: string;
  logo: string | null;
  fontFamily: string;
}

export function buildJobOgHtml({
  title,
  company,
  initials,
  salary,
  location,
  hostname,
  logo,
  fontFamily,
}: JobOgCard): string {
  const titleWidth = ogTextWidthUnits(title);
  const metaParts = [salary, location].filter(Boolean);
  const t = ogThemeTokens();
  const html = `
    <div style="display:flex;width:1200px;height:630px;padding:48px;background:#f8fafc;font-family:${ogStyleValue(fontFamily)};font-weight:600;">
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:100%;height:100%;background:transparent;">
        <div style="display:flex;flex-direction:column;align-items:center;width:100%;">
          ${
            logo
              ? `<img src="${ogUrlAttr(logo)}" width="225" height="225" style="object-fit:contain;margin-bottom:28px;border-radius:24px;" />`
              : `<div dir="${ogTextDirection(initials)}" style="display:flex;align-items:center;justify-content:center;width:225px;height:225px;border-radius:24px;background:${t['--muted']};color:${t['--primary-foreground']};font-size:52px;margin-bottom:28px;">${ogText(initials)}</div>`
          }
          <div dir="${ogTextDirection(title)}" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;text-align:center;font-size:${titleWidth > 55 ? 44 : 54}px;font-weight:600;color:#18181b;line-height:1.15;letter-spacing:${/[^\p{Script=Latin}\p{Number}\p{Punctuation}\p{Separator}]/u.test(title) ? 0 : -1.5}px;margin-bottom:20px;max-width:900px;">${ogText(title)}</div>
          <div dir="${ogTextDirection(company)}" style="display:flex;font-size:28px;font-weight:500;color:#27272a;margin-bottom:10px;">${ogText(company)}</div>
          ${
            metaParts.length > 0
              ? `<div dir="${ogTextDirection(metaParts.join(' · '))}" style="display:flex;font-size:22px;font-weight:500;color:#3f3f46;">${ogText(metaParts.join(' · '))}</div>`
              : ''
          }
        </div>
        <div style="display:flex;align-items:center;justify-content:center;padding-top:20px;border-top:1px solid ${t['--border']};width:180px;background:transparent;">
          <div dir="ltr" style="display:flex;font-size:20px;font-weight:500;color:#3f3f46;">${ogText(hostname)}</div>
        </div>
      </div>
    </div>`;

  return html;
}