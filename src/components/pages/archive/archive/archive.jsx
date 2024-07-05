/* eslint-disable react/prop-types */
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import DisketteIcon from 'icons/diskette.inline.svg';
import abdelSghiouarPhoto from 'images/archive-2024/speakers/abdel-sghiouar.jpg';
import alexHungenbergPhoto from 'images/archive-2024/speakers/alexander-hungenberg.jpg';
import andreasGrabnerPhoto from 'images/archive-2024/speakers/andreas-grabner.jpg';
import benoitEntzmannPhoto from 'images/archive-2024/speakers/benoit-entzmann.jpg';
import ChayTePhoto from 'images/archive-2024/speakers/chay-te.jpg';
import christopheTafaniPhoto from 'images/archive-2024/speakers/christophe-tafani-dereeper.jpg';
import clementNussbaumerPhoto from 'images/archive-2024/speakers/clément-nussbaumer.jpg';
import cyrillTroxlerPhoto from 'images/archive-2024/speakers/cyrill-troxler.jpg';
import dimitrisAndreadisPhoto from 'images/archive-2024/speakers/dimitris-andreadis.jpg';
import franziskaBuhlerPhoto from 'images/archive-2024/speakers/franziska-buhler.jpg';
import jonasFelixPhoto from 'images/archive-2024/speakers/jonas-felix.jpg';
import katieGamanjiPhoto from 'images/archive-2024/speakers/katie-gamanji.jpg';
import linSunPhoto from 'images/archive-2024/speakers/lin-sun.jpg';
import mathisKretzPhoto from 'images/archive-2024/speakers/mathis-kretz.jpg';
import raymondDeJongPhoto from 'images/archive-2024/speakers/raymond-de-jong.jpg';
import tiffanyJerniganPhoto from 'images/archive-2024/speakers/tiffany-jernigan.jpg';
import viktorFarcicPhoto from 'images/archive-2024/speakers/viktor-farcic.png';
import whitneyLeePhoto from 'images/archive-2024/speakers/whitney-lee.jpg';
import adrianPhoto from 'images/schedule-2023/adrian-reber-photo.jpg';
import annieTalvastoPhoto from 'images/schedule-2023/annie-talvasto-photo.jpg';
import billPhoto from 'images/schedule-2023/bill-mulligan-photo.jpg';
import filipPhoto from 'images/schedule-2023/filip-nicolic-photo.jpg';
import juliusVolzPhoto from 'images/schedule-2023/julius-volz-photo.jpg';
import lenaPhoto from 'images/schedule-2023/lena-fuhrimann-photo.jpg';
import lisaFalcoPhoto from 'images/schedule-2023/lisa-falco-photo.jpg';
import lizRicePhoto from 'images/schedule-2023/liz-rice-photo.jpg';
import maxKorbacherPhoto from 'images/schedule-2023/max-korbacher-photo.jpg';
import priyaWadhwaPhoto from 'images/schedule-2023/priya-wadhwa-photo.jpg';
import raphaelPhoto from 'images/schedule-2023/raphael-photo.jpg';
import retoPhoto from 'images/schedule-2023/reto-lehmann-photo.jpg';
import ricardoRochaPhoto from 'images/schedule-2023/ricardo-rocha-photo.jpg';
import sebastianKisterPhoto from 'images/schedule-2023/sebastian-kister-photo.jpg';
import thomasGrafPhoto from 'images/schedule-2023/thomas-graf-photo.jpg';
import timoSalmPhoto from 'images/schedule-2023/timo-salm-photo.jpg';

import Separator from './svg/separator.inline.svg';

// TODO: merge with ITEMS array from components/pages/schedule
const items = {
  2023: [
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
          photo: thomasGrafPhoto,
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
          photo: maxKorbacherPhoto,
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
          photo: adrianPhoto,
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
          photo: ricardoRochaPhoto,
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
          photo: filipPhoto,
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
          photo: lisaFalcoPhoto,
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
          photo: annieTalvastoPhoto,
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
          photo: billPhoto,
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
          photo: lenaPhoto,
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
          photo: juliusVolzPhoto,
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
          photo: retoPhoto,
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
          photo: priyaWadhwaPhoto,
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
          photo: timoSalmPhoto,
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
          photo: sebastianKisterPhoto,
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
          photo: raphaelPhoto,
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
          photo: lizRicePhoto,
        },
      ],
      presentation:
        'eBPF is a ground-breaking technology that allows us to customize the behavior of the operating system’s kernel. In this talk you’ll get an introduction to how eBPF works, and then we’ll dive into how it’s being used for a new generation of security tools. You’ll see how the Cilium team are using their in-depth knowledge of eBPF and the Linux kernel to create Tetragon, a powerful open source solution for security observability and enforcement.',
    },
  ],
  2024: [
    {
      id: '01',
      title:
        'Reflections on a decade of Kubernetes. How it has been and what the future is holding for us',
      duration: '30 min',
      pdf: '',
      videoSrc: 'https://www.youtube.com/embed/rl54_b64IgQ',
      speakers: [
        {
          name: 'Abdel Sghiouar',
          photo: abdelSghiouarPhoto,
        },
      ],
      presentation:
        'It’s undeniable that Kubernetes changed the Tech industry. It changed the way we build and deploy workloads. True there are still organizations out there doing it the old school way. ',
    },
    {
      id: '02',
      title:
        'Kubernetes at the Edge - How Roche is on the way to manage 1000+ clusters in Hospitals & Labs',
      duration: '30 min',
      pdf: '/archive-2024/Kubernetes at the Edge.pdf',
      videoSrc: 'https://www.youtube.com/embed/2KZzuOYc5vI',
      speakers: [
        {
          name: 'Alexander Hungenberg',
          photo: alexHungenbergPhoto,
        },
      ],
      presentation:
        'The healthcare sector is heavily regulated. Is it still possible to bring truly innovative software solutions to the market? Is it okay to use state-of-the-art technologies like the following? - Kubernetes - Cilium - Talos OS',
    },
    {
      id: '03',
      title:
        'Successful Cloud Native Platform Engineering – Hype vs Reality - And a lot of Best Practices',
      duration: '30 min',
      pdf: '/archive-2024/SuccessfulPlatformEngineering.pdf',
      videoSrc: 'https://www.youtube.com/embed/CLGrm4eFBoo',
      speakers: [
        {
          name: 'Andreas Grabner',
          photo: andreasGrabnerPhoto,
        },
      ],
      presentation:
        'Only 40% of engineering time is productive, and 36% of engineers leave organizations because of bad developer experience as organizations try to adopt cloud native technologies and practices!',
    },
    {
      id: '04',
      title: 'Oh No Our Kubernetes Cluster Has Been Compromised! Will YOU Save the Day?',
      duration: '30 min',
      pdf: '/archive-2024/Oh No our K8s cluster has been compromised.pdf',
      videoSrc: 'https://www.youtube.com/embed/2kaxA7kzZgM',
      speakers: [
        {
          name: 'Benoit Entzmann',
          photo: benoitEntzmannPhoto,
        },
        {
          name: 'Chay Te',
          photo: ChayTePhoto,
        },
      ],
      presentation:
        'We’ve carefully configured our Kubernetes cluster following security best practices. One of us is even Certified Kubernetes Security Specialist so we are confident our cluster is safe',
    },
    {
      id: '06',
      title: '"PIVOT!" — Bouncing between your app, your cluster and your cloud',
      duration: '30 min',
      pdf: '/archive-2024/"PIVOT!" — Bouncing between your app, your cluster and your cloud.pdf',
      videoSrc: 'https://www.youtube.com/embed/akgkusILt-w',
      speakers: [
        {
          name: 'Christophe Tafani-Dereeper',
          photo: christopheTafaniPhoto,
        },
      ],
      presentation:
        "Most organizations that use Kubernetes in public cloud environments use a managed service such as Amazon EKS or Google GKE. But that's only one part of the story; other pieces of infrastructure such as databases, object storage or legacy workloads generally live outside the cluster.",
    },
    {
      id: '07',
      title: 'RUD: Rapid Unscheduled Deletion of Critical Infrastructure Workloads',
      duration: '30 min',
      pdf: '/archive-2024/RUD Rapid Unscheduled Deletion of.pdf',
      videoSrc: 'https://www.youtube.com/embed/icsSFpg8QoM',
      speakers: [
        {
          name: 'Clément Nussbaumer',
          photo: clementNussbaumerPhoto,
        },
      ],
      presentation:
        'Managing Kubernetes clusters often involves deploying a variety of infrastructure workloads for tasks like observability (log/metric collection), security (validation webhooks), monitoring (DNS, network), and more.',
    },
    {
      id: '08',
      title: 'Letting Your Containers Dream of Electric Sheep',
      duration: '30 min',
      pdf: '/archive-2024/Letting Your Containers Dream of Electric Sheep.pdf',
      videoSrc: 'https://www.youtube.com/embed/pMsrlwpvTBw',
      speakers: [
        {
          name: 'Cyrill Troxler',
          photo: cyrillTroxlerPhoto,
        },
      ],
      presentation:
        'If you have ever used Heroku, you might be familiar with a feature where your dyno will go to "sleep" when idle to save on resources',
    },
    {
      id: '09',
      title: 'Crafting Intelligent Cloud Native applications with Quarkus',
      duration: '30 min',
      pdf: '/archive-2024/Crafting Intelligent Applications with Quarkus.pdf',
      videoSrc: 'https://www.youtube.com/embed/sRwhQzwi2qY',
      speakers: [
        {
          name: 'Dimitris Andreadis',
          photo: dimitrisAndreadisPhoto,
        },
      ],
      presentation:
        'Quarkus was released on March 2019 in a galaxy not too far away (actually Neuchâtel, Switzerland) by a team of engineers that dreamed of supercharging Java for Cloud/Kubernetes native deployments, while bringing Joy back to Developers.',
    },
    {
      id: '11',
      title: 'Securing Applications and Managing WAFs at a large scale',
      duration: '30 min',
      pdf: '/archive-2024/Securing_applications_and_managing_WAFs_at_a_large_scale.pdf',
      videoSrc: 'https://www.youtube.com/embed/LFSdsGhC-mM',
      speakers: [
        {
          name: 'Franziska Bühler',
          photo: franziskaBuhlerPhoto,
        },
      ],
      presentation:
        'The disclosure of vulnerabilities often triggers a sense of urgency among operational and security teams. This talk sheds light on how a Web Application Firewall (WAF) serves',
    },
    {
      id: '12',
      title: 'KubeCapture: A Live Hacking Showcase on Kubernetes Security',
      duration: '30 min',
      pdf: '',
      videoSrc: 'https://www.youtube.com/embed/I97CahKJAdg',
      speakers: [
        {
          name: 'Jonas Felix',
          photo: jonasFelixPhoto,
        },
      ],
      presentation:
        'Most people would agree that Kubernetes really shines when running applications consisting of stateless microservices. However, the world is not all rainbows and butterflies and sometimes holding state in your application is inevitable.',
    },
    {
      id: '13',
      title: 'Sustainability Chronicles: Innovate Through Green Technology With Kepler and KEDA',
      duration: '30 min',
      pdf: '',
      videoSrc: 'https://www.youtube.com/embed/rzFT3OD4tdw',
      speakers: [
        {
          name: 'Katie Gamanji',
          photo: katieGamanjiPhoto,
        },
      ],
      presentation:
        'It is undeniable that Kubernetes served as the gravitational point for the cloud native landscape. By elevating a pluggable system, multiple areas were developed in the industry, galvanizing solutions that set the fundamentals of interoperability, standardization, and open guidelines for tooling',
    },
    {
      id: '14',
      title: 'Embracing the Future: The Effortless Mutual TLS and Traffic Control Without Sidecars',
      duration: '30 min',
      pdf: '/archive-2024/Effortless mtls & traffic control without sidecar.pdf',
      videoSrc: 'https://www.youtube.com/embed/iICR5i-Ss14',
      speakers: [
        {
          name: 'Lin Sun',
          photo: linSunPhoto,
        },
      ],
      presentation:
        "In today's environments, sidecars have become the dominant choice for implementing mutual TLS, traffic management and rich Layer 7 authorization policies.",
    },
    {
      id: '15',
      title: 'Adventures in stateful applications on Kubernetes',
      duration: '30 min',
      pdf: '/archive-2024/Adventures in Stateful Applications on Kubernetes.pdf',
      videoSrc: 'https://www.youtube.com/embed/IF1_mxV5vTc',
      speakers: [
        {
          name: 'Mathis Kretz',
          photo: mathisKretzPhoto,
        },
      ],
      presentation:
        'Most people would agree that Kubernetes really shines when running applications consisting of stateless microservices. However, the world is not all rainbows and butterflies and sometimes holding state in your application is inevitable.',
    },
    {
      id: '16',
      title: 'The Swiss Army Knife of Cloud Native Networking',
      duration: '30 min',
      pdf: '/archive-2024/The Swiss Army Knife of Cloud-Native Networking.pdf',
      videoSrc: 'https://www.youtube.com/embed/L3ba7LcJiFc',
      speakers: [
        {
          name: 'Raymond de Jong',
          photo: raymondDeJongPhoto,
        },
      ],
      presentation:
        'Join us to explore how Cilium powered by eBPF, provides seamless multi-cloud and multi-tenancy networking capabilities. In this session, we will deep dive into Cilium features, including BGP, Load Balancing, LB IPAM, and Network Policies, and how they provide secure and scalable networking solutions.',
    },
    {
      id: '17',
      title: '11 tricks to improve your productivity and reduce your frustration with Kubernetes',
      duration: '30 min',
      pdf: '',
      videoSrc: 'https://www.youtube.com/embed/xsvnmaUPTWM',
      speakers: [
        {
          name: 'Tiffany Jernigan',
          photo: tiffanyJerniganPhoto,
        },
      ],
      presentation:
        'Do you know how to… …wait for a Pod to be Running, or for a Deployment to be Available? …"turn off and on again" a Deployment? … generate a YAML manifest without copy-pasting it from the docs or ChatGPT? ',
    },
    {
      id: '18',
      title: 'Choose Your Own Adventure: The Struggle for Security',
      duration: '30 min',
      pdf: '/archive-2024/The Struggle for Security.pdf',
      videoSrc: 'https://www.youtube.com/embed/sXbH-CPL4f0',
      speakers: [
        {
          name: 'Viktor Farcic',
          photo: viktorFarcicPhoto,
        },
        {
          name: 'Whitney Lee',
          photo: whitneyLeePhoto,
        },
      ],
      presentation:
        'Our hero, a running application in a Kubernetes production environment, knows they are destined for greater things! They are serving end users, but currently, they are also endangering those users, the system, and themselves! ',
    },
  ],
};

const titles = {
  2023: 'Kubernetes Community Day Zürich 2023',
  2024: 'Kubernetes Community Day Zürich 2024',
};
const dates = {
  2023: '15 june, 2023',
  2024: '13 june, 2024',
};

const Archive = ({ year }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items[year] : items[year].slice(0, 3);

  return (
    <section className="safe-paddings mt-[117px] lg:mt-16 md:mt-10 sm:mt-8">
      <div className="container text-primary-1">
        <time
          className="block font-sans-cyber text-[52px] font-bold leading-denser tracking-tight lg:text-5xl md:text-4xl sm:text-[32px]"
          dateTime="2023-06-15"
        >
          {dates[year]}
        </time>
        <h2 className="mt-5 text-2xl font-bold leading-snug lg:text-xl md:text-lg">
          {titles[year]}
        </h2>
        <ul className="relative mt-8 flex flex-col sm:left-1/2 sm:right-1/2 sm:-mx-[50vw] sm:w-screen sm:overflow-x-auto sm:px-4">
          {visibleItems.map(
            ({ title, duration, isKeynote, speakers, presentation, pdf, videoSrc }, index) => (
              <li
                className="group relative grid grid-cols-[172px_1fr_1fr] gap-x-24 pb-6 pt-8 after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-[url('/images/dash-line-gray-horizontal.svg')] after:bg-contain after:bg-repeat-x first:before:absolute first:before:top-0 first:before:h-[1px] first:before:w-full first:before:bg-[url('/images/dash-line-gray-horizontal.svg')] first:before:bg-contain first:before:bg-repeat-x md:grid-cols-[130px_1fr_1fr] md:gap-x-12 sm:w-[730px] sm:gap-x-8"
                key={index}
              >
                <div className="mt-2 flex flex-col">
                  {speakers && speakers.length > 0 && (
                    <ul
                      className={clsx(
                        'relative inline-grid gap-x-5 sm:gap-x-4',
                        speakers.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                      )}
                    >
                      {speakers.map(({ name, photo }, index) => (
                        <li className="" key={index}>
                          <figure className="flex flex-col">
                            <img
                              className={
                                year === '2024'
                                  ? 'object-cover brightness-110 saturate-0 md:max-w-[60px]'
                                  : ''
                              }
                              src={photo}
                              width={74}
                              height={74}
                              alt={`${name} photo`}
                              loading="lazy"
                            />
                            <figcaption className="mt-2 text-xl font-semibold leading-tight md:text-sm">
                              {name}
                            </figcaption>
                          </figure>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 flex items-center gap-x-1.5 font-mono-cyber text-xl font-bold leading-none tracking-tighter md:text-xs">
                    <span className="rounded-sm bg-yellow-light px-3 py-1.5">{duration}</span>
                    {isKeynote && (
                      <span className="rounded-sm bg-blue-light px-3 py-1.5">Keynote</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-3xl font-bold leading-snug tracking-tight lg:text-2xl md:text-xl">
                    {title}
                  </h3>
                  <div className="-ml-2 mt-2 flex items-center gap-x-6 text-2xl font-bold leading-normal lg:-ml-1 lg:gap-x-1.5 lg:text-lg md:text-base">
                    {videoSrc && (
                      <Link
                        className="inline-flex items-center border-2 border-transparent px-2 py-1 font-mono-cyber tracking-tight text-orange transition-colors duration-200 hover:!border-orange group-hover:border-orange group-hover:border-opacity-10 lg:px-1"
                        to={videoSrc}
                        target="_blank"
                      >
                        Watch on YouTube
                      </Link>
                    )}
                    {pdf && (
                      <Link
                        className="inline-flex items-center border-2 border-transparent px-2 py-1 font-mono-cyber text-2xl font-bold leading-normal tracking-tighter text-black transition-colors duration-200 hover:!border-black group-hover:border-black group-hover:border-opacity-10 lg:px-1 lg:text-lg md:text-base"
                        to={pdf}
                        download
                      >
                        <DisketteIcon className="mr-1.5 h-4 w-4 md:h-3 md:w-3" aria-hidden />
                        download pdf
                      </Link>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Separator
                    className="absolute -left-9 sm:-left-6"
                    width={9}
                    heigth={153}
                    aria-hidden
                  />
                  <div
                    className="overflowed-text max-h-32 text-xl leading-normal lg:text-lg md:text-base"
                    dangerouslySetInnerHTML={{ __html: presentation }}
                  />
                </div>
              </li>
            )
          )}
        </ul>
        {!showAll && (
          <Button
            className="!h-13 mx-auto mt-9 !block !px-10 uppercase lg:mt-12 md:mt-6 md:!text-[11px] xs:mt-8"
            theme="primary"
            size="sm"
            onClick={() => setShowAll(true)}
          >
            See more
          </Button>
        )}
      </div>
    </section>
  );
};

Archive.propTypes = {
  year: PropTypes.oneOf(['2023', '2024']).isRequired,
};

export default Archive;
