import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head>
          <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossOrigin="anonymous"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.oc = window.oc || { conf: {} };
              oc.conf = oc.conf || {};
              oc.conf.templates = [
                {
                  type: "oc-template-react",
                  version: "2.0.15",
                  externals: []
                }
              ];
            `
            }}
          />
          <script src="https://sz-oc-registry.herokuapp.com/oc-client/client.js" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
