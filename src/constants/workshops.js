import Argo from 'icons/argo-horizontal-logo.svg';
import Cilium from 'icons/cilium-horizontal-logo.svg';
import Go from 'icons/go-horizontal.svg';
import Kubernetes from 'icons/kubernetes-horizontal-logo.svg';
import ChristianHaller from 'images/workshops/christian-haller-photo.jpg';
import ChristianSchlatter from 'images/workshops/christian-schlatter-photo.jpg';
import DanielStrohecker from 'images/workshops/daniel-strohecker-photo.jpg';
import DavidSchneider from 'images/workshops/david-schneider-photo.jpg';
import GabrielGraf from 'images/workshops/gabriel-graf-photo.jpg';
import LorenzBischof from 'images/workshops/lorenz-bischof-photo.jpg';
import RaffaelHertle from 'images/workshops/raffael-hertle-photo.jpg';
import SebastianPlattner from 'images/workshops/sebastian-plattner-photo.jpg';

export default [
  {
    name: 'argo',
    icon: {
      value: Argo,
      width: 138,
      height: 64,
    },
    seats: 14,
    price: 'CHF 650',
    date: 'June 12, 2024',
    time: '09:00 - 16:45',
    card: {
      title: 'GitOps with ArgoCD',
      description:
        'This one-day training in German or English offers a practical and clearly understandable introduction to GitOps using Argo CD on Kubernetes.',
    },
    page: {
      title: 'GitOps with ArgoCD',
      description: [
        'GitOps is a natural extension of the Infrastructure-as-Code and Continuous Delivery principles with a focus on using Git as the single source of truth for your system. Changes to infrastructure and applications are made declaratively via a Git repository, with an automated process ensuring that the current state of your system reflects the state of the repository.',
        'This one-day training in German or English offers a practical and clearly understandable introduction to GitOps using Argo CD on Kubernetes.',
      ],
      content: {
        description:
          'The workshop consists of varied presentations and hands-on labs in order to teach content in an appealing fashion.',
        features: [
          [
            'Basic concepts',
            'Architecture',
            'Managing Argo CD applications in Git',
            'Sync policies',
            'Comparing application state (Git vs. Kubernetes Cluster)',
            'Self-healing',
          ],
          [
            'Pruning of resources',
            'Resource hooks',
            'Sync phases and waves',
            'Backup and restore',
            'Various manifest formats',
            'Permission structures',
          ],
        ],
      },
      requirements: 'Participants will need a laptop with direct access to the Internet.',
      audience:
        'The workshop is aimed at people who already have prior knowledge of container technologies, Git and Kubernetes.',
      conditions: [
        'At least 8 Participants are required for the workshop to take place.',
        'Includes catering, documentation and a cluster in the cloud',
      ],
      trainers: [
        {
          name: 'Christian Schlatter',
          photo: ChristianSchlatter,
          position: 'Trainer Puzzle ITC',
        },
        {
          name: 'Raffael Hertle',
          photo: RaffaelHertle,
          position: 'Trainer acend',
        },
      ],
    },
  },
  {
    name: 'go',
    icon: {
      value: Go,
      width: 129,
      height: 64,
    },
    seats: 14,
    price: 'CHF 650',
    date: 'June 12, 2024',
    time: '09:00 - 16:45',
    card: {
      title: 'Go Basics',
      description:
        'This one-day training in German or English offers an introduction to Go for software developers, architects and DevOps engineers.',
    },
    page: {
      title: 'Go Basics Workshop',
      description: [
        'Go is an open source programming language developed by Google. The focus was on pragmatism, so that the simplest and cleanest possible program code can be created, which is executed efficiently. Go is often used for applications and infrastructure components based on scalable network services, cloud computing and containers.',
        'This one-day training in German or English offers an introduction to Go for software developers, architects and DevOps engineers.',
      ],
      content: {
        description:
          'The workshop consists of varied presentations and hands-on labs in order to teach content in an appealing fashion.',
        features: [
          [
            'Introduction, history and application areas of Go',
            'Ecosystem & Tooling',
            'Syntax and language constructs',
            'Error Handling',
          ],
          [
            'Standard Library (net/http, os, encoding/json, etc.)',
            'Testing',
            'Concurrency & Multithreading',
            'Release Code / Packaging',
          ],
        ],
      },
      requirements: 'Participants will need a laptop with direct access to the Internet.',
      audience:
        'The workshop is aimed at people who have basic programming skills and are interested in learning a new programming language.',
      conditions: [
        'At least 8 Participants are required for the workshop to take place.',
        'Includes catering, documentation and a cluster in the cloud',
      ],
      trainers: [
        {
          name: 'David Schneider',
          photo: DavidSchneider,
          position: 'Trainer Puzzle ITC',
        },
        {
          name: 'Lorenz Bischof',
          photo: LorenzBischof,
          position: 'Trainer, Puzzle ITC',
        },
      ],
    },
  },
  {
    name: 'cilium',
    icon: {
      value: Cilium,
      width: 136,
      height: 64,
    },
    seats: 14,
    price: 'CHF 650',
    date: 'June 12, 2024',
    time: '09:00 - 16:45',
    card: {
      title: 'Cilium Basics',
      description:
        'This one-day training in English or German provides a practical and clear introduction to Cilium, an eBFP-based networking, observability and security stack for cloud and on-premise infrastructure.',
    },
    page: {
      title: 'Cilium Basics',
      description: [
        'This one-day training in English or German provides a practical and clear introduction to Cilium, an eBFP-based networking, observability and security stack for cloud and on-premise infrastructure.',
      ],
      content: {
        description:
          'The workshop consists of varied presentations and hands-on labs in order to teach content in an appealing fashion.',
        features: [
          [
            'Introduction to Linux & Kubernetes networking',
            'eBPF basics',
            'Container Network Interface',
            'Cilium systems architecture',
            'Kubernetes & Cilium network policies',
          ],
          [
            'Hubble & Hubble UI',
            'Cilium Cluster Mesh',
            'Cilium deployment',
            'Cilium troubleshooting',
            'Cilium Service Mesh',
          ],
        ],
      },
      requirements: 'Participants will need a laptop with direct access to the Internet',
      audience:
        'Our training is aimed at people who already have knowledge and experience in operating a Kubernetes platform. Participants should have experience in using the command line.',
      conditions: [
        'At least 8 Participants are required for the workshop to take place.',
        'Includes catering, documentation and a cluster in the cloud',
      ],
      trainers: [
        {
          name: 'Gabriel Graf',
          photo: GabrielGraf,
          position: 'Trainer acend',
        },
        {
          name: 'Sebastian Plattner',
          photo: SebastianPlattner,
          position: 'Trainer acend',
        },
      ],
    },
  },
  {
    name: 'kubernetes',
    icon: {
      value: Kubernetes,
      width: 266,
      height: 64,
    },
    seats: 14,
    price: 'CHF 650',
    date: 'June 12, 2024',
    time: '09:00 - 16:45',
    card: {
      title: 'Kubernetes Basics',
      description:
        'This one-day training in German or English provides a practical and easy-to-understand introduction to Kubernetes.',
    },
    page: {
      title: 'Kubernetes Basics',
      description: [
        'Container technologies, Kubernetes above all, have become more important in recent years and now are a significant driver of digitalization.',
        'This one-day training in German or English provides a practical and easy-to-understand introduction to Kubernetes.',
      ],
      content: {
        description:
          'The workshop consists of varied presentations and hands-on labs in order to teach content in an appealing fashion.',
        features: [
          [
            'Basic concepts',
            'Architecture and components of Kubernetes',
            'Useful CLI-Tools',
            'Applications deployment',
            'Access opportunities',
            'Pod scaling',
            'Service layer and discovery',
          ],
          [
            'Deployment strategies',
            'Persistent storage',
            'StatefulSet, DaemonSet, Job, ConfigMap',
            'Init and Sidecar Container',
            'Quotas and limits',
            'Troubleshooting',
            'CNCF Landscape',
          ],
        ],
      },
      requirements: 'Participants will need a laptop with direct access to the Internet.',
      audience:
        'Our training is designed for software and system engineers. No prior knowledge of Kubernetes is required.',
      conditions: [
        'At least 8 Participants are required for the workshop to take place.',
        'Includes catering, documentation and a cluster in the cloud',
      ],
      trainers: [
        {
          name: 'Daniel Strohecker',
          photo: DanielStrohecker,
          position: 'Trainer acend',
        },
        {
          name: 'Christian Haller',
          photo: ChristianHaller,
          position: 'Trainer Puzzle ITC',
        },
      ],
    },
  },
];
