import { ProjectTechnologyChoice } from '../types'

const ZK_SNARKS: ProjectTechnologyChoice = {
  name: 'Zero knowledge SNARK cryptography is used',
  description:
    'Despite their production use ZK-SNARKs are still new and experimental cryptography. Cryptography has made a lot of advancements in the recent years but all cryptographic solutions rely on time to prove their security. In addition ZK-SNARKs require a trusted setup to operate.',
  risks: [
    {
      category: 'Funds can be stolen if',
      text: 'the cryptography is broken or implemented incorrectly.',
    },
  ],
  references: [],
}

const ZK_STARKS: ProjectTechnologyChoice = {
  name: 'Zero knowledge STARK cryptography is used',
  description:
    'Despite their production use ZK-STARKs are still new and experimental cryptography. Cryptography has made a lot of advancements in the recent years but all cryptographic solutions rely on time to prove their security.',
  risks: [
    {
      category: 'Funds can be stolen if',
      text: 'the cryptography is broken or implemented incorrectly.',
    },
  ],
  references: [
    {
      text: 'Stark Curve - StarkEx documentation',
      href: 'https://docs.starkware.co/starkex-v3/crypto/stark-curve',
    },
  ],
}

export const NEW_CRYPTOGRAPHY = {
  ZK_SNARKS,
  ZK_STARKS,
}
