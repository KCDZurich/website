/* eslint-disable react/prop-types */
import React from 'react';

import AdrianPhoto from 'components/pages/schedule/schedule/images/adrian-reber-photo.jpg';
import AnnieTalvastoPhoto from 'components/pages/schedule/schedule/images/annie-talvasto-photo.jpg';
import BillPhoto from 'components/pages/schedule/schedule/images/bill-mulligan-photo.jpg';
import FilipPhoto from 'components/pages/schedule/schedule/images/filip-nicolic-photo.jpg';
import JuliusVolzPhoto from 'components/pages/schedule/schedule/images/julius-volz-photo.jpg';
import LenaPhoto from 'components/pages/schedule/schedule/images/lena-fuhrimann-photo.jpg';
import LisaFalcoPhoto from 'components/pages/schedule/schedule/images/lisa-falco-photo.jpg';
import LizRicePhoto from 'components/pages/schedule/schedule/images/liz-rice-photo.jpg';
import MaxKorbacherPhoto from 'components/pages/schedule/schedule/images/max-korbacher-photo.jpg';
import PriyaWadhwaPhoto from 'components/pages/schedule/schedule/images/priya-wadhwa-photo.jpg';
import RaphaelPhoto from 'components/pages/schedule/schedule/images/raphael-photo.jpg';
import RetoPhoto from 'components/pages/schedule/schedule/images/reto-lehmann-photo.jpg';
import RicardoRochaPhoto from 'components/pages/schedule/schedule/images/ricardo-rocha-photo.jpg';
import SebastianKisterPhoto from 'components/pages/schedule/schedule/images/sebastian-kister-photo.jpg';
import ThomasGrafPhoto from 'components/pages/schedule/schedule/images/thomas-graf-photo.jpg';
import TimoSalmPhoto from 'components/pages/schedule/schedule/images/timo-salm-photo.jpg';
import Link from 'components/shared/link';

// TODO: merge with ITEMS array from components/pages/schedule
const ITEMS = [
  {
    id: '01',
    title: 'Cilium Mesh - How to Connect Kubernetes with Legacy VM and Server Infrastructure',
    duration: '30 min',
    isKeynote: true,
    pdf: '/archive/Thomas Graf - Cilium Mesh - Connecting.pdf',
    videoSrc: 'https://www.youtube.com/embed/FHoNJnkn7Rk',
    speakers: [
      {
        name: 'Thomas Graf',
        photo: ThomasGrafPhoto,
      },
    ],
    presentation:
      'Kubernetes has taken the industry by storm and has become the standard platform for new workloads. It is ideal for containerized workloads. However, a majority of workloads will remain where they are for another while, running on VMs or physical servers in either public or private cloud. How do we connect the new world of Kubernetes consisting of services, identities and CI/CD with the existing world of VMs, servers, and existing network infrastructure?\n' +
      'In this session, we will look into the brand new Cilium Mesh layer. Cilium Mesh is a new universal networking layer to connect workloads and machines across cloud, on-prem, and edge. It consists of a Kubernetes networking component (CNI), a multi-cluster connectivity plane (Cluster Mesh), and a transit gateway to connect with VMs and servers in existing networks.',
  },
  {
    id: '02',
    title: 'The state of Green Washing - or how to build sustainable systems with Kubernetes ',
    duration: '30 min',
    pdf: '/archive/Max Koerbaecher - State of greenwashing KCD Zurich.pdf',
    videoSrc: 'https://www.youtube.com/embed/X1LWl_dH15A',
    speakers: [
      {
        name: 'Max Körbächer',
        photo: MaxKorbacherPhoto,
      },
    ],
    presentation:
      'Kubernetes is not the answer to everything, but where it is, it is a great companion to designing systems and putting environmental sustainability into your mind. But being eco-friendly invites people to greenwash their intentions, so let us start the story from the end and clarify some myths. Saving money on infrastructure may reduce your Carbon impact, but we can do more. In this presentation, we will look at what is currently possible, what are the recent developments and what we need in the future to create a carbon-aware system landscape. You will learn how designing system architectures for eco-friendliness, will have a sustainable impact, in many ways.',
  },
  {
    id: '03',
    title: 'Forensic container checkpointing and analysis',
    duration: '30 min',
    pdf: '/archive/Adrian Reber - forensic-container-checkpointing.pdf',
    videoSrc: 'https://www.youtube.com/embed/tEyH2ogFKeg',
    speakers: [
      {
        name: 'Adrian Reber',
        photo: AdrianPhoto,
      },
    ],
    presentation:
      'With the introduction of "Forensic Container Checkpointing" in Kubernetes 1.25 it is possible to checkpoint\n' +
      'containers. The ability to checkpoint containers opens up many new use cases. Containers can be migrated\n' +
      'without loosing the state of the container, fast startup from existing checkpoints, using spot instances more\n' +
      'effective. The primary use case, based on the title of the Kubernetes enhancement proposal, is the forensic\n' +
      'analysis of the checkpointed containers.\n' +
      '\n' +
      'In this session I want to introduce the different possible use cases of "Forensic Container Checkpointing" with a\n' +
      'focus on how to perform forensic analysis on the checkpointed containers. The presented use cases and\n' +
      'especially the forensic analysis will be done as a live demo giving the audience a hands on experience.',
  },
  {
    id: '04',
    title: 'When Things Get Big: Scaling Cloud Native Workloads and Software Distribution',
    duration: '30 min',
    pdf: '/archive/Ricardo Rocha - When Things Get Big.pdf',
    videoSrc: 'https://www.youtube.com/embed/eCtr7NIZKJk',
    speakers: [
      {
        name: 'Ricardo Rocha',
        photo: RicardoRochaPhoto,
      },
    ],
    presentation:
      'The move to containers has significantly improved the way services and workloads are deployed and managed in large scale computing infrastructures. It also brought new challenges that can be handled with intrusive changes in the workflows or hidden in the stack. This session will focus on one of those challenges and go in detail on how you can efficiently distribute very large software packages across thousands of nodes for your batch, HPC or ML workloads.',
  },
  {
    id: '05',
    title: 'Demystifying eBPF - eBPF Firewall from scratch',
    duration: '30 min',
    pdf: '/archive/Filip Nicolic - ebpf-firewall-from-scratch.pdf',
    videoSrc: 'https://www.youtube.com/embed/_dJN_k0tyyc',
    speakers: [
      {
        name: 'Filip Nicolic',
        photo: FilipPhoto,
      },
    ],
    presentation:
      'eBPF has emerged as a powerful technology for extending the Linux kernel, enabling users to safely and\n' +
      'efficiently run custom code within the kernel. One of the most popular applications of eBPF is in the realm of\n' +
      'networking, where it is used to implement high-performance firewalls and other security-related functionality.\n' +
      '\n' +
      'eBPF is becoming increasingly popular in the cloud-native ecosystem, with many CNCF projects utilizing its\n' +
      'capabilities, including Cilium, Calico, and Pixie to name a few.\n' +
      '\n' +
      'This talk aims to demystify eBPF and demonstrate how it can be used to build a firewall from scratch. By\n' +
      'highlighting core concepts of eBPF, attendees can better understand how it is being used in real-world scenarios,\n' +
      'by various CNCF projects and how it can be applied to their own use cases.',
  },
  {
    id: '06',
    title: 'Responsible AI: The Key to Ethical, Safe and Inclusive Software Development',
    duration: '30 min',
    pdf: '/archive/Lisa Falco - ResponsibleAI.pdf',
    videoSrc: 'https://www.youtube.com/embed/1DzBYzzsbO4',
    speakers: [
      {
        name: 'Lisa Falco',
        photo: LisaFalcoPhoto,
      },
    ],
    presentation:
      'The development of artificial intelligence (AI) has the potential to \n' +
      'revolutionize many aspects of society, but it also poses significant ethical \n' +
      'and societal challenges. Responsible AI refers to the development and use\n' +
      'of AI in a manner that is ethical, transparent, and accountable, and is \n' +
      'crucial to ensure that the potential benefits of AI are realized while \n' +
      'minimizing negative consequences.\n' +
      'In her talk, Lisa Falco will present frameworks and advice to develop \n' +
      'ethical and interpretable AI. The frameworks are based on a long \n' +
      'experience of developing machine learning applications within the \n' +
      'medically regulated field. They cover multiple layers of the development \n' +
      'process - the data, the model, and the human interaction. These are \n' +
      'hands-on frameworks that clearly indicate which considerations are \n' +
      'needed at every phase of the implementation and distributes roles and \n' +
      'responsibilities. \n' +
      'The principles and practices of responsible AI can be extended to the \n' +
      'development of software in general. By placing a focus on ethics, \n' +
      'transparency, and accountability, software development can be done in a \n' +
      'way that is more inclusive and beneficial for society, and that minimizes \n' +
      'negative consequences. Additionally, considering issues such as fairness, \n' +
      'bias, privacy, security, and transparency in the software development \n' +
      'process can help ensure that the software is safe and secure to use.',
  },
  {
    id: '07',
    title: 'What Anime Taught Me About K8s & Tech Careers',
    duration: '30 min',
    pdf: '/archive/Annie Talvasto - What Anime Taught Me about K8s & Tech Careers.pdf',
    videoSrc: 'https://www.youtube.com/embed/AQzImhUOc-A',
    speakers: [
      {
        name: 'Annie Talvasto',
        photo: AnnieTalvastoPhoto,
      },
    ],
    presentation:
      'From One piece and Naruto to Neon Genesis Evangelion and DragonBall, Japanese animation is a cultural phenomena. This session will take you through both the landscape of anime and Kubernetes development, with helpful beginner tips to get you started on your cloud native journey. The session will also cover what the hero’s of East blue and Planet 4032-877 can tech us about career development tech world. Importance of perseverance, inclusion & diversity as well as always having a snack at hand - come and learn how anime can your boost you Kubernetes and tech career to next level!\n',
  },
  {
    id: '08',
    title: 'Buzzing Across the Cloud Native Landscape with eBPF',
    duration: '30 min',
    pdf: '/archive/Bill Mulligan - Buzz or Byte_ eBPF.pdf',
    videoSrc: 'https://www.youtube.com/embed/2KzyYwn68Ew',
    speakers: [
      {
        name: 'Bill Mulligan',
        photo: BillPhoto,
      },
    ],
    presentation:
      'The buzz around eBPF in cloud native is growing quickly and it can be hard to know where to start or how to keep\n' +
      'up. In this talk, Bill will trace how he got into eBPF, explore where eBPF fits on the cloud native landscape, and\n' +
      'teach others how to dive into the hive of activity around eBPF.\n' +
      '\n\n\n' +
      'People just beginning with eBPF will learn how eBPF makes it possible to have efficient networking, observability\n' +
      'without instrumentation, effortless tracing, and real-time security (among other things). Those already familiar with\n' +
      'eBPF will get an overview of the eBPF landscape and learn about many eBPF applications on the cloud native\n' +
      'landscape that allow them to harness the power without needing to dive into the bytecode. The audience will walk\n' +
      'away with an understanding of the buzz around eBPF and knowledge of tools that may solve some of their\n' +
      'problems in networking, observability, and security.',
  },
  {
    id: '09',
    time: '13:30',
    title: 'Streamlined Troubleshooting in Kubernetes',
    duration: '30 min',
    pdf: '/archive/Lena Fuhrimann - Streamlined Kubernetes Troubleshooting.pdf',
    videoSrc: 'https://www.youtube.com/embed/sk6j7_VFhSc',
    speakers: [
      {
        name: 'Lena Fuhrimann',
        photo: LenaPhoto,
      },
    ],
    presentation:
      'In this talk, we will highlight different methods to make debugging and troubleshooting in Kubernetes more streamlined and organized. People tend to mostly make the same mistakes and run into errors others have already dealt with. There are different methodologies and tools that help us to benefit from that and to more easily find where the problem lies when something goes wrong by adhering to clear solving strategies and automation tools.\n' +
      '\n' +
      'We will go through some of these techniques and see the respective open source tools in action. Live coding\n' +
      'included!',
  },
  {
    id: '10',
    title: 'Native Histograms in Prometheus: A Better Histogram Experience for Everyone',
    duration: '30 min',
    pdf: '/archive/Julius Volz - Native Histograms.pdf',
    videoSrc: 'https://www.youtube.com/embed/NDb9yZl1u1Y',
    speakers: [
      {
        name: 'Julius Volz',
        photo: JuliusVolzPhoto,
      },
    ],
    presentation:
      'Histograms are crucial for anyone who wants to track service latency and other numeric value distributions in Prometheus. However, the existing "legacy" histograms in Prometheus come with a number of painful drawbacks: they require manual and static bucket configuration, generate a separate time series for each configured histogram bucket, and thus require you to make hard tradeoffs between a histogram\'s resolution and cost.\n' +
      '\n' +
      'In this talk, Prometheus co-founder Julius Volz will present a new "native" histogram metric type that is currently being added to Prometheus. These native histograms allow you to track value distributions in higher detail at a significantly lower storage and processing cost, while also reducing the manual bucket configuration effort. Julius will explain how native histograms work, how they achieve these key benefits, and how you can use them in Prometheus today in an experimental fashion.',
  },
  {
    id: '11',
    title: 'Tales of Serverless - a story about building scalable applications',
    duration: '30 min',
    pdf: '/archive/Reto Lehmann - Tales of Serverless.pdf',
    videoSrc: 'https://www.youtube.com/embed/1-wD56yUczs',
    speakers: [
      {
        name: 'Reto Lehmann',
        photo: RetoPhoto,
      },
    ],
    presentation:
      'In this talk Reto is going to tell a story about building Scalable Serverless cloud-native Applications. Using the magic of the Knative serverless platform, you are going to experience applications that are going to appear and\n' +
      "disappear. We'll wander the foreign lands of the Serverless ecosystem, guided by fairies, conquering mythical beings and unimaginable challenges. \n" +
      "Together, we'll get to know the mechanics and inner workings of this magical world. Hopefully, by the end of this talk, we'll be able to lift the spell and enchantments to see and understand the mechanics behind the curtains.\n" +
      '\n' +
      'Whether you are a brave developer-knight, a mighty operator-king or simply an interested serverless-bard, this presentation should not be scaled-to-zero.',
  },
  {
    id: '12',
    title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
    duration: '30 min',
    pdf: '/archive/Priya Wadhwa - Securing your Software Supply Chain on Kubernetes with Sigstore.pdf',
    videoSrc: 'https://www.youtube.com/embed/Scca_ubkuM0',
    speakers: [
      {
        name: 'Priya Wadhwa',
        photo: PriyaWadhwaPhoto,
      },
    ],
    presentation:
      'How secure are the images running in your Kubernetes cluster right now? If you don’t know, then this talk is for you! In this talk, Priya Wadhwa will discuss how to determine the composition and vulnerability risk of your images. She’ll cover how to secure your images with easy container signing through Sigstore, and how to enforce policies against your images in your Kubernetes cluster with the Sigstore policy-controller. This talk will demo how to set this up while diving in to the SLSA principles of software supply chain security and how they can be applied to secure a build pipeline. \n',
  },
  {
    id: '13',
    time: '15:15',
    title: 'Closing the Developer Experience Gap of your Container Platforms',
    duration: '30 min',
    pdf: '/archive/Timo Salm - closing-the-developer-experience-gap-of-your-container-platforms.pdf',
    videoSrc: 'https://www.youtube.com/embed/CwoViX_5LPM',
    speakers: [
      {
        name: 'Timo Salm',
        photo: TimoSalmPhoto,
      },
    ],
    presentation:
      'Due to the lack of user focus, many container platforms have a big developer experience gap.\n' +
      "That's not only because building a Kubernetes platform is complex but also because deploying applications on\n" +
      'Kubernetes requires expertise in many Container and Kubernetes concepts. And once developers learn them,\n' +
      'they still must spend a lot of time maintaining containers, writing YAML templates, and orchestrating many moving\n' +
      'Kubernetes parts.\n' +
      'Like in the days when the Waterfall model was the standard for software development, developers today shouldn’t\n' +
      'have to care where and how their applications run and focus on adding business value by implementing new\n' +
      'features.\n' +
      'In this session, we will explore some of the powerful open-source technologies available within the Kubernetes\n' +
      'ecosystem to close the developer experience gap like Backstage, Cloud Native Buildpacks, Knative, and\n' +
      'Cartographer.',
  },
  {
    id: '14',
    time: '16:00',
    title:
      "Process is what naturally follows - a cloud platform's guide on people-first transformation",
    duration: '30 min',
    videoSrc: 'https://www.youtube.com/embed/5z7GXebGc80',
    speakers: [
      {
        name: 'Sebastian Kister',
        photo: SebastianKisterPhoto,
      },
    ],
    presentation:
      "The fastest way to change the world is by making it a business case. Let's talk about real transformation hands-on, about time-to-market and the priorities when it's necessary to change cultural paradigms.",
  },
  {
    id: '15',
    time: '16:00',
    title: 'Bridging Dev and Ops with eBPF: Extending Observability Upwards and Downwards',
    duration: '30 min',
    pdf: '/archive/Raphael Pinson - Bridge Dev & Ops with eBPF.pdf',
    videoSrc: 'https://www.youtube.com/embed/yf_exP0ohOU',
    speakers: [
      {
        name: 'Raphaël Pinson',
        photo: RaphaelPhoto,
      },
    ],
    presentation:
      'eBPF (extended Berkeley Packet Filter) is a powerful and versatile technology that can be used to extend observability in Linux systems. In this talk, we will explore how eBPF can be used to bridge the gap between dev and ops by providing a deeper understanding of the kernel and OS internals as well as the applications running on top. We will discuss how eBPF can be used to extend observability downwards by enabling access to low-level system information and how it can be used to extend observability upwards by providing application-level tracing capabilities.',
  },
  {
    id: '16',
    time: '16:45',
    title: 'eBPF for Security',
    duration: '30 min',
    pdf: '/archive/Liz Rice - eBPF for security.pdf',
    videoSrc: 'https://www.youtube.com/embed/IF7bmm9140Q',
    isKeynote: true,
    speakers: [
      {
        name: 'Liz Rice',
        photo: LizRicePhoto,
      },
    ],
    presentation:
      'eBPF is a ground-breaking technology that allows us to customize the behavior of the operating system’s kernel. In this talk you’ll get an introduction to how eBPF works, and then we’ll dive into how it’s being used for a new generation of security tools. You’ll see how the Cilium team are using their in-depth knowledge of eBPF and the Linux kernel to create Tetragon, a powerful open source solution for security observability and enforcement.',
  },
];

const TITLE = 'Kubernetes Community Day Zürich 2023';
const DATE = '15 June, 2023';

const Archive = () => (
  <section className="safe-paddings pb-20 md:pb-16">
    <div className="container-md text-primary-1">
      <h2 className="text-2xl font-bold leading-snug">{TITLE}</h2>
      <time className="mt-3 block text-lg leading-normal" dateTime="2023-06-15">
        {DATE}
      </time>
      <ul className="mt-8 flex flex-col gap-y-6">
        {ITEMS.map(
          ({ title, duration, isKeynote, speakers, presentation, pdf, videoSrc }, index) => (
            <li
              className="flex items-center gap-x-12 border-b border-gray-10 pb-6 md:flex-col md:items-start"
              key={index}
            >
              <div className="w-[384px] max-w-full shrink-0 md:mb-4 md:w-[480px]">
                {videoSrc ? (
                  <iframe
                    className="max-w-full"
                    allow="autoplay; picture-in-picture; web-share"
                    src={`${videoSrc}?autoplay=0&mute=0&rel=0`}
                    title={title}
                    width="100%"
                    height="220"
                    allowFullScreen
                  />
                ) : (
                  <div className="h-[220px] bg-gray-11" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-x-8">
                  {speakers && speakers.length > 0 && (
                    <ul className="relative inline-flex gap-x-5 sm:gap-x-4">
                      {speakers.map(({ name, photo }, index) => (
                        <li className="" key={index}>
                          <figure className="flex items-center gap-x-2">
                            <img
                              className="h-7 w-7 rounded-full"
                              src={photo}
                              width={28}
                              height={28}
                              alt={name}
                              loading="lazy"
                            />
                            <figcaption className="text-sm font-medium leading-none text-primary-5 md:text-[13px]">
                              {name}
                            </figcaption>
                          </figure>
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="relative rounded-full bg-yellow px-2 py-2 text-[13px] font-semibold leading-none tracking-tighter text-primary-1 before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 md:text-xs">
                    {duration}
                  </span>
                  {isKeynote && (
                    <span className="relative rounded-full bg-blue-1 px-2 py-2 text-xs font-semibold leading-none tracking-tighter text-white before:absolute before:top-0 before:bottom-0 before:-left-4 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-primary-3 sm:hidden">
                      Keynote
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">{title}</h3>
                <div
                  className="overflowed-text mt-4 mb-0 text-lg leading-normal"
                  dangerouslySetInnerHTML={{ __html: presentation }}
                />
                {pdf && (
                  <Link
                    className="mt-6 inline-block font-semibold"
                    theme="blue-underlined"
                    to={pdf}
                    download
                  >
                    Download PDF
                  </Link>
                )}
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  </section>
);

export default Archive;
