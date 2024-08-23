/* eslint-disable react/prop-types */
import React from 'react';

import FutureEvent from 'components/pages/why-rename/future-event';
import Hero from 'components/pages/why-rename/hero';
import HighlightedText from 'components/pages/why-rename/highlighted-text';
import MainText from 'components/pages/why-rename/main-text';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const content = [
  {
    title: (
      <>
        Save the Date - Thursday,
        <br /> 12th of June 2025
      </>
    ),
    content: (
      <p>
        We are excited to announce that our beloved event, formerly known as Kubernetes Community
        Days Zürich, will now be called Cloud Native Zürich.{' '}
        <span className="font-bold">Mark your calendars for Thursday, June 12th, 2025</span>, as we
        continue our mission to create a platform where professionals and experts from all walks of
        life can come together to learn, network, and share their knowledge on all aspects of
        cloud-native technology.
      </p>
    ),
    className: '-mt-[17px]',
  },
  {
    title: (
      <>
        But Wait, Why
        <br /> Change the Name?
      </>
    ),
    content: (
      <p>
        In 2022, a team of passionate individuals came together with a shared vision: to organize
        the first-ever Kubernetes Community Days in Zürich for 2023. Our motivation was simple:
        giving back to the community we have been a part of and contributed to for decades. Our team
        comprised active contributors to projects, enthusiastic users, and those who simply thrived
        in the cloud-native ecosystem. Despite our varied backgrounds, we all had one common goal:
        to create a platform where professionals and experts from all walks of life could come
        together to learn, network, and share their knowledge on all aspects of cloud-native
        technology.
      </p>
    ),
  },
  {
    title: <>The Birth of KCD Zürich</>,
    content: (
      <>
        When we embarked on this journey, the concept of Kubernetes Community Days was still gaining
        momentum. A few cities in Europe had already hosted their own KCD events, and inspired by
        their success, we decided to bring this event to Zürich. Fueled by enthusiasm and with good
        luck, we secured an excellent venue, received support from amazing sponsors, and, to our
        delight, sold out the event to an incredible crowd.
      </>
    ),
    isHighlighted: true,
  },
  {
    title: (
      <>
        The Challenges
        <br /> of Rapid Growth
      </>
    ),
    content: (
      <>
        <p>
          However, with rapid growth comes the inevitable introduction of new rules and regulations.
          As the number of KCD events around the globe surged, the Cloud Native Computing Foundation
          (CNCF) had to implement additional guidelines to ensure consistency and quality across all
          events. While these rules made sense in their context, they posed significant challenges
          and risks for us as a community-driven organization.
        </p>
        <p>
          The new regulations introduced organizational risks, potential challenges for our
          sponsors, and considerable financial uncertainties. Given that we organize these events in
          our free time, dedicating hundreds of hours to ensure their success, we could not afford
          to constantly worry about new rules and their implications.
        </p>
      </>
    ),
  },
  {
    title: (
      <>
        A New Beginning:
        <br /> Cloud Native Zürich
      </>
    ),
    content: (
      <>
        <p>
          After careful consideration, we made the difficult decision to step back from the KCD 2.0
          program. This decision necessitated a rebranding, as &quot;KCD&quot; is a protected
          trademark of the CNCF. We are parting ways with the CNCF on good terms, recognizing that
          this change is in the best interest of both parties.
        </p>
        <p>
          Thus, we are excited to announce that Kubernetes Community Days Zürich will now be known
          as <span className="font-bold">Cloud Native Zürich starting</span> in 2025. This new name
          reflects our ongoing commitment to the cloud-native community and our desire to continue
          providing a platform for learning, networking, and knowledge sharing. Our goal and mission
          remain very much aligned with the CNCF and the community.
        </p>
      </>
    ),
    isHighlighted: true,
  },
  {
    title: <>Clarifying our identity</>,
    content: (
      <>
        We are aware that our new name bears a strong resemblance to the “OG Cloud Native event” in
        Switzerland: The Swiss Cloud Native Day. However, we have no formal connection with the
        other event, other than the fact that we all know each other, share the same goals, and
        engage with the same community. Additionally, we jointly sponsor KubeTrain each year
        together. Ultimately, we are friends from different cities working towards the same mission,
        for the same community!
      </>
    ),
  },
  {
    title: <>Looking Forward</>,
    content: (
      <>
        <p>
          As cloudnative.zürich, we remain dedicated to fostering a vibrant community where
          professionals and experts can come together to explore the latest advancements in
          cloud-native technology. We are grateful for the support we have received from the CNCF
          and our community, and we look forward to continuing this journey with renewed energy and
          enthusiasm.
        </p>
        <p>
          Thank you for being a part of our story. We can&apos;t wait to see what the future holds
          for Cloud Native Zürich.
        </p>
      </>
    ),
  },
];

const WhyRenamePage = () => (
  <Layout>
    <Hero />
    {content.map(({ title, content, isHighlighted, className }, index) => (
      <React.Fragment key={index}>
        {isHighlighted ? (
          <HighlightedText title={title} content={content} className={className} />
        ) : (
          <MainText title={title} content={content} className={className} />
        )}
      </React.Fragment>
    ))}
    <FutureEvent />
  </Layout>
);

export default WhyRenamePage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.whyRename} pathname={pathname} />
);
