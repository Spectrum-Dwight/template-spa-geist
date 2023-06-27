import { GeneralSettings } from '@/components/generalsettings';
import { Title } from '@/components/layout/title';
import { GeistLink } from '@/components/ui/geistlink';
import Head from 'next/head';

export default function Settings() {
  return (
    <>
      <Head>
        <title>SPA-Settings</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Title>Personal Account Settings</Title>
        <div className='dashboard-container'>
          <div className='settings-content'>
            <div>
              <nav className='settings-nav'>
                <GeistLink>General</GeistLink>
                <GeistLink>Advanced</GeistLink>
                <GeistLink>Theme</GeistLink>
                <GeistLink>Other</GeistLink>
                <GeistLink>Teams</GeistLink>
              </nav>
            </div>
            <div className='settings-items'>
              <GeneralSettings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
