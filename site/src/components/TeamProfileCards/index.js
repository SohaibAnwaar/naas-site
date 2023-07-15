import React, {ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

function WebsiteLink({to, children}) {
  return (
    <Link to={to}>
      {children ?? (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

const ProfileProps = {
  className: String,
  name: String,
  children: ReactNode,
  githubUrl: String,
  twitterUrl: String,
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  twitterUrl,
}) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                {name}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--secondary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {twitterUrl && (
              <Link className="button button--secondary" href={twitterUrl}>
                Book a call
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function ActiveTeamRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="LinkedIn Profile"
        githubUrl="https://github.com/linkedin"
        twitterUrl="https://calendly.com/jeremyravenel">
        <Translate id="plugin.linkedin.profile">
        This plugin allows you to enhances your personal LinkedIn content strategy by tracking performance and identifying trends.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="LinkedIn Company"
        githubUrl="https://github.com/linkedin"
        twitterUrl="https://calendly.com/jeremyravenel">
        <Translate id="plugin.linkedin.company">
        This plugin allows you to monitor your company's content performance, discern trends, and fine-tune your LinkedIn strategy to expand your corporate reach and influence.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Twitter Account"
        githubUrl="https://github.com/twitter"
        twitterUrl="https://calendly.com/jeremyravenel">
        <Translate id="plugin.twitter.account">
        This plugin allows you to enhances your Twitter strategy by tracking performance and identifying trends.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Youtube Channel"
        githubUrl="https://github.com/youtube"
        twitterUrl="https://calendly.com/jeremyravenel">
        <Translate id="plugin.youtube.channel">
        This plugin allows you to enhances your Youtube strategy by tracking performance and identifying trends.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Instagram Account"
        githubUrl="https://github.com/instagram"
        twitterUrl="https://calendly.com/jeremyravenel">
        <Translate id="plugin.instagram.channel">
        This plugin allows you to enhances your Instagram strategy by tracking performance and identifying trends.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Tiktok Account"
        githubUrl="https://github.com/tiktok"
        twitterUrl="https://calendly.com/jeremyravenel">
        <Translate id="plugin.tiktok.channel">
        This plugin allows you to enhances your Tiktok strategy by tracking performance and identifying trends.
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}

export function HonoraryAlumniTeamRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Endilie Yacop Sucipto"
        githubUrl="https://github.com/endiliey"
        twitterUrl="https://twitter.com/endiliey">
        <Translate id="team.profile.Endilie Yacop Sucipto.body">
          Maintainer @docusaurus · 🔥🔥🔥
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Wei Gao"
        githubUrl="https://github.com/wgao19"
        twitterUrl="https://twitter.com/wgao19">
        <Translate id="team.profile.Wei Gao.body">
          🏻‍🌾 Work in progress React developer, maintains Docusaurus, writes
          docs and spams this world with many websites.
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}

export function StudentFellowsTeamRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Anshul Goyal"
        githubUrl="https://github.com/anshulrgoyal"
        twitterUrl="https://twitter.com/ar_goyal">
        <Translate
          id="team.profile.Anshul Goyal.body"
          values={{
            websiteLink: (
              <Link href="https://anshulgoyal.dev/">
                <Translate id="team.profile.Anshul Goyal.body.websiteLink.label">
                  website
                </Translate>
              </Link>
            ),
          }}>
          {
            'Fullstack developer who loves to code and try new technologies. In his free time, he contributes to open source, writes blog posts on his {websiteLink} and watches Anime.'
          }
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Drew Alexander"
        githubUrl="https://github.com/drewbi">
        <Translate id="team.profile.Drew Alexander.body">
          Developer and Creative, trying to gain the skills to build whatever he
          can think of.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Fanny Vieira"
        githubUrl="https://github.com/fanny"
        twitterUrl="https://twitter.com/fannyvieiira">
        <Translate
          id="team.profile.Fanny Vieira.body"
          values={{
            blogLink: (
              <Link href="https://dev.to/fannyvieira">
                <Translate id="team.profile.Fanny Vieira.body.blogLink.label">
                  her blog
                </Translate>
              </Link>
            ),
            spotifyLink: (
              <Link href="https://open.spotify.com/user/anotherfanny">
                <Translate id="team.profile.Fanny Vieira.body.spotifyLink.label">
                  Spotify playlists
                </Translate>
              </Link>
            ),
          }}>
          {
            'Fanny got started with web development in high school, building a project for the school kitchen. In her free time she loves contributing to Open Source, occasionally writing on {blogLink} about her experiences, cooking, and creating {spotifyLink}.'
          }
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Sam Zhou"
        githubUrl="https://github.com/SamChou19815"
        twitterUrl="https://twitter.com/SamChou19815">
        <Translate
          id="team.profile.Sam Zhou.body"
          values={{
            websiteLink: (
              <Link href="https://developersam.com">
                <Translate id="team.profile.Anshul Goyal.body.websiteLink.label">
                  website
                </Translate>
              </Link>
            ),
            samLangLink: (
              <Link href="https://samlang.developersam.com/">
                <Translate id="team.profile.Sam Zhou.body.samLangLink.label">
                  programming language
                </Translate>
              </Link>
            ),
            miniReactLink: (
              <Link href="https://github.com/SamChou19815/mini-react">
                <Translate id="team.profile.Sam Zhou.body.miniReactLink.label">
                  mini React
                </Translate>
              </Link>
            ),
          }}>
          {
            'Sam started programming in 2011 and built his {websiteLink} in 2015. He is interested in programming languages, dev infra and web development, and has built his own {samLangLink} and {miniReactLink}.'
          }
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Tan Teik Jun"
        githubUrl="https://github.com/teikjun"
        twitterUrl="https://twitter.com/teik_jun">
        <Translate id="team.profile.Tan Teik Jun.body">
          Open-source enthusiast who aims to become as awesome as the other
          humans on this page. Working on Docusaurus brought him closer to his
          goal. 🌱
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Nisarag Bhatt"
        githubUrl="https://github.com/FocalChord"
        twitterUrl="https://twitter.com/focalchord_">
        <Translate id="team.profile.Nisarag Bhatt.body">
          Fullstack web developer who loves learning new technologies and
          applying them! Loves contributing to open source as well as writing
          content articles and tutorials.
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}
