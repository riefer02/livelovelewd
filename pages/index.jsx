import { useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import logo from "../public/tld-logo-hz-black-outline.png";
import styles from '../styles/styles.module.scss';

export default function Home() {
  console.log(styles)

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, [])

  return (
    <div className="container">
      <Head>
        <title>The Lewd Dudes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainBackground}>
        <h1 className={styles.primaryHeader}>Live Love Lewd <span>Tour</span></h1>
        <div>
          <a className={'bit-widget-initializer'}
            data-artist-name="The Lewd Dudes"
            data-display-local-dates="false"
            data-display-past-dates="true"
            data-auto-style="false"
            data-text-color="#FFFFFF"
            data-link-color="#ffabf5"
            data-background-color="rgba(0,0,0,0.5)"
            data-display-limit="15"
            data-link-text-color="#FFFFFF"
            data-display-lineup="true"
            data-display-play-my-city="true"
            data-separator-color="rgba(124,124,124,0.25)"
            data-display-start-time="false">
          </a>
        </div>

      </main>

      <footer>
        <a href="https://thelewddudes.com" target="_blank">
          Powered by{" "}
          <Image
            src={logo}
            alt="The Lewd Dudes Logo 2021"
            width={100}
            height={100}
          // blurDataURL="data:..." automatically provided
          // Optionally allows to add a blurred version of the image while loading
          // placeholder="blur"
          />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
