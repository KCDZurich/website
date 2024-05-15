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

export default [
  {
    time: '8:00',
    title: 'Registration',
    duration: '45 min',
  },
  {
    time: '8:45',
    title: 'Welcome',
    duration: '15 min',
  },
  {
    id: '01',
    time: '9:00',
    title: 'Cilium Mesh - How to Connect Kubernetes with Legacy VM and Server Infrastructure',
    duration: '30 min',
    isKeynote: true,
    speakers: [
      {
        id: '0',
        name: 'Thomas Graf',
        photo: thomasGrafPhoto,
      },
    ],
    presentation:
      'Kubernetes has taken the industry by storm and has become the standard platform for new workloads. It is ideal for containerized workloads. However, a majority of workloads will remain where they are for another while, running on VMs or physical servers in either public or private cloud. How do we connect the new world of Kubernetes consisting of services, identities and CI/CD with the existing world of VMs, servers, and existing network infrastructure?\n' +
      'In this session, we will look into the brand new Cilium Mesh layer. Cilium Mesh is a new universal networking layer to connect workloads and machines across cloud, on-prem, and edge. It consists of a Kubernetes networking component (CNI), a multi-cluster connectivity plane (Cluster Mesh), and a transit gateway to connect with VMs and servers in existing networks.',
  },
  {
    time: '9:30',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '5',
    time: '9:45',
    title: 'The state of Green Washing - or how to build sustainable systems with Kubernetes ',
    duration: '30 min',
    speakers: [
      {
        name: 'Max Körbächer',
        photo: maxKorbacherPhoto,
      },
    ],
    presentation:
      'Kubernetes is not the answer to everything, but where it is, it is a great companion to designing systems and putting environmental sustainability into your mind. But being eco-friendly invites people to greenwash their intentions, so let us start the story from the end and clarify some myths. Saving money on infrastructure may reduce your Carbon impact, but we can do more. In this presentation, we will look at what is currently possible, what are the recent developments and what we need in the future to create a carbon-aware system landscape. You will learn how designing system architectures for eco-friendliness, will have a sustainable impact, in many ways.',
    coincidedEvent: {
      id: '11',
      time: '9:45',
      title: 'Forensic container checkpointing and analysis',
      duration: '30 min',
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
  },
  {
    time: '10:15',
    title: 'Coffee Break',
    duration: '30 min',
  },
  {
    id: '4',
    time: '10:45',
    title: 'When Things Get Big: Scaling Cloud Native Workloads and Software Distribution',
    duration: '30 min',
    speakers: [
      {
        name: 'Ricardo Rocha',
        photo: ricardoRochaPhoto,
      },
    ],
    presentation:
      'The move to containers has significantly improved the way services and workloads are deployed and managed in large scale computing infrastructures. It also brought new challenges that can be handled with intrusive changes in the workflows or hidden in the stack. This session will focus on one of those challenges and go in detail on how you can efficiently distribute very large software packages across thousands of nodes for your batch, HPC or ML workloads.',
    coincidedEvent: {
      id: '12',
      time: '10:45',
      title: 'Demystifying eBPF - eBPF Firewall from scratch',
      duration: '30 min',
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
  },
  {
    time: '11:15',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '7',
    time: '11:30',
    title: 'Responsible AI: The Key to Ethical, Safe and Inclusive Software Development',
    duration: '30 min',
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
    coincidedEvent: {
      id: '3',
      time: '11:30',
      title: 'What Anime Taught Me About K8s & Tech Careers',
      duration: '30 min',
      speakers: [
        {
          name: 'Annie Talvasto',
          photo: annieTalvastoPhoto,
        },
      ],
      presentation:
        'From One piece and Naruto to Neon Genesis Evangelion and DragonBall, Japanese animation is a cultural phenomena. This session will take you through both the landscape of anime and Kubernetes development, with helpful beginner tips to get you started on your cloud native journey. The session will also cover what the hero’s of East blue and Planet 4032-877 can tech us about career development tech world. Importance of perseverance, inclusion & diversity as well as always having a snack at hand - come and learn how anime can your boost you Kubernetes and tech career to next level!\n',
    },
  },
  {
    time: '12:00',
    title: 'Lunch',
    duration: '1h 30min',
  },
  {
    id: '10',
    time: '13:30',
    title: 'Buzzing Across the Cloud Native Landscape with eBPF',
    duration: '30 min',
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
    coincidedEvent: {
      id: '14',
      time: '13:30',
      title: 'Streamlined Troubleshooting in Kubernetes',
      duration: '30 min',
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
  },
  {
    time: '14:00',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '2',
    time: '14:15',
    title: 'Native Histograms in Prometheus: A Better Histogram Experience for Everyone',
    duration: '30 min',
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
    coincidedEvent: {
      id: '9',
      time: '14:15',
      title: 'Tales of Serverless - a story about building scalable applications',
      duration: '30 min',
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
  },
  {
    time: '14:45',
    title: 'Coffee Break',
    duration: '30 min',
  },
  {
    id: '6',
    time: '15:15',
    title: 'Securing your Software Supply Chain on Kubernetes with Sigstore',
    duration: '30 min',
    speakers: [
      {
        name: 'Priya Wadhwa',
        photo: priyaWadhwaPhoto,
      },
    ],
    presentation:
      'How secure are the images running in your Kubernetes cluster right now? If you don’t know, then this talk is for you! In this talk, Priya Wadhwa will discuss how to determine the composition and vulnerability risk of your images. She’ll cover how to secure your images with easy container signing through Sigstore, and how to enforce policies against your images in your Kubernetes cluster with the Sigstore policy-controller. This talk will demo how to set this up while diving in to the SLSA principles of software supply chain security and how they can be applied to secure a build pipeline. \n',
    coincidedEvent: {
      id: '13',
      time: '15:15',
      title: 'Closing the Developer Experience Gap of your Container Platforms',
      duration: '30 min',
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
  },
  {
    time: '15:45',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '8',
    time: '16:00',
    title:
      "Process is what naturally follows - a cloud platform's guide on people-first transformation",
    duration: '30 min',
    speakers: [
      {
        name: 'Sebastian Kister',
        photo: sebastianKisterPhoto,
      },
    ],
    presentation:
      "The fastest way to change the world is by making it a business case. Let's talk about real transformation hands-on, about time-to-market and the priorities when it's necessary to change cultural paradigms.",
    coincidedEvent: {
      id: '15',
      time: '16:00',
      title: 'Bridging Dev and Ops with eBPF: Extending Observability Upwards and Downwards',
      duration: '30 min',
      speakers: [
        {
          name: 'Raphaël Pinson',
          photo: raphaelPhoto,
        },
      ],
      presentation:
        'eBPF (extended Berkeley Packet Filter) is a powerful and versatile technology that can be used to extend observability in Linux systems. In this talk, we will explore how eBPF can be used to bridge the gap between dev and ops by providing a deeper understanding of the kernel and OS internals as well as the applications running on top. We will discuss how eBPF can be used to extend observability downwards by enabling access to low-level system information and how it can be used to extend observability upwards by providing application-level tracing capabilities.',
    },
  },
  {
    time: '16:30',
    title: 'Change tracks, Short Break',
    duration: '15 min',
  },
  {
    id: '1',
    time: '16:45',
    title: 'eBPF for Security',
    duration: '30 min',
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
  {
    time: '17:15',
    title: 'Closing',
    duration: '15 min',
  },
  {
    time: '17:30',
    title: 'Apéro',
    duration: '3h 45min',
  },
];
