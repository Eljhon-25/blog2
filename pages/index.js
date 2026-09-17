import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>As a college IT student, I intentionally chose to specialize in Data Analytics because I am fascinated by the art of turning raw information into meaningful direction. We live in an era where businesses generate staggering amounts of data daily, yet countless organizations still struggle with being "data rich but insight poor." Seeing this gap between having information and actually understanding it sparked my passion to bridge that disconnect using modern analytical tools and visualization. Whether predicting market trends, optimizing healthcare operations, or improving user experiences, data analytics directly solves tangible, real-world challenges. By mastering this domain, I am equipping myself to translate complex technical findings into strategic decisions that drive real impact.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
