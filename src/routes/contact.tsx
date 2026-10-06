import { useState } from 'react';

import { createFileRoute, notFound } from '@tanstack/react-router';

import { ContactForm } from '../components/contact-form';
import { PageLayout } from '../components/layout/page-layout';
import { m } from '../paraglide/messages';
import { getContact } from '../server/contact';

export const Route = createFileRoute('/contact')({
  staticData: { ownsMain: true },
  loader: async () => {
    const contact = await getContact();
    if (!contact.enabled) throw notFound();
    return contact;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${m.contact_title()} | ${loaderData.boardName}`
          : m.contact_title(),
      },
      { name: 'description', content: m.contact_description() },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { boardName } = Route.useLoaderData();
  const [sent, setSent] = useState(false);
  return (
    <PageLayout>
      <div className="mx-auto w-full max-w-2xl py-10 md:py-16">
        <div className="mb-8">
          <h1 className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl">
            {m.contact_title()}
          </h1>
          {!sent ? (
            <p className="text-muted-foreground mt-3 text-lg">
              {m.contact_intro({ boardName })}
            </p>
          ) : null}
        </div>
        <ContactForm onSent={() => setSent(true)} />
        <ContactQRCode />
      </div>
    </PageLayout>
  );
}

function ContactQRCode() {
  return (
    <div className="mt-10 flex flex-col items-center text-center">
      <div className="mb-10 flex w-full items-center gap-4">
        <div className="bg-border h-px flex-1" />
        <span className="text-muted-foreground text-sm font-medium">OR</span>
        <div className="bg-border h-px flex-1" />
      </div>

      <h2 className="text-foreground text-xl font-semibold tracking-tight">
        Contact us via WeCom 通过企业微信联系我们
      </h2>

      <p className="text-muted-foreground mt-2 text-sm">
        Please scan the QR code below to contact us. 请扫描下方二维码添加企业微信。
      </p>

      <img
        src="/QRCode.png"
        alt="WeCom QR code"
        className="mt-5 h-40 w-40 object-contain"
      />
    </div>
  );
}