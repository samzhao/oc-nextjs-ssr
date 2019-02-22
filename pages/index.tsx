import * as React from "react";
import Layout from "../components/Layout";
import { OpenComponent } from "react-oc";

interface Props {
  prefetchedComponents?: object;
}

export default class IndexPage extends React.Component<Props> {
  static async getInitialProps({ req }) {
    if (req && !(process as any).browser) {
      const Client = require("oc-client");
      const client = new Client({
        registries: {
          serverRendering: "https://sz-oc-registry.herokuapp.com/"
        }
      });

      const prefetchedComponents = await new Promise((resolve, reject) => {
        client.renderComponent(
          "react-comp",
          {
            version: "1.0.10",
            parameters: {
              name: "Next.js (SSR works!)"
            }
          },
          (err, html) => {
            if (err) {
              reject(err);
            } else {
              resolve({
                "react-comp": html
              });
            }
          }
        );
      });

      return {
        prefetchedComponents
      };
    } else {
      return {};
    }
  }

  render() {
    const { prefetchedComponents = {} } = this.props;
    const hasPrefetched = Object.keys(prefetchedComponents).length > 0;

    return (
      <Layout
        title="Home | Next.js + TypeScript Example"
        prefetchedComponents={prefetchedComponents}
      >
        {hasPrefetched ? (
          <OpenComponent.Prefetched prefetchKey="react-comp" />
        ) : (
          <OpenComponent
            name="react-comp"
            version="1.0.10"
            parameters={{ name: "Next.js (client-side rendered)" }}
          />
        )}
      </Layout>
    );
  }
}
