import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Naas - ${siteConfig.title}`}
      description="A new way to build data & AI experiences">
      <HomepageHeader />
      <main>
        <HomeTLDR />
        <HomeSupport />
        <HomeToolCatalog />
        <HomeFeatures />
        <HomeTechFeatures />
        <HomeTestimonials />
        <HomeSolutions />
        <HomeGitHub />
        {/* <HomeFooter /> */}
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.landing}>
      <div className={styles.heroBanner}>
        {/* <div className="container"> */}
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.buttonContainer}>
          <a
            className={styles.cta}
            href="https://workspace.naas.ai/">
            Get Started
          </a>
          <Link
            className={styles.businesscta}
            href="https://form.typeform.com/to/GjbalQ7R">
            Submit business interest
          </Link>
        </div>
        <div className={styles.siteInfo}>Naas.ai is currently in open alpha and usage of the platform may be limited for unpaid users. <br></br>Start with 100 free credits/month and become a sponsor to add more.</div>
        {/* </div> */}
      </div>
    </div>
  );
}


function HomeTLDR() {
  return <>
    <div className={styles.community}>
      <div className={styles.communityContainer}>
        <div className={styles.half}>
          <div className={styles.imageContainer}>
            <div className={styles.relative}>
              <svg viewBox="0 0 940 623" xmlns="http://www.w3.org/2000/svg" className="pdxBrowser">
                <g fill="none" fillRule="evenodd"><rect fill="#FFF" width="200" height="auto" rx="9"></rect>
                  <path d="M0 36h940V9a9 9 0 0 0-9-9H9a9 9 0 0 0-9 9v27z" fill="#DFE1E6"></path>
                  <circle fill="#FD6157" cx="18" cy="18" r="6"></circle>
                  <circle fill="#FDBD04" cx="38" cy="18" r="6"></circle>
                  <circle fill="#30CA2E" cx="58" cy="18" r="6"></circle>
                </g></svg>
              <div className={clsx(styles.absolute, styles.jupyterImage)}>
                <img src='https://user-images.githubusercontent.com/21052349/247088121-e2fb6b9e-ebb6-4ef1-91d4-893447add590.gif' alt='jupyter' />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h2>A new way to build data & AI experiences</h2>
          <p>Explore, communicate, and build efficiently with Naas.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <div className={styles.iconContainer} >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.25 10.5C18.25 14.7802 14.7802 18.25 10.5 18.25C6.21979 18.25 2.75 14.7802 2.75 10.5C2.75 6.21979 6.21979 2.75 10.5 2.75C14.7802 2.75 18.25 6.21979 18.25 10.5ZM10.5 19.75C15.6086 19.75 19.75 15.6086 19.75 10.5C19.75 5.39137 15.6086 1.25 10.5 1.25C5.39137 1.25 1.25 5.39137 1.25 10.5C1.25 15.6086 5.39137 19.75 10.5 19.75ZM21.4217 21.4217C20.6506 22.1928 19.4004 22.1928 18.6293 21.4217L16.7563 19.5488C17.8465 18.7936 18.7936 17.8465 19.5488 16.7563L21.4217 18.6292C22.1928 19.4003 22.1928 20.6506 21.4217 21.4217Z" fill="white"/>
            </svg>
            </div>
            <h3 className="gridItem__title color-1 weight-text-m">
              <strong>Naas Search</strong>
            </h3>
            <div className="gridItem__description">
              <p>Hard to move fast if you keep reinventing the wheel, harnest the power of open source data & AI templates.</p>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.iconContainer} >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2666 4C18.3287 4 20 5.67135 20 7.73336L20 14.1335C20 16.1955 18.3286 17.8668 16.2666 17.8668H7.63987L4.84724 19.8981C4.68458 20.0161 4.46991 20.0328 4.29124 19.9421C4.11258 19.8508 3.99991 19.6674 3.99991 19.4668V7.73336C3.99991 5.67135 5.67126 4 7.73326 4H16.2666Z" fill="white"/>
            </svg>
            </div>
            <h3 className="gridItem__title color-1 weight-text-m">
              <strong>MyChatGPT</strong>
            </h3>
            <div className="gridItem__description">
              <p>Simple. Powerful. Beautiful. Communicate more efficiently with next generation AI Language models.</p>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.iconContainer} >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0035 11.0654H10.0252L6.78634 16.379C6.38897 17.0039 6.64426 17.5722 6.75748 17.7998C6.87071 18.0273 7.24033 18.5102 7.97961 18.5102H16.0493C16.7885 18.5102 17.157 17.9984 17.2714 17.7998C17.3846 17.5722 17.641 17.0328 17.2425 16.379L14.0035 11.0654Z" fill="white"/>
              <path d="M19.4316 15.0437L16.0782 9.55906C15.7086 8.93413 15.5099 8.22372 15.5099 7.51332V3.42081H16.2769C16.6743 3.42081 16.9873 3.10778 16.9873 2.71041C16.9873 2.31303 16.6743 2 16.2769 2H7.78101C7.38364 2 7.07061 2.31303 7.07061 2.71041C7.07061 3.10778 7.38364 3.42081 7.78101 3.42081H8.54802V7.51218C8.54802 8.25146 8.34933 8.96186 7.9797 9.55792L4.5976 15.0437C3.83059 16.2935 3.80172 17.7721 4.51213 19.0509C5.22253 20.3008 6.50126 21.0689 7.95106 21.0689H16.0207C17.4704 21.0689 18.7491 20.3019 19.4596 19.0509C20.1989 17.7711 20.1698 16.2937 19.4316 15.0437ZM18.2661 18.3681C17.811 19.1917 16.9585 19.6757 16.0217 19.6757H7.97958C7.04162 19.6757 6.21801 19.1928 5.73516 18.3681C5.28004 17.5445 5.28004 16.5776 5.79177 15.7818L9.14517 10.2971C9.65689 9.44465 9.94105 8.50669 9.94105 7.51212L9.93994 3.42076H14.0893V7.51212C14.0893 8.50669 14.3734 9.47239 14.8852 10.2971L18.2386 15.7818C18.7214 16.5776 18.7212 17.5444 18.2661 18.3681Z" fill="white"/>
            </svg>
            </div>
            <h3 className="gridItem__title color-1 weight-text-m">
              <strong>Naas Lab</strong>
            </h3>
            <div className="gridItem__description">
              <p>Build and manage any type of data & AI project more efficiently. No separated, clunky systems needed.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
}

const supportLogos = [
  {
    link: "https://www.naas.ai/lib_JcijubPjTQrGWzas/3o6ioht0sr9gilpe.png?w=100&h=80",
    name: 'redhat'
  },
  {
    link: "https://www.naas.ai/lib_JcijubPjTQrGWzas/9j7v3f6iseusggfg.png?w=100&h=80",
    name: 'amazon'
  },
  {
    link: "https://www.naas.ai/lib_JcijubPjTQrGWzas/dqmvu1vrh1w1d17b.png?w=100&h=80",
    name: 'netflix'
  },
  {
    link: "https://www.naas.ai/lib_JcijubPjTQrGWzas/q0l2f8i6hys5ryj6.png?w=100&h=80",
    name: 'stanford'
  },
  {
    link: "https://www.naas.ai/lib_JcijubPjTQrGWzas/qi2o0ezjjnbb0ft8.png?w=100&h=80",
    name: 'tesla'
  },
]

function HomeSupport() {
  return <div className={styles.testimonials}>
    <div className={styles.hw}>
    <div className={styles.titleWrapper}>
          <h2>Supports</h2>
        </div>
      <div className={styles.support}>
        <p>
          We have already received support from amazing organizations, <br />
          and we are just getting started.
        </p>
      </div>
      <div className={styles.supportLogos}>
        {supportLogos.map(logo => <div key={logo.name}><img src={logo.link} alt={logo.name} /></div>)}
      </div>
    </div>
  </div>
}

const toolImages = [
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/k4n2vn7rvd9zb4iq.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/yb7hkkgr0nt76uzf.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/n7nbxh4i6er562d9.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/of5kikai6h6ngxyq.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/noqby55davij93ru.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/glkbx5cooudq8ysi.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/sfxdhw7pl0b8fxf7.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/s8v0zvy7b9fyi4pt.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/v4tt1le5rljom0cf.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/pgeepir3hi6z1a3e.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/abhk3j9xx2pnxca0.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/7g5te5dwu4qoq9wr.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/qqmnlxmczk7wxcck.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/gmm9cghwdvosuwpb.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/8vp4gwoyn8vj8ut4.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/bfhg82o7vpzg560m.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/4gk07asmcwyfunzj.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://landen.imgix.net/jtci2pxwjczr/assets/qbuop9ih.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/0wmblhco4758ga3z.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/e21e2croxgz2zjs2.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/bmp810teq595g9ju.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://landen.imgix.net/jtci2pxwjczr/assets/gxan7c8n.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/z48ixele4ifaur3a.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/ed7wnaabbup9pzgo.jpg?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
  {
    link: "https://www.naas.ai/lib_NtadlqPncrCtPifD/kwi15ykx1z81m6uu.png?w=100&h=80",
    name: "LinkedIn",
    href: "https://workspace.naas.ai/search?q=LinkedIn"
  },
]

function HomeToolCatalog() {
  return (
    <div className={clsx(styles.flex, styles.flexCol, styles.itemsCenter, styles.bgLight)}>
      <div className={styles.h_w}>
        <div className={styles.catalog}>
          <div className={styles.catalogHead}>
            <h2>
              Discover Naas Lean Data Framework<br />
              Start with the Template Catalog
            </h2>
            <p>
              Powerful building blocks built and maintained by our community,
              <br />
              easy to customize to any needs.
            </p>
          </div>
          <div className={styles.toolLogos}>
            {toolImages.map((tool, index) => (
              <div className={styles.toolImageContainer} key={`tools-${index}`}>
                <a href={tool.href} target="_blank" rel="noopener noreferrer">
                  <img src={tool.link} alt={tool.name} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={clsx(styles.flex, styles.flexWrap, styles.justifyCenter, styles.itemsCenter, styles.explore)}>
          <div className={styles.buttonContainer}>
            <a className={styles.cta} href="https://workspace.naas.ai/">
              Get Started
            </a>
            <Link className={styles.businesscta} to="https://form.typeform.com/to/GjbalQ7R">
              Submit business interest
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeFeatures() {
  return <div>
    <div className={clsx(styles.flex, styles.flexWrap, styles.bgLight, styles.featureImage)}>
      <div className={styles.half}>
        <div className={styles.imageContainer}>
          <div className={styles.relative}>
            <svg viewBox="0 0 940 623" xmlns="http://www.w3.org/2000/svg" className="pdxBrowser">
              <g fill="none" fillRule="evenodd"><rect fill="#FFF" width="940" height="623" rx="9"></rect>
                <path d="M0 36h940V9a9 9 0 0 0-9-9H9a9 9 0 0 0-9 9v27z" fill="#DFE1E6"></path>
                <circle fill="#FD6157" cx="18" cy="18" r="6"></circle>
                <circle fill="#FDBD04" cx="38" cy="18" r="6"></circle>
                <circle fill="#30CA2E" cx="58" cy="18" r="6"></circle>
              </g></svg>
            <div className={clsx(styles.absolute, styles.jupyterImage)}>
              <img src='https://www.naas.ai/lib_KbmqUogQbiRJQoGw/4ikcr39udlxt3tai.gif' alt='jupyter' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.half}>
        <div className={clsx(styles.textContainer, styles.flex, styles.flexCol, styles.justifyCenter, styles.itemsCenter, styles.hFull)}>
          <h2>Assemble templates to create your data products</h2>
          <p>Incorporate your own unique intelligence with the help of Naas' low-code integration and production capabilities.</p>
        </div>
      </div>
    </div>
    <div className={clsx(styles.flex, styles.bgDark, styles.scalling, styles.featureImage)}>
      <div className={styles.half}>
        <div className={clsx(styles.flex, styles.justifyFlexEnd, styles.itemsCenter, styles.hFull)}>
          <div className={clsx(styles.textContainer, styles.flex, styles.flexCol, styles.itemsCenter)}>
            <h2>Build & scale your data products effortlessly</h2>
            <p>Take your data product from its initial development stage to a fully-fledged, enterprise-level.</p>
          </div>
        </div>
      </div>
      <div className={styles.half}>
        <div className={styles.imageContainer}>
          <img src='./img/naas-jobs.png' alt='features' />
        </div>

      </div>
    </div>
    <div className={clsx(styles.flex, styles.bgLightGrey, styles.scalling, styles.featureImage)}>
      <div className={styles.half}>
        <div className={styles.imageContainer}>
          <div className={styles.relative}>
            <svg viewBox="0 0 940 623" xmlns="http://www.w3.org/2000/svg" className="pdxBrowser">
              <g fill="none" fillRule="evenodd"><rect fill="#FFF" width="940" height="623" rx="9"></rect>
                <path d="M0 36h940V9a9 9 0 0 0-9-9H9a9 9 0 0 0-9 9v27z" fill="#DFE1E6"></path>
                <circle fill="#FD6157" cx="18" cy="18" r="6"></circle>
                <circle fill="#FDBD04" cx="38" cy="18" r="6"></circle>
                <circle fill="#30CA2E" cx="58" cy="18" r="6"></circle>
              </g></svg>
            <div className={clsx(styles.absolute, styles.jupyterImage)}>
              <img src='https://www.naas.ai/lib_sluGpRGQOLtkyEpz/k3x3qdvcocd6pq3w.png?w=800&h=500&fit=crop' alt='jupyter' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.half}>
        <div className={clsx(styles.textContainer, styles.flex, styles.flexCol, styles.justifyCenter, styles.itemsCenter, styles.hFull)}>
          <h2>Always know how your data products work, no hidden surprises.</h2>
          <div>
            <div className={clsx(styles.flex, styles.flexWrap)}>
              <div className={styles.featDescription}>
                <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66">
                      <polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon>
                    </g>
                  </g>
                </svg>
                Transparent pricing
              </div>
              <div className={styles.featDescription}>
                <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66">
                      <polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon>
                    </g>
                  </g>
                </svg>
                Automated versioning</div>
              <div className={styles.featDescription}>
                <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="ui-icons" transform="translate(-109.000000, -67.000000)" fill="#22BC66">
                      <polygon id="check" points="108.994099 76.4000626 115.987848 83.419577 129.407253 69.9978283 126.587674 67.1592372 115.987848 77.7490936 111.827057 73.5894775"></polygon>
                    </g>
                  </g>
                </svg>
                Keep track and maintain ownership</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
}

function HomeTechFeatures() {
  return <div>
    <div className={clsx(styles.flex, styles.justifyCenter)}>
      <div className={clsx(styles.catalog, styles.h_w)}>
        <div className={styles.catalogHead}>
          <h2>Robust, scalable & <br />secured infrastructure</h2>
          <p>Naas handles deployment and hosting for you. For on premise installation, better to contact us.</p>
        </div>
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://landen.imgix.net/jtci2pxwjczr/assets/0rpysqq7.png?w=400&h=200&fit=crop" alt="amazon" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>99.99% uptime.</h3>
                <div className={styles.galleryDescription}>
                  <p>We are hosted on the only provider that guarantees it.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://landen.imgix.net/jtci2pxwjczr/assets/juzyoew8.png?w=400&h=200&fit=crop" alt="kubernetes" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>Never run out of memory.</h3>
                <div className={styles.galleryDescription}>
                  <p>We handle your kernels through Kubernetes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://landen.imgix.net/jtci2pxwjczr/assets/3gxnllrj.png?w=400&h=200&fit=crop" alt="docker" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>Keep your data safe.</h3>
                <div className={styles.galleryDescription}>
                  <p>Each user has its own virtual machine with Docker.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.testimonial}>
      <div className={styles.testimonialQuotes}>
        <img src={"https://www.naas.ai/lib_NtadlqPncrCtPifD/go0yg1eqng1lmk51.jpg?w=100&h=100"} alt='jupyter.jpeg' />
        <div className={styles.testimonialQuote}>
          <p>Naas is leveraging Jupyter Notebooks and Jupyter Lab, the most popular medium and interface in data science.</p>
        </div>
        <div className={styles.buttonContainer}>
          <a
            className={styles.cta}
            href="https://workspace.naas.ai/">
            Get Started
          </a>
          <Link
            className={styles.businesscta}
            href="https://form.typeform.com/to/GjbalQ7R">
            Submit business interest
          </Link>
        </div>
      </div>
    </div>


    <div className={clsx(styles.titleWrapper, styles.flex, styles.justifyCenter, styles.bgDark)}>
      <div className={clsx(styles.content, styles.ptXL)}>
        <h2>Finally, all data jobs in one place</h2>
        <p>Data Consumers navigate across search, chat, and dashboards to manage their business. Their feedback, whether they view content or report issues, guides Producers in refining and creating data and AI experiences.</p>
        <div className={styles.FlowContainer}>
          <img src='./img/how-it-works.png' alt='how it works' />
        </div>
      </div>
    </div>
    <div className={clsx(styles.flex, styles.justifyCenter, styles.bgDark)}>
      <div className={clsx(styles.content, styles.ptXL)}>
      <div className={styles.FlowContainer}>
          <img src='./img/toolsout.png' alt='tools out' />
        </div>
        <h2>Consolidate tools. Scale your data operations,<br></br> not your costs.</h2>
        <p>Our customers got rid of nearly a dozen different tools <br /> because of what Naas does for them.</p>
      </div>
    </div>
  </div>
}

function HomeTestimonials() {
  return   <div><div className={clsx(styles.titleWrapper, styles.flex, styles.justifyCenter, styles.bgDark)}>
      <div className={clsx(styles.content, styles.ptXL)}>
        <h2>Why they love Naas</h2>
        <p>Naas adapts to your needs. It is as minimal <br></br>or as powerful as you need it to be.</p>
      </div>
    </div>
    <div className={clsx(styles.flex, styles.justifyCenter, styles.bgDark)}>
      <div className={clsx(styles.h_w, styles.flex, styles.flexWrap)}>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='./img/travis.png' alt='testimonial' />
          <div className={clsx(styles.rating)} style={{ "--rating": 5, color: '#F6BA10' }}>
            <div className={styles.starRating}>
            </div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>I was using Jupyter Notebooks for exploratory analysis but with Naas I can run them as a safe production environment, pretty awesome!</p>
          </div>
          <span className={styles.testimonialAbout}>
            Travis - Data scientist, investor
          </span>
        </div>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://landen.imgix.net/jtci2pxwjczr/assets/nsmdf8zo.jpg?w=100&h=100' alt='testimonial2' />
          <div className={clsx(styles.rating)} style={{ "--rating": 4.5, color: '#F6BA10' }}>
            <div className={styles.starRating}>
            </div>
            <div className={styles.numericRating}>4.5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>I have the power to run my analysis on schedule and trigger it remotely. Pretty useful compared to Excel. </p>
          </div>
          <span className={styles.testimonialAbout}>
            Bradden - VC fund partner
          </span>
        </div>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://www.naas.ai/lib_NyEjrHzRfXIFhSRL/qmcgk523nkypwng6.png?w=100&h=100' alt='testimonial3' />
          <div className={clsx(styles.rating)} style={{ "--rating": 5, color: '#F6BA10' }}>
            <div className={styles.starRating}>

            </div>
            <div className={styles.numericRating}>5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>“Naas really changed my way of working with PowerBI. my reports lighter, faster and more auditable.”</p>
          </div>
          <span className={styles.testimonialAbout}>
            Alexandre - Freelance Financial Data
          </span>
        </div>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://www.naas.ai/lib_NyEjrHzRfXIFhSRL/vzsvyu62jnwosi9c.jpg?w=100&h=100' alt='testimonial4' />
          <div className={clsx(styles.rating)} style={{ "--rating": 5, color: '#F6BA10' }}>
            <div className={styles.starRating}>

            </div>
            <div className={styles.numericRating}>5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>“I start with an idea, build an MVP, send it to customers and understand what’s working or not. Just awesome.</p>
          </div>
          <span className={styles.testimonialQuotes}>
            Mark - Data Scientist
          </span>
        </div>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://www.naas.ai/lib_NyEjrHzRfXIFhSRL/i5ve28o7shgp43d1.jpg?w=100&h=100' alt='testimonial5' />
          <div className={clsx(styles.rating)} style={{ "--rating": 5, color: '#F6BA10' }}>
            <div className={styles.starRating}>

            </div>
            <div className={styles.numericRating}>5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>I can automate every reporting work and create valuable data assets for my investors, like never before.”</p>
          </div>
          <span className={styles.testimonialAbout}>
            Romain - Investment Director
          </span>
        </div>
        <div className={clsx(styles.testimonialAvatar)}>
          <img src='https://www.naas.ai/lib_NyEjrHzRfXIFhSRL/nzfihc1lseat118c.jpg?w=100&h=100' alt='testimonial6' />
          <div className={clsx(styles.rating)} style={{ "--rating": 5, color: '#F6BA10' }}>
            <div className={styles.starRating}>

            </div>
            <div className={styles.numericRating}>5 / 5</div>
          </div>
          <div className={styles.testimonialQuotes}>
            <p>Naas provides a great way to easily integrate with our tools. Their ready-to-use templates make us save a lot of time.</p>
          </div>
          <span className={styles.testimonialAbout}>
            Evandro - Software Engineering Manager
          </span>
        </div>
      </div>
      </div>
      </div>
}

function HomeSolutions() {
  return <div>
    <div className={clsx(styles.flex, styles.justifyCenter)}>
      <div className={clsx(styles.catalog, styles.h_w)}>
      <div className={styles.catalogHead}>
        <h2>Endless Possibilities</h2>
        <p>Discover the power of Naas data engines and plugins <br></br>to address your critical business needs.</p>
      </div>
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://media.discordapp.net/attachments/1084579666175729694/1107794337745604670/jeymassa_a_futurist_cover_for_naas_content_engine_universal_dat_fbf44c7c-1a4a-4cf1-9edf-465dbce0911b.png?width=2180&height=1246" alt="amazon" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>Content Creation</h3>
                <div className={styles.galleryDescription}>
                  <p>Increase Reach & Engagement</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://media.discordapp.net/attachments/1084579666175729694/1107795724667728012/jeymassa_a_futurist_cover_for_naas_content_engine_universal_dat_82fc3ef4-d86a-4d2b-bc5e-7126b97e2e45.png?width=2180&height=1246" alt="growth" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>Growth Marketing</h3>
                <div className={styles.galleryDescription}>
                  <p>Generate Qualified Contacts</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://media.discordapp.net/attachments/1084579666175729694/1107797414041108600/jeymassa_a_futurist_cover_for_naas_sales_engine_universal_data__6e3cf29d-93bf-4211-b768-425f5cb5e7ad.png?width=2180&height=1246" alt="sales" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>Sales Conversion</h3>
                <div className={styles.galleryDescription}>
                  <p>Transform Interest in Revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://media.discordapp.net/attachments/1084579666175729694/1107804138768715857/jeymassa_a_futurist_cover_for_naas_operations_engine_universal__fee85024-5b7b-4ac6-894b-6ac813d985f2.png?width=2180&height=1246" alt="ops" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>Operations Efficiency</h3>
                <div className={styles.galleryDescription}>
                  <p>Create a Single Source of Truth</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://media.discordapp.net/attachments/1084579666175729694/1107805121603190874/jeymassa_a_futurist_cover_for_naas_finance_engine_universal_dat_1c5b881f-bdda-462a-b923-c80e15531923.png?width=2180&height=1246" alt="finance" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>Finance Management</h3>
                <div className={styles.galleryDescription}>
                  <p>Get Financial Insights in Real-Time</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <div>
              <div className={styles.media}>
                <img src="https://media.discordapp.net/attachments/1084579666175729694/1107807756645302373/jeymassa_a_futurist_cover_for_naas_open_data_engine_universal_d_7da347fe-e221-4275-ae35-52df52ecad21.png?width=2180&height=1246" alt="opendata" />
              </div>
              <div className={styles.galleryMeta}>
                <h3>Open Data Intelligence</h3>
                <div className={styles.galleryDescription}>
                  <p>Better Understand the World Around</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function HomeGitHub() {
  return (
      <div className={clsx(styles.scalling, styles.flex, styles.justifyCenter, styles.bgLight)}>
          <div className={styles.h_w_lg} style={{ display: 'flex' }}>
              <div className={clsx(styles.textContainer, styles.itemsCenter, styles.hFull)} style={{ width: '60%' }}>
                  <div className={styles.mobCenter}>
                      <h2>🌍 Join our open source makers movement</h2>
                      <p>Our community excels in producing outstanding content, crafting awesome templates and data products, and providing premium support to our customers around the globe.</p>
                  </div>
              </div>
              <div className={styles.mobCenter} style={{ width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div className={styles.buttonContainer}>
                  <Link 
                  className={styles.cta} 
                  href="https://github.com/orgs/jupyter-naas/discussions">
                          Join GitHub Discussions
                  </Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

function HomeFooter() {
  return <div className={clsx(styles.bgDark)}>
    <div className={clsx(styles.footerTop, styles.flex, styles.justifyCenter)}>
      <div className={clsx(styles.flex, styles.flexCol, styles.itemsCenter)}>
        <h2>Try Naas Cloud today</h2>
        <p>Get started for free, add more credits as you grow.</p>
        <Link to={"https://www.naas.ai/free-forever"} className={styles.btnGreen}>GET STARTED</Link>
      </div>
    </div>
    <div className={clsx(styles.footer, styles.flex, styles.justifyCenter)}>
      <div className={clsx(styles.flex, styles.flexWrap, styles.footerContent)}>
        <div className={styles.half}>
          <span>Powered by NaasAI Inc. © 2023</span>
          <ul className={clsx(styles.flex, styles.flexWrap)}>
            <li>
              <Link to={"https://www.youtube.com/channel/UCKKG5hzjXXU_rRdHHWQ8JHQ"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" fill="currentColor">
                  </path>
                </svg>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/jupyter-naas/naas"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="currentColor"></path></svg>
              </Link>
            </li>
            <li>
              <Link to={"https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-8udGv9TsAw9StcI8SB8eqw"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M244.2 217.5l19.3 57.7-59.8 20-19.3-57.7 59.8-20zm41.4 243.7C131.6 507.4 65 471.6 18.8 317.6S8.4 97 162.4 50.8C316.4 4.6 383 40.4 429.2 194.4c46.2 154 10.4 220.6-143.6 266.8zM366.2 265c-3.9-12.2-17.2-18.6-29.4-14.7l-29 9.7-19.3-57.7 29-9.7c12.2-3.9 18.6-17.2 14.7-29.4-3.9-12.2-17.2-18.6-29.4-14.7l-29 9.7-10-30.1c-3.9-12.2-17.2-18.6-29.4-14.7-12.2 3.9-18.6 17.2-14.7 29.4l10 30.1-59.8 20.1-10-30.1c-3.9-12.2-17.2-18.6-29.4-14.7-12.2 3.9-18.6 17.2-14.7 29.4l10 30.1-29 9.7c-12.2 3.9-18.6 17.2-14.7 29.4 3.2 9.3 12.2 15.4 21.5 15.8 4.3.6 7.7-1 36.9-10.7l19.3 57.7-29 9.7c-12.2 3.9-18.6 17.2-14.7 29.4 3.2 9.3 12.2 15.4 21.5 15.8 4.3.6 7.7-1 36.9-10.7l10 30.1c3.7 10.8 15.8 18.6 29.4 14.7 12.2-3.9 18.6-17.2 14.7-29.4l-10-30.1 59.8-20.1 10 30.1c3.7 10.8 15.8 18.6 29.4 14.7 12.2-3.9 18.6-17.2 14.7-29.4l-10-30.1 29-9.7c12.2-4.2 18.6-17.5 14.7-29.6z" fill="currentColor"></path></svg>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/company/naas-ai/"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="currentColor"></path></svg>
              </Link>
            </li>
            <li>
              <Link to={"https://www.producthunt.com/posts/naas-3/"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z" fill="currentColor"></path></svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.half}>
          <div className={clsx(styles.flex, styles.flexWrap)}>
            <ul>
              <li><strong>Product</strong></li>
              <li><Link to="https://www.naas.ai/free-forever">Templates</Link></li>
              <li><Link to="https://docs.naas.ai/">Documentation</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="https://github.com/orgs/jupyter-naas/projects/10/views/13">Roadmap</Link></li>
            </ul>
            <ul>
              <li><strong>Community</strong></li>
              <li><Link to="https://naas-club.slack.com/?redir=%2Fgantry%2Fclient">Slack community</Link></li>
              <li><Link to="https://github.com/jupyter-naas">GitHub</Link></li>
              <li><Link to="https://form.typeform.com/to/jdls9qZf">Contribute</Link></li>
              <li><Link to="https://github.com/sponsors/jupyter-naas">Sponsor us</Link></li>
            </ul>
            <ul>
              <li><strong>Company</strong></li>
              <li><Link to="https://www.naas.ai/company">About us</Link></li>
              <li><Link to="https://naas-official.notion.site/Press-Kit-0226d57da0c54a2a8e4c14ebf902121e">Media kit</Link></li>
              <li><Link to="https://www.naas.ai/terms">Terms & conditions</Link></li>
              <li><Link to="https://form.typeform.com/to/GjbalQ7R">Contact Sales</Link></li>
              <li><Link to="https://form.typeform.com/to/aH1v5ync">Contact Support</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
}

