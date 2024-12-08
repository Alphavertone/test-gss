import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate>{siteConfig.title}</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate>{siteConfig.tagline}</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate>Read the Docs</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        message: "Welcome to the Nimble SRT Prometheus Exporter Documentation",
        id: "homepage.title",
        description: "Homepage title",
      })}
      description={translate({
        message: "Documentation for the Nimble SRT Prometheus Exporter, supporting English and Russian languages.",
        id: "homepage.description",
        description: "Homepage description",
      })}>
      <HomepageHeader />
      <main className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
          <p><Translate>👋 Hey there!</Translate></p>  
          <p><Translate>⬆️ Hit that button above to see the docs! 🚀</Translate></p>
          </h1>
          <div className={styles.features}>
          </div>
        </div>
      </main>
    </Layout>
  );
}
