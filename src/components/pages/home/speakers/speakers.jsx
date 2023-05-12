import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Modal from 'components/shared/modal';
import LINKS from 'constants/links';

import AdrianReberPhoto from './images/adrian-reber-photo.jpg';
import AnnieTalvastoPhoto from './images/annie-talvasto-photo.jpg';
import BillPhoto from './images/bill-mulligan-photo.jpg';
import FilipPhoto from './images/filip-nicolic-photo.jpg';
import JuliusVolzPhoto from './images/julius-volz-photo.jpg';
import KatieGamanjiPhoto from './images/katie-gamanji-photo.jpg';
import LenaPhoto from './images/lena-fuhrimann-photo.jpg';
import LisaFalcoPhoto from './images/lisa-falco-photo.jpg';
import LizRicePhoto from './images/liz-rice-photo.jpg';
import MatthiasPhoto from './images/matthias-bertschy-photo.jpg';
import MaxKorbacherPhoto from './images/max-korbacher-photo.jpg';
import PriyaWadhwaPhoto from './images/priya-wadhwa-photo.jpg';
import RetoLehmannPhoto from './images/reto-lehmann-photo.jpg';
import RicardoRochaPhoto from './images/ricardo-rocha-photo.jpg';
import SebastianKisterPhoto from './images/sebastian-kister-photo.jpg';
import ThomasGrafPhoto from './images/thomas-graf-photo.jpg';
import TimoSalmPhoto from './images/timo-salm-photo.jpg';
import ChevronDown from './svg/arrow-down.inline.svg';

const TITLE = 'Speakers';

const ITEMS = [
  {
    name: 'Thomas Graf',
    position: 'CTO & CO-Founder <br/> Isovalent',
    content:
      'Thomas is the Co-Founder and CTO of Isovalent, long-time eBPF developer, and one of the creators of the Cilium project. Before working on Cilium, and eBPF, Thomas was a Linux kernel developer for 15+ years focusing on networking, security, and eBPF. Thomas currently serves as the Co-Chair of the eBPF Foundation. When not working on open source software, Thomas is enjoying the Swiss mountains on bike and foot with his family.',
    photo: ThomasGrafPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '9:00 AM',
      title: 'Simplifying multi-cloud networking with Cilium',
      duration: '30 min',
      content: '',
    },
  },
  {
    name: 'Liz Rice',
    position: 'Chief Open Source Office <br/> Isovalent',
    content:
      "Liz Rice is Chief Open Source Officer with eBPF specialists Isovalent, creators of the Cilium cloud native networking, security and observability project. She was Chair of the CNCF's Technical Oversight Committee in 2019-2022, and Co-Chair of KubeCon + CloudNativeCon in 2018. She is also the author of Container Security, published by O'Reilly. She has a wealth of software development, team, and product management experience from working on network protocols and distributed systems, and in digital technology sectors such as VOD, music, and VoIP. When not writing code, or talking about it, Liz loves riding bikes in places with better weather than her native London, competing in virtual races on Zwift, and making music under the pseudonym Insider Nine.",
    photo: LizRicePhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '9:00 AM',
      title: 'Simplifying multi-cloud networking with Cilium',
      duration: '30 min',
      content: '',
    },
  },
  {
    name: 'Katie Gamanji',
    position: 'Senior Field Engineer at Apple <br/> TOC at CNCF',
    content:
      'Katie is a cloud native leader, practitioner, and contributor, currently in a Senior Kubernetes Field Engineer role at Apple and a TOC for CNCF (Cloud Native Computing Foundation).  As a cloud platform engineer, Katie has built the infrastructure for Conde Nast and American Express, gravitating towards cloud-native technologies, principles, and Kubernetes as the focal point. At CNCF (Cloud Native Computing Foundation), she was a Technical Oversight Committee member and led the CNCF End User Community.  At present, Katie advises the Keptn startup and is part of the OpenUK C-suite.',
    photo: KatieGamanjiPhoto,
    twitterUrl: 'https://twitter.com/k_gamanji',
    linkedInUrl: 'https://www.linkedin.com/in/katie-gamanji/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '1:30 PM',
      title: 'Reverse Engineering Cloud Native: Interoperability and Community',
      duration: '30 min',
      content:
        'Kubernetes has become the default container orchestrator framework, setting the standards for application deployment in a distributed environment. In the past years, numerous tools have been developed to extend Kubernetes capabilities and enhance its features. Simultaneously, the expansion of the technology landscape prompted the growth of the adopter base and the number of scenarios where cloud native can be applied. The organic adoption and development of new tools, created the ecosystem and community as we know it today.\n' +
        '\n' +
        "This keynote will feature the core principles that define the next generation's identity of cloud native practitioners using a reverse engineering approach. It will present the interoperability of tools, inclusivity at the community and adopters level, and a culture of change and education that drives the ubiquity of the cloud native.",
    },
  },
  {
    name: 'Julius Volz',
    position: 'Co-Founder of prometheus.io <br/> Founder at PromLabs',
    content:
      'Julius co-founded the Prometheus monitoring system and originally led the project to success at SoundCloud and beyond. He now focuses on growing the Prometheus community, started PromCon, the first conference around Prometheus, and helps companies use and adapt Prometheus through his company PromLabs. Before creating Prometheus at SoundCloud, Julius was a Site Reliability Engineer at Google.',
    photo: JuliusVolzPhoto,
    twitterUrl: 'https://twitter.com/juliusvolz',
    linkedInUrl: 'https://www.linkedin.com/in/julius-volz/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/mvhzxh/',
    instagramUrl: '',
    websiteUrl: 'https://juliusv.com/',
    schedule: {
      time: '3:00 PM',
      title: 'Native Histograms in Prometheus: A Better Histogram Experience for Everyone',
      duration: '30 min',
      content:
        'Histograms are crucial for anyone who wants to track service latency and other numeric value distributions in Prometheus. However, the existing "legacy" histograms in Prometheus come with a number of painful drawbacks: they require manual and static bucket configuration, generate a separate time series for each configured histogram bucket, and thus require you to make hard tradeoffs between a histogram\'s resolution and cost.\n' +
        '\n' +
        'In this talk, Prometheus co-founder Julius Volz will present a new "native" histogram metric type that is currently being added to Prometheus. These native histograms allow you to track value distributions in higher detail at a significantly lower storage and processing cost, while also reducing the manual bucket configuration effort. Julius will explain how native histograms work, how they achieve these key benefits, and how you can use them in Prometheus today in an experimental fashion.',
    },
  },
  {
    name: 'Annie Talvasto',
    position: 'CNCF Ambassador <br/> Azure MVP',
    content:
      'Annie Talvasto is an international technology speaker, CNCF Ambassador, Azure MVP and specialist in Kubernetes & open source. Annie hosts & produces the Cloud Gossip podcast and has been a co-organizer of Kubernetes & CNCF Finland meetup since 2017. She has worked at various tech companies from cloud start-ups to enterprises. Annie has spoken at tech conferences on multiple continents, including KubeCon + CloudNativeCon, Microsoft Build & Ignite, NDC, KCDC, Global Azure, Future Tech and more. During her career she has spoken to more than 30,000 developers at User Groups meetings & Conferences.',
    photo: AnnieTalvastoPhoto,
    twitterUrl: 'https://twitter.com/AnnieTalvasto',
    linkedInUrl: 'https://www.linkedin.com/in/talvasto/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/mwwdtj/#/about',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '11:30 AM',
      title: 'What Anime Taught Me About K8s & Tech Careers',
      duration: '30 min',
      content:
        'From One piece and Naruto to Neon Genesis Evangelion and DragonBall, Japanese animation is a cultural phenomena. This session will take you through both the landscape of anime and Kubernetes development, with helpful beginner tips to get you started on your cloud native journey. The session will also cover what the hero’s of East blue and Planet 4032-877 can tech us about career development tech world. Importance of perseverance, inclusion & diversity as well as always having a snack at hand - come and learn how anime can your boost you Kubernetes and tech career to next level!\n',
    },
  },
  {
    name: 'Ricardo Rocha',
    position: 'Computing Engineer CERN <br/> TOC CNCF',
    content:
      'Ricardo is a Computing Engineer in the CERN cloud team focusing on containerized deployments, networking and more recently machine learning platforms. He has led for several years the internal effort to transition services and workloads to use cloud native technologies, as well as dissemination and training efforts. Ricardo got CERN to join the CNCF and is currently in the TOC and a lead of the CNCF Research User Group. Prior to this work Ricardo helped develop the grid computing infrastructure serving the Large Hadron Collider (LHC).',
    photo: RicardoRochaPhoto,
    twitterUrl: 'https://twitter.com/ahcorporto',
    linkedInUrl: 'https://www.linkedin.com/in/ricardo-rocha-739aa718/',
    githubUrl: 'https://github.com/rochaporto',
    communityUrl: 'https://community.cncf.io/u/m46hr5/#/about',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '10:45 AM',
      title: 'To be announced',
      duration: '30 min',
      content:
        'The move to containers has significantly improved the way services and workloads are deployed and managed in large scale computing infrastructures. It also brought new challenges that can be handled with intrusive changes in the workflows or hidden in the stack. This session will focus on one of those challenges and go in detail on how you can efficiently distribute very large software packages across thousands of nodes for your batch, HPC or ML workloads.',
    },
  },
  {
    name: 'Max Körbächer',
    position: 'Co-Founder of Liquid Reply <br/> Co-Chair CNCF TAG Environmental Sustainability',
    content:
      'Max is Co-Founder and Cloud Native Advocate at Liquid Reply. He is Co-Chair of the CNCF Environmental Sustainability Technical Advisory Group and served 3 years at the Kubernetes release team. Besides, he is part of different OSS Advisory Boards. His focus is on designing and building cloud-native solutions on/with Kubernetes and platform engineering to simplify the current challenges of complex systems.',
    photo: MaxKorbacherPhoto,
    twitterUrl: 'https://twitter.com/mkoerbi',
    linkedInUrl: 'https://www.linkedin.com/in/maxkoerbaecher/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/m76gha/#/about',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '9:45 AM',
      title: 'The state of Green Washing - or how to build sustainable systems with Kubernetes',
      duration: '30 min',
      content:
        'Kubernetes is not the answer to everything, but where it is, it is a great companion to designing systems and putting environmental sustainability into your mind. But being eco-friendly invites people to greenwash their intentions, so let us start the story from the end and clarify some myths. Saving money on infrastructure may reduce your Carbon impact, but we can do more. In this presentation, we will look at what is currently possible, what are the recent developments and what we need in the future to create a carbon-aware system landscape. You will learn how designing system architectures for eco-friendliness, will have a sustainable impact, in many ways.',
    },
  },
  {
    name: 'Priya Wadhwa',
    position: 'Software Engineer <br/> Chainguard',
    content:
      'Priya Wadhwa is an engineering manager working on open source security at Chainguard. She serves on the Sigstore Technical Steering Committee and is a maintainer on many Sigstore projects and Tekton Chains. Priya is passionate about making security easy and available for everyone.',
    photo: PriyaWadhwaPhoto,
    twitterUrl: 'https://twitter.com/priyawadhwa16',
    linkedInUrl: '',
    githubUrl: 'https://github.com/priyawadhwa',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '4:00 PM',
      title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
      duration: '30 min',
      content:
        'How secure are the images running in your Kubernetes cluster right now? If you don’t know, then this talk is for you! In this talk, Priya Wadhwa will discuss how to determine the composition and vulnerability risk of your images. She’ll cover how to secure your images with easy container signing through Sigstore, and how to enforce policies against your images in your Kubernetes cluster with the Sigstore policy-controller. This talk will demo how to set this up while diving in to the SLSA principles of software supply chain security and how they can be applied to secure a build pipeline. \n',
    },
  },
  {
    name: 'Lisa Falco',
    position: 'Consultant in Medical & Responsible AI <br/> Zühlke Group',
    content:
      'Lisa is a Lead Consultant in AI & Data with 15 years of industry experience in medical applications of Data Science and in bringing medical software products to market. She combines solid expertise in Machine Learning and AI with a passion for developing user-centric products, particularly in healthcare and medical technology. Among others she was previously Director of Data Science at Ava Women and Head of Product at Pipra. She has a PhD in Biomedical Imaging from EPFL, Switzerland.',
    photo: LisaFalcoPhoto,
    twitterUrl: 'https://twitter.com/lisafalco',
    linkedInUrl: 'https://www.linkedin.com/in/lisa-falco-jon',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: 'https://www.instagram.com/lisafalco_dsw/',
    websiteUrl: 'https://lisafalco.com',
    schedule: {
      time: '11:30 AM',
      title: 'Responsible AI: The Key to Ethical, Safe and Inclusive Software Development',
      duration: '30 min',
      content:
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
  },
  {
    name: 'Sebastian Kister',
    position: 'Lead Kubernetes <br/> Competence Center Audi',
    content:
      'Sebastian is an awarded global thought leader for enterprise transformation and counts world wide as transformation evangelist. He is leading a competence center in IT infrastructure and aligning all brands in the VW Group with the mission to once again boldly go where no one has gone before. As an agile digital native with countless successfully implemented projects in 7 industries he can be described as well as a startup-professional who helped to shape products from genesis to market leader with bleeding-edge technology. Always striving to innovate and question the status quo, he helps to break dogmas, implement a new culture, and never settles while pursuing constant progress.',
    photo: SebastianKisterPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/sebastiankister/',
    githubUrl: '',
    communityUrl: 'https://community.cncf.io/u/mrku63/#/about',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '4:45 PM',
      title:
        "Process is what naturally follows - a cloud platform's guide on people-first transformation",
      duration: '30 min',
      content:
        "The fastest way to change the world is by making it a business case. Let's talk about real transformation hands-on, about time-to-market and the priorities when it's necessary to change cultural paradigms.",
    },
  },
  {
    name: 'Reto Lehmann',
    position: 'Principal Software Engineer at Red Hat',
    content:
      'Reto Lehmann is a Principal Software Engineer at Red Hat and a contributor to the Knative project. He has been working on its various components, including Knative Serving, Client, and sandbox repositories. Reto has over ten years of experience in the field of containers and cloud-native technology, having built Kubernetes-based platforms\n' +
      'both on-premise and in various public clouds.\n' +
      '\n' +
      'Before his work at Red Hat, Reto gained valuable experience as a consultant, helping organizations adopt cloud- native technology and implement effective solutions. He is also an adjunct professor, where he teaches courses about these topics.',
    photo: RetoLehmannPhoto,
    twitterUrl: '',
    linkedInUrl: 'https://www.linkedin.com/in/retocode/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '3:00 PM',
      title: 'Tales of Serverless - a story about building scalable applications',
      duration: '30 min',
      content:
        'In this talk Reto is going to tell a story about building Scalable Serverless cloud-native Applications. Using the magic of the Knative serverless platform, you are going to experience applications that are going to appear and\n' +
        "disappear. We'll wander the foreign lands of the Serverless ecosystem, guided by fairies, conquering mythical beings and unimaginable challenges. \n" +
        "Together, we'll get to know the mechanics and inner workings of this magical world. Hopefully, by the end of this talk, we'll be able to lift the spell and enchantments to see and understand the mechanics behind the curtains.\n" +
        '\n' +
        'Whether you are a brave developer-knight, a mighty operator-king or simply an interested serverless-bard, this presentation should not be scaled-to-zero.',
    },
  },
  {
    name: 'Bill Mulligan',
    position: 'Cilium and eBPF Community Pollinator',
    content:
      'Bill Mulligan is a cloud native pollinator and community builder. He has given talks and written articles about\n' +
      'building the business case for cloud native. While at CNCF he restarted the Kubernetes Community Day program\n' +
      'and worked to grow the student community. He is currently at Isovalent strengthening the Cilium and eBPF\n' +
      'communities.',
    photo: BillPhoto,
    twitterUrl: 'https://twitter.com/breakawaybilly',
    linkedInUrl: 'https://www.linkedin.com/in/bamulligan/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '2:15 PM',
      title: 'Buzzing Across the Cloud Native Landscape with eBPF',
      duration: '30 min',
      content:
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
  },
  {
    name: 'Adrian Reber',
    position: 'Senior Principal Software Engineer at Red Hat',
    content:
      'Adrian is a Senior Principal Software Engineer at Red Hat and is migrating processes at least since 2010. He\n' +
      'started to migrate processes in a high performance computing environment and at some point he migrated so\n' +
      'many processes that he got a PhD for that. Most of the time he is now migrating containers but occasionally he still\n' +
      'migrates single processes.',
    photo: AdrianReberPhoto,
    twitterUrl: '',
    linkedInUrl: '',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '9:45 AM',
      title: 'Forensic container checkpointing and analysis',
      duration: '30 min',
      content:
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
  },
  {
    name: 'Filip Nikolic',
    position: 'Architect Owner Kubernetes Postfinance',
    content:
      'Filip works for a financial institute and is a strong advocate of cloud-native technologies. As a speaker at the\n' +
      'conference, Filip will share insights into why an increasing number of CNCF projects decide to make use of eBPF.',
    photo: FilipPhoto,
    twitterUrl: 'https://twitter.com/f1kook1f',
    linkedInUrl: 'https://www.linkedin.com/in/filip-nikolic/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '10:45 AM',
      title: 'Demystifying eBPF - eBPF Firewall from scratch',
      duration: '30 min',
      content:
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
  },
  {
    name: 'Timo Salm',
    position: 'Lead Developer Experience Solutions Engineer VMware',
    content:
      'Timo Salm is based out of Stuttgart in southwest Germany and in the role of the first VMware Tanzu Solutions\n' +
      'Engineer for Developer Experience in EMEA with a focus on VMware Tanzu Application Platform and commercial\n' +
      "Spring products. In this role, he’s responsible for educating customers on these products' value, vision, and\n" +
      'strategy and ensuring that they succeed by working closely on different levels of abstractions of modern\n' +
      'applications and modern infrastructure.\n' +
      'Before Timo joined Pivotal and VMware, he worked for more than seven years for consulting firms in the\n' +
      'automotive industry as a software architect and full-stack developer on projects for customer-facing products.',
    photo: TimoSalmPhoto,
    twitterUrl: 'https://twitter.com/salmto',
    linkedInUrl: 'https://www.linkedin.com/in/timo-salm-8779a680/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '4:00 PM',
      title: 'Closing the Developer Experience Gap of your Container Platforms',
      duration: '30 min',
      content:
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
  },
  {
    name: 'Lena Fuhrimann',
    position: 'Co-Founder & Cloud Software Architect bespinian',
    content:
      'Lena is a passionate software engineer and architect. Together with Mathis Kretz she founded the company\n' +
      'bespinian in 2019 and has since worked with many customers and interesting technologies. Her main focus lies on\n' +
      'security, Kubernetes, serverless technologies, public clouds and Infrastructure as Code. However, she has also\n' +
      'worked a lot with Kubernetes and its ecosystem and has deployed many applications to those platforms using\n' +
      'automation and GitOps. She uses Arch btw.',
    photo: LenaPhoto,
    twitterUrl: 'https://twitter.com/the_cloudlena',
    linkedInUrl: 'https://www.linkedin.com/in/lena-fuhrimann/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '2:15 PM',
      title: 'Streamlined Troubleshooting in Kubernetes',
      duration: '30 min',
      content:
        'In this talk, we will highlight different methods to make debugging and troubleshooting in Kubernetes more streamlined and organized. People tend to mostly make the same mistakes and run into errors others have already dealt with. There are different methodologies and tools that help us to benefit from that and to more easily find where the problem lies when something goes wrong by adhering to clear solving strategies and automation tools.\n' +
        '\n' +
        'We will go through some of these techniques and see the respective open source tools in action. Live coding\n' +
        'included!',
    },
  },
  {
    name: 'Matthias Bertschy',
    position: 'Senior Kubernetes Developer at ARMO',
    content:
      'Matthias is a Senior Kubernetes Developer at ARMO working on Kubescape, the open-source Kubernetes security\n' +
      'platform. He started his career in 2005 as a System Administrator. In 2011 he joined a leading security solution\n' +
      'provider in Switzerland to become a Security System Engineer. He got certified as an Ethical Hacker in 2012\n' +
      '(GPEN certification) and validated his first four years as a professional with a CISSP in 2015. He discovered\n' +
      'Kubernetes in 2016 and has become a regular contributor, member of SIG Node and a reviewer for the kubelet\n' +
      'and test-infra. During the last 5 years, he has helped several Swiss banks through their digital transformations in\n' +
      'Senior DevOps Engineer, Productivity Manager and Platform Architect positions. His list of certifications include Red\n' +
      'Hat Certified Architect, every Kubernetes certifications, and many Linux Foundation courses on Open Source\n' +
      'Management & Strategy.',
    photo: MatthiasPhoto,
    twitterUrl: 'https://twitter.com/matthyx',
    linkedInUrl: 'https://www.linkedin.com/in/matthias-bertschy-b427b815/',
    githubUrl: '',
    communityUrl: '',
    instagramUrl: '',
    websiteUrl: '',
    schedule: {
      time: '4:45 PM',
      title: "What We've Learned from Scanning 10K+ Kubernetes Clusters",
      duration: '30 min',
      content:
        'The number of misconfigurations, unpatched vulnerabilities, & overly-privileged users in K8s systems is\n' +
        "ASTOUNDING. We learned this from analyzing the data from more than 10K+ unique K8s cluster scans, and we've\n" +
        'learned a great deal about the state of K8s risk, compliance, & security vulnerabilities.\n' +
        '\n' +
        "In this talk we'll shed light on the most common misconfigurations according to multiple frameworks (NSA-CISA,\n" +
        'MITRE ATT&CK), alongside known vulnerabilities, & RBAC violations in CI/CD pipelines.\n' +
        '\n' +
        "We'll also provide interesting insights on why and where Kubernetes deployments mostly commonly fail and\n" +
        'statistics on which controls fail most, as well as the weak spots and gotchas to pay attention to. Stick around\n' +
        "though, as we'll wrap up with some simple measures your can take immediately to work towards eliminating these\n" +
        'risks and improving your overall cloud native security posture.',
    },
  },
];

// eslint-disable-next-line react/prop-types
const Speakers = ({ location }) => {
  const [isSpeakersOpen, setIsSpeakersOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPresentationShow, setIsPresentationShow] = useState(false);
  const [modalDataId, setModalDataId] = useState(0);

  const handleModalShow = (id) => {
    document.body.classList.add('overflow-hidden');
    setIsModalVisible(true);
    setModalDataId(id);
  };

  const handleModalHide = () => {
    document.body.classList.remove('overflow-hidden');
    setIsModalVisible(false);
    setIsPresentationShow(false);
    setModalDataId(0);
  };

  const handleShowMoreClick = () => {
    setIsSpeakersOpen((isSpeakersOpen) => !isSpeakersOpen);
  };

  const handlePresentationShow = () => {
    setIsPresentationShow(!isPresentationShow);
  };

  useEffect(() => {
    if (typeof window !== `undefined`) {
      // eslint-disable-next-line react/prop-types
      const { state = {} } = location;

      if (state?.modalId) {
        const element = document.getElementById('speakers');

        window.scrollTo({
          top: window.pageYOffset + element.getBoundingClientRect().top,
        });

        handleModalShow(Number(state.modalId));
        setIsPresentationShow(true);
      }
    }
  }, [location]);

  return (
    <section className="safe-paddings relative bg-white pb-40 lg:pb-32 md:py-24 sm:py-16">
      <div className="container flex flex-col sm:items-center">
        <h2
          className="text-6xl font-bold leading-tight text-primary-1 md:text-center"
          id={LINKS.speakers.id}
        >
          {TITLE}
        </h2>
        <ul className="mt-14 grid w-full grid-cols-4 gap-8 lg:gap-6 md:grid-cols-3 md:justify-items-center md:gap-4 xs:flex xs:flex-wrap xs:justify-evenly [@media(max-width:620px)]:grid-cols-2">
          {ITEMS.map(({ name, position, photo }, index) => (
            <li
              className={clsx(
                'group flex w-[240px] cursor-pointer flex-col lg:w-52 md:w-48 sm:w-auto sm:max-w-[200px]',
                index > 7 && !isSpeakersOpen ? 'hidden' : 'flex'
              )}
              key={index}
              onClick={() => handleModalShow(index)}
            >
              <img
                className="w-full"
                src={photo}
                width={240}
                height={284}
                loading="lazy"
                alt={name}
              />
              <p className="mt-2.5 text-2xl font-bold leading-normal text-primary-1 transition-colors duration-200 group-hover:text-blue-1 sm:text-left">
                {name}
              </p>
              <span
                className="mt-1.5 text-primary-1"
                dangerouslySetInnerHTML={{ __html: position }}
              />
            </li>
          ))}
        </ul>
        <button
          className="mx-auto mt-10 flex items-center px-5 py-2 text-center text-lg font-bold leading-none text-primary-1 transition-colors duration-200"
          type="button"
          onClick={handleShowMoreClick}
        >
          <span>{isSpeakersOpen ? 'Hide all speakers' : 'View all speakers'}</span>
          <ChevronDown
            className={clsx(
              'ml-2 block w-2.5 shrink-0 transition-[transform,color] duration-200',
              isSpeakersOpen ? 'rotate-180' : ''
            )}
          />
        </button>
        <Modal
          modalData={ITEMS[modalDataId]}
          isVisible={isModalVisible}
          isPresentationShow={isPresentationShow}
          onModalHide={handleModalHide}
          onPresentationShow={handlePresentationShow}
        />
      </div>
    </section>
  );
};

export default Speakers;
